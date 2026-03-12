# SEO & AISO Capability

> **Shared agency capability** — available to all verticals and client projects.
> **Engine code:** `seo-toolkit/` repo (skills, agents, Rube recipes, Python services)
> **Vertical:** AISOGEN (aisogen.ai) — in PROD-004 → `apps/aisogen/` — multi-tenant SaaS for agencies
>
> **Hierarchy type:** Business Capability (see [Capability Hierarchy](../capability-hierarchy.md))
> **Hierarchy:** Product (PROD-004) → Vertical (AISOGEN) → **Capability (this doc)** → Engine (`seo-toolkit/`)
> **Domain:** intelligence + content
> **Last updated:** 2026-03-10
> **Status:** Partially operational — 3 of 9 functions built. Competitive analysis complete.

---

## What This Is

The agency's end-to-end SEO and AI Search Optimization (AISO) capability. Covers everything from technical audits through content creation, authority building, link acquisition, rank tracking, and reporting. Designed to run autonomously with human-in-the-loop at key decision points.

**Process architecture:** The complete process model (every sub-process, automation classification, and build roadmap) is defined in [`seo-geo-aiso-process-model.md`](seo-geo-aiso-process-model.md). That document is the definitive specification for what AISOGEN must build.

**Strategic intent:** This capability powers AISOGEN (aisogen.ai) — a multi-tenant SaaS vertical within PROD-004 for agencies, freelancers, and brands. Internal use first (prove on agency clients), then launch externally. AISOGEN is the customer-facing product. The capability engine (`seo-toolkit/` repo) is the proprietary intelligence that competitors can't replicate.

---

## Capability Map — 9 Functions

```
SEO & AISO PLATFORM
│
├── 1. AUDIT & SCORING              ✅ Production
│   ├── Skill: aiso                     (36-factor scoring framework)
│   ├── Skill: seo-aiso-validator       (audit + triage protocol)
│   ├── Recipe: Technical Audit         (Rube)
│   ├── Recipe: Content Optimizer       (Rube)
│   └── Recipe: AI Discovery Audit      (Rube)
│
├── 2. KEYWORD & MARKET INTEL       ✅ Production
│   ├── Agent: seo-researcher           (Sonnet)
│   ├── Recipe: Keyword Research        (Rube)
│   └── Recipe: SERP Analyzer           (Rube)
│
├── 3. CONTENT STRATEGY             ✅ Production (skill only)
│   └── Skill: seo-content-strategy     (hub-and-spoke, E-E-A-T, multilingual)
│
├── 4. CONTENT PIPELINE             🔴 Not built
│   ├── Skill: content-pipeline         (TO BUILD — workflow orchestration)
│   ├── Agent: content-writer           (EXISTS — needs SEO integration)
│   └── Automation: CMS publishing      (Shopify API + WordPress API)
│
├── 5. AUTHORITY BUILDER            🔴 Not built
│   ├── Skill: authority-builder        (TO BUILD — multi-platform presence)
│   ├── Agent: authority-builder        (TO BUILD — autonomous execution)
│   └── Dashboard: authority status     (TO BUILD — planning + tracking)
│
├── 6. EARNED LINK ENGINE           🔴 Not built
│   ├── Skill: earned-links             (TO BUILD — digital PR + outreach)
│   ├── Agent: link-builder             (TO BUILD — autonomous acquisition)
│   └── Dashboard: link tracking        (TO BUILD — pipeline + status)
│
├── 7. RANK TRACKING & REPORTING    🔴 Not built
│   ├── Skill: rank-tracker             (TO BUILD — multi-platform monitoring)
│   ├── Agent: seo-reporter             (TO BUILD — automated reports)
│   └── Recipe: Rank Tracker            (TO BUILD — Rube service)
│
├── 8. COMPETITOR INTELLIGENCE      🔴 Not built  ← NEW (from gap analysis)
│   ├── Skill: competitor-benchmark     (TO BUILD — per-client competitive view)
│   └── Dashboard: competitor tracker   (TO BUILD — "Client X vs Competitor Y")
│
└── 9. ON-PAGE AUTOMATION           🔴 Not built  ← NEW (from gap analysis)
    ├── Skill: onpage-automation        (TO BUILD — bulk meta/schema/linking fixes)
    └── Automation: CMS push            (TO BUILD — push changes to Shopify/WP)
```

> **Functions 8 and 9 added after competitive gap analysis (2026-03-10).** Competitor benchmarking and on-page automation are table-stakes features that all major SEO platforms offer. Without them, the platform has a visible gap vs Semrush/Ahrefs/SE Ranking.

---

## Current Inventory — What Exists Today

