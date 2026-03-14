# AISOGEN Platform Structure — Capability Framework & Development Plan

> **Purpose:** Map the complete SEO/GEO/AISO capability landscape, show what "full service" coverage looks like, and define the phased development plan from MVP to full platform.
>
> **Vision:** The full-service AI-autonomous SEO, GEO and AISO platform that helps companies improve their online ranking, visibility and conversion with the least amount of human effort possible. Easy, intuitive, and self-explanatory for non-technical users.
>
> **Date:** 2026-03-12
> **Status:** Strategic planning — approved for development
> **Parent docs:** [aisogen-capability.md](aisogen-capability.md), [aisogen-product-roadmap.md](aisogen-product-roadmap.md), [seo-geo-aiso-process-model.md](seo-geo-aiso-process-model.md)
> **Research foundation:** 3 research reports (100+ sources), 21+ competitors profiled, 230 features inventoried

---

## 1. The Capability Framework

The complete SEO/GEO/AISO discipline breaks into **13 process areas** (from our [process model](seo-geo-aiso-process-model.md)), which group into **5 capability domains**. Every feature, function, and competitor product maps to this framework.

### 1.1 The Five Capability Domains

```
AISOGEN PLATFORM — CAPABILITY DOMAINS
│
├── DOMAIN A: DISCOVER & UNDERSTAND
│   ├── 1. Client Discovery & Onboarding
│   ├── 2. Technical Site Audit
│   └── 3. Keyword & Market Intelligence
│
├── DOMAIN B: PLAN & CREATE
│   ├── 4. Content Strategy & Planning
│   └── 5. Content Creation & Publishing
│
├── DOMAIN C: BUILD AUTHORITY
│   ├── 6. Link Building & Digital PR
│   ├── 11. Entity & Knowledge Graph
│   └── 12. External Authority (Reviews, Community, Media)
│
├── DOMAIN D: OPTIMISE FOR AI
│   ├── 10. AI Content Optimisation (AISO)
│   └── 13. AI Technical Optimisation
│
└── DOMAIN E: MEASURE & IMPROVE
    ├── 7. Rank Tracking
    ├── 8. Reporting & Analytics
    └── 9. AI Visibility Monitoring (GEO)
```

### 1.2 Process Areas → Sub-Processes → Automation Level

Each domain contains process areas, each containing sub-processes. Every sub-process is classified on the automation spectrum:

| Automation Level                                      | % of All Sub-Processes | What It Means for Users                                                         |
| ----------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------- |
| **AUTO** (fully autonomous)                           | ~35%                   | Platform does it. No human input needed.                                        |
| **ASSISTED** (AI does, human approves)                | ~40%                   | Platform does the work. User clicks "approve" or edits.                         |
| **HUMAN-LED** (platform provides data, human decides) | ~15%                   | Platform shows recommendations. User makes the call.                            |
| **HUMAN-ONLY** (cannot be automated)                  | ~10%                   | Platform guides. User does the work (e.g., record videos, build relationships). |

**Key insight for AISOGEN:** 75% of all SEO/GEO/AISO work is either fully automatable or AI-assisted. This validates the "Human-Approved Autopilot" positioning — the platform does the work, the user approves before anything goes live.

---

## 2. Full-Service Coverage Map

This is what a complete E2E SEO/GEO/AISO platform looks like when ALL capabilities are present. The "full service agency" view.

### Domain A: Discover & Understand

