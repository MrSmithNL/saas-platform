# Processes and Flows — SaaS Platform (PROD-004)

> Last updated: 2026-03-11

## Development Workflow

### Local Development

1. `docker compose up -d` — start PostgreSQL + Redis
2. `cp .env.example .env` — set up environment (first time only)
3. `pnpm install` — install dependencies
4. `pnpm db:generate` — generate Prisma client
5. `pnpm db:push` — push schema to local database
6. `pnpm dev` — start all apps

### Local Staging

1. `pnpm staging:up` — start staging PostgreSQL (port 5433) + Redis (port 6380)
2. `pnpm staging:dev` — start all apps against staging database
3. Visit:
   - Sell Funnel: http://localhost:3100
   - Admin: http://localhost:3101
   - Marketing: http://localhost:3102
4. `pnpm staging:down` — stop staging infrastructure
5. `pnpm staging:reset` — destroy staging data and start fresh

### Cloud Staging (Vercel + Neon + Upstash)

1. Run `./scripts/setup-cloud-staging.sh` — guided provisioning
2. Push to `staging` branch — auto-deploys via GitHub Actions
3. Staging URL: `staging.sellfunnel.app` (once configured)

### Adding a New Feature

1. Create feature branch from `main`
2. Implement in the correct layer (see CLAUDE.md architecture)
3. Write tests (unit with Vitest, E2E with Playwright)
4. Run `pnpm lint && pnpm test`
5. Create PR → GitHub Actions CI validates
6. Merge to `main` → auto-deploy via Vercel

### Adding a New Vertical

1. Create `apps/vertical-name/` with Next.js app
2. Add workspace dependency on platform packages
3. Create domain-specific Prisma schema in `packages/database/prisma/schema/`
4. Build vertical-specific features in `apps/vertical-name/src/features/`
5. Reuse platform UI from `@saas-platform/ui`

## Deployment Flow

```
                                        ┌─ Staging ──────────────────┐
Developer → Push to staging branch ───→ │ GitHub Actions CI          │
                                        │ ├── Lint + Type check      │
                                        │ ├── Unit tests             │
                                        │ ├── Build                  │
                                        │ ├── Deploy to Vercel       │
                                        │ ├── DB migration           │
                                        │ └── Smoke test             │
                                        └────────────────────────────┘
                                                  ↓ (validated)
                                        ┌─ Production ──────────────┐
Push to main ─────────────────────────→ │ Same CI pipeline           │
                                        │ └── Vercel auto-deploy     │
                                        └────────────────────────────┘
```

### Environments

| Environment   | Database              | Redis                 | URL                    | Trigger            |
| ------------- | --------------------- | --------------------- | ---------------------- | ------------------ |
| Local dev     | Docker localhost:5432 | Docker localhost:6379 | localhost:3000-3002    | `pnpm dev`         |
| Local staging | Docker localhost:5433 | Docker localhost:6380 | localhost:3100-3102    | `pnpm staging:dev` |
| Cloud staging | Neon (staging branch) | Upstash (staging)     | staging.sellfunnel.app | Push to `staging`  |
| Production    | Neon (main)           | Upstash (prod)        | sellfunnel.app         | Push to `main`     |

## Shape Up Cycle

```
Shaping (1-2 weeks)     Cycle (6 weeks)        Cool-down (1-2 weeks)
├── Define appetite      ├── Build               ├── Bug fixes
├── Shape solution       ├── Ship incrementally   ├── Tech debt
├── Set boundaries       └── Demo at end          ├── Exploration
└── Betting table                                 └── Plan next cycle
```

## Database Migration Flow

1. Modify Prisma schema in `packages/database/prisma/schema/`
2. `pnpm db:migrate` — create migration file
3. Review generated SQL
4. Commit migration file
5. CI applies migration on deploy