### Skills (3 production)

| Skill                  | Version | Maturity   | Lessons Logged |
| ---------------------- | ------- | ---------- | -------------- |
| `aiso`                 | 1.0     | Production | 4              |
| `seo-content-strategy` | 1.0     | Production | 4              |
| `seo-aiso-validator`   | 1.0     | Production | 14             |

### Agents (1 production)

| Agent            | Model  | Maturity   | Skills Used                                              |
| ---------------- | ------ | ---------- | -------------------------------------------------------- |
| `seo-researcher` | Sonnet | Production | aiso, competitive-ads-extractor, lead-research-assistant |

### Rube Recipes (5 production)

| Recipe                  | ID                 | Tested On                           |
| ----------------------- | ------------------ | ----------------------------------- |
| Technical Audit         | `rcp_fUfiRNt8Bh8b` | LOE (90/100), HG (87/100)           |
| Content Optimizer       | `rcp_-msCRAZI2mln` | LOE (74/100), HG (64/100)           |
| Keyword Research        | `rcp_083WOBwKYeNo` | LOE (7 clusters), HG (104 keywords) |
| SERP Analyzer           | `rcp_tebS66AkhuYq` | LOE, HG                             |
| AI Discovery Audit v2.0 | `rcp_3LBwPfkiTtRT` | HG (79/100)                         |

### Research (2 documents)

| Document                                          | Lines | Sources |
| ------------------------------------------------- | ----- | ------- |
| `research/ai-visibility-optimization-research.md` | 800+  | 40+     |
| `research/seo-content-strategy-best-practices.md` | 700+  | 30+     |

### Client Implementations (2 active)

| Client          | Technical   | AISO        | Content     | Organic Traffic |
| --------------- | ----------- | ----------- | ----------- | --------------- |
| Hairgenetix     | 87/100      | 79/100      | 64/100      | 1,385 clicks/mo |
| Love Over Exile | 90/100      | 100/100     | 63/100      | ~0 clicks/mo    |
| Skingenetix     | Not audited | Not audited | Not audited | Unknown         |

---

## Build Plan — 4 New Functions

### Function 4: Content Pipeline

**What it does:** Autonomously researches, writes, optimises, and publishes SEO-optimised articles. Manages the full lifecycle from keyword gap → published article → performance tracking. Human approves before publish.

**Automation level:** ~80% autonomous. Human reviews briefs and approves final articles.

**Components to build:**

| Component                     | Type     | What It Does                                                                   |
| ----------------------------- | -------- | ------------------------------------------------------------------------------ |
| `content-pipeline`            | Skill    | Orchestration workflow: brief → draft → review → optimise → publish → monitor  |
| `content-writer` agent update | Agent    | Extend existing agent with SEO scoring, E-E-A-T checks, multilingual drafting  |
| Shopify blog publisher        | Tool     | Publish articles via Shopify REST API (blog posts, images, tags, SEO meta)     |
| WordPress blog publisher      | Tool     | Publish articles via WP REST API (posts, categories, featured images)          |
| Content brief template        | Template | Standardised brief format: keyword, intent, outline, competitors, E-E-A-T plan |
| Quality gate checklist        | Process  | Factual accuracy, brand voice, SEO score >80, E-E-A-T signals, layout impact   |

**Key design decisions:**

- AI generates first drafts, human expert reviews for factual accuracy (especially YMYL health content)
- Multilingual: generate natively per language, not translate (better SEO)
- All articles get AISO optimisation: answer-first intros, question headings, snippet-ready definitions, citations
- Publishing is a soft block — always confirm with Malcolm before pushing live

---

### Function 5: Authority Builder

**What it does:** Builds brand authority signals that AI models and search engines cite. Manages presence across Reddit, YouTube, expert platforms, directories, and earned media. Tracks "Share of Model" (how often AI models mention the brand).

**Automation level:** ~40% autonomous. Most authority actions need human voice/judgement, but research, monitoring, scheduling, and tracking are automated.

**Components to build:**

| Component              | Type       | What It Does                                                                     |
| ---------------------- | ---------- | -------------------------------------------------------------------------------- |
| `authority-builder`    | Skill      | Framework: 6 authority channels, per-platform playbooks, measurement methodology |
| `authority-builder`    | Agent      | Monitors mentions, identifies opportunities, prepares drafts, tracks progress    |
| Authority dashboard    | App        | Planning interface, channel status, opportunity queue, human action items        |
| Brand mention monitor  | Automation | Track mentions across Reddit, forums, news, YouTube (alerts + scraping)          |
| Share of Model tracker | Automation | Periodic AI model queries to measure brand citation frequency                    |

