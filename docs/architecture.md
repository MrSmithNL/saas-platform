# Architecture — SaaS Platform (PROD-004)

> Last updated: 2026-03-09

## System Overview

Multi-tenant AI SaaS platform built as a modular monolith in a Turborepo monorepo. Serves multiple vertical products (Sell Funnel, Book Rocket) from shared infrastructure.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    LAYER 4: VERTICALS                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ Sell Funnel   │  │ Book Rocket  │  │  Future Vertical │  │
│  │ (Next.js)     │  │ (Next.js)    │  │  (Next.js)       │  │
│  │ :3000         │  │ :3003        │  │                  │  │
│  └──────┬────────┘  └──────┬───────┘  └────────┬─────────┘  │
├─────────┼──────────────────┼───────────────────┼────────────┤
│         │        LAYER 3: PLATFORM SERVICES    │            │
│  ┌──────┴────────┐  ┌─────┴───────┐  ┌────────┴─────────┐  │
│  │ AI Gateway    │  │ Notif Engine│  │  Feature Flags   │  │
│  │ (LLM routing) │  │ (Resend)    │  │  (per-tenant)    │  │
│  └──────┬────────┘  └──────┬──────┘  └────────┬─────────┘  │
├─────────┼──────────────────┼───────────────────┼────────────┤
│         │        LAYER 2: PLATFORM CORE        │            │
│  ┌──────┴──────────────────┴───────────────────┴─────────┐  │
│  │                    Core Package                        │  │
│  │  ┌─────┐  ┌────────┐  ┌────────┐  ┌────┐  ┌───┐     │  │
│  │  │Auth │  │Tenancy │  │Billing │  │RBAC│  │API│     │  │
│  │  │Clerk│  │RLS/ctx │  │Stripe  │  │    │  │   │     │  │
│  │  └─────┘  └────────┘  └────────┘  └────┘  └───┘     │  │
│  └──────────────────────┬────────────────────────────────┘  │
├─────────────────────────┼───────────────────────────────────┤
│                  LAYER 1: FOUNDATION                        │
│  ┌──────────┐  ┌───────┴──┐  ┌────────┐  ┌──────────────┐  │
│  │ Database │  │   UI     │  │ Utils  │  │    Config    │  │
│  │ Prisma   │  │ shadcn   │  │        │  │ TS/ESLint/TW│  │
│  │ Postgres │  │ Tailwind │  │        │  │              │  │
│  └────┬─────┘  └──────────┘  └────────┘  └──────────────┘  │
└───────┼─────────────────────────────────────────────────────┘
        │
┌───────┴─────────────────────────────────────────────────────┐
│                    INFRASTRUCTURE                            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────────┐  │
│  │PostgreSQL│  │  Redis   │  │  Vercel  │  │   Sentry   │  │
│  │ (RLS)    │  │ (Upstash)│  │ (deploy) │  │ (monitor)  │  │
│  └──────────┘  └──────────┘  └──────────┘  └────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 15 (App Router) | SSR, API routes, massive ecosystem |
| Language | TypeScript (strict) | Type safety, better tooling |
| Database | PostgreSQL 16 + Prisma 6 | Battle-tested, RLS for tenancy |
| Auth | Clerk | Multi-tenant auth out of the box |
| Billing | Stripe | Industry standard, webhooks |
| AI | Vercel AI SDK + LiteLLM | Unified interface to 100+ models |
| UI | shadcn/ui + Tailwind CSS | Copy-paste components, customisable |
| Email | Resend | Simple API, React email templates |
| Cache | Redis (Upstash) | Serverless-friendly, tenant-prefixed |
| Monitoring | Sentry + PostHog | Errors + product analytics |
| Monorepo | Turborepo + pnpm | Minimal config, fast caching |
| Testing | Vitest + Playwright | Unit + E2E |
| CI/CD | GitHub Actions | Standard, Turborepo cache integration |
| Hosting | Vercel (apps) | Minimal DevOps |

## Dependency Graph

```
apps/sell-funnel  apps/admin  apps/marketing
       │              │            │
       ├──────────────┤            │
       ▼              ▼            │
  ai-gateway    notifications      │
  feature-flags                    │
       │              │            │
       ├──────────────┤            │
       ▼              ▼            ▼
                   core
                     │
       ┌─────────────┼────────────┐
       ▼             ▼            ▼
    database        ui          utils
                     │
                     ▼
                  config
```

**Rule:** Dependencies flow downward only. `apps/` → `packages/`. Never reverse.

## DDD Bounded Contexts

| Context | Package | Responsibility |
|---------|---------|---------------|
| Identity | `core/auth` | Users, sessions, organisation switching |
| Tenancy | `core/tenancy` | Tenant isolation, context, RLS |
| Billing | `core/billing` | Subscriptions, invoices, Stripe |
| Access | `core/rbac` | Roles, permissions, authorisation |
| AI | `ai-gateway` | Model routing, usage tracking, caching |
| Content | `notifications` | Email, push, in-app messaging |
| Sell Funnel | `apps/sell-funnel` | Funnels, pages, conversions, A/B tests |

## Multi-Tenancy Strategy

- **Shared database** with PostgreSQL Row-Level Security (RLS)
- Every table has `organisation_id` column
- RLS policies enforce tenant isolation at database level
- Tenant context set per-request via middleware
- Redis caching with tenant-prefixed keys (`tenant:{id}:cache_key`)

## Change Log

| Date | Change |
|------|--------|
| 2026-03-09 | Initial architecture — monorepo structure, 4-layer design, tech stack |
