# Project Instructions — SaaS Platform (PROD-004)

<!-- project-classification
type: product
work_nature: software-development
hierarchy_position: product
enforcement_profile: full
-->

These instructions apply to this project in every session.

---

## What This Repo Is

**Multi-Tenant AI SaaS Platform** — a reusable foundational platform serving multiple vertical products. Built as a Turborepo monorepo with pnpm workspaces.

**First vertical:** Sell Funnel (generic sales funnel builder)
**Future verticals:** Book Rocket (SEO + marketing for authors), others

---

## Related Projects

- **Agency standards:** `~/Claude Code/Projects/smith-ai-agency/docs/capabilities/`
- **Development Architecture Framework:** `smith-ai-agency/docs/capabilities/development-architecture-framework.md`
- **SEO engine (PROD-001):** `~/Claude Code/Projects/seo-toolkit/` — integrates as a service

---

## Agency-Wide Delivery Framework

This project operates under the agency's autonomous delivery framework:

- **Quality Manager** — Code quality, testing, documentation standards
- **DevOps Manager** — CI/CD, deployment, infrastructure reliability
- **Technical Architect** — Architecture decisions, fitness functions, dependency governance
- **Delivery Manager** — Sprint planning, objective tracking, blocker resolution
- **Requirements Engineering** — Spec-driven development, 3-gate process

---

## Architecture — 6-Level Hierarchy

```
Level 5: Verticals       (apps/* — SellFunnel, AISOGEN, Book Rocket)
Level 3: Modules          (modules/* — pluggable business features)
Level 2: Capabilities     (packages/core/*, ai-gateway, notifications, feature-flags)
Level 1: Foundation       (packages/database, ui, config, utils)
```

**Dependency rules:** `apps/` → `modules/` → `packages/` (one-way, never reverse). No circular deps. No cross-vertical imports. No cross-module imports (use event bus). Every package exports through `src/index.ts`.

**Key patterns:**

- `definePlatformConfig()` for vertical configuration (ADR-019)
- Event bus for module-to-module communication (ADR-021)
- AsyncLocalStorage for tenant context (ADR-022)
- Module manifests for self-describing business modules (ADR-020)

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
pnpm create:vertical  # Scaffold new vertical (apps/)
pnpm create:module    # Scaffold new module (modules/)
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
