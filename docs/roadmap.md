# Product Roadmap — SaaS Platform (PROD-004)

> Last updated: 2026-03-09
> Methodology: Shape Up (6-week fixed cycles, variable scope)

## Phase Overview

| Phase | Duration | Focus                                          | Key Validation                          | Status       |
| ----- | -------- | ---------------------------------------------- | --------------------------------------- | ------------ |
| 0     | 2 weeks  | Foundation — monorepo, configs, database, UI   | `pnpm dev` starts everything            | **Complete** |
| 1     | 6 weeks  | Platform Core — auth, tenancy, billing, RBAC   | User can sign up, create org, subscribe | **Next**     |
| 2     | 8 weeks  | Sell Funnel MVP — funnels, pages, conversions  | First paying customers                  | Planned      |
| 3     | 4 weeks  | Platform Hardening — AI gateway, notifications | Ready for second vertical               | Planned      |
| 4     | 8 weeks  | Book Rocket MVP — author tools, SEO engine     | Platform reusability proven             | Planned      |
| 5     | 8 weeks  | Platform Maturity — scale, extensibility       | Production-grade platform               | Planned      |

**Total estimated timeline:** ~36 weeks (9 months)

## Phase 0: Foundation (COMPLETE)

**Appetite:** 2 weeks
**Deliverable:** Functional monorepo where `pnpm dev` starts everything
**Completed:** 2026-03-10

| Item                                  | Priority | Status |
| ------------------------------------- | -------- | ------ |
| Monorepo structure (Turborepo + pnpm) | Critical | Done   |
| Package stubs with proper exports     | Critical | Done   |
| Shared configs (TS, ESLint, Tailwind) | Critical | Done   |
| shadcn/ui component library setup     | High     | Done   |
| Pre-commit hooks (ESLint + Prettier)  | High     | Done   |
| Pre-push hooks (build + test)         | High     | Done   |
| Code quality gates (complexity, etc.) | High     | Done   |
| Vitest + passWithNoTests              | High     | Done   |
| 3 apps scaffolded (SF, admin, mkt)    | Medium   | Done   |
| Technical architecture plan           | Critical | Done   |

## Phase 1: Platform Core MVP (NEXT)

**Appetite:** 6 weeks
**Deliverable:** Working platform where a user can sign up, create an organisation, invite team members, and subscribe to a plan

| Item                                      | Priority | Tech                  |
| ----------------------------------------- | -------- | --------------------- |
| Switch Prisma → Drizzle ORM               | Critical | Drizzle + drizzle-kit |
| Set up Neon serverless PostgreSQL         | Critical | Neon (free tier)      |
| Define tables with RLS policies in schema | Critical | Drizzle pgPolicy()    |
| Clerk auth + Organizations integration    | Critical | Clerk SDK             |
| Tenant context middleware                 | Critical | Hono middleware       |
| tRPC + Hono.js API layer                  | Critical | tRPC + Hono           |
| Stripe billing + webhooks                 | Critical | Stripe SDK            |
| Trigger.dev background jobs               | High     | Trigger.dev v4        |
| RBAC (Owner, Admin, Member)               | High     | Clerk + custom        |
| Upstash Redis cache + rate limiting       | High     | Upstash + @upstash/rl |
| PostHog feature flags + analytics         | Medium   | PostHog SDK           |
| Sentry + Pino + BetterStack monitoring    | Medium   | Sentry + Pino         |
| Tailwind v4 upgrade + tenant theming      | Medium   | Tailwind CSS v4       |
| Storybook 9 + nuqs                        | Medium   | Storybook + nuqs      |
| RLS isolation tests                       | Critical | Vitest                |

## Phase 2: Sell Funnel MVP

**Appetite:** 8 weeks (two 4-week cycles)
**Deliverable:** Minimum lovable Sell Funnel product with paying customers

**Cycle 2a (Weeks 9-12):**

- Sell Funnel data models
- Funnel builder UI
- Landing page templates
- Dashboard with key metrics

**Cycle 2b (Weeks 13-16):**

- Conversion tracking & analytics
- A/B testing framework
- AI-powered copy generation
- Onboarding flow
- Marketing site

## Phase 3: Platform Hardening

**Appetite:** 4 weeks
**Deliverable:** Platform mature enough for a second vertical

- AI gateway with multi-provider routing
- Notification engine (email, in-app)
- Proper feature flag service
- Theming engine (per-tenant branding)
- Monitoring & observability
- Security audit

## Phase 4: AISOGEN MVP

**Appetite:** 8 weeks
**Deliverable:** AISOGEN proving platform reusability for second vertical

- SEO audit engine integration (PROD-001)
- Content pipeline
- Rank tracking + reporting
- AISO capabilities
- Marketing site for aisogen.ai

## Phase 5: Book Rocket + Platform Maturity

**Appetite:** 8 weeks
**Deliverable:** Third vertical + production-grade platform

- Book Rocket vertical (author tools, SEO engine)
- API marketplace / extensibility
- Custom domains, white-labelling
- Usage-based billing (Stripe meters)
- Plugin/extension system
- Developer documentation portal

## Backlog (Future)

| Item                      | Category       | Priority |
| ------------------------- | -------------- | -------- |
| Third vertical product    | Product        | Low      |
| Mobile app (React Native) | Product        | Low      |
| Partner/affiliate system  | Business       | Low      |
| Enterprise SSO (SAML)     | Platform       | Low      |
| Multi-region deployment   | Infrastructure | Low      |
