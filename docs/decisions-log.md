# Architecture Decision Records — SaaS Platform (PROD-004)

> Last updated: 2026-03-12
> Total ADRs: 22 + Technology Validation summary

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

---

## ADR-012: Vercel for Hosting & Deployment

**Date:** 2026-03-10
**Status:** Accepted
**Context:** Need a hosting platform for multiple Next.js apps in a monorepo, with preview environments per PR and minimal DevOps overhead for a solo developer.
**Decision:** Use Vercel for frontend app hosting.
**Rationale:**

- Purpose-built for Next.js (they build Next.js) — best DX and performance
- Git push = deploy. Preview environments per PR with zero config
- Edge functions for middleware (auth, rate limiting, tenant context)
- Turborepo remote caching integration (free)
- Free tier generous enough for development; Pro at $20/mo for production
- Alternatives considered: Coolify (self-hosted, more DevOps), Railway (good but less Next.js-optimised), AWS Amplify (heavier setup)
  **Research:** `research/saas-platform-technical-architecture-2026.md`
  **Consequences:** Medium-High vendor lock-in. Mitigated by: (1) not using Vercel-specific APIs (`@vercel/og`, `@vercel/analytics`), (2) using Hono.js (portable) instead of Next.js API routes, (3) OpenNext project enables deployment on other platforms if needed. Watch pricing at scale — some teams report $10K+/month bills at high traffic.

---

## ADR-013: Stripe for Billing

**Date:** 2026-03-10
**Status:** Accepted
**Context:** Need subscription billing with usage-based metering capability for a multi-tenant SaaS platform.
**Decision:** Use Stripe for all billing and payment processing.
**Rationale:**

- Deepest API in the payments space — handles subscriptions, metered billing, invoicing, customer portal
- Usage-based meters (via Metronome acquisition) — critical for per-tenant pricing models
- Lowest processing fees among major providers (2.9% + 30¢)
- Best webhook reliability and developer documentation
- Alternatives considered: Lemon Squeezy (simpler but less flexible, higher fees), Paddle (better for international tax but less API control), RevenueCat (mobile-focused)
  **Research:** `research/saas-platform-technical-architecture-2026.md`
  **Consequences:** Medium lock-in. Mitigated by abstracting behind a billing service interface (`packages/core/billing`). Stripe fee at $10K MRR ≈ $320/mo.

---

## ADR-014: Upstash Redis for Caching & Rate Limiting

**Date:** 2026-03-10
**Status:** Accepted
**Context:** Need serverless-compatible caching and per-tenant rate limiting without managing infrastructure.
**Decision:** Use Upstash Redis for server-side caching and rate limiting.
**Rationale:**

- HTTP-based Redis — works in serverless/edge environments (no persistent TCP connections needed)
- Scale-to-zero pricing (free tier: 500K commands/month)
- `@upstash/ratelimit` library designed specifically for edge rate limiting
- Tenant-prefixed cache keys (`tenant:{id}:cache_key`) for isolation
- Standard Redis protocol — any Redis provider is a drop-in replacement
- Alternatives considered: Vercel KV (Upstash under the hood but with markup), Momento (newer, less ecosystem), self-hosted Redis (operational overhead)
  **Research:** `research/saas-platform-technical-architecture-2026.md`
  **Consequences:** Low lock-in (standard Redis protocol). Monitor usage — free tier may be exceeded early if caching is aggressive.

---

## ADR-015: Resend for Email + Knock for Notifications

**Date:** 2026-03-10
**Status:** Accepted
**Context:** Need transactional email (welcome, password reset, billing) and multi-channel notifications (in-app, email, push) with per-tenant preferences.
**Decision:** Use Resend for transactional email and Knock for in-app/multi-channel notifications.
**Rationale:**

