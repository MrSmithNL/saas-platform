# Architecture Decision Records — SaaS Platform (PROD-004)

> Last updated: 2026-03-10

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
- Generous free tier (50,000 MAU on Hobby plan)
  **Research:** R-001, R-002 Section 7, `research/multi-tenant-auth-provider-comparison.md`
  **Consequences:** External dependency for auth. High vendor lock-in — abstract behind auth service interface. Clerk user IDs stored as `externalId` in our database.

---

## ADR-007: Drizzle ORM Over Prisma

**Date:** 2026-03-10
**Status:** Accepted (supersedes Prisma in ADR-003)
**Context:** Prisma was the initial ORM choice but has no native RLS support. RLS policies must be written as raw SQL in separate migration files — easy to forget, hard to audit.
**Decision:** Switch from Prisma to Drizzle ORM.
**Rationale:**

- Native RLS support: `pgPolicy()` and `.enableRLS()` directly in schema definitions
- Neon partnership: `crudPolicy()` helper generates all 4 CRUD RLS policies
- Smaller bundle size (faster serverless cold starts)
- SQL-first philosophy — queries are predictable and debuggable
- `strict: true` in drizzle-kit prevents data loss on column renames
- Community shift: most 2026 SaaS starter kits default to Drizzle
- Prisma still cannot do multi-schema tenancy (GitHub #12420, open since 2022)
  **Research:** `research/database-architecture-multi-tenant-challenge-2026.md`
  **Consequences:** Must enforce `strict: true` in drizzle-kit config. Learning curve for SQL-first approach (higher than Prisma's declarative schema). Migration is low-risk — no production data exists.

---

## ADR-008: Neon Over Managed PostgreSQL

**Date:** 2026-03-10
**Status:** Accepted
**Context:** Need a PostgreSQL host that handles serverless connection pooling without external PgBouncer.
**Decision:** Use Neon as the database host.
**Rationale:**

- Built-in connection pooler solves Vercel serverless connection exhaustion
- Scale-to-zero saves money during development (~$0/mo vs always-on)
- Database branching creates instant copies for preview environments
- Standard PostgreSQL — migrate to any host by changing connection string
- First-class Vercel marketplace integration
- Free tier: 0.5GB storage, 191 compute hours/month
  **Research:** `research/database-architecture-multi-tenant-challenge-2026.md`
  **Consequences:** Neon was acquired by Databricks (2025) — uncertain long-term direction. Had outages in 2025. Low lock-in risk (standard PostgreSQL).

---

## ADR-009: tRPC + Hono.js for API Layer

**Date:** 2026-03-10
**Status:** Accepted
**Context:** Need type-safe internal APIs and a lightweight edge-capable middleware layer for rate limiting, auth, and tenant context.
**Decision:** Use tRPC for internal frontend-to-backend communication, mounted on Hono.js as the API framework.
**Rationale:**

- tRPC: zero-cost type safety in Turborepo monorepo (change backend → frontend error at compile time)
- Hono.js: 14KB, edge-native, composable middleware for auth/rate limiting/tenant context
- tRPC sits on top of Hono — they complement each other
- REST for public API if/when needed, generated from Zod schemas via `@hono/zod-openapi`
- No GraphQL overhead — TypeScript monorepo doesn't need a schema language
  **Research:** `research/saas-platform-technical-architecture-2026.md`
  **Consequences:** tRPC is not suitable for external/public APIs (TypeScript-only). Must add REST/OpenAPI layer for public API consumers.

---

## ADR-010: PostHog Over LaunchDarkly for Feature Flags

**Date:** 2026-03-10
**Status:** Accepted
**Context:** Need feature flags with per-tenant control, plus product analytics and A/B testing.
**Decision:** Use PostHog for feature flags, product analytics, and A/B testing.
**Rationale:**

- Integrated platform: flags + analytics + A/B testing + session replay in one tool
- 1M flag requests free (vs LaunchDarkly's $10/user/mo)
- Open source (MIT), self-hostable if needed
- Per-tenant feature gating via property filters
- Can see feature impact on user behaviour immediately
  **Research:** `research/saas-platform-technical-architecture-2026.md`
  **Consequences:** Less governance than LaunchDarkly (no approval workflows). Acceptable at startup scale.

---

## ADR-011: Trigger.dev v4 for Background Jobs

**Date:** 2026-03-10
**Status:** Accepted
**Context:** Need durable background job processing with tenant isolation for email, billing, AI tasks, and report generation.
**Decision:** Use Trigger.dev v4 for all background processing.
**Rationale:**

- Unlimited execution duration (critical for AI agent workflows)
- Durable execution with automatic retries and state persistence
- Built-in human-in-the-loop support (waitpoint tokens)
- Open source (Apache 2.0), self-hostable
- TypeScript-native — jobs are regular async functions
- Per-tenant queue isolation and concurrency limits
  **Research:** `research/saas-platform-technical-architecture-2026.md`
  **Consequences:** Requires separate deployment target (not Vercel). Jobs must carry tenant context metadata.
