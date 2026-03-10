# Project Instructions — SaaS Platform (PROD-004)

These instructions apply to this project in every session.

---

## What This Repo Is

**Multi-Tenant AI SaaS Platform** — a reusable foundational platform serving multiple vertical products. Built as a Turborepo monorepo with pnpm workspaces.

**First vertical:** Sell Funnel (generic sales funnel builder)
**Future verticals:** Book Rocket (SEO + marketing for authors), others

---

## Related Projects

- **Agency standards:** `~/Claude Code/Projects/smith-ai-agency/docs/capabilities/`
- **SEO engine (PROD-001):** `~/Claude Code/Projects/seo-toolkit/` — integrates as a service
- **Research:** `smith-ai-agency/research/multi-tenant-ai-saas-architecture.md` (R-001)
- **Research:** `smith-ai-agency/research/multi-tenant-saas-platform-capability-research.md` (R-002)

---

## Architecture — 4-Layer Structure

```
Layer 4: Vertical Products (apps/sell-funnel, apps/book-rocket)
Layer 3: Platform Services (packages/ai-gateway, notifications, feature-flags)
Layer 2: Platform Core (packages/core — auth, tenancy, billing, rbac, api)
Layer 1: Foundation (packages/database, ui, config, utils)
```

**Dependency rules:** `apps/` → `packages/` (never reverse). No circular deps. No cross-vertical imports. Every package exports through `src/index.ts`.

**Key decisions:** Modular monolith (Shopify pattern), PostgreSQL + RLS for multi-tenancy, Next.js 15 App Router, Clerk auth, Stripe billing, shadcn/ui + Tailwind, Vercel AI SDK + LiteLLM, Shape Up methodology.

---

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
pnpm db:generate      # Generate Prisma client
pnpm db:push          # Push schema to database
pnpm db:migrate       # Run migrations
```

---

## Build Phases (Shape Up — 6-week cycles)

| Phase | Focus                                          | Status       |
| ----- | ---------------------------------------------- | ------------ |
| 0     | Foundation — monorepo, configs, database, UI   | **Complete** |
| 1     | Platform Core — auth, tenancy, billing, RBAC   | Planned      |
| 2     | Sell Funnel MVP — funnels, pages, conversions  | Planned      |
| 3     | Platform Hardening — AI gateway, notifications | Planned      |
| 4     | Book Rocket MVP — author tools, SEO engine     | Planned      |