**6 Authority Channels:**

| Channel                                                      | Automatable                           | Human Role                     |
| ------------------------------------------------------------ | ------------------------------------- | ------------------------------ |
| **Reddit** — Community presence in relevant subreddits       | Research + monitoring                 | Write authentic posts/comments |
| **YouTube** — Educational content + SEO                      | Scripts + SEO + thumbnails            | Record/present videos          |
| **Expert platforms** — HARO/Featured/Qwoted/SourceOfSources  | Monitor queries + draft responses     | Review + personalise + send    |
| **Directory presence** — Niche directories, review platforms | Submission + monitoring               | Verify listings                |
| **Earned media** — Digital PR, trade publications            | Research journalists + track coverage | Build relationships + pitch    |
| **Knowledge graph** — Wikipedia, Wikidata, Google Business   | Research + draft entries              | Submit + verify                |

**Key design decisions:**

- Reddit and expert platform responses MUST sound human — AI-generated responses get banned
- Brand search volume is the #1 predictor of AI citations — all channels feed this
- Track per-platform: ChatGPT cites Wikipedia (#1), Perplexity cites Reddit (#1), Gemini cites brand sites (52%)
- Unlinked mentions still build authority — don't only chase links
- Trade/niche publications are disproportionately cited by LLMs

---

### Function 6: Earned Link Engine

**What it does:** Acquires high-quality backlinks through content-led strategies, digital PR, expert positioning, and brand mention conversion. No link schemes, no paid links — only earned editorial links.

**Automation level:** ~50% autonomous. Research, monitoring, and outreach tracking are automated. Pitch writing and relationship building need human touch.

**Components to build:**

| Component                | Type      | What It Does                                                                        |
| ------------------------ | --------- | ----------------------------------------------------------------------------------- |
| `earned-links`           | Skill     | Framework: 5 acquisition strategies, prospect scoring, outreach templates, tracking |
| `link-builder`           | Agent     | Finds opportunities, scores prospects, prepares outreach, tracks pipeline           |
| Link pipeline dashboard  | App       | Prospect queue, outreach status, conversion tracking, link inventory                |
| Brand mention monitor    | Shared    | Same as Authority Builder — convert unlinked mentions to links                      |
| Linkable asset templates | Templates | Data studies, comparison guides, free tools, infographics                           |

**5 Acquisition Strategies:**

| Strategy                                                            | Automatable            | Expected Links/Month |
| ------------------------------------------------------------------- | ---------------------- | -------------------- |
| **Digital PR** — Newsworthy content + journalist outreach           | Research + targeting   | 2-5 high-authority   |
| **Expert sourcing** — HARO/Featured/Qwoted responses                | Monitor + draft        | 3-8 medium-authority |
| **Linkable assets** — Original data/tools others cite               | Create + promote       | 1-3 high-authority   |
| **Mention conversion** — Find unlinked mentions, request link       | Monitor + outreach     | 2-5 medium-authority |
| **Guest expertise** — Contribute expert quotes to existing articles | Identify opportunities | 1-3 high-authority   |

**Key design decisions:**

- Quality over quantity — 1 editorial link from a trade publication > 100 directory links
- Link value has dropped for AI citations (brand signals matter more) — but still critical for traditional SEO
- HARO/expert sourcing requires speed (respond within hours) — monitor automation is essential
- Never buy links, never use PBNs, never mass-outreach — Google penalties kill everything

---

### Function 7: Rank Tracking & Reporting

**What it does:** Monitors keyword rankings, AI citation frequency, traffic, and content performance across all clients. Produces automated reports (weekly + monthly). Feeds performance data back into content pipeline decisions.

**Automation level:** ~90% autonomous. Data collection and report generation are fully automated. Strategic interpretation needs human review.

**Components to build:**

| Component                 | Type      | What It Does                                                             |
| ------------------------- | --------- | ------------------------------------------------------------------------ |
| `rank-tracker`            | Skill     | Multi-platform monitoring: Google, Bing, AI models, per-keyword tracking |
| `seo-reporter`            | Agent     | Compiles data into actionable reports with trend analysis                |
| Rank Tracker recipe       | Rube      | Scheduled data collection via SerpAPI/DataForSEO                         |
| Report templates          | Templates | Weekly (operational) + Monthly (strategic) + Quarterly (AISO re-audit)   |
| Performance feedback loop | Process   | Rankings → content pipeline (what to write/update next)                  |

**Metrics tracked:**

| Metric                            | Source                    | Frequency |
| --------------------------------- | ------------------------- | --------- |
| Keyword rankings (Google)         | SerpAPI / GSC             | Weekly    |
| AI citation frequency             | Share of Model queries    | Monthly   |
| Organic traffic + clicks          | GSC                       | Weekly    |
| Content performance (per article) | GSC + GA4                 | Monthly   |
| Backlink profile                  | Ahrefs / DataForSEO       | Monthly   |
| Technical health score            | Technical Audit recipe    | Quarterly |
| AISO score                        | AI Discovery Audit recipe | Quarterly |

---

## App Interface Design — All Functions

Each autonomous function (Content Pipeline, Authority Builder, Earned Link Engine) needs a human interface for planning, status, and intervention. Design:

### Shared Dashboard Architecture

```
SEO AISO COCKPIT (single-page app or agency dashboard tab)
│
├── OVERVIEW
│   ├── Per-client scorecards (Technical / AISO / Content / Authority / Links)
│   ├── Active pipeline counts (articles in progress, links in pipeline, authority actions)
│   └── Key alerts (ranking drops, new opportunities, blocked items)
│
├── CONTENT PIPELINE
│   ├── Brief queue (keyword → approved brief → in-progress → review → published)
│   ├── Article status cards (title, keyword, stage, assigned, score)
│   ├── Performance tracker (published articles → rankings → traffic → conversions)
│   └── ACTION: Approve brief / Review draft / Approve publish
│
├── AUTHORITY BUILDER
│   ├── Channel status (Reddit / YouTube / Expert / Directory / Media / Knowledge Graph)
│   ├── Opportunity queue (new mentions, expert queries, directory gaps)
│   ├── Share of Model trend (monthly SoM per platform per client)
│   └── ACTION: Approve Reddit post / Review expert response / Assign video topic
│
├── EARNED LINK ENGINE
│   ├── Prospect pipeline (identified → contacted → responded → link live)
│   ├── Mention monitor (new unlinked mentions, conversion opportunities)
│   ├── Link inventory (all acquired links by domain, authority, date)
│   └── ACTION: Approve outreach / Review pitch / Update prospect status
│
└── RANK TRACKING
    ├── Keyword rankings (weekly trend, position changes, featured snippets)
    ├── AI citations (monthly SoM by platform)
    ├── Traffic overview (organic clicks, top pages, growth)
    └── Reports (weekly auto-generated, monthly strategic)
```

**Implementation approach:** AISOGEN is a **vertical** within PROD-004 SaaS Platform (`apps/aisogen/`). It inherits auth, billing, multi-tenancy, and white-label from the shared platform layer. SEO-specific UI and features are built as a vertical app. The capability engine (`seo-toolkit/` repo) provides the proprietary intelligence — skills, agents, and recipes that power the vertical but stay separate and proprietary.

> **HIERARCHY NOTE (2026-03-10):** Platform (PROD-004) → Vertical (AISOGEN) → Capability (this doc) → Engine (`seo-toolkit/`). Dashboard and UI live in the vertical. Skills and agents live in the engine. Shared infra lives in the platform.

---

## Competitive Landscape (Researched 2026-03-10)

The market has **three distinct camps that don't overlap** — and that's the opportunity.

### Camp 1: Traditional SEO Incumbents (adding AI as bolt-on)

| Platform       | Price                                | AISO Coverage                                         | Gap                                                                     |
| -------------- | ------------------------------------ | ----------------------------------------------------- | ----------------------------------------------------------------------- |
| **Semrush**    | $140-500/mo (+$99/mo AI add-on)      | AI Visibility Toolkit (ChatGPT + Google AI Overviews) | AISO is an expensive add-on, no content pipeline, no authority building |
| **Ahrefs**     | $129-1,499/mo (+$199/mo Brand Radar) | Brand Radar tracks 271M prompts across 6 AI platforms | Most expensive, AISO bolted on, no content pipeline                     |
| **SE Ranking** | $65-119/mo (+$89/mo AI Search)       | Best integrated SEO+AISO at mid-market price          | Still an add-on, no content pipeline, no authority building             |
| **Moz**        | $49-599/mo                           | Minimal AI features, no AISO tracking                 | Falling behind                                                          |

### Camp 2: AISO-Only Monitors (no traditional SEO)

| Platform       | Price    | Strength                                        | Gap                       |
| -------------- | -------- | ----------------------------------------------- | ------------------------- |
| **Otterly.ai** | $189/mo  | Pioneer "Share of AI Voice" metric, 6 platforms | No traditional SEO at all |
| **Profound**   | $399/mo  | Buyer-journey simulation, SOC 2                 | Enterprise only, no SEO   |
| **Peec AI**    | ~€199/mo | Clean UX, 6 engines, sentiment                  | No optimization tools     |
| **Siftly**     | Contact  | Citation tracking + content generation          | Limited scope             |

### Camp 3: Content Optimization Specialists (limited AISO)

| Platform       | Price      | Strength                                             | Gap                            |
| -------------- | ---------- | ---------------------------------------------------- | ------------------------------ |
| **Surfer SEO** | $89-219/mo | Real-time content scoring, NLP                       | No rank tracking, no authority |
| **Frase**      | $15-38/mo  | "Agentic SEO & GEO Platform" — content + AI tracking | Growing but limited            |
| **MarketMuse** | $99-999/mo | Topical authority planning                           | No AISO, enterprise pricing    |

### What Nobody Has

| Feature                                                              | Market Status                                                       |
| -------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Authority Building** (Reddit, YouTube, expert platforms, media)    | **Complete white space** — no platform does this                    |
| **Earned Link Engine** (digital PR, HARO, mention conversion)        | **White space** — HARO degraded, manual only                        |
| **End-to-end content pipeline** (research → write → publish → track) | **Partial** — Relixir (closest), Scalenut, Writesonic each do parts |
| **Unified SEO + AISO in one native platform**                        | **Gap** — everyone bolts AISO on as add-on                          |
| **White-label agency reporting with AI metrics**                     | **Nobody offers this**                                              |
| **Per-client "Client X vs Competitor Y" across all metrics**         | **Partially** — Semrush/Ahrefs do this for traditional SEO only     |

### Our Competitive Position

| Our Function                            | vs Market                                            | Advantage Level                             |
| --------------------------------------- | ---------------------------------------------------- | ------------------------------------------- |
| 1. Audit & Scoring (SEO + AISO unified) | Nobody combines both in a single score               | **Strong differentiator**                   |
| 2. Keyword & Market Intel               | Mature market, hard to out-data Semrush/Ahrefs       | Moderate — needs AI keyword angle           |
| 3. Content Strategy                     | Mature (MarketMuse, Frase, Surfer)                   | Differentiator if dual-mapped (Google + AI) |
| 4. Content Pipeline                     | No one does the full loop with post-publish tracking | **Major differentiator**                    |
| 5. Authority Builder                    | **Nobody has this as an integrated feature**         | **Biggest competitive advantage**           |
| 6. Earned Link Engine                   | **No SaaS solution exists**                          | **Major differentiator**                    |
| 7. Rank Tracking & Reporting            | Unified traditional + AI reporting with white-label  | Differentiator (unified view)               |
| 8. Competitor Intelligence              | Table stakes — must have to compete                  | Parity requirement                          |
| 9. On-Page Automation                   | Alli AI leads here                                   | Parity requirement                          |

**Bottom line:** Functions 5 (Authority Builder) and 6 (Earned Link Engine) are genuinely unprecedented. Functions 1, 4, and 7 are strong differentiators because nobody integrates SEO + AISO natively. Functions 8 and 9 are table stakes we need for credibility.

---

## SaaS Product Evaluation

### Market Opportunity

| Metric                                  | Value                                        |
| --------------------------------------- | -------------------------------------------- |
| SEO services market (2026)              | $83.98B (12.3% CAGR)                         |
| GEO/AISO market (projected 2031)        | $7.3B (34% CAGR)                             |
| AI traffic growth                       | +527% YoY                                    |
| Agencies using 5-8 separate tools today | Standard — massive consolidation opportunity |

### Recommended Product Tiers

| Tier                        | Target              | Price       | Scope                                                      |
| --------------------------- | ------------------- | ----------- | ---------------------------------------------------------- |
| **Starter** (Freelancer)    | Solo consultants    | $79-99/mo   | 3 projects, audit + keywords + AI visibility               |
| **Professional** (Agency)   | Small agencies      | $199-299/mo | 15 projects, full pipeline, authority builder, white-label |
| **Business** (Large Agency) | Mid-market agencies | $499-799/mo | 50+ projects, earned links, API, bulk operations           |
| **Enterprise**              | Enterprise          | Custom      | Unlimited, SSO, dedicated support                          |

Plus usage-based overlay: AI content generation (per article), AI citation monitoring (per prompt), authority actions (per engagement).

### Tech Stack (Lean MVP)

| Layer              | Choice                       | Why                                            |
| ------------------ | ---------------------------- | ---------------------------------------------- |
| Frontend + Backend | Next.js 14/15 (full-stack)   | API routes + SSR + edge in one framework       |
| Database + Auth    | Supabase (Postgres + RLS)    | Multi-tenant isolation built-in, instant auth  |
| Payments           | Stripe (Checkout + Billing)  | Subscriptions + usage-based billing            |
| Hosting            | Vercel                       | Zero-config Next.js deployment                 |
| UI                 | Tailwind CSS + shadcn/ui     | Fast, consistent design                        |
| AI/LLM             | Claude API + OpenAI + Gemini | Content gen + AI monitoring + cross-validation |

**Monthly infrastructure cost at MVP: $100-300/month.** Multi-tenancy via shared database with `tenant_id` + Postgres Row Level Security.

### Go-to-Market Strategy

1. **Agency-first** — 50 agencies at $199/mo = $10K MRR. Each agency serves 10-50 clients = built-in distribution
2. **Dogfooding** — Use the platform on our own clients (Hairgenetix, LOE, Skingenetix) to generate case studies
3. **Freemium audit tool** — Free site audit + AISO score to capture leads (Semrush's proven playbook)
4. **Content marketing** — If our SEO tool can't rank itself, nobody will trust it
5. **Agency white-label** — Agencies become distribution partners, not just customers

### Two-Layer Architecture

```
┌─────────────────────────────────────────────────────┐
│  PLATFORM LAYER (sellable SaaS product)             │
│  ── Next.js app, multi-tenant, white-label          │
│  ── Dashboard, pipelines, tracking, reporting       │
│  ── CMS publishing, mention monitoring              │
│  ── API for integrations                            │
├─────────────────────────────────────────────────────┤
│  ENGINE LAYER (proprietary — stays in agency)       │
│  ── Skills (aiso, seo-content-strategy, etc.)       │
│  ── Agents (seo-researcher, content-writer, etc.)   │
│  ── Rube recipes (audit, keyword, SERP, etc.)       │
│  ── Research corpus (40+ sources, 1500+ lines)      │
└─────────────────────────────────────────────────────┘
```

The **Platform Layer** is what customers see and use. The **Engine Layer** is our proprietary intelligence that powers the platform — skills, agents, and research that competitors can't replicate. This separation means we can sell access to the platform without giving away our methodology.

---

## Build Sequence — Prioritised

### Phase 1: Foundation (Week 1-2)

> Extend what works. Build the skills and agents that enable everything else.

| #   | Task                                               | Type     | Depends On | Effort |
| --- | -------------------------------------------------- | -------- | ---------- | ------ |
| 1.1 | Create `content-pipeline` skill                    | Skill    | —          | Medium |
| 1.2 | Update `content-writer` agent with SEO integration | Agent    | 1.1        | Medium |
| 1.3 | Create `rank-tracker` skill                        | Skill    | —          | Medium |
| 1.4 | Create `seo-reporter` agent                        | Agent    | 1.3        | Medium |
| 1.5 | Build Rank Tracker Rube recipe                     | Recipe   | 1.3        | Small  |
| 1.6 | Create weekly + monthly report templates           | Template | 1.4        | Small  |

### Phase 2: Content Machine (Week 2-3)

> Get articles flowing. This is the biggest impact on rankings.

| #   | Task                                                               | Type      | Depends On | Effort |
| --- | ------------------------------------------------------------------ | --------- | ---------- | ------ |
| 2.1 | Build Shopify blog publisher (REST API)                            | Tool      | 1.1        | Medium |
| 2.2 | Build WordPress blog publisher (WP REST API)                       | Tool      | 1.1        | Medium |
| 2.3 | Create content brief template                                      | Template  | 1.1        | Small  |
| 2.4 | Define quality gate checklist                                      | Process   | 1.1, 1.2   | Small  |
| 2.5 | Create `PROD-001-seo-content-pipeline` objective (update existing) | Objective | 2.1-2.4    | Small  |
| 2.6 | First test: generate 3 article briefs for Hairgenetix              | Test      | 2.1-2.5    | Medium |
| 2.7 | First test: draft + publish 1 article on Hairgenetix               | Test      | 2.6        | Medium |

### Phase 3: Authority & Links (Week 3-4)

> Build the harder, relationship-driven functions.

| #   | Task                                                     | Type  | Depends On | Effort |
| --- | -------------------------------------------------------- | ----- | ---------- | ------ |
| 3.1 | Create `authority-builder` skill                         | Skill | —          | Large  |
| 3.2 | Create `authority-builder` agent                         | Agent | 3.1        | Medium |
| 3.3 | Create `earned-links` skill                              | Skill | —          | Large  |
| 3.4 | Create `link-builder` agent                              | Agent | 3.3        | Medium |
| 3.5 | Build brand mention monitoring automation                | Tool  | 3.1, 3.3   | Medium |
| 3.6 | Build Share of Model tracker automation                  | Tool  | 3.1        | Medium |
| 3.7 | Create expert platform monitoring (HARO/Featured/Qwoted) | Tool  | 3.3        | Medium |

### Phase 4: Table Stakes (Week 4-5)

> Add competitor intelligence and on-page automation — needed for platform credibility.

| #   | Task                                                                | Type       | Depends On | Effort |
| --- | ------------------------------------------------------------------- | ---------- | ---------- | ------ |
| 4.1 | Create `competitor-benchmark` skill                                 | Skill      | —          | Medium |
| 4.2 | Create `onpage-automation` skill                                    | Skill      | —          | Medium |
| 4.3 | Build on-page push for Shopify (meta, schema, links via API)        | Tool       | 4.2        | Medium |
| 4.4 | Build on-page push for WordPress (meta, schema, links via REST API) | Tool       | 4.2        | Medium |
| 4.5 | Schedule recurring rank tracking (weekly launchd)                   | Automation | 1.5        | Small  |
| 4.6 | Schedule recurring AISO re-audit (quarterly launchd)                | Automation | —          | Small  |
| 4.7 | Schedule weekly SEO report generation                               | Automation | 1.4, 1.6   | Small  |
| 4.8 | Create autonomous objectives for all functions                      | Objectives | All        | Medium |

### Phase 5: Client Validation (Week 5-6)

> Prove everything on real clients before building the SaaS platform.

| #   | Task                                                       | Type    | Depends On   | Effort |
| --- | ---------------------------------------------------------- | ------- | ------------ | ------ |
| 5.1 | Hairgenetix: run full content pipeline (5 articles)        | Client  | Phase 2      | Large  |
| 5.2 | Hairgenetix: authority builder baseline + plan             | Client  | Phase 3      | Medium |
| 5.3 | Hairgenetix: earned link engine activation                 | Client  | Phase 3      | Medium |
| 5.4 | Love Over Exile: run full content pipeline (5 articles)    | Client  | Phase 2      | Large  |
| 5.5 | Skingenetix: first full audit (Technical + AISO + Content) | Client  | Phase 1      | Medium |
| 5.6 | Skingenetix: content pipeline activation                   | Client  | Phase 2, 5.5 | Large  |
| 5.7 | Document case studies from all 3 clients                   | Content | 5.1-5.6      | Medium |

### Phase 6: SaaS Platform MVP (Week 7-10)

> Build the standalone multi-tenant web application.

| #    | Task                                                              | Type        | Depends On | Effort |
| ---- | ----------------------------------------------------------------- | ----------- | ---------- | ------ |
| 6.1  | Create product repo (Next.js + Supabase + Stripe + Vercel)        | Setup       | —          | Medium |
| 6.2  | Design database schema (multi-tenant with RLS)                    | Design      | 6.1        | Large  |
| 6.3  | Build auth + tenant management + onboarding                       | Platform    | 6.1, 6.2   | Large  |
| 6.4  | Build Overview dashboard (per-client scorecards)                  | Platform    | 6.3        | Large  |
| 6.5  | Build Content Pipeline UI (brief queue, article cards, approvals) | Platform    | 6.3        | Large  |
| 6.6  | Build Authority Builder UI (channels, opportunities, SoM)         | Platform    | 6.3        | Large  |
| 6.7  | Build Earned Link Engine UI (pipeline, mentions, inventory)       | Platform    | 6.3        | Large  |
| 6.8  | Build Rank Tracking & Reporting UI (keywords, AI citations)       | Platform    | 6.3        | Large  |
| 6.9  | Build Competitor Intelligence UI (benchmarks, gap analysis)       | Platform    | 6.3        | Medium |
| 6.10 | Integrate Engine Layer APIs (skills → platform endpoints)         | Integration | 6.4-6.9    | Large  |
| 6.11 | Build white-label system (custom branding, subdomains)            | Platform    | 6.3        | Medium |
| 6.12 | Set up Stripe billing (subscription tiers + usage credits)        | Billing     | 6.3        | Medium |
| 6.13 | Deploy to Vercel, set up domain, SSL                              | DevOps      | 6.1-6.12   | Small  |
| 6.14 | Internal beta — migrate agency clients to platform                | Test        | 6.13       | Large  |

### Phase 7: Launch Preparation (Week 11-12)

> Polish, document, and prepare for external users.

| #   | Task                                                     | Type      | Depends On | Effort |
| --- | -------------------------------------------------------- | --------- | ---------- | ------ |
| 7.1 | Build freemium audit tool (free site audit + AISO score) | Growth    | Phase 6    | Large  |
| 7.2 | Create landing page + marketing site                     | Marketing | Phase 6    | Large  |
| 7.3 | Write 3 case studies from agency clients                 | Content   | Phase 5    | Medium |
| 7.4 | Set up affiliate programme                               | Growth    | 7.2        | Small  |
| 7.5 | ProductHunt launch preparation                           | Marketing | 7.1-7.3    | Medium |
| 7.6 | Agency partner outreach (first 10 beta agencies)         | Sales     | Phase 6    | Medium |

---

## Target State — After Full Build

```
SEO & AISO PLATFORM — FULLY OPERATIONAL
│
├── Skills: 9 (aiso, seo-content-strategy, seo-aiso-validator, content-pipeline,
│               authority-builder, earned-links, rank-tracker, competitor-benchmark,
│               onpage-automation)
├── Agents: 5 (seo-researcher, content-writer, authority-builder, link-builder,
│               seo-reporter)
├── Recipes: 6 (Technical Audit, Content Optimizer, Keyword Research,
│               SERP Analyzer, AI Discovery Audit, Rank Tracker)
├── Platform: 1 (standalone SaaS — Next.js + Supabase + Stripe + Vercel)
│   ├── 6 dashboard views (Overview, Content, Authority, Links, Rank, Competitor)
│   ├── Multi-tenant with white-label
│   ├── Freemium lead-gen tool
│   └── 4 pricing tiers
├── Automations: 3 (weekly rank tracking, quarterly re-audit, weekly reporting)
└── Clients: 3 internal (Hairgenetix, Love Over Exile, Skingenetix) + external
```

**Total build items:** 48 tasks across 7 phases (~12 weeks)

---

## Dependencies & Risks

| Risk                                                      | Impact | Mitigation                                                               |
| --------------------------------------------------------- | ------ | ------------------------------------------------------------------------ |
| YMYL content quality — health content needs expert review | High   | Mandatory human review gate for all health articles                      |
| Reddit bans promotional accounts                          | Medium | Authentic engagement only, human writes all Reddit posts                 |
| HARO response speed (hours, not days)                     | Medium | Automated monitoring + push notification to Malcolm                      |
| Shopify blog API limitations                              | Medium | Test thoroughly before building pipeline (file size, formatting)         |
| Share of Model measurement is manual                      | Low    | Automate with scheduled AI queries + response parsing                    |
| GA4 not installed on Hairgenetix                          | Low    | Can't measure article traffic until Malcolm installs it                  |
| AI SaaS gross margins (~52%) vs traditional SaaS (80%)    | High   | Model routing (cheap models for 80% of tasks), caching, credit system    |
| Semrush/Ahrefs could add AISO natively                    | Medium | Speed to market — authority builder + earned links are hard to replicate |
| Multi-tenant security (tenant data isolation)             | High   | Postgres RLS, API-level enforcement, no client-side tenant trust         |
| Scope creep — 48 tasks is ambitious for 1-2 people        | High   | Phase 1-5 (engine) first, Phase 6-7 (platform) only after validation     |

---

## Connected Documentation

| Document                                           | What                                    |
| -------------------------------------------------- | --------------------------------------- |
| `~/.claude/skills/aiso/SKILL.md`                   | 36-factor AISO scoring framework        |
| `~/.claude/skills/seo-content-strategy/SKILL.md`   | Content strategy methodology            |
| `~/.claude/skills/seo-aiso-validator/SKILL.md`     | Audit + triage protocol                 |
| `~/.claude/agents/seo-researcher/AGENT.md`         | Market intelligence agent               |
| `research/ai-visibility-optimization-research.md`  | AI visibility research (40+ sources)    |
| `research/seo-content-strategy-best-practices.md`  | Content strategy research (30+ sources) |
| `docs/todo.md`                                     | Global task tracking                    |
| `objectives/PROD-001-seo-content-pipeline.md`      | Content pipeline objective              |
| `objectives/PROD-001-seo-apply-recommendations.md` | SEO audit recommendations objective     |

---

## Research Sources — Competitive Analysis (2026-03-10)

Competitive landscape data sourced from 30+ sources including:

- Conductor AEO/GEO benchmarks report (2026)
- GenerateMore AI visibility tools comparison
- SE Ranking product vision 2026
- Otterly.ai, Profound, Peec AI, Siftly, AthenaHQ, Relixir platform evaluations
- Semrush, Ahrefs, Moz, Surfer SEO, Frase, MarketMuse pricing and feature analysis
- SaaS pricing benchmarks (Monetizely, Chargebee, MRRSaver 2026 reports)
- Multi-tenant architecture patterns (Supabase, Vercel, Postgres RLS guides)
- SEO services market sizing ($83.98B, 12.3% CAGR)
- GEO/AISO market sizing ($7.3B projected 2031, 34% CAGR)
