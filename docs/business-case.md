# Business Case — SaaS Platform (PROD-004)

> Last updated: 2026-03-09

---

## Executive Summary

The SaaS Platform is a multi-tenant AI platform that powers vertical products. The first vertical, **Sell Funnel**, is an AI-powered sales funnel builder targeting small businesses and solopreneurs. The platform architecture means each subsequent vertical costs ~30% less to build than a standalone product.

**Investment:** ~9 months development time (solo founder with AI tools)
**Break-even target:** Month 6 after Sell Funnel launch (Month 15 from project start)
**Revenue model:** Monthly SaaS subscriptions (€29-199/mo)

---

## Revenue Model

| Tier        | Price (Monthly) | Price (Annual)        | Features                                                                              |
| ----------- | --------------- | --------------------- | ------------------------------------------------------------------------------------- |
| **Starter** | €29/mo          | €290/yr (save €58)    | 3 funnels, 1,000 visitors/mo, basic AI copy, 5 templates                              |
| **Growth**  | €79/mo          | €790/yr (save €158)   | 15 funnels, 10,000 visitors/mo, full AI suite, 25 templates, A/B testing              |
| **Scale**   | €199/mo         | €1,990/yr (save €398) | Unlimited funnels, 100,000 visitors/mo, custom domains, white-label, priority support |

**AI Usage Add-on:** €19/mo for heavy AI users (>100 funnel generations/mo)

**Pricing rationale:**

- ClickFunnels: $127-208/mo (expensive, feature-bloated)
- Leadpages: $37-74/mo (limited, no AI)
- Unbounce: $74-187/mo (good but dated)
- Our positioning: competitive with Leadpages, better AI, simpler than ClickFunnels

---

## Cost Structure

### Fixed Costs (Monthly)

| Cost                       | Pre-Revenue | At 100 Users        | At 1,000 Users | Notes                |
| -------------------------- | ----------- | ------------------- | -------------- | -------------------- |
| Vercel (hosting)           | €0 (free)   | €20                 | €100           | Pro plan at scale    |
| Clerk (auth)               | €0 (free)   | €0 (free 10K MAU)   | €25            | Beyond free tier     |
| PostgreSQL (Supabase/Neon) | €0 (free)   | €25                 | €50            | Managed DB           |
| Redis (Upstash)            | €0 (free)   | €0 (free tier)      | €10            | Beyond free tier     |
| Sentry (errors)            | €0 (free)   | €0 (free 5K events) | €26            | Team plan            |
| PostHog (analytics)        | €0 (free)   | €0 (free 1M events) | €0             | Free tier sufficient |
| Domain                     | €1          | €1                  | €1             | Annual amortised     |
| Resend (email)             | €0 (free)   | €0 (free 3K/mo)     | €20            | Beyond free tier     |
| **Total Fixed**            | **€1/mo**   | **€46/mo**          | **€232/mo**    |

### Variable Costs (Per User)

| Cost                | Per User/Month | Notes                 |
| ------------------- | -------------- | --------------------- |
| AI API usage        | €0.50-2.00     | Depends on usage tier |
| Stripe fees         | 2.9% + €0.30   | Per transaction       |
| Email transactional | ~€0.001/email  | Resend pricing        |

### One-Time Costs

| Cost                | Amount            | Notes                      |
| ------------------- | ----------------- | -------------------------- |
| Domain registration | €12/yr            | .com domain                |
| Development time    | €0 (sweat equity) | Solo founder + Claude Code |

---

## Projections

### Sell Funnel Vertical

| Metric               | Month 3 (post-launch) | Month 6 | Year 1  | Year 2  |
| -------------------- | --------------------- | ------- | ------- | ------- |
| **Users (total)**    | 25                    | 100     | 500     | 2,000   |
| **Paying users**     | 10                    | 40      | 200     | 800     |
| **Avg revenue/user** | €45                   | €55     | €60     | €65     |
| **MRR**              | €450                  | €2,200  | €12,000 | €52,000 |
| **Fixed costs**      | €25                   | €46     | €100    | €232    |
| **Variable costs**   | €30                   | €120    | €600    | €2,400  |
| **Total costs**      | €55                   | €166    | €700    | €2,632  |
| **Net profit/loss**  | €395                  | €2,034  | €11,300 | €49,368 |

### Platform Total (2 Verticals — Sell Funnel + Book Rocket)

| Metric              | Year 1  | Year 2  |
| ------------------- | ------- | ------- |
| **Combined MRR**    | €15,000 | €75,000 |
| **Combined costs**  | €900    | €3,500  |
| **Combined profit** | €14,100 | €71,500 |

**Note:** Book Rocket development costs ~30% less because platform core is shared.

---

## Break-Even Analysis

**Pre-launch investment:** ~9 months development (sweat equity, negligible hosting costs)
**Post-launch break-even:** Month 1 — costs are so low (~€25/mo) that even 1 paying customer covers them
**Meaningful revenue:** Month 6 post-launch — targeting €2,000+ MRR
**Full-time income equivalent:** Month 12 post-launch — targeting €10,000+ MRR

The SaaS model has excellent unit economics:

- **Gross margin:** ~95% at Starter tier, ~92% at Growth tier (AI costs are the main variable)
- **LTV:CAC target:** >3:1 (organic acquisition via content marketing keeps CAC near €0)
- **Payback period:** 0 months (organic acquisition)

---

## Risks to Revenue

| Risk                                         | Impact   | Likelihood | Mitigation                                                                           |
| -------------------------------------------- | -------- | ---------- | ------------------------------------------------------------------------------------ |
| No product-market fit                        | Critical | Medium     | Launch MVP early, get feedback, iterate fast                                         |
| AI costs spike                               | High     | Low        | LiteLLM gateway allows model switching, usage caps per tier                          |
| Competitor launches similar AI funnel tool   | High     | High       | Speed to market, niche positioning, better UX                                        |
| Development takes longer than 9 months       | Medium   | Medium     | Shape Up methodology, fixed cycles, cut scope not time                               |
| Platform over-engineering delays Sell Funnel | High     | Medium     | "Extract from two, never one" — keep platform thin until Book Rocket validates reuse |

---

## Decision: Go/No-Go

**Recommendation: GO**

- Startup costs are negligible (< €50/mo)
- Market is large and growing (funnel builder market $1B+)
- AI differentiation window exists but narrowing
- Platform architecture de-risks future products
- Solo founder + Claude Code can ship competitive product
- Break-even is near-instant post-launch
