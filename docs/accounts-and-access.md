# Accounts and Access — SaaS Platform (PROD-004)

> Last updated: 2026-03-09

## Accounts

| Service | Purpose | Account | Status | Credential Location |
|---------|---------|---------|--------|-------------------|
| GitHub | Source code | MrSmithNL/saas-platform | Active | Bitwarden |
| Clerk | Authentication | TBD | Not created | Bitwarden |
| Stripe | Billing | TBD | Not created | Bitwarden |
| Vercel | Hosting | TBD | Not created | Bitwarden |
| Resend | Email | TBD | Not created | Bitwarden |
| Upstash | Redis cache | TBD | Not created | Bitwarden |
| Sentry | Error tracking | TBD | Not created | Bitwarden |
| PostHog | Product analytics | TBD | Not created | Bitwarden |

## Environment Variables

See `.env.example` in the repo root for all required variables.

## Access Control

| Role | Who | Access Level |
|------|-----|-------------|
| Owner | Malcolm Smith | Full access to all services |
| CI/CD | GitHub Actions | Deploy keys, API keys (secrets) |

## Notes

- All credentials stored in Bitwarden (`msmithnl@gmail.com`)
- External service accounts will be created during Phase 1 setup
- Never store credentials in git — use `.env.local` for local dev
