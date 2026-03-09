# Todo — SaaS Platform (PROD-004)

> Last updated: 2026-03-09

## Phase 0: Foundation (Current — Weeks 1-2)

- [x] T-001: Create GitHub repo and monorepo structure
- [x] T-002: Set up Turborepo + pnpm workspaces
- [x] T-003: Create all package stubs with proper exports
- [x] T-004: Set up Prisma schema (base models: User, Organisation, Subscription)
- [x] T-005: Create project documentation (CLAUDE.md, README, all docs/)
- [x] T-006: Register as PROD-004 in agency project registry
- [ ] T-007: Configure shared TypeScript config (`packages/config/typescript/`)
- [ ] T-008: Configure shared ESLint config (`packages/config/eslint/`)
- [ ] T-009: Configure shared Tailwind config (`packages/config/tailwind/`)
- [ ] T-010: Set up `packages/ui` with initial shadcn/ui components
- [ ] T-011: Set up Docker Compose for local dev (PostgreSQL + Redis)
- [ ] T-012: Configure GitHub Actions CI (lint, type-check, test)
- [ ] T-013: Set up `apps/sell-funnel` as initial Next.js app
- [ ] T-014: Verify `pnpm dev` starts all apps and packages
- [ ] T-015: Write ADR-001: Modular monolith over microservices
- [ ] T-016: Write ADR-002: Turborepo + pnpm over Nx
- [ ] T-017: Write ADR-003: PostgreSQL + RLS over separate databases
- [ ] T-018: Create architecture D2 diagram

## Phase 1: Platform Core MVP (Weeks 3-8)

- [ ] T-101: Integrate Clerk for multi-tenant auth
- [ ] T-102: Implement tenant context middleware
- [ ] T-103: Set up PostgreSQL RLS policies
- [ ] T-104: Integrate Stripe for subscriptions
- [ ] T-105: Implement RBAC (Owner, Admin, Member)
- [ ] T-106: Build API framework with rate limiting
- [ ] T-107: Build basic admin dashboard
- [ ] T-108: Implement config-based feature flags

## Phase 2: Sell Funnel MVP (Weeks 9-16)

- [ ] T-201: Sell Funnel data models (funnels, pages, forms, conversions)
- [ ] T-202: Funnel builder UI
- [ ] T-203: Landing page templates
- [ ] T-204: Conversion tracking & analytics
- [ ] T-205: A/B testing framework
- [ ] T-206: AI-powered copy generation
- [ ] T-207: Onboarding flow
- [ ] T-208: Marketing site / landing page

## Phase 3: Platform Hardening (Weeks 17-20)

- [ ] T-301: AI gateway with multi-provider routing
- [ ] T-302: Notification engine (email, in-app)
- [ ] T-303: Upgrade feature flags to proper service
- [ ] T-304: Theming engine (per-tenant branding)
- [ ] T-305: Monitoring & observability setup
- [ ] T-306: Security audit and hardening

## Future Phases

See `docs/roadmap.md` for Phase 4 (Book Rocket) and Phase 5 (Platform Maturity).
