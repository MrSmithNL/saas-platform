# Project Instructions — SaaS Platform (PROD-004)

These instructions apply to this project in every session.

---

## What This Repo Is

This is the **Multi-Tenant AI SaaS Platform** — a reusable foundational platform serving multiple vertical products. Built as a Turborepo monorepo with pnpm workspaces.

**First vertical:** Sell Funnel (generic sales funnel builder for all industries)
**Future verticals:** Book Rocket (SEO + marketing for authors), others

---

## Architecture

### 4-Layer Structure

```
Layer 4: Vertical Products (apps/sell-funnel, apps/book-rocket)
    ↓ depends on
Layer 3: Platform Services (packages/ai-gateway, notifications, feature-flags)
    ↓ depends on
Layer 2: Platform Core (packages/core — auth, tenancy, billing, rbac, api)
    ↓ depends on
Layer 1: Foundation (packages/database, ui, config, utils)
```

### Key Decisions (from R-001 + R-002 research)

- **Modular monolith** (Shopify pattern) — NOT microservices
- **Monorepo** with Turborepo + pnpm workspaces
- **PostgreSQL + RLS** for multi-tenancy (shared DB, row-level security)
- **Next.js 15** (App Router) for all apps
- **Clerk** for auth, **Stripe** for billing, **Resend** for email
- **shadcn/ui + Tailwind** for design system
- **Vercel AI SDK + LiteLLM** for AI gateway
- **Shape Up** methodology (6-week cycles, fixed time, variable scope)

### Dependency Rules

- `apps/` → `packages/` (never reverse)
- `packages/core` → `packages/database`, `packages/utils` (never `packages/ui`)
- `packages/ai-gateway` → `packages/core` (Layer 3 → Layer 2)
- No deep imports — every package exports through `src/index.ts`

---

## Related Projects

- **Agency repo:** `~/Claude Code/Projects/smith-ai-agency/` — strategy, research, diagrams
- **SEO Toolkit (PROD-001):** `~/Claude Code/Projects/seo-toolkit/` — integrates as a service
- **Research:** `smith-ai-agency/research/multi-tenant-ai-saas-architecture.md` (R-001)
- **Research:** `smith-ai-agency/research/multi-tenant-saas-platform-capability-research.md` (R-002)

---

## Coding Standards

### Language & Tooling

- **TypeScript** everywhere — strict mode, no `any`
- **ESLint** + **Prettier** on every commit
- **Vitest** for unit tests, **Playwright** for E2E
- Tests alongside features (co-located `__tests__/` or `.test.ts`)

### Naming Conventions

- Files: `kebab-case.ts`
- Components: `PascalCase.tsx`
- Functions/variables: `camelCase`
- Database tables: `snake_case` (via Prisma `@@map`)
- Environment variables: `SCREAMING_SNAKE_CASE`
- Package names: `@saas-platform/package-name`

### Module Boundaries

- Each package has a single `src/index.ts` entry point
- Use `exports` field in `package.json` to control what's public
- No circular dependencies between packages
- Domain-specific code stays in its vertical app, not in platform packages

### Forbidden Patterns

- No direct database access from apps — always through `@saas-platform/database`
- No `any` type — use `unknown` and narrow
- No `console.log` in production code — use structured logging
- No hardcoded tenant IDs — always derive from context
- No cross-vertical imports (sell-funnel cannot import from book-rocket)

### Quality Gates

- ESLint + Prettier on every push (GitHub Actions)
- Type checking across all packages
- Tests must pass before merge
- Prisma schema validation on database changes
- Bundle size monitoring for apps
- **Architecture fitness functions** on every PR (layer boundaries, circular deps, dependency governance)

### Architecture Enforcement (Technical Architect)

- **dependency-cruiser** — validates dependency graph, blocks circular deps and layer violations
- **eslint-plugin-boundaries** — enforces module boundaries and barrel export rules
- **Madge** — circular dependency detection
- **Approved dependency list** — `tooling/approved-dependencies.json` — new deps must be reviewed
- **Golden path templates** — `tooling/generators/package/` — use for all new packages
- Config: `.dependency-cruiser.mjs` in project root
- CI: `.github/workflows/architecture.yml` runs all fitness functions

---

## Commands

```bash
pnpm dev            # Start all apps in development
pnpm build          # Build all packages and apps
pnpm lint           # Lint all packages
pnpm test           # Run all tests
pnpm test:arch      # Run all architecture fitness functions
pnpm check:deps     # Check dependency governance (approved list)
pnpm check:circular # Check for circular dependencies (Madge)
pnpm check:depcruise # Run dependency-cruiser validation
pnpm db:generate    # Generate Prisma client
pnpm db:push        # Push schema to database
pnpm db:migrate     # Run database migrations
pnpm clean          # Clean all build artifacts
```

---

## Build Phases (Shape Up — 6-week cycles)

| Phase | Duration | Focus                                          | Status      |
| ----- | -------- | ---------------------------------------------- | ----------- |
| 0     | 2 weeks  | Foundation — monorepo, configs, database, UI   | **Current** |
| 1     | 6 weeks  | Platform Core — auth, tenancy, billing, RBAC   | Planned     |
| 2     | 8 weeks  | Sell Funnel MVP — funnels, pages, conversions  | Planned     |
| 3     | 4 weeks  | Platform Hardening — AI gateway, notifications | Planned     |
| 4     | 8 weeks  | Book Rocket MVP — author tools, SEO engine     | Planned     |
| 5     | 8 weeks  | Platform Maturity — scale, extensibility       | Planned     |
