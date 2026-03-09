# Architecture Decision Records — SaaS Platform (PROD-004)

> Last updated: 2026-03-09

## ADR-001: Modular Monolith Over Microservices

**Date:** 2026-03-09
**Status:** Accepted
**Context:** Need to choose between microservices and monolith for a platform serving multiple verticals, built by a solo founder.
**Decision:** Use a modular monolith (Shopify pattern) with enforced package boundaries in a Turborepo monorepo.
**Rationale:**
- Shopify runs 2.8M lines of code in a modular monolith successfully
- Microservices add deployment/coordination overhead that only benefits large teams
- Solo founder needs atomic cross-cutting changes (update platform core and see effects in all verticals immediately)
- Extract services only when there's measurable benefit (selective service extraction)
**Research:** R-001 (96 sources), R-002 Section 1
**Consequences:** Must enforce module boundaries via package exports and ESLint rules. Risk of coupling if boundaries aren't maintained.

---

## ADR-002: Turborepo + pnpm Over Nx

**Date:** 2026-03-09
**Status:** Accepted
**Context:** Need a monorepo tool for managing platform + vertical packages.
**Decision:** Use Turborepo with pnpm workspaces.
**Rationale:**
- Turborepo: minimal config (~20 lines JSON), focuses on task orchestration and caching
- Nx: more features but heavier setup, overkill for solo developer
- pnpm: symlink-based approach saves disk space, strict dependency hygiene
- 30s initial builds drop to 0.2s from cache
**Research:** R-002 Section 2
**Consequences:** Remote caching via Vercel (free tier). Less built-in code generation than Nx.

---

## ADR-003: PostgreSQL + RLS Over Separate Databases

**Date:** 2026-03-09
**Status:** Accepted
**Context:** Multi-tenancy data isolation strategy.
**Decision:** Shared PostgreSQL database with Row-Level Security (RLS) policies.
**Rationale:**
- Simplest operational model for MVP (one database to manage)
- RLS enforces isolation at database level (defence in depth)
- Can migrate to separate schemas or databases later if needed
- All major SaaS boilerplates use this approach
**Research:** R-001 Section on database patterns
**Consequences:** Must set tenant context on every request. RLS policies must be tested thoroughly.

---

## ADR-004: Sell Funnel as First Vertical (Not Book Rocket)

**Date:** 2026-03-09
**Status:** Accepted
**Context:** Research plan suggested Book Rocket first, but Malcolm chose Sell Funnel.
**Decision:** Build Sell Funnel as the first vertical product on the platform.
**Rationale:**
- Sell Funnel is more generic — serves all industries and sectors
- Book Rocket is essentially Sell Funnel focused on a specific niche (authors)
- Building the generic version first means Book Rocket becomes a configuration/specialisation of Sell Funnel
- Larger addressable market validates the platform with broader demand
**Consequences:** Book Rocket moves to Phase 4. May need to extract common funnel/landing-page patterns from Sell Funnel into platform packages when building Book Rocket.

---

## ADR-005: Shape Up Methodology

**Date:** 2026-03-09
**Status:** Accepted
**Context:** Need a project management methodology for solo founder building a large platform.
**Decision:** Use Shape Up (Basecamp) — fixed 6-week cycles, variable scope.
**Rationale:**
- Prevents scope creep (fixed time forces prioritisation)
- Prevents over-engineering (appetite constrains complexity)
- Forces shipping every 6 weeks
- Designed by a small team for small teams
**Research:** R-002 Section 5
**Consequences:** Must discipline cycle boundaries. Cool-down periods (1-2 weeks) between cycles for cleanup.

---

## ADR-006: Clerk for Authentication

**Date:** 2026-03-09
**Status:** Accepted
**Context:** Need multi-tenant authentication with organisations, role-based access, social logins, MFA.
**Decision:** Use Clerk as the auth provider.
**Rationale:**
- Multi-tenant auth with organisations out of the box
- Social logins, MFA, email verification included
- First-class Next.js integration
- Used by ixartz SaaS Boilerplate (reference architecture)
- Generous free tier (10,000 MAU)
**Research:** R-001, R-002 Section 7
**Consequences:** External dependency for auth. Clerk user IDs stored as `externalId` in our database.
