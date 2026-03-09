# Product Roadmap — SaaS Platform (PROD-004)

> Last updated: 2026-03-09
> Methodology: Shape Up (6-week fixed cycles, variable scope)

## Phase Overview

| Phase | Duration | Focus | Key Validation | Status |
|-------|----------|-------|----------------|--------|
| 0 | 2 weeks | Foundation — monorepo, configs, database, UI | `pnpm dev` starts everything | **Current** |
| 1 | 6 weeks | Platform Core — auth, tenancy, billing, RBAC | User can sign up, create org, subscribe | Planned |
| 2 | 8 weeks | Sell Funnel MVP — funnels, pages, conversions | First paying customers | Planned |
| 3 | 4 weeks | Platform Hardening — AI gateway, notifications | Ready for second vertical | Planned |
| 4 | 8 weeks | Book Rocket MVP — author tools, SEO engine | Platform reusability proven | Planned |
| 5 | 8 weeks | Platform Maturity — scale, extensibility | Production-grade platform | Planned |

**Total estimated timeline:** ~36 weeks (9 months)

## Phase 0: Foundation (Current)

**Appetite:** 2 weeks
**Deliverable:** Empty but functional monorepo where `pnpm dev` starts everything

| Item | Priority | Status |
|------|----------|--------|
| Monorepo structure (Turborepo + pnpm) | Critical | Done |
| Package stubs with proper exports | Critical | Done |
| Prisma schema (base models) | Critical | Done |
| Shared configs (TS, ESLint, Tailwind) | High | Todo |
| shadcn/ui component library setup | High | Todo |
| Docker Compose for local dev | High | Todo |
| GitHub Actions CI | Medium | Todo |
| ADRs for key decisions | Medium | Partial |

## Phase 1: Platform Core MVP

**Appetite:** 6 weeks
**Deliverable:** Working platform where a user can sign up, create an organisation, invite team members, and subscribe to a plan

| Item | Priority |
|------|----------|
| Clerk multi-tenant auth integration | Critical |
| Tenant context middleware | Critical |
| PostgreSQL RLS policies | Critical |
| Stripe subscriptions + webhooks | Critical |
| RBAC (Owner, Admin, Member) | High |
| API framework with rate limiting | High |
| Basic admin dashboard | Medium |
| Config-based feature flags | Medium |

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

## Phase 4: Book Rocket MVP

**Appetite:** 8 weeks
**Deliverable:** Book Rocket proving platform reusability

- Author profile management
- Book listing and SEO analysis
- Content creation tools
- Marketing campaign management
- Integration with SEO Toolkit (PROD-001)

## Phase 5: Platform Maturity

**Appetite:** 8 weeks
**Deliverable:** Production-grade platform with extensibility

- API marketplace / extensibility
- Custom domains, white-labelling
- Usage-based billing
- Advanced AI features
- Plugin/extension system
- Developer documentation portal

## Backlog (Future)

| Item | Category | Priority |
|------|----------|----------|
| Third vertical product | Product | Low |
| Mobile app (React Native) | Product | Low |
| Partner/affiliate system | Business | Low |
| Enterprise SSO (SAML) | Platform | Low |
| Multi-region deployment | Infrastructure | Low |
