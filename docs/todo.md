# Todo — SaaS Platform (PROD-004)

> Last updated: 2026-03-10

## Phase 0: Foundation — COMPLETE

- [x] T-001: Create GitHub repo and monorepo structure
- [x] T-002: Set up Turborepo + pnpm workspaces
- [x] T-003: Create all package stubs with proper exports
- [x] T-004: Set up Prisma schema (base models: User, Organisation, Subscription)
- [x] T-005: Create project documentation (CLAUDE.md, README, all docs/)
- [x] T-006: Register as PROD-004 in agency project registry
- [x] T-007: Configure shared TypeScript config (`packages/config/typescript/`)
- [x] T-008: Configure shared ESLint config (`packages/config/eslint/`)
- [x] T-009: Configure shared Tailwind config (`packages/config/tailwind/`)
- [x] T-010: Set up `packages/ui` with initial shadcn/ui components (Button, cn utility)
- [x] T-011: Set up Docker Compose for local dev (PostgreSQL + Redis)
- [x] T-012: Configure GitHub Actions CI (lint, type-check, test, SAST, code review, mutation testing)
- [x] T-013: Set up `apps/sell-funnel` as initial Next.js app
- [x] T-014: Verify `pnpm dev` starts all apps and packages
- [x] T-015: Write ADR-001: Modular monolith over microservices (in decisions-log.md)
- [x] T-016: Write ADR-002: Turborepo + pnpm over Nx (in decisions-log.md)
- [x] T-017: Write ADR-003: PostgreSQL + RLS over separate databases (in decisions-log.md)
- [x] T-018: Create architecture D2 diagram (in docs/architecture.md)
- [x] T-019: Scaffold admin and marketing apps with tsconfig and source files
- [x] T-020: Harden pre-commit (lint-staged) and add pre-push (build + test) hooks
- [x] T-021: Add agency standard ESLint rules (complexity ≤10, nesting ≤3, params ≤4, function length ≤30)
- [x] T-022: Install knip for dead code detection (AI anti-pattern #9)

## Phase 1: Platform Core MVP (Next)

- [ ] T-101: Integrate Clerk for multi-tenant auth
- [ ] T-102: Implement tenant context middleware
- [ ] T-103: Set up PostgreSQL RLS policies
- [ ] T-104: Integrate Stripe for subscriptions
- [ ] T-105: Implement RBAC (Owner, Admin, Member)
- [ ] T-106: Build API framework with rate limiting, error handling, structured logging
- [ ] T-107: Build basic admin dashboard
- [ ] T-108: Implement config-based feature flags
- [ ] T-109: Write multi-tenant isolation test suite (cross-tenant CRUD)
- [ ] T-110: Implement error type hierarchy (AppError, ValidationError, NotFoundError, etc.)
- [ ] T-111: Set up structured JSON logging (Pino) with request ID tracing
- [ ] T-112: Implement tenant provisioning flow (Clerk webhook → DB seed)
- [ ] T-113: Add health check endpoint (`GET /api/v1/health`)

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