- **Resend:** React Email templates (write emails as React components), 3K emails/month free, modern DX, best deliverability tracking
- **Knock:** Pre-built notification UI components, multi-channel routing (in-app + email + push), per-tenant notification preferences — saves months of building notification infrastructure
- Two tools because they solve different problems: Resend = sending email, Knock = notification orchestration across channels
- Alternatives considered: SendGrid (legacy DX, complex pricing), Novu (open source but less mature), building custom (massive effort for notifications)
  **Research:** `research/saas-platform-technical-architecture-2026.md`
  **Consequences:** Knock has medium lock-in — abstract behind notification service interface. Resend has low lock-in (standard SMTP fallback). Combined free tiers cover MVP needs.

---

## ADR-016: Sentry + Pino + BetterStack for Observability

**Date:** 2026-03-10
**Status:** Accepted
**Context:** Need error tracking, structured logging, and production visibility for a multi-tenant platform.
**Decision:** Use Sentry for error tracking, Pino for structured logging, and BetterStack for log aggregation and alerting.
**Rationale:**

- **Sentry:** Industry standard for error tracking, session replays for debugging, release tracking, Next.js integration. Free tier: 5K errors/month
- **Pino:** Fastest Node.js logger (30% faster than Winston), structured JSON output, minimal overhead in production
- **BetterStack:** Affordable log aggregation ($0 free tier), clean UI, alerting built in. Cheaper than Datadog by 10x at startup scale
- Three tools because each is best-in-class for its specific job — Sentry for errors, Pino for generating logs, BetterStack for storing/searching/alerting on logs
- Alternatives considered: Datadog (excellent but $50+/month minimum, designed for enterprise), LogRocket (session replay but no log aggregation), Axiom (good but less Next.js integration)
  **Research:** `research/saas-platform-technical-architecture-2026.md`
  **Consequences:** Low lock-in across all three (standard protocols, replaceable independently). Must add tenant_id to all log entries for per-tenant debugging.

---

## ADR-017: Vercel AI SDK + Langfuse for AI Integration

**Date:** 2026-03-10
**Status:** Accepted
**Context:** Multiple verticals (Sell Funnel, AISOGEN) need AI/LLM capabilities — copy generation, content creation, SEO analysis. Need provider-agnostic AI integration with usage tracking.
**Decision:** Use Vercel AI SDK for LLM integration and Langfuse for AI observability.
**Rationale:**

- **Vercel AI SDK:** Provider-agnostic — switch between OpenAI, Anthropic, Google, etc. with one-line change. Streaming UI support in ~20 lines of code. Designed for Next.js/React
- **Langfuse:** Open-source LLM observability — tracks token usage, costs, latency, quality per tenant. Critical for understanding AI spend per customer
- Together they provide: model routing (use cheapest model that works), usage-based billing data (charge customers for AI usage), quality monitoring (detect model regressions)
- Alternatives considered: LangChain (too heavy, Python-centric), LiteLLM (good proxy but no UI), Helicone (SaaS-only, less flexible)
  **Research:** `research/saas-platform-technical-architecture-2026.md`
  **Consequences:** Langfuse is open source (MIT), self-hostable — low lock-in. Vercel AI SDK is MIT-licensed. Free tier: Langfuse 50K observations/month.

---

## ADR-018: Tailwind CSS v4 Over v3

**Date:** 2026-03-10
**Status:** Accepted
**Context:** Platform needs per-tenant theming (different colours, fonts per customer). Currently using Tailwind v3 with JavaScript-based configuration.
**Decision:** Upgrade from Tailwind CSS v3 to v4.
**Rationale:**

- Native CSS variable theming — per-tenant branding becomes a single `data-theme` attribute change instead of runtime JS
- 100x faster incremental builds (Rust-based engine)
- No more `tailwind.config.js` — configuration moves to CSS, reducing JavaScript overhead
- CSS-first approach means themes can be loaded/switched without page reload
- shadcn/ui v3 designed for Tailwind v4 — component library alignment
  **Research:** `research/frontend-architecture-saas-2026.md`
  **Consequences:** Migration from v3 to v4 requires updating config format and some utility class names. Low risk — automated codemods available. No production CSS to migrate.

---

## Technology Validation (2026-03-10)

