import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import boundaries from "eslint-plugin-boundaries";
import importPlugin from "eslint-plugin-import";

/**
 * Shared ESLint config for the SaaS Platform monorepo.
 * Enforces agency technical engineering standards:
 * - TypeScript strict mode, no `any`
 * - Import ordering and boundaries
 * - Complexity limits (cyclomatic ≤10, nesting ≤3, params ≤4)
 * - AI anti-pattern detection (max function length, max file length)
 */

/** @type {import("eslint").Linter.Config[]} */
export const baseConfig = [
  // Global ignores
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.next/**",
      "**/.turbo/**",
      "**/coverage/**",
      "**/prisma/migrations/**",
      "**/next-env.d.ts",
      "site/**",
      "*.config.{ts,js,mjs}",
    ],
  },

  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript files
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      import: importPlugin,
      boundaries,
    },
    settings: {
      "boundaries/elements": [
        {
          type: "app",
          pattern: "apps/*",
          capture: ["app"],
        },
        {
          type: "package",
          pattern: "packages/*",
          capture: ["package"],
        },
      ],
      "boundaries/ignore": [
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/*.spec.ts",
        "**/*.spec.tsx",
      ],
    },
    rules: {
      // TypeScript strict rules
      ...tsPlugin.configs["strict"].rules,
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-import-type-side-effects": "error",

      // === Agency standards: hard limits ===
      // Cyclomatic complexity: max 10 per function
      complexity: ["error", { max: 10 }],
      // Nesting depth: max 3 levels
      "max-depth": ["error", { max: 3 }],
      // Function parameters: max 4
      "max-params": ["error", { max: 4 }],
      // Function length: max 30 lines (excluding comments/blanks)
      "max-lines-per-function": [
        "warn",
        { max: 30, skipBlankLines: true, skipComments: true },
      ],
      // File length: max 400 lines
      "max-lines": ["warn", { max: 400, skipBlankLines: true, skipComments: true }],

      // No console.log (warn)
      "no-console": ["warn", { allow: ["warn", "error"] }],

      // Import ordering
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/no-duplicates": "error",

      // General quality
      "no-var": "error",
      "prefer-const": "error",
      eqeqeq: ["error", "always"],
      "no-eval": "error",
      "no-implied-eval": "error",

      // Disable base rules that conflict with TS
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-redeclare": "off",

      // === Boundary rules ===

      // Enforce element types are recognized
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          rules: [
            {
              from: ["app"],
              allow: ["package"],
            },
            {
              from: [["package", { package: "core" }]],
              allow: [
                ["package", { package: "database" }],
                ["package", { package: "utils" }],
              ],
            },
            {
              from: [["package", { package: "ai-gateway" }]],
              allow: [
                ["package", { package: "core" }],
                ["package", { package: "utils" }],
              ],
            },
            {
              from: [["package", { package: "ui" }]],
              allow: [["package", { package: "utils" }]],
            },
            {
              from: [["package", { package: "api-client" }]],
              allow: [
                ["package", { package: "core" }],
                ["package", { package: "utils" }],
              ],
            },
            {
              from: [["package", { package: "notifications" }]],
              allow: [
                ["package", { package: "core" }],
                ["package", { package: "utils" }],
              ],
            },
            {
              from: [["package", { package: "feature-flags" }]],
              allow: [
                ["package", { package: "core" }],
                ["package", { package: "utils" }],
              ],
            },
            {
              from: [["package", { package: "database" }]],
              allow: [["package", { package: "utils" }]],
            },
            {
              from: [["package", { package: "config" }]],
              allow: [["package", { package: "utils" }]],
            },
            {
              from: [["package", { package: "utils" }]],
              allow: [],
            },
          ],
        },
      ],

      // Block deep imports — only allow importing from package root
      "boundaries/no-unknown-files": "error",
      "boundaries/entry-point": [
        "error",
        {
          default: "disallow",
          rules: [
            {
              target: ["package"],
              allow: ["index.ts", "index.tsx", "index.js", "index.mjs"],
            },
            {
              target: ["app"],
              allow: "**",
            },
          ],
        },
      ],

      "boundaries/no-private": "error",
    },
  },

  // Next.js app overrides — allow default exports for pages/layouts
  {
    files: ["apps/**/app/**/*.tsx", "apps/**/pages/**/*.tsx"],
    rules: {
      "import/no-default-export": "off",
    },
  },

  // Test file overrides
  {
    files: ["**/*.test.ts", "**/*.test.tsx", "**/*.spec.ts", "**/*.spec.tsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "no-console": "off",
      "max-lines-per-function": "off",
    },
  },

  // Config files — allow require, default exports, etc.
  {
    files: ["*.config.{js,mjs,ts}", "*.config.{js,mjs,ts}"],
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-require-imports": "off",
      "max-lines-per-function": "off",
    },
  },
];

export default baseConfig;
