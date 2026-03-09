# SaaS Platform (PROD-004)

Multi-tenant AI SaaS platform — a reusable foundation for building vertical products.

## What Is This?

A **modular monolith** platform that provides shared infrastructure (auth, billing, multi-tenancy, AI) so vertical products can focus on domain-specific features.

**First vertical:** [Sell Funnel](apps/sell-funnel/) — AI-powered sales funnel builder for any industry.

## Architecture

```
apps/
  sell-funnel/     → First vertical product (Next.js)
  admin/           → Platform admin dashboard (Next.js)
  marketing/       → Marketing site / landing pages (Next.js)

packages/
  core/            → Auth, tenancy, billing, RBAC, API framework
  database/        → Prisma schema, migrations, tenant-aware client
  ui/              → Shared design system (shadcn/ui + Tailwind)
  ai-gateway/      → LLM routing, multi-provider, usage tracking
  notifications/   → Email, push, in-app notifications
  feature-flags/   → Per-tenant feature control
  config/          → Shared TypeScript, ESLint, Tailwind configs
  utils/           → Shared utilities
  api-client/      → Generated type-safe API client
```

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Database | PostgreSQL + Prisma + RLS |
| Auth | Clerk |
| Billing | Stripe |
| AI | Vercel AI SDK + LiteLLM |
| UI | shadcn/ui + Tailwind CSS |
| Email | Resend |
| Cache | Redis (Upstash) |
| Monorepo | Turborepo + pnpm |
| Testing | Vitest + Playwright |
| Monitoring | Sentry + PostHog |

## Getting Started

```bash
# Prerequisites: Node.js 20+, pnpm 9+, Docker

# Clone and install
git clone https://github.com/MrSmithNL/saas-platform.git
cd saas-platform
pnpm install

# Start local database
docker compose up -d

# Set up environment
cp .env.example .env
# Edit .env with your credentials

# Generate Prisma client
pnpm db:generate

# Start development
pnpm dev
```

## Research Foundation

This project is built on extensive research:

- **R-001:** [Multi-Tenant AI SaaS Architecture](../smith-ai-agency/research/multi-tenant-ai-saas-architecture.md) — 96 sources, technical architecture decisions
- **R-002:** [Multi-Tenant SaaS as Reusable Platform](../smith-ai-agency/research/multi-tenant-saas-platform-capability-research.md) — 60+ sources, project structure and methodology

Key research findings driving our decisions:
- Modular monolith over microservices (Shopify pattern)
- Shape Up methodology for solo founder scaling
- PostgreSQL + RLS for multi-tenancy (not separate databases)
- 4-layer architecture: Foundation → Core → Services → Verticals
- "Extract patterns from two examples, never from one"

## License

Proprietary — Smith AI Agency