Before starting Phase 1 implementation, every major technology choice was challenged with a devil's advocate analysis. This section records the confidence level and key risks for each decision.

| ADR | Decision             | Confidence  | Key Risk                                | Mitigation                                                             |
| --- | -------------------- | ----------- | --------------------------------------- | ---------------------------------------------------------------------- |
| 001 | Modular monolith     | Very High   | Coupling if boundaries aren't enforced  | ESLint rules + package exports                                         |
| 002 | Turborepo + pnpm     | High        | Less codegen than Nx                    | Acceptable trade-off for simplicity                                    |
| 003 | PostgreSQL + RLS     | Very High   | RLS policy bugs leak data               | Automated isolation tests (Phase 1 Step 9)                             |
| 006 | Clerk auth           | High        | Highest vendor lock-in                  | Abstract behind auth service interface; store IDs as `externalId`      |
| 007 | Drizzle ORM          | High        | Smaller ecosystem than Prisma           | SQL-first = standard SQL underneath; community momentum strong         |
| 008 | Neon                 | High        | Databricks acquisition uncertainty      | Standard PostgreSQL — change one connection string to leave            |
| 009 | tRPC + Hono          | High        | Two API layers adds complexity          | Complementary (type safety + middleware); both lightweight             |
| 010 | PostHog              | High        | No approval workflows for flags         | Acceptable at startup scale; governance added later if needed          |
| 011 | Trigger.dev v4       | High        | Newer tool, separate deployment         | Open source + self-hostable as fallback                                |
| 012 | Vercel hosting       | Medium-High | Price spikes at scale; proprietary APIs | Avoid Vercel-specific APIs; use Hono (portable); OpenNext as exit path |
| 013 | Stripe billing       | High        | Medium lock-in                          | Abstract behind billing interface; industry-standard choice            |
| 014 | Upstash Redis        | High        | Free tier limits                        | Standard Redis protocol; swap providers easily                         |
| 015 | Resend + Knock       | High        | Knock medium lock-in                    | Abstract behind notification interface                                 |
| 016 | Sentry + BetterStack | High        | Multiple tools to manage                | Each is best-in-class and independently replaceable                    |
| 017 | AI SDK + Langfuse    | High        | Model provider landscape changes fast   | SDK is provider-agnostic; Langfuse is open source                      |
| 018 | Tailwind v4          | High        | Migration effort from v3                | Automated codemods; no production CSS yet                              |

**Watch list (no action needed yet):**

| Technology               | Trigger to Re-evaluate                                  |
| ------------------------ | ------------------------------------------------------- |
| Better Auth / Stack Auth | If Clerk pricing becomes a problem                      |
| WorkOS                   | When enterprise customers need SAML/SCIM SSO            |
| Coolify / Railway        | If Vercel monthly hosting exceeds $500                  |
| Lucia Auth               | If open-source auth becomes mature enough               |
| Turso                    | If edge data or database-per-tenant isolation is needed |
| Jotai                    | If Zustand proves insufficient for complex editor state |
| TanStack Form            | If form complexity exceeds React Hook Form capabilities |

---

## ADR-019: Monorepo Internal Packages as the Reusable Platform Core

**Date:** 2026-03-10
**Status:** Accepted
**Context:** The SaaS platform serves multiple verticals (SellFunnel, AISOGEN, Book Rocket). Improvements to the shared core must automatically flow to all verticals — like how WordPress core updates flow to all WordPress sites. Eight approaches were evaluated (GitHub templates, git forks, published npm packages, CLI scaffolds, multi-repo, Nx generators, and two monorepo variants).
**Decision:** Use the Turborepo monorepo with internal packages as the reusable platform core. The `packages/` directory IS the "mother template." Verticals are apps in `apps/` that import shared packages via `workspace:*`. No separate repos, no forks, no publishing.
**Rationale:**