| Process Area           | Sub-Process                                   | Automation | AISOGEN Status               | Competitor Coverage         |
| ---------------------- | --------------------------------------------- | ---------- | ---------------------------- | --------------------------- |
| **1. Discovery**       | 1.1 Client onboarding wizard                  | ASSISTED   | Not built                    | Semrush (basic), SE Ranking |
|                        | 1.2 Automated site crawl                      | AUTO       | **Partial** (Rube recipe)    | All Tier 1                  |
|                        | 1.3 Competitor identification                 | ASSISTED   | **Partial** (seo-researcher) | All Tier 1                  |
|                        | 1.4 Goal & KPI setting                        | HUMAN-LED  | Not built                    | Semrush Copilot             |
|                        | 1.5 Analytics connection (GSC, GA4)           | ASSISTED   | Not built                    | All Tier 1                  |
| **2. Technical Audit** | 2.1 Crawl & index audit                       | AUTO       | **Production** (recipe)      | All Tier 1                  |
|                        | 2.2 Core Web Vitals                           | AUTO       | **Production** (recipe)      | All Tier 1                  |
|                        | 2.3 Schema validation                         | AUTO       | **Production** (recipe)      | Semrush, Alli AI            |
|                        | 2.4 Schema generation & deployment            | ASSISTED   | Not built                    | Alli AI, SearchAtlas        |
|                        | 2.5 Internal linking analysis                 | ASSISTED   | Not built                    | Semrush, Surfer             |
|                        | 2.6 Hreflang validation                       | AUTO       | Not built                    | SE Ranking                  |
|                        | 2.7 **AI crawlability audit**                 | AUTO       | Not built                    | **Nobody** (innovation)     |
|                        | 2.8 **llms.txt generation**                   | ASSISTED   | **Production** (manual)      | **Nobody**                  |
| **3. Keywords**        | 3.1 Keyword research                          | AUTO       | **Production** (recipe)      | All Tier 1                  |
|                        | 3.2 Intent classification                     | ASSISTED   | **Production** (agent)       | Semrush, Frase              |
|                        | 3.3 Semantic clustering                       | AUTO       | **Production** (recipe)      | Semrush, Surfer             |
|                        | 3.4 Opportunity scoring                       | AUTO       | Not built                    | Semrush, MarketMuse         |
|                        | 3.5 **AI query mapping** (what people ask AI) | ASSISTED   | Not built                    | Frase (basic), Profound     |

### Domain B: Plan & Create

| Process Area            | Sub-Process                                | Automation | AISOGEN Status              | Competitor Coverage              |
| ----------------------- | ------------------------------------------ | ---------- | --------------------------- | -------------------------------- |
| **4. Content Strategy** | 4.1 Topical authority mapping              | HUMAN-LED  | **Production** (skill)      | MarketMuse, Frase                |
|                         | 4.2 Content gap analysis                   | ASSISTED   | **Production** (skill)      | All Tier 1-2                     |
|                         | 4.3 Content brief generation               | ASSISTED   | Not built                   | Surfer, Frase, Clearscope        |
|                         | 4.4 Publication calendar                   | HUMAN-LED  | Not built                   | Surfer (basic)                   |
|                         | 4.5 **Dual-mapped strategy** (Google + AI) | HUMAN-LED  | **Production** (skill)      | **Nobody** (differentiator)      |
| **5. Content Creation** | 5.1 AI article generation                  | ASSISTED   | Not built                   | Surfer, Jasper, Frase, Koala     |
|                         | 5.2 NLP content scoring                    | AUTO       | Not built                   | Surfer, Clearscope, NeuronWriter |
|                         | 5.3 E-E-A-T compliance check               | ASSISTED   | Not built                   | **Nobody** fully                 |
|                         | 5.4 Answer-first optimisation              | ASSISTED   | **Production** (aiso skill) | **Nobody** (AISO-specific)       |
|                         | 5.5 Multi-language generation              | ASSISTED   | Not built                   | Byword (80 langs), Jasper (30)   |
|                         | 5.6 **Per-language SEO/AISO scoring**      | AUTO       | Not built                   | **Nobody** (innovation)          |
|                         | 5.7 CMS auto-publishing (Shopify)          | ASSISTED   | Not built                   | SEO.ai, SEObot, AutoSEO          |
|                         | 5.8 CMS auto-publishing (WordPress)        | ASSISTED   | Not built                   | Many competitors                 |
|                         | 5.9 Post-publish performance tracking      | AUTO       | Not built                   | Clearscope (basic)               |
|                         | 5.10 **Auto re-optimisation on drop**      | ASSISTED   | Not built                   | **Nobody** (innovation)          |

### Domain C: Build Authority

