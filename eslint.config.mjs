import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
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
