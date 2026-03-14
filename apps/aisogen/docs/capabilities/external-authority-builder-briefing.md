# External Authority Builder — Development Project Briefing

> **Document type:** Development project briefing (input to E2E AI Delivery framework)
> **Project:** External Authority Builder (EAB)
> **Product hierarchy:** PROD-004 (SaaS Platform) → AISOGEN (Vertical) → SEO & AISO Capability → **External Authority Builder (Function 5)**
> **Engine repo:** `seo-toolkit/` (skills, agents, scripts)
> **SaaS UI:** `saas-platform/apps/aisogen/` (when built)
> **Capability doc:** [external-authority-builder.md](external-authority-builder.md)
> **Research:** [research/external-authority-builder-synthesis.md](../../research/external-authority-builder-synthesis.md) + 5 layer-specific reports
> **Date:** 2026-03-11
> **Status:** Briefing complete — ready for spec-driven development (Rule #14)

---

## 1. What We're Building

An **External Authority Builder** — a modular function that systematically builds the off-site authority signals that drive 70-77% of AI citations. It operates across 5 layers (Entity, Reviews, Community, Content Distribution, Earned Media) with monitoring, intelligence, execution assistance, and attribution.

### Two Deployment Modes

| Mode                     | Where                                                  | Who                                                                        | When                                          |
| ------------------------ | ------------------------------------------------------ | -------------------------------------------------------------------------- | --------------------------------------------- |
| **Agency capability**    | `seo-toolkit/` (skills + agents) + `~/.claude/skills/` | Claude Code for agency clients (Hairgenetix, Skingenetix, Love Over Exile) | Release 1 (Q2 2026) — Sprint 1.4 per roadmap  |
| **AISOGEN SaaS feature** | `saas-platform/apps/aisogen/` (multi-tenant UI)        | External agencies, freelancers, brands                                     | Release 2 (Q3 2026) — when platform MVP ships |

Both modes share the same engine code. The agency capability is the "prove it works" phase. AISOGEN is the "sell it" phase.

### Alignment with Existing Plans

This function is already mapped in three places:

- **Capability map:** Function 5 (Authority Builder) in [aisogen-capability.md](aisogen-capability.md) — currently 🔴 Not built
- **Roadmap:** Sprint 1.4 (Week 7-8) in [aisogen-product-roadmap.md](aisogen-product-roadmap.md)
- **Feature inventory:** Category 6 (15 features) + Category 7 (19 features) in [aisogen-functional-design.md](aisogen-functional-design.md)

This briefing consolidates the research, sharpens the scope, and creates the input for spec-driven development.

---

## 2. Why This Function First

### The Business Case

| Fact                                         | Data                                               |
| -------------------------------------------- | -------------------------------------------------- |
| Hairgenetix ChatGPT SoM                      | **0%** — completely invisible                      |
| Hairgenetix Gemini SoM                       | **20%** — only for GHK-Cu-specific queries         |
| Hairgenetix technical SEO score              | **9/10** — already excellent                       |
| Hairgenetix authority score                  | **4.5/10** — the bottleneck                        |
| % of AI citations from external sources      | **70-77%**                                         |
| Brand search volume as AI citation predictor | **0.334 correlation** (strongest single predictor) |
| Domain Authority as AI citation predictor    | **0.18 correlation** (near zero)                   |

On-page optimisation is done. Technical SEO is done. The only lever left is **external authority** — and no tool on the market addresses this end-to-end.

### The Market Gap

Every existing tool either monitors AI visibility (Profound, Otterly, Semrush, Ahrefs) OR manages one channel (Birdeye for reviews, Muck Rack for PR, BuzzStream for outreach). **No tool builds external authority across all 5 layers with AI citation attribution.**

| What exists                                           | What's missing                                            |
| ----------------------------------------------------- | --------------------------------------------------------- |
| AI visibility monitoring (read-only)                  | Authority building execution (read-write)                 |
| Single-channel management (reviews OR PR OR listings) | Cross-channel orchestration (all 5 layers)                |
| Traditional SEO metrics (DA, backlinks)               | AI-specific metrics (SoM, citation rate, entity presence) |
| Enterprise pricing ($500+/mo)                         | SMB-accessible pricing (<$100/mo)                         |

### Competitive Moat

Our research identified **11 specific features** where no competitor product exists:

| #   | Feature                        | Why Unique                                                                     |
| --- | ------------------------------ | ------------------------------------------------------------------------------ |
| 1   | Entity Audit + Builder         | No tool scores entity presence across 7+ platforms at SMB pricing              |
| 2   | sameAs Schema Generator        | No competitor auto-generates from entity data                                  |
| 3   | Wikidata Creation Wizard       | No tool guides P-property selection step-by-step                               |
| 4   | Community Intelligence         | GummySearch died (135K users displaced); no AI citation prediction tool        |
| 5   | Review Platform Audit          | No tool reports crawler access status per review platform                      |
| 6   | YouTube AI Optimizer           | No tool combines transcript cleaning + chapter generation + VideoObject schema |
| 7   | Press Release Formatter        | No tool optimises press releases for AI citation (SOAR format)                 |
| 8   | Wikipedia Eligibility Assessor | No tool scores notability or tracks coverage toward Wikipedia threshold        |
| 9   | Publication Scorer             | No tool tests which outlets appear in AI responses for target queries          |
| 10  | Attribution Chain              | No tool connects community mention → AI citation → traffic → conversion        |
| 11  | Multi-Language Support         | No authority tool works across 9+ languages                                    |

---

## 3. Research Foundation (100+ Sources)

Five parallel research agents completed deep investigation on 2026-03-11. All findings are from 2025-2026 sources.

### Layer 1: Entity Establishment

**Research file:** `research/entity-establishment-aiso-research.md` (25 sources)

| Finding                                                                   | Impact                                                 |
| ------------------------------------------------------------------------- | ------------------------------------------------------ |
| sameAs linking = 2-3x higher AI weighting                                 | Schema App case study: +19.72% AIO visibility          |
| LinkedIn = #2 most cited domain across AI (11%)                           | Company Pages cited 59% by Perplexity                  |
| Wikidata has NO notability requirement                                    | Any brand can create an entry; AI indexing in hours    |
| The "Closed Loop" — all entities point to same domain, domain points back | Consistency = confidence = citation                    |
| OpenCorporates = most underused entity signal                             | Official government data, high-confidence verification |
| Knowledge Panel emergence: 3-6 months from zero                           | Faster with Wikipedia (2-8 weeks)                      |

**Key competitors:** Yext ($500+/mo), Kalicube Pro (agency-only), BrightLocal ($29-79/mo, no AI), Schema App (developer-focused)

### Layer 2: Review & Trust Signals

**Research file:** `research/aiso-review-trust-signals-research.md` (20 sources)

| Finding                                                     | Impact                                              |
| ----------------------------------------------------------- | --------------------------------------------------- |
| **Trustpilot blocks AI crawlers**                           | Cannot drive direct citations — indirect trust only |
| 3x citation advantage with review platform profiles         | SE Ranking Nov 2025                                 |
| Reviews explain only 2% of G2 citation variance             | Profile completeness >> review volume               |
| Full schema implementation = 27% lift in AI extractability  | JSON-LD + AggregateRating                           |
| FTC Rule (Oct 2024): $51,744 per violation for fake reviews | Must be compliance-aware                            |
| Google Reviews / GBP feeds Gemini directly                  | 97.9% of Google AIO links → GBP                     |

**Key competitors:** Birdeye ($150+/mo), Podium, Reputation.com (enterprise), ReviewTrackers — none combine reviews + AI citation tracking

### Layer 3: Community Presence

**Research file:** `research/aiso-community-presence-research.md` (18 sources)

| Finding                                                       | Impact                                         |
| ------------------------------------------------------------- | ---------------------------------------------- |
| Reddit = 6.6% Perplexity, 21% Google AIO, 13% SearchGPT       | Multiple AI models rely on Reddit              |
| Median upvotes on cited posts: 5-8                            | AI prefers old niche Q&A, not viral content    |
| Reddit data: $60M/yr Google, $70M/yr OpenAI deals             | Licensed, privileged data channel              |
| GummySearch shutdown (Nov 2025) displaces 135K users          | Immediate product opportunity                  |
| Reddit case study: +642% referral traffic, +2,814% AI traffic | 4.4x amplifier effect                          |
| Quora = 14.3% of Google AIO only                              | Worth maintaining for Google, not other models |

**Key competitors:** Brand24 ($149-599/mo), Subreddit Signals ($20-2K/mo), F5Bot (free) — none offer citation prediction

### Layer 4: Content Distribution

**Research file:** `research/aiso-content-distribution-research.md` (16 sources)

| Finding                                                         | Impact                                       |
| --------------------------------------------------------------- | -------------------------------------------- |
| YouTube = 200x more AI citations than any other video platform  | 20% avg citation share, 29.5% for Google AIO |
| YouTube citations grew 414% in 2025 (how-to: +651%)             | Fastest growing channel                      |
| Press releases surged 5x since July 2025                        | GlobeNewswire = 61% of PR citations          |
| Original research with statistics: +41% AI visibility           | Highest-multiplier content investment        |
| SOAR format wins: 2x stats, 2.5x bullet points                  | Proven press release structure               |
| Only 2% overlap between most-pitched and most-cited journalists | PR industry targeting wrong people           |
| Medium: 0.36% citations. Substack: 0.07%                        | Medium worthwhile, Substack skip             |
| Podcasts with transcripts: 4-7x more AI citations               | Transcript is the entire mechanism           |

**Key competitors:** Buffer/Hootsuite (social only), Otterly/Profound (monitoring only), Relixir/Sight AI (emerging, no distribution)

### Layer 5: Earned Media & PR

**Research file:** `research/aiso-earned-media-pr-research.md` (20 sources)

| Finding                                                                        | Impact                                                       |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| Wikipedia = 7.8% of all ChatGPT citations (#1 source)                          | With Wikipedia: first citation in 28 days. Without: 52 days. |
| 95% of AI citations from unpaid media                                          | Earned > paid for AI visibility                              |
| Only 4 beauty domains cited by ALL 4 LLMs                                      | Reddit, Sephora, Byrdie, Allure                              |
| Claude: 65% of citations from directories                                      | Most amenable to directory strategy                          |
| Qwoted: 70.3% quality rate, ~70% market share (post-HARO)                      | Best journalist query platform                               |
| Bilingual content seeding: +55% citations, +70% additional from multi-language | Validates our 9-language approach                            |
| Brand search volume (0.334) > backlinks as AI citation predictor               | Brand building > link building                               |

**Key competitors:** Muck Rack Generative Pulse (enterprise monitoring only, $180M Series A), Cision ($7K+/yr), Prowly/BuzzStream (no AI features)

---

## 4. Architecture — How It Fits

### System Architecture

```
┌─────────────────────────────────────────────────┐
│  AISOGEN SaaS (Release 2+)                      │
│  apps/aisogen/ — Multi-tenant UI                │
│  ┌───────────────────────────────────────────┐  │
│  │  Authority Builder Dashboard              │  │
│  │  • Entity Health Score                    │  │
│  │  • Review Platform Status                 │  │
│  │  • Community Mentions                     │  │
│  │  • Content Distribution Tracker           │  │
│  │  • Earned Media Pipeline                  │  │
│  │  • SoM Trends (per AI model)             │  │
│  │  • Attribution Chain                      │  │
│  └───────────────────────────────────────────┘  │
│              ▼ API calls ▼                       │
├─────────────────────────────────────────────────┤
│  PROD-004 Platform Core                         │
│  packages/ — Auth, Tenancy, Billing, API        │
├─────────────────────────────────────────────────┤
│              ▼ Engine calls ▼                    │
├─────────────────────────────────────────────────┤
│  SEO Toolkit Engine (seo-toolkit/)              │
│  ┌───────────────────────────────────────────┐  │
│  │  Skill: authority-builder                 │  │
│  │  • 5-layer authority framework            │  │
│  │  • Per-platform playbooks                 │  │
│  │  • SoM measurement methodology            │  │
│  │  • Entity scoring algorithm               │  │
│  │  • Multi-language support                 │  │
│  ├───────────────────────────────────────────┤  │
│  │  Agent: authority-builder                 │  │
│  │  • Autonomous authority monitoring        │  │
│  │  • Entity gap detection                   │  │
│  │  • Review opportunity identification      │  │
│  │  • Community thread surfacing             │  │
│  │  • Press/PR opportunity matching          │  │
│  │  • Content draft generation               │  │
│  │  • Attribution tracking                   │  │
│  ├───────────────────────────────────────────┤  │
│  │  Scripts (Python)                         │  │
│  │  • entity_audit.py                        │  │
│  │  • som_tracker.py                         │  │
│  │  • review_monitor.py                      │  │
│  │  • community_scanner.py                   │  │
│  │  • press_formatter.py                     │  │
│  │  • attribution_tracker.py                 │  │
│  │  • schema_generator.py                    │  │
│  └───────────────────────────────────────────┘  │
├─────────────────────────────────────────────────┤
│  External APIs & Data Sources                    │
│  • Google Business Profile API                   │
│  • Wikidata API (SPARQL endpoint)               │
│  • LinkedIn API (limited)                        │
│  • Reddit API (licensed access)                  │
│  • YouTube Data API v3                           │
│  • GlobeNewswire API                            │
│  • Google Search Console API                     │
│  • ChatGPT API (SoM testing)                    │
│  • Gemini API (SoM testing)                      │
│  • DataForSEO API (rank + backlink data)         │
│  • Brand24 API or custom web monitoring          │
└─────────────────────────────────────────────────┘
```

### Module Decomposition

The function is built as **5 sub-modules** (one per layer), each independently deployable:

| Module                              | Skill               | Agent Component                            | Scripts                              | Priority         |
| ----------------------------------- | ------------------- | ------------------------------------------ | ------------------------------------ | ---------------- |
| **M1: Entity Audit & Builder**      | entity-builder      | Entity gap detection, schema generation    | entity_audit.py, schema_generator.py | P0 — Build first |
| **M2: Review Intelligence**         | review-monitor      | Review platform audit, schema generation   | review_monitor.py                    | P1               |
| **M3: Community Intelligence**      | community-scanner   | Thread surfacing, citation prediction      | community_scanner.py                 | P1               |
| **M4: Content Distribution**        | content-distributor | YouTube optimizer, press formatter         | press_formatter.py                   | P2               |
| **M5: Earned Media Pipeline**       | earned-media        | PR opportunity matching, Wikipedia tracker | attribution_tracker.py               | P2               |
| **M0: SoM Tracker (Cross-cutting)** | som-tracker         | Monthly measurement, trend analysis        | som_tracker.py                       | P0 — Build first |

### Integration Points

| Integration                                                      | How                                                                   | When      |
| ---------------------------------------------------------------- | --------------------------------------------------------------------- | --------- |
| **AISO Skill** (`~/.claude/skills/aiso/`)                        | EAB extends Category C (Authority & Trustworthiness) scoring          | Release 1 |
| **SEO/AISO Validator** (`~/.claude/skills/seo-aiso-validator/`)  | Validator invokes EAB entity + review checks in audit                 | Release 1 |
| **Content Writer** (`~/.claude/agents/content-writer/`)          | EAB feeds content briefs for external platforms (Medium, guest posts) | Release 1 |
| **Marketing Manager** (`docs/capabilities/marketing-manager.md`) | Manager SOP references EAB for authority building oversight           | Release 1 |
| **AISOGEN Dashboard** (`apps/aisogen/`)                          | UI surfaces EAB data to SaaS customers                                | Release 2 |

---

## 5. Feature Scope — What To Build

### MVP (Release 1 — Agency Capability)

Build as skills + agents in `seo-toolkit/`. No UI. Operated via Claude Code for agency clients.

#### M0: SoM Tracker (Cross-Cutting) — Build First

| Feature                          | Description                                                   | Source                |
| -------------------------------- | ------------------------------------------------------------- | --------------------- |
| **SoM measurement**              | Test 10-25 queries on ChatGPT + Gemini, record brand mentions | AISO skill + research |
| **Multi-model tracking**         | Track ChatGPT, Gemini, Perplexity (minimum)                   | Layer 5 research      |
| **Competitor SoM**               | Same queries for top 3-5 competitors                          | AISO skill            |
| **Monthly trend tracking**       | Store results, compare month-over-month                       | AISO skill            |
| **Citation type classification** | Direct mention vs indirect reference vs comparison            | Layer 5 research      |

#### M1: Entity Audit & Builder — Build First

| Feature                              | Description                                                                               | Source               |
| ------------------------------------ | ----------------------------------------------------------------------------------------- | -------------------- |
| **Entity presence audit**            | Check existence + completeness across GBP, LinkedIn, Crunchbase, Wikidata, OpenCorporates | Layer 1 research     |
| **Entity health score**              | 0-100 score based on presence, completeness, consistency                                  | Layer 1 research     |
| **Cross-platform consistency check** | Compare brand name, description, URLs across all platforms                                | Layer 1 research     |
| **sameAs schema generator**          | Auto-generate Organization schema sameAs array from entity URLs                           | Layer 1 research     |
| **Wikidata P-property guidance**     | Identify missing P-properties, suggest values                                             | Layer 1 research     |
| **Wikipedia eligibility assessment** | Score notability based on independent press coverage count                                | Layer 1 + 5 research |
| **Entity creation drafts**           | Generate ready-to-submit content for GBP, LinkedIn, Crunchbase, Wikidata                  | Layer 1 research     |

#### M2: Review Intelligence

| Feature                           | Description                                                                                  | Source           |
| --------------------------------- | -------------------------------------------------------------------------------------------- | ---------------- |
| **Review platform audit**         | Which platforms exist, crawler access status (open/blocked/restricted), profile completeness | Layer 2 research |
| **Review schema generator**       | AggregateRating + Review JSON-LD with sameAs linking                                         | Layer 2 research |
| **Review content quality scorer** | Analyse existing reviews for AI extractability (detail, specificity, scenario richness)      | Layer 2 research |
| **Platform-vertical matrix**      | Recommend which review platforms matter for this client type                                 | Layer 2 research |

#### M3: Community Intelligence

| Feature                             | Description                                                                        | Source           |
| ----------------------------------- | ---------------------------------------------------------------------------------- | ---------------- |
| **Reddit keyword monitoring**       | Track brand + category mentions across target subreddits                           | Layer 3 research |
| **Thread citation prediction**      | Flag threads with Q&A format + niche subreddit + evergreen topic (likely AI-cited) | Layer 3 research |
| **Community response drafts**       | Generate value-first responses for human review and posting (95/5 rule)            | Layer 3 research |
| **Competitor community monitoring** | Track competitor mentions in same communities                                      | Layer 3 research |

### Post-MVP (Release 1 continued or Release 2)

#### M4: Content Distribution

| Feature                           | Description                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------------- |
| **YouTube transcript optimizer**  | Clean auto-generated transcripts, generate chapter markers, create VideoObject schema |
| **Press release formatter**       | SOAR format: inject statistics, bullet points, entity clarity, expert quotes          |
| **Medium cross-publisher**        | Adapt blog content for Medium with canonical URL management                           |
| **Podcast booking intelligence**  | Score shows by transcript publication status + YouTube upload                         |
| **Guest post publication scorer** | Test which outlets appear in AI responses for target queries                          |

#### M5: Earned Media Pipeline

| Feature                          | Description                                                           |
| -------------------------------- | --------------------------------------------------------------------- |
| **Journalist query monitor**     | Monitor Qwoted, SOS, Featured.com for relevant queries                |
| **PR response drafter**          | Generate expert-quote responses for human review + sending            |
| **Directory gap analysis**       | Identify directories that competitors are listed in but client is not |
| **Wikipedia progress tracker**   | Track qualifying press coverage toward notability threshold           |
| **Award opportunity identifier** | Surface relevant industry awards based on client vertical             |

#### Cross-Module: Attribution Chain

| Feature                            | Description                                                                                |
| ---------------------------------- | ------------------------------------------------------------------------------------------ |
| **Action → citation tracking**     | Connect specific actions (press release, Reddit post, entity creation) to citation changes |
| **Citation → traffic attribution** | Link AI citations to website traffic (via UTM, referrer analysis, GSC)                     |
| **Multi-touch attribution**        | Weight contribution of each layer to overall SoM improvement                               |
| **ROI calculator**                 | Cost of authority building actions vs value of AI-referred traffic                         |

---

## 6. Data Model (Preliminary)

### Core Entities

```
Brand
├── id, name, canonical_description, domain, vertical
├── languages[] (e.g., ["en", "nl", "de", "fr", ...])
├── competitors[] → Brand
│
├── EntityPresence[] (one per platform)
│   ├── platform (gbp, linkedin, crunchbase, wikidata, opencorporates, wikipedia)
│   ├── status (not_found, incomplete, complete, verified)
│   ├── url, profile_data (JSON), completeness_score
│   ├── last_checked, consistency_score
│   └── sameAs_url (for schema generation)
│
├── ReviewPlatform[] (one per platform)
│   ├── platform (google, trustpilot, g2, getapp, capterra, clutch)
│   ├── crawler_access (open, blocked, restricted)
│   ├── profile_url, review_count, avg_rating, completeness_score
│   └── last_checked
│
├── CommunityMention[]
│   ├── platform (reddit, quora, forum, stackexchange)
│   ├── url, subreddit/forum, content_snippet
│   ├── upvotes, date, sentiment
│   ├── citation_prediction_score (0-1)
│   └── brand_mentioned (boolean)
│
├── ContentDistribution[]
│   ├── platform (youtube, medium, guest_post, press_release, podcast, academic)
│   ├── url, title, date_published
│   ├── ai_citation_detected (boolean), citation_details[]
│   └── traffic_attributed
│
├── EarnedMedia[]
│   ├── type (news, directory, award, wikipedia, podcast_mention)
│   ├── url, outlet_name, date, sentiment
│   ├── ai_citation_detected (boolean)
│   └── reach_estimate
│
├── SoMResult[] (monthly measurements)
│   ├── date, ai_model (chatgpt, gemini, perplexity)
│   ├── queries_tested, mentions_found, som_percentage
│   ├── competitor_som (JSON)
│   └── citation_details[]
│
└── AuthorityScore (calculated)
    ├── entity_score, review_score, community_score
    ├── distribution_score, earned_media_score
    ├── overall_score, trend (improving, stable, declining)
    └── last_calculated
```

---

## 7. Technical Decisions

| Decision                  | Choice                                                       | Rationale                                                       |
| ------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------- |
| **Language**              | Python (engine scripts) + TypeScript (SaaS UI)               | Matches existing seo-toolkit (Python) and PROD-004 (TypeScript) |
| **AI models for SoM**     | ChatGPT API + Gemini API (direct REST)                       | Already working in agency setup                                 |
| **Reddit monitoring**     | Reddit API (compliant) + F5Bot (free alerts)                 | Reddit API licensing required for commercial use                |
| **Entity checking**       | Direct API calls (Wikidata SPARQL, GBP API, LinkedIn scrape) | No third-party dependency                                       |
| **Schema generation**     | Python Jinja2 templates                                      | Consistent with existing seo-toolkit patterns                   |
| **Data storage (agency)** | JSON files in `seo-toolkit/data/`                            | Simple, git-trackable, no DB needed for agency use              |
| **Data storage (SaaS)**   | PostgreSQL + Drizzle ORM (PROD-004)                          | Matches platform architecture                                   |
| **Scheduling**            | launchd (agency) / cron (SaaS)                               | Monthly SoM tracking, weekly community scans                    |

---

## 8. Development Plan

### Phase 1: Agency Capability (Release 1, Sprint 1.4)

Following the AISOGEN roadmap, Sprint 1.4 (Week 7-8) delivers the Authority Builder. Based on research findings, the build order is:

| Step | What                                                                    | Effort   | Dependencies             |
| ---- | ----------------------------------------------------------------------- | -------- | ------------------------ |
| 1    | **Create `authority-builder` skill** in `~/.claude/skills/`             | 1 day    | Research (done)          |
| 2    | **Build `som_tracker.py`** — SoM measurement across ChatGPT + Gemini    | 1 day    | Gemini API (working)     |
| 3    | **Build `entity_audit.py`** — audit entity presence across 7 platforms  | 2 days   | Wikidata SPARQL, GBP API |
| 4    | **Build `schema_generator.py`** — sameAs + AggregateRating generation   | 0.5 days | Entity audit output      |
| 5    | **Build `review_monitor.py`** — review platform audit + quality scoring | 1 day    | Web scraping             |
| 6    | **Build `community_scanner.py`** — Reddit + Quora monitoring            | 1.5 days | Reddit API               |
| 7    | **Create `authority-builder` agent** in `~/.claude/agents/`             | 1 day    | All scripts above        |
| 8    | **Test on Hairgenetix** — full authority audit + first actions          | 1 day    | All above                |
| 9    | **Schedule monthly SoM tracking** — launchd plist                       | 0.5 days | som_tracker.py           |
| 10   | **Update AISO skill** — integrate authority scoring                     | 0.5 days | Entity + review scores   |

**Total estimated effort:** ~10 days (fits Sprint 1.4's 2-week window)

### Phase 2: Extended Capabilities (Release 1, Sprint 1.5)

| Step | What                                                                 | Effort   |
| ---- | -------------------------------------------------------------------- | -------- |
| 11   | Build `press_formatter.py` — SOAR format press release generation    | 1 day    |
| 12   | Build `attribution_tracker.py` — connect actions to citation changes | 2 days   |
| 13   | YouTube transcript optimizer                                         | 1 day    |
| 14   | Journalist query monitor (Qwoted/SOS RSS)                            | 1 day    |
| 15   | Wikipedia eligibility scorer                                         | 0.5 days |

### Phase 3: SaaS UI (Release 2)

| Step | What                                         | Effort |
| ---- | -------------------------------------------- | ------ |
| 16   | Authority Builder dashboard page in AISOGEN  | 3 days |
| 17   | Entity management UI (view + action items)   | 2 days |
| 18   | SoM trend charts                             | 1 day  |
| 19   | Community mention feed + response drafts     | 2 days |
| 20   | Multi-tenant data isolation (PostgreSQL RLS) | 1 day  |

---

## 9. Success Metrics

### Agency Capability (Release 1)

| Metric                            | Baseline (2026-03-11) | 3-Month Target | 6-Month Target |
| --------------------------------- | --------------------- | -------------- | -------------- |
| Hairgenetix ChatGPT SoM           | 0%                    | 10%            | 25%            |
| Hairgenetix Gemini SoM            | 20%                   | 40%            | 50%            |
| Entity platforms present          | ~2                    | 8              | 10+            |
| External brand mentions           | ~0                    | 20             | 50+            |
| Google review count               | 0                     | 10             | 25+            |
| Authority score (AISO Category C) | 4.5/10                | 6.5/10         | 8.0/10         |

### AISOGEN SaaS (Release 2)

| Metric                                       | Target               |
| -------------------------------------------- | -------------------- |
| Beta users (agency clients)                  | 3-5                  |
| Feature completeness vs briefing             | 80%+ of MVP features |
| Authority score improvement per client (avg) | +2.0 in 3 months     |
| SoM improvement per client (avg)             | +10% in 3 months     |

---

## 10. Risks and Mitigations

| Risk                                           | Likelihood | Impact | Mitigation                                                        |
| ---------------------------------------------- | ---------- | ------ | ----------------------------------------------------------------- |
| Reddit API licensing costs for commercial SaaS | High       | Medium | Start with F5Bot (free) + manual; budget Reddit API for Release 2 |
| Wikipedia edits rejected/reverted              | High       | Medium | Build notability first; never edit directly for clients           |
| GBP API access limited for non-owners          | Medium     | Medium | Draft content only; client submits                                |
| AI model APIs change pricing/access            | Medium     | High   | Abstract behind interface; support multiple models                |
| Community participation flagged as spam        | Medium     | High   | Strict 95/5 rule; human-only posting; FTC compliance              |
| Entity data goes stale                         | High       | Low    | Monthly automated rechecks                                        |
| Scope creep into full PR platform              | High       | Medium | MVP boundary: audit + drafts + tracking. Not a PR tool.           |

---

## 11. Out of Scope (Explicitly)

These are NOT part of this function:

| Item                                         | Why                                                                     |
| -------------------------------------------- | ----------------------------------------------------------------------- |
| Automated posting to Reddit/Quora/forums     | FTC risk, ban risk — human posts only                                   |
| Automated email outreach to journalists      | Separate function (Earned Link Engine, Function 6)                      |
| Full PR campaign management                  | We're building authority intelligence, not a PR tool                    |
| Account creation on any platform             | Rule #5 (no account sprawl) — Malcolm creates accounts                  |
| Content creation for external platforms      | Separate function (Content Pipeline, Function 4) — EAB generates briefs |
| Traditional link building (PBNs, paid links) | Not aligned with AI citation strategy                                   |
| Social media management                      | Different capability entirely                                           |

---

## 12. Next Steps — E2E AI Delivery Framework

This briefing is the input to the spec-driven development process (Rule #14). The next steps are:

| Step | What                                                                       | Framework Phase       |
| ---- | -------------------------------------------------------------------------- | --------------------- |
| 1    | Create `specs/EAB-001-authority-builder/` in `seo-toolkit/`                | Phase 1: Understand   |
| 2    | Write `status.md` from template                                            | Phase 1               |
| 3    | Write `requirements.md` — user stories + acceptance criteria (EARS format) | Phase 3: Requirements |
| 4    | Write `design.md` — architecture, data model, API contracts                | Phase 4: Design       |
| 5    | Write `tasks.md` — ordered implementation tasks with PEV loops             | Phase 5: Tasks        |
| 6    | **Gate 1 (Scope)** — Malcolm approves requirements                         | Gate                  |
| 7    | **Gate 2 (Completeness)** — Design + tests approved                        | Gate                  |
| 8    | Build (TDD: red → green → refactor per task)                               | Phase 6: Build        |
| 9    | **Gate 3 (Ship)** — All acceptance criteria met, tests green               | Gate                  |
| 10   | Deploy to agency use → test on Hairgenetix                                 | Phase 7: Validate     |

---

## Appendix A: Feature Mapping to Existing Inventory

Cross-reference to features already catalogued in `aisogen-functional-design.md`:

| Briefing Feature                   | Functional Design # | Classification |
| ---------------------------------- | ------------------- | -------------- |
| Brand mention monitoring           | 6.1                 | TS             |
| Unlinked mention discovery         | 6.2                 | DF             |
| Reddit monitoring                  | 6.3                 | WS             |
| YouTube SEO                        | 6.4                 | DF             |
| YouTube mention monitoring         | 6.5                 | WS             |
| Expert platform monitoring         | 6.6                 | WS             |
| Directory management               | 6.7                 | DF             |
| Review platform monitoring         | 6.8                 | DF             |
| Wikipedia/Wikidata tracking        | 6.9                 | IN             |
| Brand search volume tracking       | 6.11                | DF             |
| Digital PR campaign management     | 6.12                | WS             |
| Author/expert authority profiling  | 6.13                | WS             |
| Cross-platform consistency scoring | 6.14                | IN             |
| AI platform brand presence scoring | 6.15                | WS             |
| **Entity Audit + Builder**         | NEW                 | IN             |
| **sameAs Schema Generator**        | NEW                 | IN             |
| **Wikidata Creation Wizard**       | NEW                 | IN             |
| **Community Citation Prediction**  | NEW                 | IN             |
| **Review Crawler Access Status**   | NEW                 | WS             |
| **Attribution Chain**              | NEW                 | IN             |

**6 new features identified by research** not in the original 230-feature inventory.

---

## Appendix B: Key Research Sources (Top 20)

| #   | Source                         | Key Finding                                                                |
| --- | ------------------------------ | -------------------------------------------------------------------------- |
| 1   | Ahrefs Dec 2025                | Brand search volume (0.334) = strongest AI citation predictor              |
| 2   | Semrush 248K Reddit Posts      | Cited posts have 5-8 median upvotes, 900-day average age                   |
| 3   | Schema App Case Study          | Entity linking = +19.72% AI Overview visibility                            |
| 4   | Muck Rack Sep 2025             | 95% of AI citations from unpaid media; 2% journalist pitch overlap         |
| 5   | GlobeNewswire Dec 2025         | Press release AI citations up 5x since July 2025                           |
| 6   | Princeton GEO Study (KDD 2024) | Statistics +22%, expert quotes +37%, proprietary data +41%                 |
| 7   | SE Ranking Nov 2025            | 3x citation advantage with review platform profiles                        |
| 8   | BrightEdge 2025                | YouTube = 200x more AI citations than other video platforms                |
| 9   | Status Labs 2025               | Wikipedia article = first citation in 28 days vs 52 without                |
| 10  | Goodie 5.7M Citations          | Only 4 beauty domains cited by all 4 LLMs                                  |
| 11  | Conductor Oct 2025             | Reddit citation share declining but quality rising                         |
| 12  | G2 30K Citations Study         | Reviews explain 2% of citation variance; profile completeness matters more |
| 13  | Hall.com Analysis              | Trustpilot + Yelp = complete AI crawler blockers                           |
| 14  | Ranko Bilingual Study          | +55% AI citations in 14-30 days; +70% from bilingual content               |
| 15  | Diggity Marketing              | Reddit: +642% referral traffic, +2,814% AI traffic                         |
| 16  | AIMactGrow 89K URLs            | LinkedIn = #2 most cited domain across AI (11%)                            |
| 17  | Previsible 1.96M Sessions      | Domain Authority correlation with AI citations = 0.18 (near zero)          |
| 18  | Yext Oct 2025                  | Gemini: 52.1% citations from brand-managed sources                         |
| 19  | BuzzStream Platform Study      | Qwoted = 70.3% quality rate, ~70% market share post-HARO                   |
| 20  | Profound Ramp Case Study       | 8.1% → 12.2% citation share in 75 days                                     |
