# Epic Status — Sell Funnel MVP

---

## Epic Identity

| Field                 | Value                       |
| --------------------- | --------------------------- |
| **Epic ID**           | E-001                       |
| **Epic name**         | Sell Funnel MVP             |
| **Product**           | PROD-004 (SaaS Platform)    |
| **Phase**             | Phase 2 (from roadmap)      |
| **Shape Up appetite** | 8 weeks (two 4-week cycles) |
| **Owner**             | Claude Code (autonomous)    |
| **Created**           | 2026-03-09                  |

---

## Current Phase

| Phase                  | Status          | Date       |
| ---------------------- | --------------- | ---------- |
| Research               | [x] Complete    | 2026-03-09 |
| Design                 | [ ] In progress | 2026-03-09 |
| **Gate: Scope**        | [ ] Not reached |            |
| Feature specs          | [ ] Not started |            |
| **Gate: Completeness** | [ ] Not reached |            |
| Build                  | [ ] Not started |            |
| **Gate: Ship**         | [ ] Not reached |            |
| Validate               | [ ] Not started |            |

---

## Epic Goal

**One sentence:** Deliver an AI-powered sales funnel builder that lets solopreneurs and course creators go from product description to live, tracked, optimisable funnel in under 10 minutes.

**Success criteria (epic-level):**

- [ ] User can create a funnel from a text description using AI (end-to-end)
- [ ] Funnel pages are live and publicly accessible with custom slugs
- [ ] Conversion events are tracked and displayed in a dashboard
- [ ] A/B testing is functional for at least page variants
- [ ] AI copy generation produces usable sales copy from minimal input
- [ ] 3 pricing tiers are enforced (funnel limits, visitor limits, feature gates)

---

## Problem Statement

**Goal:** Build the first revenue-generating vertical on the SaaS Platform — an AI-powered sales funnel builder.

**Target Users:** Solopreneurs, coaches, course creators, small e-commerce owners (persona: "Solo Sarah" — 28-45, basic tech skills, budget €30-80/mo).

**Core Pain:** These users need sales funnels to sell their products/courses but lack the technical skills and budget for existing tools (ClickFunnels at €127+/mo, complex UX). They want something that "just works" with AI doing the heavy lifting.

**Success Metrics:**

- Time to first live funnel < 10 minutes
- AI-generated copy acceptance rate > 60% (users keep AI output without major edits)
- Conversion tracking accuracy > 99%
- Churn rate < 5% monthly

**Scope Boundaries:**

- **In scope:** Funnel builder, landing pages, conversion tracking, A/B testing, AI copy generation
- **Out of scope:** Email marketing (use Resend integration later), payment processing within funnels (link to external checkout), CRM features, advanced analytics (Phase 5)
- **Platform dependency:** Requires Phase 1 (Platform Core) complete — auth, tenancy, billing, RBAC

---

## Feature Breakdown

| ID    | Feature             | Spec Folder                            | Priority | Status      | Depends On              | Est.   |
| ----- | ------------------- | -------------------------------------- | -------- | ----------- | ----------------------- | ------ |
| F-001 | Funnel Builder      | `specs/E-001/001-funnel-builder/`      | Must     | Not started | Platform Core (Phase 1) | 8 days |
| F-002 | Landing Pages       | `specs/E-001/002-landing-pages/`       | Must     | Not started | F-001                   | 6 days |
| F-003 | Conversion Tracking | `specs/E-001/003-conversion-tracking/` | Must     | Not started | F-002                   | 5 days |
| F-004 | A/B Testing         | `specs/E-001/004-ab-testing/`          | Should   | Not started | F-002, F-003            | 5 days |
| F-005 | AI Copy Generation  | `specs/E-001/005-ai-copy/`             | Must     | Not started | F-001                   | 6 days |

**Must-have features (MVP):** F-001 (Funnel Builder), F-002 (Landing Pages), F-003 (Conversion Tracking), F-005 (AI Copy)
**Should-have features:** F-004 (A/B Testing) — valuable but can launch without it
**Could-have features:** None at epic level (descoped to future cycles)

---

## Dependencies

### External Dependencies (blockers we don't control)

| Dependency               | Status      | Impact if delayed                                 |
| ------------------------ | ----------- | ------------------------------------------------- |
| Clerk auth (Phase 1)     | Not started | Blocks all features — no user accounts            |
| Stripe billing (Phase 1) | Not started | Blocks tier enforcement — can soft-launch without |
| Vercel deployment        | Not started | Blocks live funnel pages — can test locally       |

### Cross-Feature Dependencies

```
F-001 (Funnel Builder) ─→ F-002 (Landing Pages)
  └──→ F-005 (AI Copy)     └──→ F-003 (Conversion Tracking)
                                   └──→ F-004 (A/B Testing)
```

### Cross-Epic Dependencies

| This epic needs              | From epic                   | Status                                                     |
| ---------------------------- | --------------------------- | ---------------------------------------------------------- |
| Auth, tenancy, billing, RBAC | Platform Core (Phase 1)     | Not started                                                |
| AI Gateway package           | Platform Services (Phase 3) | Not started — but F-005 can use direct API calls initially |

---

## Descoping Rules

> When the epic is slipping, use these rules to decide what to cut.

**Time trigger:** If 60% of appetite consumed (week 5 of 8) with < 40% features complete → evaluate scope.

**Descope order:** A/B Testing (F-004) → AI Copy simplification (F-005 reduce to basic prompts) → Landing page template count reduction → Never cut Funnel Builder or Conversion Tracking.

**Descoping decision log:**
| Date | What was cut | Why | Impact |
|------|-------------|-----|--------|
| | | | |

---

## Session Log

| Date       | What Happened                                                                      | Next Step                                            |
| ---------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 2026-03-09 | Created epic structure, wrote problem statement, defined features and dependencies | Run Phase 2 competitor research, then present Gate 1 |
