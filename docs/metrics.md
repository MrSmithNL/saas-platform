# Metrics — SaaS Platform (PROD-004)

> Last updated: 2026-03-09
> Tracked monthly. Financial metrics tied to `docs/business-case.md`.

---

## Key Performance Indicators

### Product Metrics

| Metric | Definition | Target (Q2 2026) | Target (Q3 2026) | How We Track |
|--------|-----------|-----------------|-----------------|-------------|
| Phase completion | % of Phase 0 + Phase 1 tasks done | Phase 0: 100%, Phase 1: 100% | Phase 2: 50% | docs/todo.md |
| Test coverage (core) | % code covered by unit tests | > 60% | > 70% | CI reports |
| Build time | Time from push to deploy | < 5 min | < 5 min | GitHub Actions |
| Package count | Number of functional packages | 9 stubs | 5+ functional | Package.json review |

### Development Health (DORA Metrics)

| Metric | Definition | Target | How We Track |
|--------|-----------|--------|-------------|
| Deployment frequency | How often code reaches production | Multiple/week | GitHub releases |
| Lead time for changes | Commit to production | < 1 day | Git + Vercel |
| Change failure rate | % of deploys causing issues | < 5% | Sentry incidents |
| Time to restore | MTTR when something breaks | < 1 hour | Sentry + logs |

### Business Metrics (Post-Launch)

| Metric | Definition | Target (Month 3) | Target (Month 12) | How We Track |
|--------|-----------|-----------------|-------------------|-------------|
| MRR | Monthly recurring revenue | €450 | €12,000 | Stripe |
| Paying users | Active subscribers | 10 | 200 | Clerk + Stripe |
| Churn rate | Monthly cancellation rate | < 8% | < 5% | Stripe |
| ARPU | Average revenue per user | €45 | €60 | Stripe |
| CAC | Cost to acquire customer | ~€0 (organic) | < €30 | Marketing spend ÷ new users |
| LTV:CAC | Lifetime value ÷ acquisition cost | >3:1 | >5:1 | Calculated |
| NPS | Net promoter score | N/A | >40 | In-app survey |

### Platform Health Metrics

| Metric | What It Tells You | Target | How We Track |
|--------|-------------------|--------|-------------|
| Time to ship new vertical feature | Platform effectiveness | Decreasing over time | Git history |
| Time to onboard new vertical | Platform reusability | < 1 week for skeleton | Measured at Book Rocket start |
| Platform code vs product code | Abstraction balance | Platform < 40% of total | `cloc` by package |
| Platform vs product work time | Focus balance | 30% platform, 70% product | Shape Up cycle allocation |

---

## Monitoring Setup

| Tool | What It Monitors | Status |
|------|-----------------|--------|
| Sentry | Runtime errors, performance | Not configured (Phase 1) |
| PostHog | Product analytics, feature usage | Not configured (Phase 1) |
| GitHub Actions | CI/CD pipeline health | Configured |
| Vercel Analytics | Page load, Web Vitals | Not configured (Phase 2) |
| Stripe Dashboard | Revenue, subscriptions, churn | Not configured (Phase 1) |
| Uptime monitoring | Site availability | Not configured (Phase 2) |

---

## Review Cadence

- **Weekly:** Check CI pipeline health, review open PRs
- **Monthly:** Full metrics review, update this file, update business-case projections if needed
- **Quarterly:** Review against OKRs, adjust targets, update SWOT
