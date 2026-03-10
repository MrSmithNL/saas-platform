# AGENTS.md — SaaS Platform (PROD-004)

> Tool-agnostic agent instructions. Works with Claude Code, Cursor, Codex, Aider, and any tool that supports AGENTS.md.

## Project Overview

Multi-tenant AI SaaS platform — reusable foundation serving multiple vertical products. Turborepo monorepo with pnpm workspaces. 4-layer architecture: Foundation → Core → Services → Verticals.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode, no `any`)
- **Monorepo:** Turborepo + pnpm workspaces
- **Database:** PostgreSQL + RLS (multi-tenancy)
- **Auth:** Clerk
- **Billing:** Stripe
- **UI:** shadcn/ui + Tailwind CSS
- **Testing:** Vitest (unit), Playwright (E2E)
- **Linting:** ESLint (strict) + Prettier
- **Architecture:** dependency-cruiser, eslint-plugin-boundaries, Madge
- **CI:** GitHub Actions (lint, type check, test, build, architecture fitness)

## Commands

```bash
pnpm dev              # Start all apps
pnpm build            # Build all
pnpm lint             # Lint all
pnpm test             # Run all tests
pnpm test:arch        # Architecture fitness functions
pnpm check:deps       # Dependency governance
pnpm check:circular   # Circular dependency check
pnpm check:depcruise  # dependency-cruiser validation
```

## Project Structure

```
apps/
  sell-funnel/       # First vertical (sales funnel builder)
  admin/             # Admin dashboard
  marketing/         # Marketing site
packages/
  database/          # Layer 1: Drizzle ORM + migrations
  ui/                # Layer 1: shadcn/ui component library
  config/            # Layer 1: Shared TypeScript/ESLint/Tailwind configs
  utils/             # Layer 1: Shared utilities
  core/              # Layer 2: Auth, tenancy, billing, RBAC
  ai-gateway/        # Layer 3: LLM routing
  notifications/     # Layer 3: Email/push
  feature-flags/     # Layer 3: PostHog integration
  api-client/        # Layer 3: tRPC client
tooling/
  approved-dependencies.json
  generators/        # Golden path templates
```

## Style Guide

- Files: `kebab-case.ts`. Components: `PascalCase.tsx`. Functions: `camelCase`.
- Database tables: `snake_case`. Environment variables: `SCREAMING_SNAKE_CASE`.
- Package names: `@saas-platform/package-name`
- Each package exports through single `src/index.ts` entry point
- No `console.log` in production — use structured logging
- No `any` type — use `unknown` and narrow

## Boundaries

- **Always do:** Run `pnpm lint && pnpm test` before committing. Respect 4-layer architecture. Check approved dependency list for new deps.
- **Ask first:** Adding new dependencies, modifying database schema, changing CI/CD.
- **Never do:** Direct DB access from apps (use `@saas-platform/database`). Cross-vertical imports. Circular dependencies. Hardcoded tenant IDs.

## Architecture Rules

- `apps/` → `packages/` (never reverse)
- `packages/core` → `packages/database`, `packages/utils` (never `packages/ui`)
- No deep imports — use barrel exports only
- Domain-specific code stays in its vertical app, not in platform packages
