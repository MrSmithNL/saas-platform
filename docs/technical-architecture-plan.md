# Technical Architecture Design — Multi-Tenant SaaS Platform (PROD-004)

> **Version:** 1.0.0
> **Date:** 2026-03-10
> **Status:** Plan — awaiting Malcolm's approval
> **Based on:** 4 research reports (2,267 lines, 100+ sources)

---

## What This Document Is

This is the **complete technology blueprint** for the SaaS Platform. It answers: "what technology will we use for every layer, and why?"

Every recommendation is backed by research comparing multiple options against our specific needs: multi-tenant, Next.js monorepo, serverless deployment, AI-integrated, built by a small team.

---

## The Stack at a Glance

Here's the full picture — what we're building with and why each piece was chosen:

| Layer               | Technology                                    | Why This One Wins                                               |
| ------------------- | --------------------------------------------- | --------------------------------------------------------------- |
| **Framework**       | Next.js 15 (App Router)                       | Largest ecosystem, best React integration, server components    |
| **Monorepo**        | Turborepo + pnpm                              | Already set up, working well, Vercel-native                     |
| **Database**        | **Neon** (serverless PostgreSQL)              | Scale-to-zero, built-in connection pooling, database branching  |
| **ORM**             | **Drizzle** (replacing Prisma)                | Native RLS support in schema, smaller bundle, SQL-first         |
| **Multi-tenancy**   | PostgreSQL Row-Level Security                 | Validated — correct pattern, no change needed                   |
| **Auth**            | Clerk (Organizations)                         | Best Next.js DX, built-in multi-tenant orgs, free to 50K users  |
| **API (internal)**  | **tRPC**                                      | Zero-cost type safety between frontend and backend              |
| **API (external)**  | **Hono.js**                                   | Ultra-lightweight (14KB), runs on edge, middleware-first        |
| **Validation**      | Zod                                           | Native tRPC + Hono integration, largest ecosystem               |
| **UI Components**   | shadcn/ui + Radix                             | Already set up, ownership of every component, best for theming  |
| **Styling**         | **Tailwind CSS v4** (upgrade from v3)         | Native CSS variables for per-tenant theming, 100x faster builds |
| **State (client)**  | Zustand                                       | Smallest bundle (3KB), simplest mental model                    |
| **State (URL)**     | **nuqs** (new addition)                       | Type-safe URL state, used by Sentry/Vercel/Clerk                |
| **Data fetching**   | TanStack Query                                | Market leader, best mutation handling, devtools                 |
| **Forms**           | React Hook Form + Zod                         | Best Server Actions integration                                 |
| **Cache (server)**  | **Upstash Redis**                             | Serverless, HTTP-based, scales to zero, free tier               |
| **Cache (client)**  | TanStack Query                                | Built-in with data fetching                                     |
| **Background jobs** | **Trigger.dev v4**                            | Durable execution, unlimited duration, AI-ready, open source    |
| **Billing**         | **Stripe**                                    | Lowest fees, usage-based meters, deepest API                    |
| **Email**           | **Resend**                                    | React Email templates, modern DX, 3K free/month                 |
| **Notifications**   | **Knock**                                     | Pre-built UI, multi-channel, per-tenant preferences             |
| **Error tracking**  | **Sentry**                                    | Industry standard, session replays, release tracking            |
| **Logging**         | **Pino** + **BetterStack**                    | Fastest logger + affordable log platform                        |
| **Feature flags**   | **PostHog**                                   | Integrated analytics + flags + A/B testing, 1M free             |
| **AI/LLM**          | **Vercel AI SDK** + **Langfuse**              | Streaming UI in 20 lines + open-source LLM observability        |
| **Deployment**      | **Vercel** (frontend) + Trigger.dev (workers) | Purpose-built for Next.js, preview environments                 |
| **Testing**         | Vitest + Playwright + **Storybook 9**         | Already set up + adding visual regression                       |

---

## What's Changing From Current Setup

We're still early (Phase 0 just completed, no production data), so these changes are low-risk:

### 1. Prisma → Drizzle ORM (Big Win)

**What this means in plain English:** We're swapping the tool that talks to the database. The new one (Drizzle) lets us write our security rules (who can see what data) directly alongside our data definitions, instead of in separate files. It's also faster and smaller.

**Why the switch:**

