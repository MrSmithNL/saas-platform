# AISOGEN — Functional Design

> **Document type:** Functional specification
> **Product:** AISOGEN (aisogen.ai) — multi-tenant SaaS
> **Last updated:** 2026-03-10
> **Status:** Feature inventory complete. Competitive analysis complete. Build prioritisation pending.
> **Parent doc:** [aisogen-capability.md](aisogen-capability.md)

---

## 1. Leading Platforms — Competitive Landscape

### Tier 1: Full-Stack SEO Suites (adding AI)

| Platform       | Price Range                           | AISO                                                                   | Content                                | Automation                                 | Agency                             | Unique Angle                                    |
| -------------- | ------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------- | ------------------------------------------ | ---------------------------------- | ----------------------------------------------- |
| **Semrush**    | $140-500/mo (+$99 AI add-on)          | AI Visibility: ChatGPT + AI Overviews. 100M+ prompt database           | ContentShake AI, SEO Writing Assistant | Scheduled reports, Copilot recommendations | White-label, Agency Growth Kit     | Largest all-in-one. Forrester leader. Most data |
| **Ahrefs**     | $129-1,499/mo (+$199-699 Brand Radar) | Brand Radar: 6 AI platforms, 271M prompts. Strongest citation tracking | Content Explorer, content gap          | Scheduled crawls, alerts                   | Multi-project, limited white-label | Largest backlink index (18.5B). Best link data  |
| **SE Ranking** | $52-345/mo                            | AI Search: ChatGPT, Perplexity, AI Overviews, AI Mode, Gemini          | AI Writer, content editor              | Scheduled reports, rank alerts             | White-label, multi-client portal   | Best value: full SEO + AISO at 40-55% less cost |

### Tier 2: Content + GEO Platforms

| Platform       | Price Range | AISO                                                                | Content                                                          | Unique Angle                                                      |
| -------------- | ----------- | ------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Frase**      | $49-299/mo  | 2-8 AI platforms tracked. Citation alerts. Share of Voice           | AI Agent (80+ skills), briefs, programmatic SEO                  | "Agentic SEO & GEO" — dual SEO+GEO scoring. Best content workflow |
| **Surfer SEO** | $99-219/mo  | AI Tracker (Beta): Google, ChatGPT, Gemini, Perplexity. Mention Gap | Content Editor (0-100 scoring), Surfer AI articles, AI Humanizer | Best content scoring. 150K daily users. Mention Gap unique        |
| **Scalenut**   | $49-149/mo  | Basic AI visibility + prompt discovery                              | Cruise Mode (blog in 5 min), NLP optimization                    | Budget content + GEO                                              |

### Tier 3: Pure AISO/GEO Monitors

| Platform       | Price Range | AI Platforms                                                           | Unique Angle                                                                    |
| -------------- | ----------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **Otterly.ai** | $29-489/mo  | 6 engines: ChatGPT, AI Overviews, AI Mode, Perplexity, Gemini, Copilot | Pioneer. Gartner Cool Vendor. Best GEO audit (25+ factors). 4.9/5 rating        |
| **Scrunch AI** | $250-500/mo | 8 engines incl. Meta AI, Claude                                        | "Agent Experience Platform" (AXP). SOC 2. Persona-based                         |
| **AthenaHQ**   | $295+/mo    | 8+ LLMs                                                                | Ex-Google/DeepMind founders. Proprietary "Prompt Volume" metric                 |
| **Profound**   | $99-399/mo  | ChatGPT (Starter) to 10+ engines (Enterprise)                          | Deepest analytics. Citation vs mention distinction. SOC 2                       |
| **GetAISO**    | $20+/mo     | 5M+ real AI conversations                                              | Cheapest AISO entry ($20/mo). Conversation telemetry. Misinformation correction |
| **Peec AI**    | ~€199/mo    | 6 engines                                                              | Clean UX. Sentiment analysis. Berlin-based                                      |

### Tier 4: Automation & Execution

| Platform                     | Price Range   | Focus                                                          | Unique Angle                                                                    |
| ---------------------------- | ------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **AutoSEO** (getautoseo.com) | ~$29/week     | Daily auto-published articles + backlinks + AI monitoring      | Fully hands-off. 98+ languages. ~100 DA backlinks/mo. 10+ CMS integrations      |
| **Alli AI**                  | $249-999/mo   | Bulk on-page changes via JS injection. AI crawler enablement   | Only platform making JS sites visible to AI crawlers. 10K changes in 60 seconds |
| **SearchAtlas**              | $99-399/mo    | OTTO SEO automation agent + Atlas Brain conversational agent   | Conversational SEO agent (60+ tools). GBP management                            |
| **Relixir**                  | $199-1,499/mo | Autonomous "Rex" agent. Auto-publish + self-improving strategy | Most autonomous. YC + SoftBank backed. 94.2% long-workflow accuracy             |

### Tier 5: Enterprise