| Process Area               | Sub-Process                            | Automation | AISOGEN Status | Competitor Coverage           |
| -------------------------- | -------------------------------------- | ---------- | -------------- | ----------------------------- |
| **6. Link Building**       | 6.1 Backlink audit                     | AUTO       | Not built      | Ahrefs, Semrush               |
|                            | 6.2 Link prospect identification       | ASSISTED   | Not built      | Semrush, Respona              |
|                            | 6.3 Outreach management                | ASSISTED   | Not built      | Respona, Pitchbox             |
|                            | 6.4 Unlinked mention conversion        | ASSISTED   | Not built      | Ahrefs (data only)            |
|                            | 6.5 Link performance tracking          | AUTO       | Not built      | Ahrefs, Semrush               |
| **11. Entity & KG**        | 11.1 Entity status assessment          | AUTO       | Not built      | **Nobody** as SaaS            |
|                            | 11.2 Wikidata entry wizard             | ASSISTED   | Not built      | **Nobody** (innovation)       |
|                            | 11.3 sameAs schema generator           | AUTO       | Not built      | **Nobody** (innovation)       |
|                            | 11.4 Cross-platform consistency audit  | AUTO       | Not built      | Yext ($500+/mo), Kalicube     |
|                            | 11.5 Knowledge Panel management        | ASSISTED   | Not built      | Kalicube Pro (agency)         |
|                            | 11.6 Wikipedia eligibility assessment  | ASSISTED   | Not built      | **Nobody**                    |
| **12. External Authority** | 12.1 Review platform audit             | ASSISTED   | Not built      | **Nobody**                    |
|                            | 12.2 Review acquisition flow           | ASSISTED   | Not built      | Trustpilot, G2 (own tools)    |
|                            | 12.3 Community monitoring (Reddit)     | AUTO       | Not built      | **Nobody** (GummySearch dead) |
|                            | 12.4 Community engagement guidance     | ASSISTED   | Not built      | **Nobody**                    |
|                            | 12.5 YouTube transcript + chapter gen  | ASSISTED   | Not built      | **Nobody**                    |
|                            | 12.6 Press release formatter (SOAR)    | ASSISTED   | Not built      | **Nobody**                    |
|                            | 12.7 Expert platform monitoring (HARO) | AUTO       | Not built      | Featured.com (partial)        |
|                            | 12.8 Directory listing submission      | ASSISTED   | Not built      | Yext (expensive)              |
|                            | 12.9 **Citation attribution chain**    | AUTO       | Not built      | **Nobody** (innovation)       |

### Domain D: Optimise for AI

| Process Area         | Sub-Process                        | Automation | AISOGEN Status              | Competitor Coverage |
| -------------------- | ---------------------------------- | ---------- | --------------------------- | ------------------- |
| **10. AI Content**   | 10.1 Answer-first audit            | ASSISTED   | **Production** (aiso skill) | **Nobody**          |
|                      | 10.2 AI answer page creation       | ASSISTED   | **Production** (aiso skill) | **Nobody**          |
|                      | 10.3 Snippet optimisation          | ASSISTED   | Not built                   | Surfer (basic)      |
|                      | 10.4 Comparison content generation | ASSISTED   | Not built                   | Frase (basic)       |
|                      | 10.5 Content freshness management  | AUTO       | **Production** (manual)     | Clearscope (basic)  |
|                      | 10.6 Fact density improvement      | ASSISTED   | **Production** (aiso skill) | **Nobody**          |
| **13. AI Technical** | 13.1 AI crawler access audit       | AUTO       | **Production** (recipe)     | Alli AI             |
|                      | 13.2 llms.txt management           | ASSISTED   | **Production** (manual)     | **Nobody**          |
|                      | 13.3 SSR audit for AI crawlers     | AUTO       | **Partial** (recipe)        | Alli AI             |
|                      | 13.4 Schema AI optimisation        | ASSISTED   | **Production** (aiso skill) | **Nobody**          |
|                      | 13.5 Server response time for AI   | AUTO       | **Production** (recipe)     | Standard tools      |

### Domain E: Measure & Improve

| Process Area         | Sub-Process                          | Automation | AISOGEN Status       | Competitor Coverage         |
| -------------------- | ------------------------------------ | ---------- | -------------------- | --------------------------- |
| **7. Rank Tracking** | 7.1 Daily keyword position tracking  | AUTO       | Not built            | Semrush, Ahrefs, SE Ranking |
|                      | 7.2 SERP feature monitoring          | AUTO       | Not built            | All Tier 1                  |
|                      | 7.3 Algorithm update detection       | HUMAN-LED  | Not built            | Semrush, Moz                |
|                      | 7.4 Local rank tracking              | AUTO       | Not built            | SE Ranking, BrightLocal     |
| **8. Reporting**     | 8.1 Automated dashboard              | AUTO       | Not built            | All Tier 1                  |
|                      | 8.2 Monthly report generation        | AUTO       | Not built            | All Tier 1                  |
|                      | 8.3 White-label client reports       | AUTO       | Not built            | SE Ranking, Semrush         |
|                      | 8.4 Narrative insight generation     | ASSISTED   | Not built            | Semrush Copilot             |
| **9. AI Visibility** | 9.1 Share of Model tracking          | AUTO       | **Partial** (manual) | Otterly, Profound, Ahrefs   |
|                      | 9.2 Multi-platform citation tracking | AUTO       | **Partial** (manual) | Otterly (6), Profound (9)   |
|                      | 9.3 Competitor SoM comparison        | AUTO       | Not built            | Otterly, Profound           |
|                      | 9.4 Sentiment analysis               | ASSISTED   | Not built            | Scrunch, Peec AI            |
|                      | 9.5 AI inaccuracy detection          | ASSISTED   | Not built            | GetAISO                     |
|                      | 9.6 AI traffic measurement           | AUTO       | Not built            | Standard GA4                |
|                      | 9.7 **Citation → content fix loop**  | ASSISTED   | Not built            | **Nobody** (innovation)     |