- **Instant propagation**: Change a shared package → every vertical gets it in the same commit. No version bumps, no merging, no drift
- **Atomic cross-cutting changes**: A single PR can update shared code AND all consumers simultaneously — impossible with forks or multi-repo
- **Zero publishing overhead**: Internal packages are resolved at workspace level, not from npm. No Changesets needed until external consumers exist
- **Validated by industry**: Shopify (modular monolith, 2.8M lines), Google (95% of code in single monorepo), Vercel's next-forge template (exact same Turborepo + pnpm pattern)
- **Best Turborepo compatibility**: This is the pattern Turborepo was designed for. Vercel deploys each app independently from the monorepo
- **Scales to 10-15 verticals**: Beyond that, extract stable packages to npm. Turborepo caching and task parallelisation handle build times
- Alternatives rejected: GitHub Template Repos (no upstream sync mechanism), Git Forks (5+ manual merges per release — unsustainable), Published npm (unnecessary overhead for internal use), CLI Scaffolds (one-time only, no ongoing sync), Multi-repo (version drift, no atomic changes), Nx (migration cost not justified)
  **Research:** `research/saas-mother-template-approaches.md` (50+ sources)
  **Consequences:** Must enforce five design principles: (1) Shared packages are configuration-driven — verticals pass config, never modify shared code. (2) Verticals only ADD, never MODIFY shared packages — wrap, extend, or configure instead. (3) Use composition pattern — shared packages export primitives, verticals compose them. (4) Start Just-in-Time compilation, graduate to Compiled when builds slow. (5) Enforce boundaries — ESLint rules prevent verticals importing from each other or reaching into package internals.

### Architecture Pattern

```
saas-platform/
├── packages/                    ← THE "MOTHER" — shared platform core
│   ├── ui/                      ← Design system (shadcn + custom)
│   ├── database/                ← Drizzle schemas + RLS + migrations
│   ├── core/                    ← Auth, tenancy, billing, RBAC, API
│   ├── ai-gateway/              ← LLM provider routing + observability
│   ├── feature-flags/           ← PostHog wrapper
│   ├── notifications/           ← Resend + Knock wrapper
│   ├── config/                  ← Shared TS, ESLint, Tailwind configs
│   └── utils/                   ← Shared utilities and types
├── apps/                        ← VERTICALS — consume shared packages
│   ├── sell-funnel/             ← Vertical: SellFunnel
│   ├── aisogen/                 ← Vertical: AISOGEN (SEO/AISO)
│   ├── book-rocket/             ← Vertical: Book Rocket
│   ├── admin/                   ← Internal admin panel
│   └── marketing/               ← Marketing site
```

### Vertical Configuration Pattern

Each vertical provides a config object to shared packages — this is how verticals customise without modifying shared code:

```typescript
// apps/sell-funnel/config/platform.ts
export const platformConfig = {
  vertical: "sell-funnel",
  name: "SellFunnel",
  theme: { primary: "#2563eb", accent: "#f59e0b" },
  features: { aiCopywriting: true, abTesting: true, funnelBuilder: true },
  billing: { plans: ["starter", "pro", "enterprise"] },
  routes: { dashboard: "/dashboard", onboarding: "/get-started" },
};
```

### Boundary Enforcement Rules

1. Verticals NEVER import from other verticals (`apps/sell-funnel` cannot import from `apps/aisogen`)
2. Verticals NEVER import internal files from packages (only public `exports` in package.json)
3. Packages NEVER import from verticals (dependency flows one way: apps → packages)
4. Shared packages accept configuration, not hard-coded vertical-specific logic

### Evolution Triggers

| Trigger                            | Action                                            |
| ---------------------------------- | ------------------------------------------------- |
| Build times exceed 5 minutes       | Move heavy packages from Just-in-Time to Compiled |
| External customers want components | Add Changesets, publish to npm                    |
| Team grows to 5+ developers        | Add CODEOWNERS per package                        |
| 15+ verticals                      | Extract stable packages to npm                    |
| White-label the platform           | Add CLI scaffold for initial vertical setup       |

---

## ADR-020: 6-Level Code Separation Hierarchy

