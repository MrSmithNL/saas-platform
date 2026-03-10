import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import boundaries from "eslint-plugin-boundaries";
import importPlugin from "eslint-plugin-import";

/** @type {import("eslint").Linter.Config[]} */
export default [
  // Global ignores
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.next/**",
      "**/.turbo/**",
      "**/coverage/**",
      "**/prisma/migrations/**",
      "site/**",
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
              // Apps can import from any package
              from: ["app"],
              allow: ["package"],
            },
            {
              // packages/core can import from database and utils only
              from: [["package", { package: "core" }]],
              allow: [
                ["package", { package: "database" }],
                ["package", { package: "utils" }],
              ],
            },
            {
              // packages/ai-gateway can import from core (and transitively its deps)
              from: [["package", { package: "ai-gateway" }]],
              allow: [
                ["package", { package: "core" }],
                ["package", { package: "utils" }],
              ],
            },
            {
              // packages/ui can import from utils
              from: [["package", { package: "ui" }]],
              allow: [["package", { package: "utils" }]],
            },
            {
              // packages/api-client can import from core and utils
              from: [["package", { package: "api-client" }]],
              allow: [
                ["package", { package: "core" }],
                ["package", { package: "utils" }],
              ],
            },
            {
              // packages/notifications can import from core and utils
              from: [["package", { package: "notifications" }]],
              allow: [
                ["package", { package: "core" }],
                ["package", { package: "utils" }],
              ],
            },
            {
              // packages/feature-flags can import from core and utils
              from: [["package", { package: "feature-flags" }]],
              allow: [
                ["package", { package: "core" }],
                ["package", { package: "utils" }],
              ],
            },
            {
              // packages/database can import from utils only
              from: [["package", { package: "database" }]],
              allow: [["package", { package: "utils" }]],
            },
            {
              // packages/config can import from utils only
              from: [["package", { package: "config" }]],
              allow: [["package", { package: "utils" }]],
            },
            {
              // packages/utils is a leaf — cannot import other packages
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
              // Only allow importing from the package index (public API)
              target: ["package"],
              allow: ["index.ts", "index.tsx", "index.js", "index.mjs"],
            },
            {
              // Apps can be imported from any entry point (internal)
              target: ["app"],
              allow: "**",
            },
          ],
        },
      ],

      // Packages cannot import from apps (enforced by element-types above,
      // but this makes the error message clearer)
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
    },
  },

  // Config files — allow require, default exports, etc.
  {
    files: ["*.config.{js,mjs,ts}", "*.config.{js,mjs,ts}"],
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];