### 2.1 Coverage Summary — Full Service vs Current

| Domain                   | Total Sub-Processes | Production | Partial | Not Built | % Complete |
| ------------------------ | ------------------- | ---------- | ------- | --------- | ---------- |
| A: Discover & Understand | 15                  | 5          | 2       | 8         | 33%        |
| B: Plan & Create         | 10                  | 3          | 0       | 7         | 30%        |
| C: Build Authority       | 17                  | 0          | 0       | 17        | 0%         |
| D: Optimise for AI       | 11                  | 7          | 1       | 3         | 64%        |
| E: Measure & Improve     | 14                  | 0          | 2       | 12        | 7%         |
| **TOTAL**                | **67**              | **15**     | **5**   | **47**    | **22%**    |

**Current state:** We're strongest in AI optimisation (Domain D — 64%) because of the `aiso` and `seo-aiso-validator` skills. Authority building (Domain C) and measurement (Domain E) are at 0-7%. Content creation (Domain B) has strategy but no execution pipeline.

---

## 3. Competitor Feature Coverage

How the market-leading platforms cover this framework. This shows where everyone is strong, where there are gaps, and where AISOGEN can differentiate.

### 3.1 Coverage Heatmap (by Capability Domain)

| Platform              | A: Discover | B: Create | C: Authority | D: AI Optimise | E: Measure | Autonomy |
| --------------------- | ----------- | --------- | ------------ | -------------- | ---------- | -------- |
| **Semrush**           | 95%         | 60%       | 30%          | 20%            | 90%        | 4/10     |
| **Ahrefs**            | 90%         | 40%       | 40%          | 25%            | 85%        | 3/10     |
| **SE Ranking**        | 85%         | 50%       | 25%          | 30%            | 80%        | 4/10     |
| **Surfer SEO**        | 40%         | 85%       | 0%           | 15%            | 30%        | 5/10     |
| **Frase**             | 50%         | 80%       | 0%           | 35%            | 40%        | 6/10     |
| **MarketMuse**        | 30%         | 70%       | 0%           | 10%            | 20%        | 3/10     |
| **SearchAtlas**       | 70%         | 65%       | 15%          | 20%            | 60%        | 7/10     |
| **Relixir**           | 30%         | 50%       | 0%           | 60%            | 50%        | 8/10     |
| **Otterly.ai**        | 10%         | 0%        | 0%           | 0%             | 70%        | 3/10     |
| **Profound**          | 10%         | 0%        | 0%           | 0%             | 85%        | 3/10     |
| **AutoSEO**           | 20%         | 70%       | 10%          | 5%             | 20%        | 7/10     |
| **AISOGEN (current)** | 33%         | 30%       | 0%           | 64%            | 7%         | N/A      |
| **AISOGEN (target)**  | 80%         | 85%       | 70%          | 95%            | 80%        | 9/10     |

### 3.2 Key Findings

1. **Nobody covers Domain C (Authority) as a platform feature.** Semrush/Ahrefs offer data (backlink analysis) but zero execution. No platform manages entity building, review platforms, community presence, or earned media. This is AISOGEN's biggest competitive advantage.

2. **Domain D (AI Optimise) is where AISOGEN already leads.** Our `aiso` skill with 36-factor scoring is more comprehensive than any competitor's AISO features. Relixir is closest at 60%.

3. **Domain A + E (Discover + Measure) are dominated by Semrush/Ahrefs.** We don't need to out-data them — we need to present data differently (simpler, actionable, for non-technical users) and integrate it with the automation loop.

4. **Autonomy is the real gap.** The highest autonomy score is Relixir at 8/10, but only for GEO content. Nobody achieves high autonomy across the full stack. AISOGEN targeting 9/10 across SEO+GEO+AISO would be genuinely unprecedented.

