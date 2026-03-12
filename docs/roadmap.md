# Product Roadmap — SaaS Platform (PROD-004)

> **Format:** Now / Next / Later (outcome-based, not date-driven)
> **Updated:** At every sprint planning + whenever scope changes
> **Fed by:** RE process outputs, competitor recommendations, discovered scope from PRs
> **Last updated:** 2026-03-12

---

## Now (Current Sprint — Agent-Ready)

Items here have passed RE Gate 3 and can be picked up by an AI agent.

| #   | Outcome                                                              | Epic | OKR | Sprint | Status | Spec |
| --- | -------------------------------------------------------------------- | ---- | --- | ------ | ------ | ---- |
|     | _(No items yet — Phase 1 features to be specced through RE process)_ |      |     |        |        |      |

---

## Next (Requirements Done — Ready for Next Sprint)

Items here have completed Requirements Engineering (Gates 1-2 passed).

| #   | Outcome                                         | Epic           | OKR    | RE Gate     | Depends On        |
| --- | ----------------------------------------------- | -------------- | ------ | ----------- | ----------------- |
| 1   | Enable users to sign up and log in via Clerk    | Authentication | Q2-KR1 | Not started | Foundation (done) |
| 2   | Enable per-tenant data isolation via RLS        | Multi-tenancy  | Q2-KR1 | Not started | Auth              |
| 3   | Enable API access via tRPC + Hono skeleton      | API Layer      | Q2-KR1 | Not started | Auth + DB         |
| 4   | Enable subscription billing via Stripe          | Billing        | Q2-KR2 | Not started | Auth + Tenancy    |
| 5   | Enable role-based access (Owner, Admin, Member) | RBAC           | Q2-KR1 | Not started | Auth              |

---

## Later (Strategic Direction — Not Yet Specced)

| #   | Outcome                                               | Epic               | OKR    | Source       | Priority |
| --- | ----------------------------------------------------- | ------------------ | ------ | ------------ | -------- |
| 1   | Enable Sell Funnel product for first paying customers | Sell Funnel MVP    | Q2-KR3 | Strategy     | H        |
| 2   | Enable real-time AI features via gateway              | AI Integration     | Q3     | Architecture | H        |
| 3   | Enable AISOGEN vertical on the platform               | AISOGEN Launch     | Q3     | Strategy     | H        |
| 4   | Enable feature flagging per vertical/tenant           | Feature Flags      | Q2-KR1 | Architecture | M        |
| 5   | Enable email/in-app notifications via Resend          | Notifications      | Q2-KR2 | Architecture | M        |
| 6   | Enable error tracking via Sentry                      | Observability      | Q2-KR1 | DevOps       | M        |
| 7   | Enable product analytics via PostHog                  | Analytics          | Q2-KR3 | Strategy     | M        |
| 8   | Enable Book Rocket vertical on the platform           | Book Rocket Launch | Q3     | Strategy     | M        |
| 9   | Enable tenant theming and white-labelling             | Customisation      | Q3     | Strategy     | L        |
| 10  | Enable developer documentation portal                 | Platform Maturity  | Q4     | Strategy     | L        |

---

## Discovered Scope

Items found by AI agents during execution that were out of scope.

| #   | Discovery                                               | Found In PR | Related Epic   | Priority | Promoted To |
| --- | ------------------------------------------------------- | ----------- | -------------- | -------- | ----------- |
| 1   | CI anti-pattern script needed grep error handling fixes | #14         | Infrastructure | M        | Resolved    |
| 2   | Generator template test picked up by root vitest config | #14         | Infrastructure | L        | Resolved    |
| 3   | Branch protection check names didn't match CI job names | #14         | Infrastructure | M        | Resolved    |

---

## Phase Overview (Reference)

| Phase | Focus                                          | Key Validation                          | Status       |
| ----- | ---------------------------------------------- | --------------------------------------- | ------------ |
| 0     | Foundation — monorepo, configs, database, UI   | `pnpm dev` starts everything            | **Complete** |
| 1     | Platform Core — auth, tenancy, billing, RBAC   | User can sign up, create org, subscribe | **Next**     |
| 2     | Sell Funnel MVP — funnels, pages, conversions  | First paying customers                  | Later        |
| 3     | Platform Hardening — AI gateway, notifications | Ready for second vertical               | Later        |
| 4     | AISOGEN MVP — SEO engine, content pipeline     | Platform reusability proven             | Later        |
| 5     | Book Rocket + Platform Maturity                | Third vertical + production-grade       | Later        |

---

## Feature Hierarchy

```
OKR: Q2 — Launch SaaS Platform MVP
  └── Theme: Foundation-first platform build
        └── Initiative: Core platform capabilities
              ├── Epic: Authentication (Clerk)
              ├── Epic: Multi-tenancy (RLS)
              ├── Epic: API Layer (tRPC + Hono)
              ├── Epic: Billing (Stripe)
              └── Epic: RBAC
        └── Initiative: Vertical deployment
              ├── Epic: Sell Funnel MVP
              ├── Epic: AISOGEN vertical
              └── Epic: Book Rocket vertical
```

---

## Change Log

| Date       | What Changed                                                                             |
| ---------- | ---------------------------------------------------------------------------------------- |
| 2026-03-09 | Initial roadmap with Shape Up phases                                                     |
| 2026-03-12 | Migrated to Now/Next/Later format. Added discovered scope, feature hierarchy, OKR links. |
