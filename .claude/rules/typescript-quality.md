---
paths:
  - "packages/**/*.ts"
  - "apps/**/*.ts"
  - "apps/**/*.tsx"
---

# TypeScript Code Quality Rules

- Run `pnpm lint` and `pnpm format:check` before committing
- No `any` types — use `@typescript-eslint/no-explicit-any: error`
- Vitest coverage thresholds: 80% lines, 70% branches (enforced in vitest.config.ts)
- Max 30 lines per function, max 400 lines per file
- No `console.log` in production code — use proper logger
- Architecture: apps/ → packages/ (never reverse), no circular deps
- Mutation testing: Stryker configured in stryker.config.mjs, runs weekly in CI
- Pre-push hook runs `pnpm build && pnpm test` — do not bypass