---

## 4. What AISOGEN Must Be — The Product Model

### 4.1 The Three Features In Scope

Based on what exists, what's researched, and what Malcolm confirmed:

| Feature                            | Domain Coverage                              | Research Status                                    | Build Readiness                       |
| ---------------------------------- | -------------------------------------------- | -------------------------------------------------- | ------------------------------------- |
| **1. SEO/GEO/AISO Auditor**        | A (Discover) + D (AI Optimise) + E (Measure) | Production — 3 skills, 5 recipes, 1 agent          | High — extend existing engine         |
| **2. Automated Article Generator** | B (Create)                                   | Planned — skill + agent specs exist                | Medium — needs content pipeline build |
| **3. External Authority Builder**  | C (Authority)                                | Fully researched — 100+ sources, briefing complete | Medium — 6 modules to build           |

### 4.2 How They Connect — The Closed Loop

```
┌─────────────────────────────────────────────────────────────┐
│                    AISOGEN CLOSED LOOP                        │
│                                                               │
│  ┌──────────┐    ┌──────────┐    ┌──────────────────┐        │
│  │ AUDITOR  │───→│ ARTICLE  │───→│ AUTHORITY BUILDER │        │
│  │          │    │ GENERATOR│    │                    │        │
│  │ Score    │    │ Write    │    │ Entity, Reviews,   │        │
│  │ Diagnose │    │ Optimise │    │ Community, Media,  │        │
│  │ Prioritise│   │ Publish  │    │ Content Distribution│       │
│  └─────▲────┘    └──────────┘    └────────────────────┘       │
│        │                                    │                  │
│        │         ┌──────────┐               │                  │
│        └─────────│ MEASURE  │◄──────────────┘                  │
│                  │ Track    │                                   │
│                  │ Report   │                                   │
│                  │ Alert    │                                   │
│                  └──────────┘                                   │
└─────────────────────────────────────────────────────────────┘

Audit → identifies gaps → Article Generator fills content gaps →
Authority Builder fills external gaps → Measurement tracks impact →
drops trigger re-audit → cycle repeats autonomously
```

**No competitor closes this loop.** This is the AISOGEN differentiator.

### 4.3 The User Experience Model

Based on UX research (`research/aisogen-platform-ux-research-2026.md`):

| Principle                         | Implementation                                                                                             |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Human-Approved Autopilot**      | AI does all work. Nothing goes live without user clicking "Approve".                                       |
| **One number**                    | Single composite "Search Presence Score" (0-100) combining SEO + AISO + Authority                          |
| **Approval queue as home screen** | Dashboard shows: "3 articles ready for review", "5 authority actions pending", "Score: 72 (+3 this month)" |
| **Plain English everywhere**      | No jargon. "Your site ranks #4 for this keyword" not "Position 4 in SERP with featured snippet potential"  |
| **Show the competition**          | Always show "You vs Competitors" — this creates urgency and validates the product                          |
| **Enter URL, see score**          | Free audit in <10 minutes creates instant value and drives signups                                         |

---

## 5. Phased Development Plan

### 5.1 The Phases

```
Phase 0 (DONE)     ─── Research & Strategy
Phase 1 (MVP)      ─── Minimum Sellable Product → first revenue
Phase 2 (Growth)   ─── Full autonomous loop → agency-ready
Phase 3 (Scale)    ─── Multi-language, white-label → market expansion
Phase 4 (Full)     ─── Innovation features → market leadership
```

### 5.2 Phase 1: MVP — Minimum Sellable Product

**Goal:** A product that a non-technical business owner can sign up for, connect their website, and get measurable value within 24 hours. Enough features to charge $79/month.

**Timeframe:** 8-10 weeks (engine + basic UI)

**Core proposition:** "See how visible your website is to AI search engines. Get a score, a plan, and automated fixes."

#### MVP Feature Set

