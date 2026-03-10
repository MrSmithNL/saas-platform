# Architecture — SaaS Platform (PROD-004)

> Last updated: 2026-03-10

## System Overview

Multi-tenant AI SaaS platform built as a modular monolith in a Turborepo monorepo. Serves multiple vertical products (Sell Funnel, AISOGEN, Book Rocket) from shared infrastructure. Every tenant's data is isolated via PostgreSQL Row-Level Security (RLS) with policies defined directly in the Drizzle ORM schema.

### Reusable Platform Core (ADR-019)

The `packages/` directory is the reusable "mother" platform. Verticals in `apps/` consume shared packages via `workspace:*` — changes to any shared package are instantly available to all verticals in the same commit. No forking, no publishing, no version drift.

**Design principles:**

1. Shared packages are **configuration-driven** — verticals pass config objects, never modify shared code
2. Verticals only **ADD**, never **MODIFY** shared packages — wrap, extend, or configure instead
3. **Composition pattern** — shared packages export primitives, verticals compose them into pages
4. Dependencies flow **one way only**: `apps/` → `packages/` (never reversed, never between verticals)
5. **Boundary enforcement** via ESLint rules prevents cross-vertical imports and package internal access

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    LAYER 4: VERTICALS                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ Sell Funnel   │  │  AISOGEN     │  │  Book Rocket     │  │
│  │ (Next.js)     │  │ (Next.js)    │  │  (Next.js)       │  │
│  │ :3000         │  │ :3003        │  │  :3004           │  │
│  └──────┬────────┘  └──────┬───────┘  └────────┬─────────┘  │
├─────────┼──────────────────┼───────────────────┼────────────┤
│         │        LAYER 3: PLATFORM SERVICES    │            │
│  ┌──────┴────────┐  ┌─────┴───────┐  ┌────────┴─────────┐  │
│  │ AI Gateway    │  │ Notif Engine│  │  Feature Flags   │  │
│  │ Vercel AI SDK │  │ Resend+Knock│  │  PostHog         │  │
│  │ + Langfuse    │  │             │  │  (analytics+     │  │
│  │               │  │             │  │   A/B tests)     │  │
│  └──────┬────────┘  └──────┬──────┘  └────────┬─────────┘  │
│         │                  │                   │            │
│  ┌──────┴──────────────────┴───────────────────┴─────────┐  │
│  │  Trigger.dev v4 (Background Jobs — durable execution) │  │
│  └──────────────────────────┬────────────────────────────┘  │
├─────────────────────────────┼───────────────────────────────┤
│                   LAYER 2: PLATFORM CORE                    │
│  ┌──────────────────────────┴────────────────────────────┐  │
│  │                    Core Package                        │  │
│  │  ┌──────┐  ┌────────┐  ┌────────┐  ┌────┐  ┌──────┐ │  │
│  │  │ Auth │  │Tenancy │  │Billing │  │RBAC│  │ API  │ │  │
│  │  │Clerk │  │RLS/ctx │  │Stripe  │  │    │  │tRPC+ │ │  │
│  │  │ Orgs │  │        │  │        │  │    │  │Hono  │ │  │
│  │  └──────┘  └────────┘  └────────┘  └────┘  └──────┘ │  │
│  └──────────────────────┬────────────────────────────────┘  │
├─────────────────────────┼───────────────────────────────────┤
│                  LAYER 1: FOUNDATION                        │
│  ┌──────────┐  ┌───────┴──┐  ┌────────┐  ┌──────────────┐  │
│  │ Database │  │   UI     │  │ Utils  │  │    Config    │  │
│  │ Drizzle  │  │ shadcn   │  │        │  │ TS/ESLint/TW│  │
│  │ + Neon   │  │ TW v4    │  │        │  │              │  │
│  └────┬─────┘  └──────────┘  └────────┘  └──────────────┘  │
└───────┼─────────────────────────────────────────────────────┘
        │
┌───────┴─────────────────────────────────────────────────────┐
│                    INFRASTRUCTURE                            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────────┐  │
│  │   Neon   │  │ Upstash  │  │  Vercel  │  │  Sentry +  │  │
│  │Serverless│  │  Redis   │  │  (edge   │  │ BetterStack│  │
│  │PostgreSQL│  │(cache +  │  │  deploy) │  │  (errors + │  │
│  │+ Pooler  │  │ ratelim) │  │          │  │   logs)    │  │
│  └──────────┘  └──────────┘  └──────────┘  └────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Tech Stack