**Date:** 2026-03-12
**Status:** Accepted
**Context:** The original 4-layer architecture (Foundation → Core → Services → Verticals) treated all shared code as "packages" and all products as "apps". This created a gap: there was no concept of pluggable business modules that could be enabled/disabled per tenant. Business features like CRM, marketing tools, or analytics dashboards don't belong in `packages/` (they're not platform infrastructure) or `apps/` (they're shared across verticals). Research across 100+ sources (Shopify, GitHub, AWS, Neal Ford, ETH Zurich) validated the need for a distinct modules layer.
**Decision:** Adopt a 6-level code separation hierarchy: L1 Foundation (`packages/database`, `ui`, `config`, `utils`) → L2 Capabilities (`packages/core/*`, `ai-gateway`, `notifications`, `feature-flags`) → L3 Business Modules (`modules/*`) → L4 Agent Runtime (`packages/core/agent-runtime`) → L5 Verticals (`apps/*`) → L6 Tenant Configuration (runtime data). Add `modules/` as a new workspace root in `pnpm-workspace.yaml`. Enforce strict one-way dependencies: `apps/` → `modules/` → `packages/`.
**Research:** `smith-ai-agency/docs/capabilities/development-architecture-framework.md`, ChatGPT/Gemini architecture analysis, Shopify modular monolith, Neal Ford's fitness functions
**Consequences:** `modules/*` workspace root added. Golden path template at `modules/_template/`. `pnpm create:module` scaffold script. Architecture fitness tests updated to check module boundaries. Every module must have a `module-manifest.json`. Modules communicate via event bus, never via direct imports.

---

## ADR-021: Module Architecture with Event-Driven Communication

**Date:** 2026-03-12
**Status:** Accepted
**Context:** Business modules need to communicate (e.g., CRM module reacts to billing changes). Direct imports between modules would create tight coupling, making it impossible to enable/disable modules per tenant. The ChatGPT analysis recommended event-driven communication; industry consensus (Shopify, AWS) confirms this is the standard pattern for modular monoliths.
**Decision:** Modules communicate exclusively via a typed event bus (`packages/core/events`). Every module declares events it emits and subscribes to in its `module-manifest.json`. Events follow the naming convention `{module}.{entity}.{action}` (e.g., `crm.contact.created`). Implementation phases: Phase 1 = in-process EventEmitter, Phase 2 = async queue (Trigger.dev), Phase 3 = external broker (only if microservices extraction needed). The interface remains stable across all phases.
**Consequences:** `PlatformEvent<T>` type and `eventBus` singleton added to `@saas-platform/core/events`. Event contracts are typed — TypeScript catches mismatches at compile time. Module manifests must declare all emitted/subscribed events. No direct module-to-module imports enforced by architecture tests.

---

## ADR-022: Tenant Context via AsyncLocalStorage

**Date:** 2026-03-12
**Status:** Accepted
**Context:** Multi-tenant requests need tenant identity available everywhere in the call stack — database queries (for RLS), event publishing, logging, feature flags. Passing `tenantId` as a parameter through every function is error-prone and creates noisy APIs. Node.js `AsyncLocalStorage` is the standard solution (used by Next.js, NestJS, Hono, and recommended by 20+ multi-tenancy guides).
**Decision:** Use `AsyncLocalStorage` to carry `TenantContext` (tenantId, orgId, userId, plan, features, enabledModules) through every request. Middleware sets the context once; all downstream code reads via `getTenantContext()`. The database layer reads `getCurrentTenantId()` to set the PostgreSQL session variable for RLS (`SET app.current_tenant_id`). A `tryGetTenantContext()` variant returns null for non-tenant-scoped code (migrations, seeds).
**Consequences:** `TenantContext` interface, `withTenantContext()`, `getTenantContext()`, `tryGetTenantContext()`, `getCurrentTenantId()`, and `isModuleEnabled()` added to `@saas-platform/core/tenancy`. All request-handling middleware must call `withTenantContext()`. Background jobs must set tenant context before processing. No manual tenant_id filtering in queries — RLS handles it.
