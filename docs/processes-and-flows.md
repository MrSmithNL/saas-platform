# Processes and Flows — SaaS Platform (PROD-004)

> Last updated: 2026-03-09

## Development Workflow

### Local Development
1. `docker compose up -d` — start PostgreSQL + Redis
2. `cp .env.example .env` — set up environment (first time only)
3. `pnpm install` — install dependencies
4. `pnpm db:generate` — generate Prisma client
5. `pnpm db:push` — push schema to local database
6. `pnpm dev` — start all apps

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
Developer → Push to main → GitHub Actions CI
                              ├── Lint
                              ├── Type check
                              ├── Unit tests
                              └── Build
                                   ↓
                              Vercel auto-deploy
                              (only affected apps)
```

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