| Layer           | Choice                                | Why                                              |
| --------------- | ------------------------------------- | ------------------------------------------------ |
| Framework       | Next.js 15 (App Router)               | Largest ecosystem, RSC, streaming SSR            |
| Language        | TypeScript (strict)                   | Type safety, better tooling                      |
| Database        | **Neon** (serverless PostgreSQL)      | Scale-to-zero, built-in pooler, branching        |
| ORM             | **Drizzle**                           | Native RLS in schema, smallest bundle, SQL-first |
| Auth            | Clerk (Organizations)                 | Multi-tenant auth OOTB, best Next.js DX          |
| API (internal)  | **tRPC**                              | Zero-cost type safety in monorepo                |
| API (external)  | **Hono.js**                           | 14KB, edge runtime, middleware-first             |
| Validation      | Zod                                   | Native tRPC + Hono integration                   |
| Billing         | Stripe                                | Usage-based meters, deepest API                  |
| AI              | Vercel AI SDK + Langfuse              | Streaming UI + open-source LLM observability     |
| UI              | shadcn/ui + Tailwind CSS v4           | Component ownership, native CSS variable theming |
| State (client)  | Zustand                               | 3KB, simplest mental model                       |
| State (URL)     | nuqs                                  | Type-safe URL state                              |
| Data fetching   | TanStack Query                        | Best mutation handling, devtools                 |
| Forms           | React Hook Form + Zod                 | Best Server Actions integration                  |
| Cache           | Upstash Redis                         | Serverless HTTP-based, tenant-prefixed keys      |
| Background jobs | Trigger.dev v4                        | Durable execution, unlimited duration, AI-ready  |
| Email           | Resend                                | React Email templates                            |
| Notifications   | Knock                                 | Multi-channel, per-tenant preferences            |
| Feature flags   | PostHog                               | Integrated analytics + flags + A/B testing       |
| Error tracking  | Sentry                                | Session replays, release tracking                |
| Logging         | Pino + BetterStack                    | Structured JSON, affordable platform             |
| Testing         | Vitest + Playwright + Storybook 9     | Unit + E2E + visual regression                   |
| CI/CD           | GitHub Actions                        | Turborepo cache integration                      |
| Hosting         | Vercel (apps) + Trigger.dev (workers) | Minimal DevOps, preview environments             |
| Monorepo        | Turborepo + pnpm                      | Minimal config, fast caching                     |

## Dependency Graph

```
apps/sell-funnel  apps/admin  apps/marketing  apps/aisogen  apps/book-rocket
       │              │            │                │              │
       ├──────────────┤            │                ├──────────────┤
       ▼              ▼            │                ▼              ▼
  ai-gateway    notifications      │           feature-flags
  feature-flags  (Trigger.dev)     │
       │              │            │
       ├──────────────┤            │
       ▼              ▼            ▼
                   core (tRPC + Hono)
                     │
       ┌─────────────┼────────────┐
       ▼             ▼            ▼
    database        ui          utils
   (Drizzle)    (shadcn/TW4)
       │             │
       ▼             ▼
     Neon          config
```

**Rule:** Dependencies flow downward only. `apps/` → `packages/`. Never reverse.

## DDD Bounded Contexts

| Context     | Package            | Responsibility                                        |
| ----------- | ------------------ | ----------------------------------------------------- |
| Identity    | `core/auth`        | Users, sessions, organisation switching (Clerk)       |
| Tenancy     | `core/tenancy`     | Tenant isolation, context, RLS via Drizzle            |
| Billing     | `core/billing`     | Subscriptions, invoices, metered usage (Stripe)       |
| Access      | `core/rbac`        | Roles, permissions, authorisation                     |
| API         | `core/api`         | tRPC procedures, Hono middleware, rate limiting       |
| AI          | `ai-gateway`       | Model routing, token tracking, Langfuse observability |
| Content     | `notifications`    | Email (Resend), push, in-app (Knock)                  |
| Jobs        | `trigger`          | Background processing, tenant-scoped queues           |
| Sell Funnel | `apps/sell-funnel` | Funnels, pages, conversions, A/B tests                |
| AISOGEN     | `apps/aisogen`     | SEO audit, content pipeline, rank tracking            |

## Multi-Tenancy Strategy

- **Shared database** with PostgreSQL Row-Level Security (RLS)
- RLS policies defined in **Drizzle schema** alongside table definitions (not separate SQL files)
- Every table has `tenant_id` column with `enableRLS()` and `pgPolicy()`
- Tenant context set per-request via Hono middleware → `SET app.current_tenant_id`
- `FORCE ROW LEVEL SECURITY` on all tables (prevents owner bypass)
- `WITH CHECK` on INSERT/UPDATE policies (prevents cross-tenant writes)
- Redis caching with tenant-prefixed keys (`tenant:{id}:cache_key`)
- Background jobs tagged with `tenantId` metadata, per-tenant queues
- Neon's built-in connection pooler handles serverless connection management

## Request Flow

```
Browser → Vercel Edge
  → Hono middleware (auth check, rate limit, tenant extraction)
  → SET app.current_tenant_id = 'tenant_abc' (PostgreSQL session variable)
  → tRPC procedure (type-safe, Zod-validated)
  → Drizzle ORM query
  → Neon PostgreSQL + RLS (automatically filters by tenant)
  → Response (only tenant_abc's data)
```

## Change Log

| Date       | Change                                                                                                                                                                                                               |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-03-09 | Initial architecture — monorepo structure, 4-layer design, tech stack                                                                                                                                                |
| 2026-03-10 | Phase 0 complete. Major tech updates: Prisma→Drizzle, add Neon, add tRPC+Hono, add Trigger.dev/PostHog/Langfuse/Knock. Full architecture plan created from 4 research reports (100+ sources). Diagrams updated.      |
| 2026-03-10 | ADR-019: Reusable platform core architecture. packages/ = mother template, apps/ = verticals. Configuration-driven design, composition pattern, boundary enforcement. Research: 50+ sources, 8 approaches evaluated. |
