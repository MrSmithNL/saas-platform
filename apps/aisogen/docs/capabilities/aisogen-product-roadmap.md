# AISOGEN — Product Roadmap

> **Type:** Vertical (in PROD-004 SaaS Platform → `apps/aisogen/`)
> **Product name:** AISOGEN
> **Domain:** aisogen.ai
> **Hierarchy:** Product (PROD-004) → Vertical (AISOGEN) → Capability (SEO & AISO) → Engine (`seo-toolkit/` repo)
> **Status:** Research → **Strategy** (current) → Design → Build → Live
> **Revenue model:** Subscription + usage-based credits
> **Last updated:** 2026-03-10
> **Parent docs:** [aisogen-capability.md](aisogen-capability.md), [aisogen-functional-design.md](aisogen-functional-design.md)

---

## Process Compliance

This vertical follows the agency's mandatory launch sequence:

| Step                                   | Status      | Evidence                                                       |
| -------------------------------------- | ----------- | -------------------------------------------------------------- |
| 1. Research first (Rule #7)            | ✅ Complete | 60+ sources, 21 competitors profiled, 230 features inventoried |
| 2. Apply vertical blueprint (Rule #13) | ⬜ Pending  | Scaffold `apps/aisogen/` in PROD-004 monorepo                  |
| 3. Register in project registry        | ✅ Complete | Registered as vertical in project registry                     |
| 4. Create architecture diagram (D2)    | ⬜ Pending  | Two-layer architecture (Platform + Engine)                     |
| 5. Strategic Operating System          | ⬜ Pending  | BMC, OKRs, BSC, SWOT in vertical's `docs/strategic-os.md`      |
| 6. Spec-driven development (Rule #14)  | ⬜ Pending  | Create `specs/001-mvp/` with 3 approval gates                  |
| 7. First commit from blueprint         | ⬜ Pending  | "Initial vertical setup from vertical blueprint"               |

> **NOTE:** Steps 2-7 happen when we scaffold the vertical in PROD-004. This roadmap lives in the agency repo because it's the strategic planning phase. The vertical code lives in `saas-platform/apps/aisogen/`.

---

## Shared Infrastructure — What We Reuse

The AISOGEN builds on the agency's central SaaS infrastructure (PROD-004):

| Layer                    | What                                 | Source                 |
| ------------------------ | ------------------------------------ | ---------------------- |
| **Auth + multi-tenancy** | Supabase + RLS, tenant management    | PROD-004 SaaS Platform |
| **Billing**              | Stripe subscriptions + usage credits | PROD-004 SaaS Platform |
| **White-label**          | Custom domains, branding, logos      | PROD-004 SaaS Platform |
| **Frontend framework**   | Next.js 14/15 + Tailwind + shadcn/ui | PROD-004 SaaS Platform |
| **CI/CD**                | GitHub Actions, Vercel deployment    | Agency standard        |
| **Monitoring**           | PostHog + Sentry + Pushover alerts   | Agency standard        |

**SEO/AISO-specific UI** lives in `apps/aisogen/` within PROD-004. **SEO/AISO engine code** (skills, agents, recipes) lives in the `seo-toolkit/` capability engine repo. Shared SaaS infrastructure lives in PROD-004 packages.

---

## Product Roadmap — 4 Releases

### Release 1: Engine (Q2 2026 — April-June)

> Build the proprietary intelligence layer. No UI yet. Prove on agency clients.

**OKR alignment:** Objective 1 (SEO results), KR1.1 (Hairgenetix 2,500 clicks), KR1.3 (automated audits)

| Sprint  | Duration   | Deliverables                                                                                                                                                                        |
| ------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1.1** | Week 1-2   | **Content Pipeline skill + agent**: `content-pipeline` skill, update `content-writer` agent with SEO/AISO integration, content brief template, quality gate checklist               |
| **1.2** | Week 3-4   | **Rank Tracking + Reporting**: `rank-tracker` skill, `seo-reporter` agent, Rank Tracker Rube recipe, weekly + monthly report templates, schedule recurring tracking (launchd)       |
| **1.3** | Week 5-6   | **CMS Publishing**: Shopify blog publisher (REST API), WordPress blog publisher (WP REST API), test end-to-end pipeline on Hairgenetix (3 briefs → 1 published article)             |
| **1.4** | Week 7-8   | **Authority Builder**: `authority-builder` skill (6 channels, per-platform playbooks, SoM methodology), `authority-builder` agent, brand mention monitoring, Share of Model tracker |
| **1.5** | Week 9-10  | **Earned Link Engine**: `earned-links` skill (5 strategies, prospect scoring, outreach templates), `link-builder` agent, expert platform monitoring (HARO/Featured/Qwoted)          |
| **1.6** | Week 11-12 | **Table Stakes**: `competitor-benchmark` skill, `onpage-automation` skill, on-page push for Shopify + WordPress, schedule recurring AISO re-audit (quarterly)                       |

**Exit criteria — Release 1:**

- 9 skills production-ready (3 existing + 6 new)
- 5 agents production-ready (1 existing + 4 new)
- 6 Rube recipes live (5 existing + 1 new)
- 3 automated schedules running (rank tracking, reporting, AISO re-audit)
- Hairgenetix: 5 articles published via pipeline, authority baseline documented
- Love Over Exile: 5 articles published via pipeline
- Skingenetix: first full audit complete

**Approval Gate:** Malcolm reviews engine capabilities before proceeding to platform build.

---

### Release 2: Platform MVP (Q3 2026 — July-September)

> Build the multi-tenant web application. Internal beta with agency clients.

**Prerequisite:** PROD-004 SaaS Platform has auth + database + billing skeleton deployed (per Q2 OKR KR2.1).

| Sprint  | Duration   | Deliverables                                                                                                                                                                                                                                                            |
| ------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **2.1** | Week 1-2   | **Vertical setup**: Scaffold `apps/aisogen/` in PROD-004 monorepo from vertical blueprint. CLAUDE.md, all standard docs, architecture diagram, strategic-os.md. Spec-driven: create `specs/001-platform-mvp/` with requirements, design, tasks. **Gate 1-3 approvals.** |
| **2.2** | Week 3-4   | **Core platform**: Database schema (multi-tenant with RLS), API layer connecting Engine skills → platform endpoints, project/site management CRUD                                                                                                                       |
| **2.3** | Week 5-6   | **Dashboard views (batch 1)**: Overview (client scorecards, alerts), Rank Tracking (keywords + AI citations), Competitor Intelligence (benchmarks, gap analysis)                                                                                                        |
| **2.4** | Week 7-8   | **Dashboard views (batch 2)**: Content Pipeline UI (brief queue, article cards, approval workflow), Authority Builder UI (channels, opportunities, SoM trends)                                                                                                          |
| **2.5** | Week 9-10  | **Dashboard views (batch 3)**: Earned Link Engine UI (prospect pipeline, mention monitor, link inventory), Reporting (white-label, automated, narrative summaries)                                                                                                      |
| **2.6** | Week 11-12 | **Agency features**: White-label system (branding, subdomains), client portal (read-only), team management (RBAC), Stripe billing integration (4 tiers + credits)                                                                                                       |

**Exit criteria — Release 2:**

- Platform deployed to staging URL on Vercel
- 3 agency clients migrated to platform (Hairgenetix, LOE, Skingenetix)
- All 6 dashboard views functional
- White-label working (custom branding per tenant)
- Stripe billing configured (4 tiers + usage credits)
- Quality gates: test coverage >85%, build pass rate >95%, accessibility audit clean

**Approval Gate:** Malcolm reviews platform before external beta.

---

### Release 3: External Beta (Q4 2026 — October-December)

> Open to first 10 external agencies. Iterate on feedback.

| Sprint  | Duration   | Deliverables                                                                                                            |
| ------- | ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| **3.1** | Week 1-2   | **Freemium lead-gen tool**: Free site audit + AISO score (no signup required). Captures email for funnel                |
| **3.2** | Week 3-4   | **Landing page + marketing site**: Product positioning, pricing page, case studies from agency clients                  |
| **3.3** | Week 5-6   | **Onboarding wizard**: Guided setup (connect GSC, GA4, CMS), automated client onboarding, industry templates            |
| **3.4** | Week 7-8   | **Agency partner outreach**: First 10 beta agencies recruited, white-label configured, feedback collection              |
| **3.5** | Week 9-10  | **P1 features from feedback**: Chrome extension, Slack/Teams notifications, Zapier integration, bulk operations         |
| **3.6** | Week 11-12 | **Polish + scale prep**: Performance optimization, rate limiting, abuse prevention, usage analytics, billing validation |

**Exit criteria — Release 3:**

- 10 external agencies on platform
- Freemium tool generating leads
- NPS >40 from beta users
- Monthly churn <5%
- Platform handles 50+ projects without performance issues
- 3 published case studies

**Approval Gate:** Malcolm reviews metrics before public launch.

---

### Release 4: Public Launch (Q1 2027 — January-March)

> ProductHunt launch, affiliate programme, scale marketing.

| Sprint  | Duration   | Deliverables                                                                                                           |
| ------- | ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| **4.1** | Week 1-2   | **ProductHunt preparation**: Assets, demo video, launch plan                                                           |
| **4.2** | Week 3-4   | **Public launch**: ProductHunt, affiliate programme (20-30% recurring), agency partnership programme                   |
| **4.3** | Week 5-6   | **P2 features**: Local SEO module, advanced competitor intelligence, SEO A/B testing                                   |
| **4.4** | Week 7-8   | **P2 features**: Mobile app, data warehouse export, conversational interface                                           |
| **4.5** | Week 9-10  | **Innovation features**: AI crawlability audit, entity-optimized scoring, learning system (improves from YOUR results) |
| **4.6** | Week 11-12 | **Scale**: Enterprise features (SSO, custom roles), API access programme, reseller billing                             |

**Exit criteria — Release 4:**

- 50+ paying tenants
- $10K+ MRR
- Affiliate programme generating leads
- 3 innovation features live (nobody else has)
- Enterprise tier with first customer

---

## Feature Priority by Release

### Release 1 — Engine (no UI)

**Skills to build:**
| Skill | Category | P0 Features Covered |
|-------|----------|-------------------|
| `content-pipeline` | Content | 4.1, 4.2, 4.3, 4.4, 4.6, 4.8, 4.10, 4.12, 4.17 |
| `rank-tracker` | Analytics | 10.1, 10.3, 10.6, 10.7, 10.8, 10.12 |
| `authority-builder` | Authority | 6.1, 6.2, 6.3, 6.6, 6.11, 6.12, 6.15 |
| `earned-links` | Links | 7.1, 7.2, 7.3, 7.4, 7.7, 7.10, 7.15 |
| `competitor-benchmark` | Intelligence | 9.1, 9.2, 9.3, 9.4, 9.7, 9.15 |
| `onpage-automation` | Automation | 8.1, 8.2, 8.3, 8.6, 8.7, 8.9, 8.15, 8.16 |

**Agents to build/update:**
| Agent | Model | Skills Used |
|-------|-------|-------------|
| `content-writer` (update) | Sonnet | content-pipeline, seo-content-strategy, aiso |
| `seo-reporter` (new) | Sonnet | rank-tracker, seo-aiso-validator |
| `authority-builder` (new) | Sonnet | authority-builder, aiso |
| `link-builder` (new) | Sonnet | earned-links, competitor-benchmark |

### Release 2 — Platform MVP (75 P0 features)

All P0 features from the functional design, organized by dashboard view:

- **Overview**: 11.1, 11.2, 11.3, 11.4, 11.9, 11.12, 11.14, 11.15
- **Content Pipeline**: 3.1, 3.3, 3.4, 4.1-4.4, 4.6, 4.8, 4.10, 4.12, 4.17, 4.20
- **Authority Builder**: 5.1-5.9, 5.12, 5.16-5.18, 6.1-6.3, 6.6, 6.11, 6.12, 6.15
- **Earned Links**: 7.1-7.4, 7.7, 7.10, 7.15
- **Rank Tracking**: 10.1, 10.3, 10.6-10.8, 10.11-10.14, 10.19
- **Competitor Intel**: 9.1-9.4, 9.7, 9.15

### Release 3 — External Beta (P1 features)

~70 P1 features: keyword cannibalization, content freshness tracking, multilingual tracking, Chrome extension, Slack notifications, Zapier, Google Sheets, bulk operations, etc.

### Release 4 — Public Launch (P2 + Innovation)

P2 features + top 10 innovation features: AI crawlability audit, entity-optimized scoring, learning system, cross-channel strategy, predictive analytics, conversational interface, etc.

---

## OKR Integration

### Q2 2026 — Proposed Addition to Existing OKRs

**Under Objective 1 (SEO Toolkit generates measurable results):**

| #     | Key Result                                              | Target                | Active Work                |
| ----- | ------------------------------------------------------- | --------------------- | -------------------------- |
| KR1.4 | SEO & AISO Engine has 9 production skills and 5 agents  | 9 skills, 5 agents    | Release 1 sprints 1.1-1.6  |
| KR1.5 | Content pipeline produces 10+ articles across 2 clients | 10 articles published | Release 1 sprints 1.1, 1.3 |

**Under Objective 2 (SaaS platform foundation):**

| #     | Key Result                                                 | Target                     | Active Work                               |
| ----- | ---------------------------------------------------------- | -------------------------- | ----------------------------------------- |
| KR2.4 | AISOGEN registered as AISOGEN vertical with full blueprint | All standard files created | Product setup (Release 2 sprint 2.1 prep) |

### Q3 2026 — New OKR Proposal

**Objective 4: Launch AISOGEN internal beta**

| #     | Key Result                                              | Target                |
| ----- | ------------------------------------------------------- | --------------------- |
| KR4.1 | Platform deployed to staging with all 6 dashboard views | Deployed + functional |
| KR4.2 | 3 agency clients migrated to platform                   | 3 clients active      |
| KR4.3 | White-label and Stripe billing configured and tested    | Working end-to-end    |
| KR4.4 | Test coverage >85%, build pass rate >95%                | Quality gates met     |

### Q4 2026 — New OKR Proposal

**Objective 5: Validate AISOGEN with external agencies**

| #     | Key Result                                | Target            |
| ----- | ----------------------------------------- | ----------------- |
| KR5.1 | 10 external agencies on platform          | 10 paying tenants |
| KR5.2 | NPS >40 from beta users                   | >40               |
| KR5.3 | Monthly churn <5%                         | <5%               |
| KR5.4 | Freemium tool generating 100+ leads/month | 100+ leads        |

---

## Department Manager Assignments

| Manager               | Role in This Product                                                              |
| --------------------- | --------------------------------------------------------------------------------- |
| **DevOps Manager**    | CI/CD pipeline, deployment health, dependency security, scheduled task monitoring |
| **Delivery Manager**  | Sprint tracking, blocker resolution, velocity measurement, OKR health             |
| **Quality Manager**   | Test coverage enforcement, PR review gates, accessibility audits, doc freshness   |
| **Marketing Manager** | Landing page, case studies, content marketing, affiliate programme                |
| **Strategy Manager**  | OKR tracking, competitive monitoring (monthly), pricing strategy                  |
| **CI Manager**        | Cross-product improvement, benchmark against industry standards                   |

All managers follow their SOPs in `docs/capabilities/{role}-manager.md` with authority tiers T1-T4.

---

## Spec-Driven Development — Feature Specs Required

Each major feature group requires a spec folder before build starts:

| Spec                           | Release | Status       |
| ------------------------------ | ------- | ------------ |
| `specs/001-content-pipeline/`  | R1      | ⬜ To create |
| `specs/002-rank-tracking/`     | R1      | ⬜ To create |
| `specs/003-authority-builder/` | R1      | ⬜ To create |
| `specs/004-earned-links/`      | R1      | ⬜ To create |
| `specs/005-platform-mvp/`      | R2      | ⬜ To create |
| `specs/006-white-label/`       | R2      | ⬜ To create |
| `specs/007-freemium-tool/`     | R3      | ⬜ To create |

Each spec follows the 8-phase process with 3 approval gates (see `docs/capabilities/requirements-engineering.md` v3.0).

---

## Risk Register

| #   | Risk                                       | Probability | Impact | Mitigation                                                                   | Owner    |
| --- | ------------------------------------------ | ----------- | ------ | ---------------------------------------------------------------------------- | -------- |
| R1  | PROD-004 SaaS foundation not ready by Q3   | Medium      | High   | Can build AISOGEN vertical on standalone stack, migrate later                | DevOps   |
| R2  | Scope creep — 230 features is overwhelming | High        | High   | Strict P0/P1/P2 prioritisation. MVP = P0 only (~75 features)                 | Delivery |
| R3  | AI API costs erode margins                 | Medium      | High   | Model routing, caching, credit-based pricing                                 | Strategy |
| R4  | Semrush/Ahrefs add authority builder       | Low         | Medium | Speed to market + depth of execution (they're adding bolt-ons, we're native) | Strategy |
| R5  | YMYL content liability (health clients)    | Medium      | High   | Mandatory human review gate, E-E-A-T compliance, disclaimers                 | Quality  |
| R6  | White-label complexity delays MVP          | Medium      | Medium | Ship basic branding first, custom domains in Release 3                       | DevOps   |
| R7  | No domain secured yet                      | Low         | Low    | Research and purchase domain before Release 3                                | Malcolm  |
| R8  | 1-2 person team capacity                   | High        | High   | AI-powered development (Claude Code), focus on automation, phased delivery   | Delivery |

---

## Decision Log

| #   | Decision                                                     | Date       | Rationale                                                                                      |
| --- | ------------------------------------------------------------ | ---------- | ---------------------------------------------------------------------------------------------- |
| D1  | Platform is standalone SaaS (not agency dashboard extension) | 2026-03-10 | Multi-tenant product candidate, needs own auth/billing/white-label                             |
| D2  | Agency-first go-to-market                                    | 2026-03-10 | Higher ACV, built-in distribution, white-label as moat                                         |
| D3  | Two-layer architecture (Platform + Engine)                   | 2026-03-10 | Sell access to platform without exposing proprietary skills/agents                             |
| D4  | Reuse PROD-004 SaaS infrastructure                           | 2026-03-10 | Avoid rebuilding auth/billing/multi-tenancy from scratch                                       |
| D5  | Build engine first (R1), platform second (R2)                | 2026-03-10 | Prove value on agency clients before building UI                                               |
| D6  | Classified as vertical in PROD-004 (not standalone product)  | 2026-03-10 | Follows agency hierarchy: Platform → Vertical → Capability → Engine. Avoids product ID sprawl. |
| D7  | Shared infrastructure is a reusable agency core competence   | 2026-03-10 | SaaS stack (auth, billing, white-label) can power multiple products                            |

---

## Next Actions (Immediate)

| #   | Action                                                       | Who     | When              |
| --- | ------------------------------------------------------------ | ------- | ----------------- |
| 1   | Malcolm to review and approve this roadmap                   | Malcolm | This session      |
| 2   | ✅ Registered as vertical in project registry                | Claude  | Done (2026-03-10) |
| 3   | ✅ Q2 OKRs updated with KR1.4, KR1.5, KR2.4                  | Claude  | Done (2026-03-10) |
| 4   | Begin Release 1, Sprint 1.1: create `content-pipeline` skill | Claude  | Next session      |
| 5   | ✅ Domain secured: aisogen.ai                                | Malcolm | Done (2026-03-10) |
| 6   | ✅ Product name decided: AISOGEN                             | Malcolm | Done (2026-03-10) |

---

## Connected Documentation

| Document                                                     | What                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [aisogen-capability.md](aisogen-capability.md)               | Capability overview, competitive landscape, build plan       |
| [aisogen-functional-design.md](aisogen-functional-design.md) | 230 features, 14 categories, 21 competitors, priority matrix |
| `docs/blueprints/product-blueprint.md`                       | Template for product repo setup                              |
| `docs/capabilities/requirements-engineering.md`              | 8-phase spec-driven development                              |
| `docs/okrs/q2-2026.md`                                       | Current quarter objectives                                   |
| `docs/master-strategy.md`                                    | Agency strategy                                              |
| `~/.claude/projects/.../memory/project-registry.md`          | All registered projects                                      |