| #      | Feature                                       | Domain | Sub-Processes Covered                      | Why It's in MVP                                     |
| ------ | --------------------------------------------- | ------ | ------------------------------------------ | --------------------------------------------------- |
| **M1** | **Instant site audit** (enter URL → score)    | A + D  | 2.1, 2.2, 2.3, 2.7, 10.1, 13.1, 13.2, 13.4 | The hook — instant value, drives signups            |
| **M2** | **Unified Search Presence Score** (0-100)     | E      | 7.1, 9.1, 9.2                              | The anchor — one number users track                 |
| **M3** | **Prioritised action plan** ("Do this first") | A      | 1.4, 2.4, 3.4                              | The "so what" — tells user what to do               |
| **M4** | **AI content generation** (1 article/week)    | B      | 5.1, 5.2, 5.4                              | The activation — user sees content being created    |
| **M5** | **Approval queue** (review before publish)    | B      | 5.7                                        | The safety net — nothing goes live without approval |
| **M6** | **Competitor comparison** ("You vs them")     | E      | 9.3                                        | The urgency — shows what competitors score          |
| **M7** | **Monthly progress report**                   | E      | 8.2                                        | The proof — shows improvement over time             |

#### MVP: What's Deliberately NOT Included

| Feature                | Why It's Out                                             | Phase   |
| ---------------------- | -------------------------------------------------------- | ------- |
| Authority Builder      | Too complex for MVP; requires multi-platform integration | Phase 2 |
| Link building          | Requires outreach tools, prospect management             | Phase 2 |
| Entity/Knowledge Graph | Requires Wikidata API, cross-platform audit              | Phase 2 |
| Multi-language         | 1 language for MVP is enough to validate                 | Phase 3 |
| White-label            | Agencies come after initial validation                   | Phase 3 |
| WordPress integration  | Shopify first (our expertise), WP in Phase 2             | Phase 2 |

#### MVP Build Sequence

| Week | Sprint                  | Deliverables                                                                                                                                                                                      |
| ---- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1-2  | **Engine: Audit**       | Extend existing audit recipe into API-callable service. Package `aiso` + `seo-aiso-validator` skills as scoring engine. Add AI crawlability audit (new). Output: JSON audit results via API.      |
| 3-4  | **Engine: Content**     | Build `content-pipeline` skill. Update `content-writer` agent with SEO/AISO integration. Build Shopify blog publisher (REST API). Content brief → draft → optimise → ready-for-approval pipeline. |
| 5-6  | **Engine: Measurement** | Build SoM tracker (automated AI platform querying). Build `rank-tracker` skill (GSC integration). Build competitor score comparison. Output: weekly score updates.                                |
| 7-8  | **Platform: Core UI**   | Scaffold AISOGEN in PROD-004 monorepo. Auth + onboarding wizard ("Enter your URL"). Dashboard: score + action plan + approval queue + competitor view. Stripe billing ($79/mo tier).              |
| 9-10 | **Platform: Polish**    | Monthly report generator. Email notifications (article ready, score changed). Free audit landing page (lead gen). Internal beta: run on Hairgenetix, LOE, Skingenetix.                            |

#### MVP Exit Criteria

| Criteria                                         | Target                        |
| ------------------------------------------------ | ----------------------------- |
| Audit works on any URL (not just our clients)    | Yes                           |
| Content pipeline produces publishable articles   | Yes (Shopify)                 |
| Score tracks and trends over time                | Yes (weekly)                  |
| 3 internal clients running                       | Hairgenetix, LOE, Skingenetix |
| Can charge $79/month and deliver value           | Yes                           |
| Non-technical user can complete onboarding alone | Yes (<10 min)                 |

---

### 5.3 Phase 2: Growth — Full Autonomous Loop

**Goal:** Close the loop. Add authority building, WordPress support, and the re-optimisation cycle. Agency-ready with multi-client management.

**Timeframe:** 8-10 weeks after MVP validation

**Unlocks:** $199/month tier (agency), authority features nobody else has

#### Phase 2 Feature Set

| #       | Feature                                      | Domain | New Capability                                                                         |
| ------- | -------------------------------------------- | ------ | -------------------------------------------------------------------------------------- |
| **G1**  | **Authority Builder — Entity Module**        | C      | Entity audit, Wikidata wizard, sameAs generator, cross-platform consistency            |
| **G2**  | **Authority Builder — Review Module**        | C      | Review platform audit, crawler access status, schema generator                         |
| **G3**  | **Authority Builder — Community Module**     | C      | Reddit monitoring, citation prediction, engagement guidance                            |
| **G4**  | **Authority Builder — Content Distribution** | C      | YouTube transcript optimizer, Medium publisher, press release formatter                |
| **G5**  | **Authority Builder — Earned Media**         | C      | Expert platform monitoring (HARO/Qwoted), directory submissions, Wikipedia eligibility |
| **G6**  | **WordPress publishing**                     | B      | WP REST API integration alongside Shopify                                              |
| **G7**  | **Re-optimisation trigger**                  | D + E  | Score drop → diagnose → brief → rewrite → approve → republish                          |
| **G8**  | **Multi-client dashboard**                   | E      | Agency view: all clients at a glance, cross-client comparison                          |
| **G9**  | **Attribution chain**                        | E      | Community mention → AI citation → traffic → conversion tracking                        |
| **G10** | **Topical authority map**                    | B      | Visual map of topic ownership, gaps, competitive positioning                           |