- Drizzle lets you define RLS policies (the security rules that keep each customer's data separate) right in the same file as the table definition. With Prisma, you have to write these separately in raw SQL
- Drizzle produces a smaller package (faster startup on serverless)
- Drizzle has a partnership with Neon specifically for RLS helpers
- The developer community has shifted — most new SaaS starter kits now default to Drizzle
- Prisma still can't do multi-schema tenancy (GitHub issue open since 2022)

**Risk level:** Low — we have no production data to migrate. It's a code-level change only.

**Example of the improvement:**

```
BEFORE (Prisma): Define table in schema.prisma, then write RLS
policies in a separate SQL migration file. Easy to forget one.

AFTER (Drizzle): Define table AND its security policies in the
same TypeScript file. If you add a table, the RLS policy is
right there — impossible to miss.
```

### 2. Generic PostgreSQL → Neon (Smart Infrastructure)

**What this means:** Instead of running a traditional always-on database, we'll use Neon — a "serverless" PostgreSQL that turns itself off when nobody's using it and turns back on instantly when needed.

**Why Neon:**

- **Saves money early on** — scales to zero, so we pay nothing during development/quiet periods
- **Solves the connection problem** — serverless functions (Vercel) create lots of short database connections. Neon has built-in connection pooling, so we don't need extra infrastructure
- **Database branching** — creates instant copies of the database for testing. Like git branches but for data
- **Still standard PostgreSQL** — if Neon ever becomes a problem, we change one connection string and move to any other PostgreSQL host
- **Free tier:** 0.5GB storage, 191 compute hours/month

**Risk:** Neon was acquired by Databricks in 2025 and had some outages. But since it's standard PostgreSQL, we can leave anytime.

### 3. Adding tRPC (Type-Safe Internal API)

**What this means:** When our frontend talks to our backend, both sides will automatically know exactly what data to send and expect back. If someone changes the backend, the frontend immediately shows an error if it's sending the wrong data — before the code even runs.

**Why add it:**

- Zero-cost type safety in a monorepo — change a backend function, get instant red squiggles in the frontend if anything breaks
- No API documentation to maintain for internal calls — the types ARE the documentation
- Works perfectly with Turborepo (our monorepo tool)
- 2M+ weekly downloads, mature and stable

### 4. Adding Hono.js (Edge API Layer)

**What this means:** A tiny (14KB) web server that handles things like rate limiting, authentication checks, and routing — all running at the "edge" (close to where your users are, for faster responses).

**Why add it:**

- Handles middleware (auth checks, rate limiting, tenant context) in one place
- Runs on Vercel Edge for faster responses
- tRPC sits on top of Hono — they work together
- If we ever need a public API for customers, Hono handles that with automatic documentation

### 5. Tailwind v3 → v4 (Theming Upgrade)

**What this means:** Upgrading our styling system to the latest version. The big win is that per-tenant branding (different colours, fonts per customer) becomes much simpler.

**Why upgrade:**

- Native CSS variables make tenant theming a single attribute change
- 100x faster incremental builds
- No more JavaScript config file — everything in CSS

### 6. New Additions (Not Replacing Anything)

| Addition               | What It Does                                                 | Cost                           |
| ---------------------- | ------------------------------------------------------------ | ------------------------------ |
| **Upstash Redis**      | Fast data cache, rate limiting                               | Free (500K commands/month)     |
| **Trigger.dev v4**     | Background jobs (email sending, report generation, AI tasks) | Free tier available            |
| **Stripe**             | Customer billing and subscriptions                           | Transaction fees only          |
| **Resend**             | Sending emails                                               | Free (3K emails/month)         |
| **Knock**              | In-app notifications                                         | Free (10K notifications/month) |
| **Sentry**             | Catching errors in production                                | Free tier                      |
| **Pino + BetterStack** | Structured logging                                           | Free tier                      |
| **PostHog**            | Feature flags + analytics                                    | Free (1M events/month)         |
| **Langfuse**           | AI/LLM usage tracking                                        | Free (50K observations/month)  |
| **nuqs**               | URL state management                                         | Free (open source)             |
| **Storybook 9**        | Component development + visual testing                       | Free (open source)             |

---

## Architecture Layers Explained

### Layer 1: Foundation (Phase 0 — COMPLETE)

What's already built and working:

- Turborepo monorepo with 12 packages
- Shared TypeScript, ESLint, and Tailwind configs
- shadcn/ui component library with Button component
- Pre-commit hooks (lint + format) and pre-push hooks (build + test)
- Vitest testing framework
- 3 apps scaffolded (sell-funnel, admin, marketing)

### Layer 2: Data & Security (Phase 1 — NEXT)

This is where multi-tenancy actually lives:

```
Request comes in
  → Hono middleware extracts tenant from Clerk JWT
  → Sets PostgreSQL session variable: SET app.current_tenant_id = 'tenant_abc'
  → Drizzle ORM runs query
  → PostgreSQL RLS policies automatically filter: only show tenant_abc's data
  → Response goes back with only that tenant's data
```

**Four layers of protection:**

1. **RLS policies** — database refuses to return wrong tenant's data (safety net)
2. **Application WHERE clauses** — code explicitly filters by tenant (belt)
3. **Clerk permissions** — role-based access within a tenant (suspenders)
4. **Rate limiting** — prevents one tenant from hogging resources (fairness)

### Layer 3: API & Communication

```
Frontend (Next.js)
  ↕ tRPC (type-safe, internal)
Backend (Hono.js on Vercel Edge)
  ↕ Drizzle ORM
Database (Neon PostgreSQL + RLS)

External integrations:
  → Stripe webhooks (billing events)
  → Clerk webhooks (auth events)
  → Resend (outbound email)
  → Knock (notifications)
  → Trigger.dev (background jobs)
```

### Layer 4: Verticals (Future)

Each vertical (SellFunnel, AISOGEN, Book Rocket) is a Next.js app in the monorepo that shares all the core packages:

```
apps/
  sell-funnel/     → Sales funnel builder
  aisogen/         → SEO/AISO platform
  book-rocket/     → Author marketing
  admin/           → Agency admin panel
  marketing/       → Marketing site

packages/
  core/            → Business logic, tenant context
  database/        → Drizzle schema, RLS policies, migrations
  ui/              → Shared components (shadcn/ui)
  utils/           → Shared utilities
  config/          → TypeScript, ESLint, Tailwind configs
  ai-gateway/      → LLM provider routing
  api-client/      → tRPC client + Hono API types
  feature-flags/   → PostHog wrapper
  notifications/   → Knock wrapper
```

---

## Cost Projections

### At Launch (first customers)

| Service         | Monthly Cost    |
| --------------- | --------------- |
| Vercel Pro      | $20             |
| Everything else | $0 (free tiers) |
| **Total**       | **~$20/month**  |

### At $10K Monthly Revenue

| Service              | Monthly Cost          |
| -------------------- | --------------------- |
| Vercel Pro (3 seats) | $60                   |
| Neon database        | $19-69                |
| Upstash Redis        | $10-30                |
| Trigger.dev          | $50-100               |
| Stripe fees          | ~$320                 |
| Resend               | $20                   |
| Sentry + BetterStack | $65                   |
| PostHog              | $0-50                 |
| Langfuse             | $59                   |
| Knock                | $0-250                |
| **Total**            | **~$700-1,100/month** |

That's 7-11% of revenue — well within healthy SaaS margins.

### At $100K Monthly Revenue

**~$5,000-6,500/month** (5-7% of revenue). Key cost increases: Stripe fees ($3,200), Vercel Enterprise ($500+), Neon ($200-500).

---

## Vendor Lock-in Risk

Every technology was evaluated for how hard it would be to leave:

| Service     | Lock-in Risk | Exit Plan                                      |
| ----------- | ------------ | ---------------------------------------------- |
| Vercel      | Medium-High  | OpenNext project enables deployment elsewhere  |
| Stripe      | Medium       | Abstract behind billing service interface      |
| Clerk       | High         | Abstract behind auth service interface         |
| Neon        | **Low**      | Standard PostgreSQL — change connection string |
| Drizzle     | **Low**      | Standard SQL output, open source               |
| Upstash     | **Low**      | Redis protocol — any Redis provider works      |
| Trigger.dev | **Low**      | Open source (Apache 2.0), self-hostable        |
| PostHog     | **Low**      | Open source (MIT), self-hostable               |
| Langfuse    | **Low**      | Open source (MIT), self-hostable               |
| Knock       | Medium       | Abstract behind notification service interface |

**Strategy:** For medium-high lock-in services (Vercel, Stripe, Clerk), we build thin wrapper interfaces so the rest of our code never talks directly to them. This means swapping providers later is a single-file change, not a codebase-wide rewrite.

---

## Implementation Sequence — Phase 1

Phase 1 builds the multi-tenant core. Everything after this is vertical-specific features.

### Step 1: Database Setup (Neon + Drizzle)

- Remove Prisma, install Drizzle ORM + drizzle-kit
- Set up Neon project (free tier)
- Define first tables with RLS policies in Drizzle schema
- Configure `strict: true` in drizzle-kit (prevents data loss on renames)
- Write tenant isolation integration tests
- **Validates:** Data layer works, RLS policies enforce isolation

### Step 2: Auth Integration (Clerk)

- Configure Clerk with Organizations enabled
- Set up middleware to extract tenant from JWT
- Create tenant context provider (sets PostgreSQL session variable)
- Test: User in Org A cannot see Org B's data
- **Validates:** Auth → tenant context → RLS pipeline works end-to-end

### Step 3: API Layer (tRPC + Hono)

- Mount Hono.js at `/api/*` in Next.js
- Set up tRPC on top of Hono
- Create first procedures: tenant CRUD, user management
- Add Upstash rate limiting middleware
- Add Zod validation on all inputs
- **Validates:** Type-safe API with rate limiting and validation

### Step 4: Background Jobs (Trigger.dev)

- Set up Trigger.dev project
- Create first jobs: welcome email, tenant provisioning
- Ensure all jobs carry tenant context
- Add per-tenant concurrency limits
- **Validates:** Async processing with tenant isolation

### Step 5: Billing (Stripe)

- Set up Stripe with subscription plans
- Create billing service wrapper (abstracts Stripe)
- Webhook handler for subscription events
- Feature gating based on plan tier
- **Validates:** Customers can pay, features gate by plan

### Step 6: Email + Notifications

- Set up Resend with React Email templates
- Set up Knock for in-app notifications
- Create notification service wrapper
- **Validates:** Can communicate with users

### Step 7: Monitoring + Feature Flags

- Set up Sentry for error tracking
- Set up Pino + BetterStack for structured logging
- Set up PostHog for feature flags + analytics
- **Validates:** Can see what's happening in production

### Step 8: Frontend Polish

- Upgrade Tailwind to v4
- Implement per-tenant theming via CSS variables
- Add nuqs for URL state
- Add Storybook 9 for component development
- **Validates:** UI is production-ready with multi-tenant theming

### Step 9: Testing & Security

- RLS isolation tests (attempt cross-tenant access, verify it fails)
- E2E tests for critical flows (signup → org creation → first action)
- Playwright multi-tenant tests (switch orgs, verify data isolation)
- Security audit: verify all tables have RLS, all APIs validate tenant
- **Validates:** System is secure and tested

---

## What We Got Right (No Changes Needed)

The research validated these decisions we already made:

1. **Shared database + RLS** — correct pattern for 100-1000 tenants
2. **Belt-and-suspenders** (RLS + application filtering) — matches production consensus
3. **Tenant context from JWT, never URL** — correct security pattern
4. **Cross-tenant returns 404 not 403** — doesn't reveal data existence
5. **Cache keys prefixed with tenant ID** — correct isolation
6. **Background jobs carry tenant context** — correct
7. **Next.js 15 App Router** — still the default for React SaaS
8. **shadcn/ui + Tailwind** — design ownership + utility-first
9. **Zustand for client state** — consensus winner
10. **TanStack Query for data fetching** — clear market leader
11. **Vitest + Playwright** — standard testing combo

---

## Things to Watch (No Action Yet)

| Technology        | Why Watch                                      | When to Act                            |
| ----------------- | ---------------------------------------------- | -------------------------------------- |
| **Better Auth**   | Open-source Clerk alternative, growing fast    | If Clerk pricing becomes a problem     |
| **Stack Auth**    | YC-backed, 1M free users                       | When it matures (late 2026+)           |
| **WorkOS**        | Best enterprise auth (SAML/SCIM)               | When enterprise customers need SSO     |
| **Jotai**         | May be better than Zustand for complex editors | When building funnel builder           |
| **TanStack Form** | Better for deeply nested forms                 | When forms get complex                 |
| **Turso**         | Database-per-tenant at $5/mo for 1000 tenants  | If we need edge data or true isolation |
| **Zod v4**        | Performance regressions reported               | Monitor fixes before upgrading         |

---

## Sources

This plan synthesizes findings from 4 research reports totalling 2,267 lines and 100+ sources:

1. `research/saas-platform-technical-architecture-2026.md` — API, cache, jobs, billing, email, monitoring, feature flags, AI, deployment
2. `research/multi-tenant-auth-provider-comparison.md` — 8 auth providers compared
3. `research/database-architecture-multi-tenant-challenge-2026.md` — 6 databases, 5 ORMs, 3 tenancy patterns
4. `research/frontend-architecture-saas-2026.md` — Framework, UI, styling, state, forms, testing

Existing capability doc validated: `docs/capabilities/multi-tenant-architecture.md` — patterns confirmed as production-grade.