| Platform       | Price Range       | Focus                                                          |
| -------------- | ----------------- | -------------------------------------------------------------- |
| **Conductor**  | $5K-10K+/mo       | Forrester Leader. AI Search Performance. Enterprise compliance |
| **BrightEdge** | Custom enterprise | Autopilot (zero-touch). DataMind AI. Fortune 500               |
| **seoClarity** | Custom enterprise | ClarityAutomate (no-code SEO execution). Largest rank tracking |

---

## 2. Complete Feature Inventory — 230 Features, 14 Categories

### Classification Key

- **TS** = Table stakes (must have — all major platforms have it)
- **DF** = Differentiator (some platforms have it, competitive advantage)
- **WS** = White space (nobody or very few have it)
- **IN** = Innovation (doesn't exist yet but should)

---

### Category 1: Site Audit & Technical SEO (28 features)

| #    | Feature                                            | Class | Priority | Notes                                     |
| ---- | -------------------------------------------------- | ----- | -------- | ----------------------------------------- |
| 1.1  | Full site crawling (up to 2M+ pages)               | TS    | P0       | All platforms have this                   |
| 1.2  | Broken link detection                              | TS    | P0       |                                           |
| 1.3  | Redirect chain/loop detection                      | TS    | P0       |                                           |
| 1.4  | Core Web Vitals monitoring (LCP, INP, CLS)         | TS    | P0       |                                           |
| 1.5  | Mobile-friendliness testing                        | TS    | P1       |                                           |
| 1.6  | HTTPS/security certificate checking                | TS    | P1       |                                           |
| 1.7  | Schema markup validation                           | DF    | P0       | Critical for AISO                         |
| 1.8  | Schema markup generation & deployment              | DF    | P0       | Alli AI, SearchAtlas                      |
| 1.9  | JavaScript rendering audit                         | DF    | P1       |                                           |
| 1.10 | Duplicate content detection                        | TS    | P1       |                                           |
| 1.11 | XML sitemap analysis & generation                  | TS    | P1       |                                           |
| 1.12 | Robots.txt analysis & editor                       | TS    | P1       |                                           |
| 1.13 | HTTP header analysis                               | DF    | P2       |                                           |
| 1.14 | Accessibility audit (WCAG)                         | WS    | P3       | Growing requirement                       |
| 1.15 | Log file analysis (bot crawl patterns)             | DF    | P2       | Enterprise                                |
| 1.16 | Orphan page detection                              | DF    | P2       |                                           |
| 1.17 | Page speed optimization recommendations            | TS    | P1       |                                           |
| 1.18 | Hreflang validation (multilingual)                 | DF    | P1       | Critical for our clients                  |
| 1.19 | Structured data gap analysis                       | WS    | P1       | Nobody does this well                     |
| 1.20 | **AI crawlability audit** (how LLMs see your site) | IN    | P0       | **Nobody has this. Major opportunity**    |
| 1.21 | **llms.txt validation & generation**               | WS    | P0       | Emerging standard. We already build these |
| 1.22 | Image optimization audit (alt text, size, WebP)    | DF    | P1       |                                           |
| 1.23 | Internal linking structure visualization           | DF    | P2       |                                           |
| 1.24 | Multi-site crawl scheduling & comparison           | DF    | P1       | Essential for agencies                    |
| 1.25 | Historical audit tracking (trend over time)        | DF    | P1       |                                           |
| 1.26 | Automated issue prioritization (impact scoring)    | DF    | P0       | Semrush Copilot does this                 |
| 1.27 | Real-time site change monitoring                   | WS    | P2       | ContentKing (acquired by Conductor)       |
| 1.28 | Edge SEO / CDN-level optimization audit            | IN    | P3       | Future                                    |

---

### Category 2: Keyword Intelligence (21 features)

| #    | Feature                                                            | Class | Priority | Notes                              |
| ---- | ------------------------------------------------------------------ | ----- | -------- | ---------------------------------- |
| 2.1  | Keyword research (volume, difficulty, CPC)                         | TS    | P0       |                                    |
| 2.2  | Large keyword database                                             | DF    | P2       | Hard to compete with Semrush 26.8B |
| 2.3  | Multi-country keyword data                                         | TS    | P1       |                                    |
| 2.4  | Keyword difficulty scoring                                         | TS    | P0       |                                    |
| 2.5  | Search intent classification                                       | TS    | P0       |                                    |
| 2.6  | SERP feature tracking                                              | TS    | P0       |                                    |
| 2.7  | Keyword clustering / topical grouping                              | DF    | P0       |                                    |
| 2.8  | Keyword gap analysis (vs competitors)                              | TS    | P0       |                                    |
| 2.9  | Long-tail keyword discovery                                        | TS    | P1       |                                    |
| 2.10 | Question-based keyword discovery                                   | DF    | P0       | PAA mining                         |
| 2.11 | Keyword trend analysis (seasonality)                               | DF    | P2       |                                    |
| 2.12 | **AI prompt keyword analysis** (what prompts trigger AI citations) | WS    | P0       | **Critical. AthenaHQ partial**     |
| 2.13 | Voice search keyword optimization                                  | WS    | P3       | Future                             |
| 2.14 | YouTube keyword research                                           | DF    | P2       |                                    |
| 2.15 | E-commerce keyword research                                        | DF    | P2       |                                    |
| 2.16 | Keyword-to-page mapping                                            | DF    | P1       |                                    |
| 2.17 | Share of Search measurement                                        | WS    | P2       |                                    |
| 2.18 | AI-generated keyword suggestions                                   | DF    | P1       |                                    |
| 2.19 | Keyword cannibalization detection                                  | DF    | P1       |                                    |
| 2.20 | Zero-volume keyword identification                                 | WS    | P2       |                                    |
| 2.21 | Multi-engine keyword data                                          | DF    | P2       | Ahrefs does 10 engines             |

---

### Category 3: Content Planning & Strategy (15 features)

| #    | Feature                                                    | Class | Priority | Notes                                    |
| ---- | ---------------------------------------------------------- | ----- | -------- | ---------------------------------------- |
| 3.1  | Topical authority mapping / content clusters               | DF    | P0       | MarketMuse, Frase                        |
| 3.2  | Content gap analysis (vs competitors)                      | TS    | P0       |                                          |
| 3.3  | **Content calendar / editorial planning**                  | WS    | P0       | **Few SEO platforms have this natively** |
| 3.4  | Content brief generation (automated)                       | DF    | P0       | Frase, Surfer                            |
| 3.5  | Competitive content analysis                               | TS    | P1       |                                          |
| 3.6  | Content freshness / decay tracking                         | DF    | P1       |                                          |
| 3.7  | Content cannibalization detection                          | DF    | P1       |                                          |
| 3.8  | Site-wide content inventory & audit                        | DF    | P1       |                                          |
| 3.9  | Topic research (subtopics, questions, headings)            | TS    | P0       |                                          |
| 3.10 | **Content ROI estimation** (traffic prediction per topic)  | WS    | P1       | **Nobody does well**                     |
| 3.11 | Content velocity benchmarking                              | WS    | P2       |                                          |
| 3.12 | Buyer journey content mapping (TOFU/MOFU/BOFU)             | WS    | P1       |                                          |
| 3.13 | AI-recommended content priorities                          | DF    | P0       |                                          |
| 3.14 | **Cross-channel content strategy** (blog + social + video) | IN    | P2       | **Nobody does this**                     |
| 3.15 | **Content performance forecasting**                        | WS    | P1       | **Predicted traffic before writing**     |

---

### Category 4: Content Creation & Optimization (21 features)

| #    | Feature                                                    | Class | Priority | Notes                                            |
| ---- | ---------------------------------------------------------- | ----- | -------- | ------------------------------------------------ |
| 4.1  | AI content generation / first drafts                       | TS    | P0       |                                                  |
| 4.2  | Content scoring / grading (SEO score)                      | TS    | P0       | Surfer's 0-100 is the standard                   |
| 4.3  | NLP-based optimization suggestions                         | TS    | P0       |                                                  |
| 4.4  | Real-time content editor with live scoring                 | TS    | P0       |                                                  |
| 4.5  | Readability scoring                                        | TS    | P1       |                                                  |
| 4.6  | **E-E-A-T compliance checking**                            | WS    | P0       | **Nobody does this properly. Major opportunity** |
| 4.7  | Image alt text generation (AI)                             | DF    | P1       |                                                  |
| 4.8  | Internal linking suggestions                               | DF    | P0       |                                                  |
| 4.9  | Content templates per page type                            | DF    | P1       |                                                  |
| 4.10 | **Multilingual content generation**                        | WS    | P0       | **Native generation, not translation**           |
| 4.11 | Content rewriting / repurposing                            | DF    | P2       |                                                  |
| 4.12 | **AI-optimized formatting** (answer-first, snippet-ready)  | WS    | P0       | **Critical for AISO**                            |
| 4.13 | Plagiarism detection                                       | DF    | P2       |                                                  |
| 4.14 | Brand voice enforcement                                    | WS    | P1       |                                                  |
| 4.15 | Competitor content reverse-engineering                     | TS    | P1       |                                                  |
| 4.16 | Google Docs integration for editor                         | DF    | P2       |                                                  |
| 4.17 | CMS-connected publishing                                   | DF    | P0       |                                                  |
| 4.18 | Content A/B testing                                        | WS    | P2       |                                                  |
| 4.19 | Automated content refresh suggestions                      | DF    | P1       |                                                  |
| 4.20 | **Entity-optimized content scoring**                       | IN    | P0       | **Nobody does this. Align with knowledge graph** |
| 4.21 | **Multi-format generation** (blog → social → video script) | IN    | P2       |                                                  |

---

### Category 5: AI Search Optimization — AISO/GEO/AEO (22 features)

| #    | Feature                                                     | Class | Priority | Notes                                                               |
| ---- | ----------------------------------------------------------- | ----- | -------- | ------------------------------------------------------------------- |
| 5.1  | AI citation monitoring (brand mentions in AI)               | DF→TS | P0       | Becoming table stakes rapidly                                       |
| 5.2  | Share of Model / Share of AI Voice                          | DF    | P0       | Otterly, AthenaHQ                                                   |
| 5.3  | Multi-platform tracking (7+ AI engines)                     | DF    | P0       | ChatGPT, Perplexity, Gemini, Claude, Copilot, AI Overviews, AI Mode |
| 5.4  | Google AI Overviews tracking                                | TS    | P0       |                                                                     |
| 5.5  | Custom prompt tracking (monitor specific queries over time) | DF    | P0       |                                                                     |
| 5.6  | **AI-ready content scoring**                                | WS    | P0       | **How likely to be cited. AthenaHQ partial**                        |
| 5.7  | **llms.txt management**                                     | WS    | P0       | **Generation, validation, hosting. We do this already**             |
| 5.8  | **Schema optimization for AI**                              | WS    | P0       | **Beyond traditional schema**                                       |
| 5.9  | **Entity building / knowledge graph optimization**          | WS    | P0       | **WordLift, InLinks specialized. Critical**                         |
| 5.10 | Buyer persona simulation                                    | IN    | P2       | AthenaHQ partial                                                    |
| 5.11 | Sentiment analysis of AI citations                          | DF    | P1       |                                                                     |
| 5.12 | Citation source attribution (which pages AI cites)          | DF    | P0       |                                                                     |
| 5.13 | **AI traffic analytics** (referral from AI)                 | WS    | P1       | **Emerging in GA4**                                                 |
| 5.14 | AI misinformation detection                                 | DF    | P1       |                                                                     |
| 5.15 | AI Overviews source link tracking                           | DF    | P1       |                                                                     |
| 5.16 | **Prompt engineering recommendations**                      | IN    | P0       | **Optimize content for specific AI queries. Nobody**                |
| 5.17 | AI citation competitor comparison                           | DF    | P0       |                                                                     |
| 5.18 | **AI answer format optimization**                           | IN    | P0       | **Structure for AI consumption patterns**                           |
| 5.19 | **Passage-level optimization for AI extraction**            | IN    | P1       |                                                                     |
| 5.20 | Vector embedding analysis                                   | IN    | P3       | Research-stage                                                      |
| 5.21 | Multi-language AI visibility tracking                       | WS    | P1       |                                                                     |
| 5.22 | AI citation trend alerts                                    | DF    | P1       |                                                                     |

---

### Category 6: Authority Building (15 features)

| #    | Feature                                                        | Class | Priority | Notes                                             |
| ---- | -------------------------------------------------------------- | ----- | -------- | ------------------------------------------------- |
| 6.1  | Brand mention monitoring (web)                                 | TS    | P0       | Semrush, Brand24                                  |
| 6.2  | Unlinked mention discovery & conversion                        | DF    | P0       |                                                   |
| 6.3  | **Reddit presence monitoring & management**                    | WS    | P0       | **Reddit = #1 source for Perplexity**             |
| 6.4  | YouTube SEO optimization                                       | DF    | P1       |                                                   |
| 6.5  | YouTube mention monitoring                                     | WS    | P1       | Ahrefs Brand Radar scans thumbnails + transcripts |
| 6.6  | **Expert platform monitoring** (Featured, Qwoted)              | WS    | P0       | **No SEO platform integrates this**               |
| 6.7  | Directory/citation management                                  | DF    | P2       | Local SEO focus                                   |
| 6.8  | Review platform monitoring                                     | DF    | P1       |                                                   |
| 6.9  | **Wikipedia/Wikidata presence tracking**                       | IN    | P2       | **Wikipedia = #1 source for ChatGPT**             |
| 6.10 | Social media authority signals                                 | WS    | P2       |                                                   |
| 6.11 | Brand search volume tracking                                   | DF    | P0       | **#1 predictor of AI citations**                  |
| 6.12 | **Digital PR campaign management**                             | WS    | P0       | **Nobody integrates this**                        |
| 6.13 | **Author/expert authority profiling** (E-E-A-T)                | WS    | P1       |                                                   |
| 6.14 | **Cross-platform brand consistency scoring**                   | IN    | P1       |                                                   |
| 6.15 | **AI platform brand presence scoring** (aggregate across LLMs) | WS    | P0       |                                                   |

---

### Category 7: Link Building / Earned Links (19 features)

| #    | Feature                                                | Class | Priority | Notes                                           |
| ---- | ------------------------------------------------------ | ----- | -------- | ----------------------------------------------- |
| 7.1  | Backlink profile analysis                              | TS    | P0       | Use third-party data (Ahrefs API, Moz API)      |
| 7.2  | Backlink monitoring (new/lost alerts)                  | TS    | P0       |                                                 |
| 7.3  | Link prospecting / opportunity discovery               | DF    | P0       |                                                 |
| 7.4  | **Outreach management** (emails, follow-ups, tracking) | WS    | P0       | **Not in SEO platforms. BuzzStream standalone** |
| 7.5  | Guest post opportunity finder                          | DF    | P1       |                                                 |
| 7.6  | Broken link building                                   | DF    | P2       |                                                 |
| 7.7  | Competitor backlink analysis                           | TS    | P0       |                                                 |
| 7.8  | Link quality / toxicity scoring                        | TS    | P1       |                                                 |
| 7.9  | Disavow file management                                | DF    | P2       |                                                 |
| 7.10 | **HARO/Featured/Qwoted integration**                   | WS    | P0       | **No SEO platform does this**                   |
| 7.11 | Linkable asset identification                          | DF    | P1       |                                                 |
| 7.12 | Link intersection (competitor-exclusive links)         | TS    | P1       |                                                 |
| 7.13 | Link velocity tracking                                 | DF    | P2       |                                                 |
| 7.14 | **Outreach email template library**                    | WS    | P1       |                                                 |
| 7.15 | **Link building campaign management** (pipeline view)  | WS    | P0       | **Nobody has this in SEO platforms**            |
| 7.16 | **AI-generated outreach personalization**              | IN    | P1       |                                                 |
| 7.17 | **Relationship management** (contact database)         | WS    | P1       |                                                 |
| 7.18 | **Link building ROI tracking**                         | IN    | P1       | **Cost per link, value per link**               |
| 7.19 | Link building strategy recommendations                 | DF    | P1       |                                                 |

---

### Category 8: On-Page Automation (16 features)

| #    | Feature                                             | Class | Priority | Notes                                 |
| ---- | --------------------------------------------------- | ----- | -------- | ------------------------------------- |
| 8.1  | Bulk meta title/description editing                 | DF    | P0       | Alli AI, SearchAtlas                  |
| 8.2  | Bulk schema markup deployment                       | WS    | P0       |                                       |
| 8.3  | Internal linking automation                         | DF    | P0       |                                       |
| 8.4  | SEO A/B testing                                     | WS    | P2       |                                       |
| 8.5  | JS-based site modification (no CMS access needed)   | WS    | P2       | Alli AI's approach                    |
| 8.6  | CMS push: WordPress                                 | DF    | P0       |                                       |
| 8.7  | CMS push: Shopify                                   | DF    | P0       |                                       |
| 8.8  | CMS push: Wix/Squarespace/Webflow                   | WS    | P2       |                                       |
| 8.9  | Auto-fix for common SEO issues (one-click)          | DF    | P0       | SearchAtlas OTTO                      |
| 8.10 | Redirect management                                 | DF    | P1       |                                       |
| 8.11 | Canonical tag management                            | DF    | P2       |                                       |
| 8.12 | Automated hreflang deployment                       | WS    | P1       |                                       |
| 8.13 | **Content update scheduling**                       | IN    | P1       |                                       |
| 8.14 | Bulk image optimization                             | WS    | P2       |                                       |
| 8.15 | **Change approval workflow** (review before deploy) | WS    | P0       | **Critical for agencies**             |
| 8.16 | **Change rollback** (undo automated modifications)  | IN    | P0       | **Nobody does this. Critical safety** |

---

### Category 9: Competitor Intelligence (16 features)

| #    | Feature                                                | Class | Priority | Notes                               |
| ---- | ------------------------------------------------------ | ----- | -------- | ----------------------------------- |
| 9.1  | Competitor discovery                                   | TS    | P0       |                                     |
| 9.2  | Competitor keyword tracking                            | TS    | P0       |                                     |
| 9.3  | Competitor backlink analysis                           | TS    | P0       |                                     |
| 9.4  | Competitor content analysis                            | DF    | P0       |                                     |
| 9.5  | Competitor ad copy analysis                            | DF    | P2       |                                     |
| 9.6  | Competitor traffic estimation                          | DF    | P1       |                                     |
| 9.7  | **Competitor AI visibility comparison**                | WS    | P0       | **Side-by-side across all LLMs**    |
| 9.8  | Market share / visibility trends                       | DF    | P1       |                                     |
| 9.9  | Competitor alerting (new content, links, rank changes) | DF    | P1       |                                     |
| 9.10 | Competitor technology stack detection                  | WS    | P3       |                                     |
| 9.11 | **Competitor content calendar reverse-engineering**    | IN    | P2       |                                     |
| 9.12 | Competitor social media analysis                       | WS    | P2       |                                     |
| 9.13 | Competitor SERP feature domination                     | DF    | P1       |                                     |
| 9.14 | **Competitor schema comparison**                       | IN    | P2       |                                     |
| 9.15 | **Competitor AI strategy comparison**                  | IN    | P0       | **How they optimize for AI search** |
| 9.16 | Historical competitor analysis                         | WS    | P3       |                                     |

---

### Category 10: Rank Tracking & Analytics (23 features)

| #     | Feature                                       | Class | Priority | Notes                           |
| ----- | --------------------------------------------- | ----- | -------- | ------------------------------- |
| 10.1  | Daily rank tracking (Google)                  | TS    | P0       |                                 |
| 10.2  | Bing rank tracking                            | DF    | P2       |                                 |
| 10.3  | AI rank tracking (LLM citation positions)     | DF→TS | P0       |                                 |
| 10.4  | Local rank tracking (city/zip level)          | TS    | P1       |                                 |
| 10.5  | Mobile vs desktop rank tracking               | TS    | P1       |                                 |
| 10.6  | SERP feature monitoring                       | TS    | P0       |                                 |
| 10.7  | Google Search Console integration             | TS    | P0       |                                 |
| 10.8  | Google Analytics 4 integration                | TS    | P0       |                                 |
| 10.9  | Traffic forecasting                           | DF    | P2       |                                 |
| 10.10 | **Revenue/conversion attribution**            | WS    | P1       | **SEO contribution to revenue** |
| 10.11 | Custom dashboards                             | TS    | P0       |                                 |
| 10.12 | Automated reporting (weekly/monthly email)    | TS    | P0       |                                 |
| 10.13 | White-label reports                           | TS    | P0       | For agencies                    |
| 10.14 | Data export (CSV, PDF)                        | TS    | P0       |                                 |
| 10.15 | API access                                    | DF    | P1       |                                 |
| 10.16 | Google Business Profile tracking              | DF    | P2       |                                 |
| 10.17 | Multi-search-engine tracking                  | DF    | P2       |                                 |
| 10.18 | SERP volatility / algorithm update detection  | DF    | P2       |                                 |
| 10.19 | **AI-generated report summaries** (narrative) | WS    | P0       | **Critical for agencies**       |
| 10.20 | Share of voice trending                       | DF    | P1       |                                 |
| 10.21 | Cannibalization reporting                     | DF    | P1       |                                 |
| 10.22 | Cohort analysis                               | WS    | P2       |                                 |
| 10.23 | Real-time rank checking (on-demand)           | DF    | P2       |                                 |

---

### Category 11: Platform & Agency Features (18 features)

| #     | Feature                                                 | Class | Priority | Notes                                      |
| ----- | ------------------------------------------------------- | ----- | -------- | ------------------------------------------ |
| 11.1  | Multi-tenant / multi-client management                  | TS    | P0       | Core architecture                          |
| 11.2  | White-label branding (logo, colors, custom domain)      | DF    | P0       | Key differentiator for agency sales        |
| 11.3  | Team management / permissions / RBAC                    | TS    | P0       |                                            |
| 11.4  | Client portal / read-only dashboards                    | DF    | P0       |                                            |
| 11.5  | API access (RESTful)                                    | TS    | P1       |                                            |
| 11.6  | Webhooks / event notifications                          | WS    | P2       |                                            |
| 11.7  | Audit trail / activity log                              | DF    | P1       |                                            |
| 11.8  | **Reseller billing** (bill clients through platform)    | WS    | P1       |                                            |
| 11.9  | Onboarding wizard                                       | DF    | P0       |                                            |
| 11.10 | **Templates per industry vertical**                     | WS    | P1       |                                            |
| 11.11 | Bulk operations across sites                            | DF    | P1       |                                            |
| 11.12 | **Client health scoring** (aggregate metric)            | WS    | P0       | **Critical for agencies. Nobody has this** |
| 11.13 | **SLA / task tracking per client**                      | IN    | P2       |                                            |
| 11.14 | **Automated client onboarding** (connect GSC, GA4, CMS) | WS    | P0       |                                            |
| 11.15 | Usage-based billing / credit system                     | DF    | P0       |                                            |
| 11.16 | Multi-currency billing                                  | WS    | P2       |                                            |
| 11.17 | SSO / SAML                                              | DF    | P2       | Enterprise                                 |
| 11.18 | Custom user roles per client                            | WS    | P2       |                                            |

---

### Category 12: CMS & Integration Ecosystem (21 features)

| #     | Feature                                     | Class | Priority | Notes      |
| ----- | ------------------------------------------- | ----- | -------- | ---------- |
| 12.1  | WordPress integration (read + write)        | DF    | P0       |            |
| 12.2  | Shopify integration (read + write)          | DF    | P0       |            |
| 12.3  | Wix integration                             | WS    | P2       |            |
| 12.4  | Squarespace integration                     | WS    | P2       |            |
| 12.5  | Webflow integration                         | WS    | P2       |            |
| 12.6  | HubSpot integration                         | WS    | P2       |            |
| 12.7  | Salesforce integration                      | WS    | P3       | Enterprise |
| 12.8  | Google Sheets integration                   | DF    | P1       |            |
| 12.9  | Google Docs integration                     | WS    | P2       |            |
| 12.10 | Slack notifications                         | DF    | P1       |            |
| 12.11 | Teams notifications                         | WS    | P2       |            |
| 12.12 | Zapier integration                          | DF    | P1       |            |
| 12.13 | Make.com / n8n integration                  | WS    | P2       |            |
| 12.14 | Data warehouse export                       | WS    | P3       |            |
| 12.15 | Chrome extension                            | TS    | P1       |            |
| 12.16 | Mobile app                                  | DF    | P3       |            |
| 12.17 | Looker Studio connector                     | DF    | P2       |            |
| 12.18 | Adobe Analytics                             | WS    | P3       |            |
| 12.19 | Headless CMS (Contentful, Strapi)           | IN    | P3       |            |
| 12.20 | E-commerce platforms (WooCommerce, Magento) | WS    | P2       |            |
| 12.21 | Vercel/Netlify integration                  | IN    | P3       |            |

---

### Category 13: AI-Powered Features (18 features)

| #     | Feature                                                    | Class | Priority | Notes                               |
| ----- | ---------------------------------------------------------- | ----- | -------- | ----------------------------------- |
| 13.1  | AI recommendations engine                                  | DF    | P0       | Semrush Copilot                     |
| 13.2  | **Natural language querying** ("show my worst pages")      | WS    | P1       | seoClarity Sia                      |
| 13.3  | **Predictive analytics** (forecast ranking changes)        | WS    | P2       |                                     |
| 13.4  | Automated task prioritization                              | DF    | P0       |                                     |
| 13.5  | AI content quality scoring                                 | TS    | P0       |                                     |
| 13.6  | Smart alerts / anomaly detection                           | DF    | P0       |                                     |
| 13.7  | Auto-generated action items per audit                      | DF    | P0       |                                     |
| 13.8  | **Conversational interface / chat**                        | WS    | P1       |                                     |
| 13.9  | **AI-powered site changes with approval**                  | WS    | P0       | SearchAtlas OTTO                    |
| 13.10 | **AI competitor strategy analysis**                        | IN    | P1       |                                     |
| 13.11 | **AI-generated client reports** (narrative)                | WS    | P0       |                                     |
| 13.12 | Automated content brief from keyword clusters              | DF    | P0       |                                     |
| 13.13 | **AI internal linking graph optimization**                 | IN    | P2       |                                     |
| 13.14 | **Predictive content performance**                         | WS    | P1       |                                     |
| 13.15 | **Multi-model AI assistant**                               | IN    | P1       | Different LLMs for different tasks  |
| 13.16 | **AI workflow automation** (audit → fix → deploy → verify) | WS    | P0       | **End-to-end. SearchAtlas closest** |
| 13.17 | **Learning system** (improves based on YOUR results)       | IN    | P1       | **Nobody. Major moat**              |
| 13.18 | **AI competitive moat analysis**                           | IN    | P2       |                                     |

---

### Category 14: Local SEO (9 features)

| #    | Feature                            | Class | Priority | Notes                      |
| ---- | ---------------------------------- | ----- | -------- | -------------------------- |
| 14.1 | Google Business Profile management | TS    | P2       | For local-focused agencies |
| 14.2 | Local rank tracking (grid/heatmap) | DF    | P2       |                            |
| 14.3 | Citation audit & NAP consistency   | TS    | P2       |                            |
| 14.4 | Review monitoring & response       | DF    | P2       |                            |
| 14.5 | AI local search visibility         | WS    | P2       |                            |
| 14.6 | Multi-location management          | DF    | P3       |                            |
| 14.7 | Local competitor monitoring        | DF    | P2       |                            |
| 14.8 | GBP post scheduling                | DF    | P3       |                            |
| 14.9 | Local landing page generation      | WS    | P3       |                            |

---

## 3. Feature Count Summary

| Classification          | Count    | Description                                     |
| ----------------------- | -------- | ----------------------------------------------- |
| **Table stakes (TS)**   | ~65      | Must have. Non-negotiable for credibility       |
| **Differentiator (DF)** | ~85      | Competitive advantage. Build all P0-P1          |
| **White space (WS)**    | ~55      | Few/no platforms have. High-value opportunities |
| **Innovation (IN)**     | ~25      | Nobody has built. Potential market-defining     |
| **TOTAL**               | **~230** | Complete feature universe                       |

### By Priority

| Priority                               | Count | Build Phase |
| -------------------------------------- | ----- | ----------- |
| **P0** (must have for MVP)             | ~75   | Phase 1-3   |
| **P1** (needed for competitive parity) | ~70   | Phase 4-5   |
| **P2** (nice to have, adds depth)      | ~55   | Phase 6+    |
| **P3** (future, enterprise, niche)     | ~30   | Backlog     |

---

## 4. Top 10 Innovation Opportunities (Nobody Has These)

| #   | Feature                                        | Category      | Why It Matters                                                           |
| --- | ---------------------------------------------- | ------------- | ------------------------------------------------------------------------ |
| 1   | **AI crawlability audit**                      | Technical SEO | See how LLMs actually process your site — blind spot nobody addresses    |
| 2   | **Entity-optimized content scoring**           | Content       | Align content with knowledge graph for AI citation probability           |
| 3   | **Prompt engineering recommendations**         | AISO          | Optimize content for specific AI queries — reverse-engineer what works   |
| 4   | **AI workflow automation** (end-to-end)        | AI Features   | Audit → prioritise → generate fix → deploy → verify — full loop          |
| 5   | **E-E-A-T compliance engine**                  | Content       | Automated trust/authority scoring with actionable recommendations        |
| 6   | **Learning system**                            | AI Features   | Platform improves recommendations based on YOUR site's results over time |
| 7   | **Link building campaign management with ROI** | Links         | Pipeline view + cost/value tracking — agencies need this desperately     |
| 8   | **Change rollback** for automated SEO          | On-Page       | Safety net for automation — critical for agency trust                    |
| 9   | **Cross-channel content strategy**             | Strategy      | Unified blog + social + video + AI strategy in one plan                  |
| 10  | **AI competitive moat analysis**               | Intelligence  | What makes you hard to outrank — strategic, not tactical                 |

---

## 5. Our Unique Position vs Market

### Features We Already Have (from existing skills/agents) That Competitors Don't Combine

| Our Capability                                                  | Closest Competitor                 | Our Advantage                                       |
| --------------------------------------------------------------- | ---------------------------------- | --------------------------------------------------- |
| Unified SEO + AISO audit in single score                        | SE Ranking (separate add-on)       | Native integration, not bolt-on                     |
| 36-factor AISO framework (research-backed)                      | Otterly (25-factor)                | More comprehensive, multi-source validated          |
| Content pipeline: research → write → optimise → publish → track | Relixir (closest, autonomous only) | Human-in-the-loop + autonomous option               |
| Authority building across 6 channels                            | Nobody                             | **Complete white space**                            |
| Earned link engine with outreach management                     | Nobody in SEO platforms            | **Complete white space**                            |
| Triage protocol (FIX NOW / FIX LATER / DEFER / SKIP)            | Nobody                             | Practical, agency-friendly prioritisation           |
| Layout impact assessment before changes                         | Nobody                             | Learned from real implementation failures           |
| Multi-model validation (ChatGPT + Gemini as evaluators)         | Nobody                             | Cross-validation prevents single-model bias         |
| Per-platform optimization playbooks                             | Generic in most tools              | Platform-specific (ChatGPT vs Perplexity vs Gemini) |

### AutoSEO (getautoseo.com) Comparison

| Feature                  | AutoSEO                   | Our Platform                              |
| ------------------------ | ------------------------- | ----------------------------------------- |
| Daily content publishing | Yes (fully auto)          | Yes (with human approval gate)            |
| Backlink building        | ~100 DA/month (automated) | Earned links only (quality over quantity) |
| Technical SEO audit      | No                        | Full audit + automation                   |
| AISO monitoring          | TrackMyBusiness (basic)   | 7+ AI platforms, 36-factor scoring        |
| Authority building       | No                        | 6-channel integrated                      |
| White-label/agency       | No                        | Core feature                              |
| Content quality control  | Minimal                   | E-E-A-T compliance, expert review gate    |
| CMS integrations         | 10+                       | WordPress + Shopify initially, expanding  |
| Pricing transparency     | Unclear (~$29/week?)      | Clear tiers: $79-799/mo                   |

AutoSEO targets hands-off SMBs who want "set and forget." We target agencies and brands who want control + automation + AI visibility intelligence. Different market segments.

---

## 6. MVP Feature Selection — What to Build First

### MVP Scope (Phase 6 from build plan): ~75 P0 features across all categories

**Core product for MVP (agency-first):**

1. Site audit + AISO audit (combined score) — our existing skills power this
2. Keyword tracking + AI citation tracking (unified dashboard)
3. Content pipeline with approval workflow (brief → draft → review → publish)
4. Authority builder dashboard (monitoring + opportunity queue + action items)
5. Earned link pipeline (prospect → outreach → track → report)
6. White-label reporting (traditional SEO + AI visibility combined)
7. Multi-client management with client health scoring
8. Shopify + WordPress CMS integration

**Deferred to post-MVP:**

- Local SEO (P2)
- Advanced competitor intelligence (P2)
- Chrome extension (P1 but post-MVP)
- Mobile app (P3)
- Enterprise features: SSO, data warehouse export (P3)
- Advanced automation: SEO A/B testing, JS injection (P2)

---

## 7. Connected Documentation

| Document                                          | What                                                     |
| ------------------------------------------------- | -------------------------------------------------------- |
| [seo-aiso-capability.md](seo-aiso-capability.md)  | Capability overview, build plan, competitive positioning |
| `research/ai-visibility-optimization-research.md` | AI visibility research (40+ sources)                     |
| `research/seo-content-strategy-best-practices.md` | Content strategy research (30+ sources)                  |
| `~/.claude/skills/aiso/SKILL.md`                  | 36-factor AISO scoring framework                         |
| `~/.claude/skills/seo-content-strategy/SKILL.md`  | Content strategy methodology                             |
| `~/.claude/skills/seo-aiso-validator/SKILL.md`    | Audit + triage protocol                                  |

---

## Research Sources

Competitive analysis sourced from 60+ sources (March 2026):

- Direct platform websites: getautoseo.com, semrush.com, ahrefs.com, seranking.com, otterly.ai, frase.io, surferseo.com, relixir.ai, alliai.com, scrunch.com, athenahq.ai, getaiso.com, tryprofound.com, searchatlas.com, rankability.com, scalenut.com, writesonic.com, conductor.com, brightedge.com, seoclarity.net, quattr.com
- Industry reports: Conductor AEO/GEO Benchmarks 2026, Forrester Wave SEO 2025, Gartner Cool Vendors
- Review sites: G2, Capterra, TrustRadius
- Comparison articles: SearchInfluence, AthenaHQ, Scrunch, GenerateMore, ZipTie
- Pricing analysis: DemandSage, CheckThat, BoostPlanner, TrySight
- Market sizing: SEO services $83.98B (12.3% CAGR), GEO/AISO $4.97B→2033 (projected), AI traffic +527% YoY