#### Phase 2 Pricing

| Tier    | Price   | Scope                                                 |
| ------- | ------- | ----------------------------------------------------- |
| Starter | $79/mo  | 1 site, audit + content + tracking                    |
| Growth  | $199/mo | 3 sites, full authority builder + re-optimisation     |
| Agency  | $499/mo | 15 sites, multi-client dashboard, white-label (basic) |

---

### 5.4 Phase 3: Scale — Multi-Language & White-Label

**Goal:** International expansion and agency distribution channel. Full white-label support.

**Timeframe:** 8-10 weeks after Phase 2

**Unlocks:** $499/month tier (full agency), international e-commerce market

#### Phase 3 Feature Set

| #      | Feature                                  | What It Adds                                                    |
| ------ | ---------------------------------------- | --------------------------------------------------------------- |
| **S1** | **Multi-language content** (3 languages) | Generate + score content per language (not translate)           |
| **S2** | **Per-language AISO scoring**            | Score each language version against its local AI models         |
| **S3** | **White-label complete**                 | Custom domains, branding, logos, client portals                 |
| **S4** | **Client portal** (read-only)            | Agency clients see their own dashboard                          |
| **S5** | **Automated onboarding wizard**          | Guided GSC + GA4 + CMS connection                               |
| **S6** | **Chrome extension**                     | See AISO score for any page while browsing                      |
| **S7** | **Slack/Teams notifications**            | "Article ready for review" in team channels                     |
| **S8** | **Zapier/Make integration**              | Connect AISOGEN to external workflows                           |
| **S9** | **Bulk operations**                      | Audit 100 pages, generate 10 briefs, approve 5 articles at once |

---

### 5.5 Phase 4: Full Coverage — Market Leadership

**Goal:** Innovation features that nobody else has. 9-language support. Full closed-loop autonomy.

**Timeframe:** Ongoing after Phase 3

#### Phase 4 Feature Set

| #       | Feature                                                             | Innovation Level                                 |
| ------- | ------------------------------------------------------------------- | ------------------------------------------------ |
| **F1**  | **9-language AISO scoring**                                         | First-mover (validated by Hairgenetix)           |
| **F2**  | **Full closed loop** (zero human input for routine tasks)           | Unprecedented across full stack                  |
| **F3**  | **AI crawlability audit** (how LLMs actually see your site)         | Innovation — nobody has this                     |
| **F4**  | **Entity-optimised scoring** (knowledge graph aware)                | Innovation                                       |
| **F5**  | **Learning system** (improves from YOUR results)                    | Innovation — personalised to each site           |
| **F6**  | **Conversational interface** ("What should I focus on?")            | Following Frase Agent / SearchAtlas Brain trend  |
| **F7**  | **Predictive analytics** ("If you publish X, expect Y improvement") | Innovation                                       |
| **F8**  | **API access programme**                                            | Developer/agency integration                     |
| **F9**  | **SSO + enterprise security**                                       | Enterprise tier requirement                      |
| **F10** | **SEO A/B testing**                                                 | Run experiments on title tags, content structure |

---

## 6. Development Metrics — When to Move Between Phases

| Gate                  | Criteria to Advance                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------- |
| **MVP → Phase 2**     | 3 internal clients active, audit works on external URLs, 1 article published via pipeline, Malcolm approves   |
| **Phase 2 → Phase 3** | 10 external beta users, NPS >30, monthly churn <10%, authority features generating measurable SoM improvement |
| **Phase 3 → Phase 4** | 50+ paying tenants, $10K+ MRR, <5% churn, white-label working                                                 |

---

## 7. Architecture Summary

