# Accounts and Access — SaaS Platform (PROD-004)

> Last updated: 2026-03-11

## Accounts

| Service | Purpose            | Account                 | Status      | Credential Location       |
| ------- | ------------------ | ----------------------- | ----------- | ------------------------- |
| GitHub  | Source code        | MrSmithNL/saas-platform | **Active**  | Bitwarden                 |
| Vercel  | Hosting            | msmithnl-9675           | **Active**  | Bitwarden + GitHub Secret |
| Neon    | PostgreSQL (cloud) | GitHub login            | **Active**  | Bitwarden + GitHub Secret |
| Upstash | Redis cache        | GitHub login            | **Active**  | Bitwarden + GitHub Secret |
| Clerk   | Authentication     | TBD                     | Not created | Bitwarden                 |
| Stripe  | Billing            | TBD                     | Not created | Bitwarden                 |
| Resend  | Email              | TBD                     | Not created | Bitwarden                 |
| Sentry  | Error tracking     | TBD                     | Not created | Bitwarden                 |
| PostHog | Product analytics  | TBD                     | Not created | Bitwarden                 |

## Environment Variables

See `.env.example` in the repo root for all required variables.

## Access Control

| Role  | Who            | Access Level                    |
| ----- | -------------- | ------------------------------- |
| Owner | Malcolm Smith  | Full access to all services     |
| CI/CD | GitHub Actions | Deploy keys, API keys (secrets) |

## Environments

| Environment   | Status          | How to access                                   |
| ------------- | --------------- | ----------------------------------------------- |
| Local dev     | **Active**      | `docker compose up -d && pnpm dev`              |
| Local staging | **Active**      | `pnpm staging:up && pnpm staging:dev`           |
| Cloud staging | **Provisioned** | Push to `staging` branch → auto-deploy          |
| Production    | Not provisioned | Auto-deploy on push to `main` (once domain set) |

## Notes

- All credentials stored in Bitwarden (`msmithnl@gmail.com`)
- Neon, Upstash, Vercel credentials also stored as GitHub Actions secrets (8 secrets total)
- Remaining services (Clerk, Stripe, Resend, Sentry, PostHog) will be created during Phase 1
- Never store credentials in git — use `.env.local` for local dev
- Local staging uses Homebrew PostgreSQL + Redis with separate `saas_platform_staging` database