```
┌─────────────────────────────────────────────────────────┐
│  USER INTERFACE (apps/aisogen/ in PROD-004)              │
│  ── Next.js + Tailwind + shadcn/ui                       │
│  ── Dashboard, approval queue, reports                   │
│  ── White-label, client portals                          │
├─────────────────────────────────────────────────────────┤
│  PLATFORM LAYER (shared PROD-004 packages)               │
│  ── Auth + multi-tenancy (Better Auth + RLS)             │
│  ── Billing (Stripe subscriptions + credits)             │
│  ── Notifications, scheduling, queueing                  │
├─────────────────────────────────────────────────────────┤
│  ENGINE LAYER (seo-toolkit/ repo — proprietary)          │
│  ── 9 skills (aiso, content-pipeline, authority, etc.)   │
│  ── 5 agents (researcher, writer, authority, links, reporter) │
│  ── 6 Rube recipes (audit, keywords, SERP, rank, etc.)  │
│  ── Research corpus (100+ sources, 2000+ lines)          │
├─────────────────────────────────────────────────────────┤
│  DATA LAYER                                              │
│  ── PostgreSQL + RLS (multi-tenant)                      │
│  ── AI platform APIs (ChatGPT, Gemini, Perplexity, etc.)│
│  ── SEO data APIs (GSC, DataForSEO, SerpAPI)            │
│  ── CMS APIs (Shopify REST, WordPress REST)              │
└─────────────────────────────────────────────────────────┘
```

---

## 8. Revenue Projection

| Phase   | Timeline        | Tenants      | MRR            | Evidence                  |
| ------- | --------------- | ------------ | -------------- | ------------------------- |
| MVP     | Q2-Q3 2026      | 3 (internal) | $0             | Dogfooding on own clients |
| Phase 2 | Q3-Q4 2026      | 10-15 (beta) | $1,500-3,000   | First external agencies   |
| Phase 3 | Q4 2026-Q1 2027 | 30-50        | $6,000-15,000  | Agency tier active        |
| Phase 4 | Q1-Q2 2027      | 50-100+      | $15,000-40,000 | Enterprise + API tiers    |

Market validation: SEO services market is $84B (12.3% CAGR). GEO/AISO market projected $7.3B by 2031 (34% CAGR). AI traffic grew 527% YoY. The timing is right.

---

## 9. Risk Register

| Risk                                           | Probability | Impact | Mitigation                                                                   |
| ---------------------------------------------- | ----------- | ------ | ---------------------------------------------------------------------------- |
| MVP takes longer than 10 weeks                 | High        | Medium | Focus ruthlessly on M1-M7 only. No scope creep.                              |
| Content quality requires too much human review | Medium      | High   | Build quality gates into pipeline. YMYL content always human-reviewed.       |
| Semrush/Ahrefs add authority features          | Low         | Medium | Our authority builder will be 6-12 months ahead. Speed is the moat.          |
| AI API costs erode margins                     | Medium      | High   | Model routing (cheap models for 80% of tasks), caching, credit-based pricing |
| Non-technical users still find it confusing    | Medium      | High   | User testing with non-technical beta users from week 8. Iterate UX.          |
| 1-person team capacity                         | High        | High   | AI-powered development. Phased delivery. Don't build everything at once.     |

---

## 10. Connected Documentation

| Document                                                                         | What It Contains                                                       |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [aisogen-capability.md](aisogen-capability.md)                                   | 9-function capability map, build plan, competitive landscape           |
| [aisogen-functional-design.md](aisogen-functional-design.md)                     | 230 features, 14 categories, 21 competitors, priority matrix           |
| [aisogen-product-roadmap.md](aisogen-product-roadmap.md)                         | 4-release roadmap, sprint plans, OKR integration                       |
| [seo-geo-aiso-process-model.md](seo-geo-aiso-process-model.md)                   | Complete process architecture — 13 sections, all sub-processes         |
| [external-authority-builder.md](external-authority-builder.md)                   | Authority builder 20-action playbook                                   |
| [external-authority-builder-briefing.md](external-authority-builder-briefing.md) | Authority builder dev briefing (6 modules, data model, tech decisions) |
| `research/aisogen-competitive-intelligence-2026.md`                              | 12+ content tools, gap analysis, pricing intelligence                  |
| `research/aisogen-competitor-platform-research-2025.md`                          | 10 platforms deep-dived (workflows, dashboards, UX, autonomy)          |
| `research/aisogen-platform-ux-research-2026.md`                                  | AI autonomy spectrum, non-technical UX patterns, MVP lessons           |
| `research/external-authority-builder-synthesis.md`                               | 5-layer authority research synthesis (100+ sources)                    |

---

## Version History

| Version | Date       | Change                                                                                                                                                    |
| ------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0     | 2026-03-12 | Initial platform structure — capability framework, full-service map, phased plan. Based on 3 research reports + existing capability docs + process model. |
