# Entity Establishment for AISO/GEO — Research Report

> **Purpose:** Foundation research for Layer 1 (Entity Establishment) of the External Authority Builder capability being built for AISOGEN (PROD-004 vertical) and the agency's own use.
>
> **Research date:** 2026-03-11
> **Scope:** Google Business Profile, Wikidata, Knowledge Graph, LinkedIn, entity databases, sameAs linking, competitor SaaS tools, common mistakes.
> **Sources:** 30+ industry publications and vendor research, 2025-2026 data.

---

## Table of Contents

1. [Why Entity Establishment Matters](#1-why-entity-establishment-matters)
2. [Google Business Profile for AI Visibility](#2-google-business-profile)
3. [Wikidata Entity Creation](#3-wikidata-entity-creation)
4. [Wikipedia — The High-Value, High-Barrier Asset](#4-wikipedia)
5. [Google Knowledge Graph Seeding](#5-google-knowledge-graph-seeding)
6. [LinkedIn Company Pages for AI](#6-linkedin-company-pages)
7. [Crunchbase and Other Entity Databases](#7-entity-databases)
8. [Schema.org sameAs Linking](#8-sameas-linking)
9. [Competitor SaaS Tools](#9-competitor-saas-tools)
10. [Common Mistakes and Lessons Learned](#10-common-mistakes)
11. [Synthesis: The Entity Establishment Stack](#11-the-entity-establishment-stack)
12. [Product Implications for AISOGEN](#12-product-implications)

---

## 1. Why Entity Establishment Matters

**The core problem:** AI models (ChatGPT, Gemini, Perplexity, Claude) recognise brands that exist as entities in knowledge databases. Brands that don't exist as structured entities are invisible to AI, regardless of how much content they publish.

**Key statistics (2025-2026 data):**

- 70% of AI citations come from external sources — brand-owned websites are not enough (estimated, widely cited across industry)
- Entities with Wikipedia pages are **50% more likely** to appear in AI-generated top-ten lists (2025 study, four major LLMs, 58 questions)
- Sources with strong sameAs links to authoritative references receive **2-3x higher weighting** in AI responses (Schema App research)
- Entity Linking implementation produced a **19.72% increase in AI Overview visibility** in a published case study (Schema App, 85-day experiment)
- Google's Knowledge Graph contains 500 billion facts and 5 billion entities — it is the primary structured data source for Gemini
- AI search traffic converts at **4.4x the rate** of traditional organic search (2025 industry data)
- ChatGPT became Wikipedia's top traffic referrer in June 2025

**How AI models use entity data:**

| AI Model       | Primary Data Strategy                        | Key External Sources                                            |
| -------------- | -------------------------------------------- | --------------------------------------------------------------- |
| Google Gemini  | Knowledge Graph + real-time index            | GBP, Wikidata, Wikipedia, structured data                       |
| ChatGPT Search | RAG from web + training data                 | Wikipedia (#1), third-party sites (Yelp, TripAdvisor, MapQuest) |
| Perplexity     | RAG, real-time retrieval, cites sources      | Wikipedia, LinkedIn (Company Pages), news                       |
| Claude         | Training data + real-time tools (if enabled) | Wikipedia, Wikidata, authoritative databases                    |

Entity establishment is the foundation. Without it, content strategies and backlink building work on a brand that AI cannot identify with confidence.

---

## 2. Google Business Profile for AI Visibility {#2-google-business-profile}

### What Changed in 2025-2026

Google replaced the manual "ask a question" feature with **"Ask Maps"** — Gemini now scans your GBP profile, website, and reviews to generate instant conversational answers. This means GBP is now a direct input to Gemini's AI responses, not just a local ranking signal.

GBP information appears in Google AI Overviews, which now appear in **over 50% of search results**. Question-based queries trigger AI Overviews 99.2% of the time.

### Fields That Matter Most for AI Visibility

| Field                               | AI Visibility Impact | Notes                                                   |
| ----------------------------------- | -------------------- | ------------------------------------------------------- |
| Business description                | High                 | Gemini reads this verbatim for conversational answers   |
| Categories (primary + secondary)    | High                 | Used for entity classification in the Knowledge Graph   |
| Products/services with descriptions | High                 | AI uses these to answer "what does X offer?" queries    |
| Q&A section                         | High                 | FAQ schema equivalent — 60% more likely to be featured  |
| Photos (fresh, labelled)            | Medium-High          | Profiles inactive for 30+ days saw impression drops     |
| Reviews (with responses)            | High                 | AI uses review data to assess credibility and services  |
| Website URL                         | High                 | Links GBP entity to website entity — feeds sameAs chain |
| Opening hours                       | Medium               | Factual data AI uses for operational queries            |
| Service area                        | Medium               | Geographic entity disambiguation                        |

### Best Practices for AI (not just local SEO)

1. **Match your GBP description to your schema.org description** — consistency across surfaces is what AI trusts. Use identical brand name, description, and category language everywhere.
2. **Post updates at least every 14 days** — AI-driven impression drops reported for profiles inactive 30+ days.
3. **Use Q&A to pre-answer queries** — this is structured FAQ data that Gemini reads directly.
4. **Add products and services with keyword-rich descriptions** — these feed the entity's attribute graph.
5. **Respond to every review** — review responses are scraped by AI for contextual data.
6. **Add AR/virtual tour media** — visual search is now a ranking pillar in 2026.

### How AI Uses GBP Data Specifically

Gemini's "Ask Maps" integration means your GBP is now an **LLM prompt input**. When a user asks a conversational query about your business type, Gemini composes an answer drawing from your GBP profile fields, reviews, and your linked website. This is a fundamentally different model from traditional local search, where GBP drove map pack rankings.

**Automation opportunity:** GBP data monitoring and consistency checking across all entity surfaces. Flag when GBP description diverges from schema.org or Wikidata descriptions.

---

## 3. Wikidata Entity Creation {#3-wikidata-entity-creation}

### Why Wikidata Is the Starting Point

Wikidata is Wikipedia's machine-readable sibling — the world's largest open-access knowledge graph. Every item has a **QID** (unique identifier) and every relationship a **P-code** (property code). AI models use Wikidata in two ways: as training data (bulk ingestion) and as grounding (real-time retrieval for factual queries).

**Key advantage over Wikipedia:** Wikidata has no strict notability requirement. Any brand or person can create an entry as long as claims are backed by verifiable sources (official website counts).

**Timeline:** Wikidata publishes immediately. AI indexing typically occurs within hours to days. A Knowledge Panel can emerge 3-6 months after consistent entity signal building.

### P-Properties That Matter Most for AI Recognition

| Property              | P-Code | Why It Matters                                            |
| --------------------- | ------ | --------------------------------------------------------- |
| Instance of           | P31    | Classifies the entity type (business, organisation, etc.) |
| Industry              | P452   | Maps to Knowledge Graph industry taxonomy                 |
| Founder               | P112   | Enables entity association with known people              |
| Official website      | P856   | Anchors the entity to owned web presence                  |
| Country               | P17    | Geographic entity disambiguation                          |
| Headquarters location | P159   | Local entity signals                                      |
| Founded               | P571   | Temporal context                                          |
| Legal name            | P1448  | Entity resolution for exact name matching                 |
| LinkedIn URL          | P4264  | Cross-platform entity linking                             |
| Crunchbase URL        | P2088  | Cross-platform entity linking                             |
| Twitter/X username    | P2002  | Social entity linking                                     |
| Short description     | —      | The one-line description AI reads in citations            |
| sameAs equivalents    | P1709  | Links to owl:sameAs equivalents                           |

### Step-by-Step Creation Process

1. Search Wikidata for existing entries to avoid duplicate creation
2. Create a new item — add label (exact brand name), description (one sentence, factual), and aliases (common variations)
3. Add instance of (P31) — set to "business" or "private company" or appropriate type
4. Add industry (P452)
5. Add official website (P856) — this is the most important anchor
6. Add founder (P112) — link to the founder's existing Wikidata QID if they have one
7. Add headquarters (P159) — link to the city/country's QID
8. Add founding date (P571)
9. Add LinkedIn, Crunchbase, Twitter profile URLs as P-properties
10. Add references (sources) to each claim — official site, press coverage, industry databases
11. After creation, add the QID to your website's schema.org markup via sameAs

### Tools Available

- **Wikidata itself** — free, manual. No automation tools exist at scale for initial creation.
- **OpenRefine with Wikidata extension** — for batch editing of existing items, not initial creation
- **QuickStatements** — for programmatic statement addition (requires Wikidata account)
- **Wikidata Embedding Project** (October 2025) — vector-based semantic search, supports MCP protocol

**Gap identified:** No SaaS tool automates initial Wikidata entity creation end-to-end with guided P-property selection. This is a genuine product opportunity.

---

## 4. Wikipedia — The High-Value, High-Barrier Asset {#4-wikipedia}

### The Data Case

- 50% of top marketing agencies most frequently cited in AI answers have Wikipedia pages
- Wikipedia is the #1 cited source by ChatGPT; #2 across all major LLMs (behind Reddit)
- Entities with Wikipedia pages are 50% more likely to appear in AI-generated top-ten lists
- ChatGPT became Wikipedia's top traffic referrer in June 2025

Wikipedia should be treated as the highest-value entity establishment asset, but it is also the hardest to obtain.

### Notability Requirements

Wikipedia requires **significant coverage in multiple reliable, independent secondary sources**. For companies, this typically means:

- National or international scope of activities
- Coverage in 3-5 substantial articles from credible publications (not press releases)
- Neutral, encyclopedic tone with no promotional content
- No conflict of interest editing (brands cannot write their own articles)

### Strategy for Brands That Cannot Get Wikipedia

1. Build citation history in Crunchbase, industry databases, press coverage
2. Create Wikidata entry first (no notability requirement)
3. Get cited in Wikipedia articles about industry categories (not a standalone page)
4. After 3-5 credible independent press mentions, commission a Wikipedia page via a professional editor
5. Alternatively, get cited on Wikipedia as a reference in related articles — this still improves entity authority

### Automation Opportunity

Monitor Wikipedia for existing mentions of the brand name. Track whether the brand is referenced in any Wikipedia article. Alert when citation threshold is approaching where a standalone page becomes viable.

---

## 5. Google Knowledge Graph Seeding {#5-google-knowledge-graph-seeding}

### How Google's Knowledge Graph Works

Google's Knowledge Graph contains 500 billion facts and 5 billion entities. It is the primary structured data source powering Gemini's factual responses. Brands in the Knowledge Graph are far more likely to appear in AI-generated summaries.

### Key Signals for Knowledge Graph Entry

Google and OpenAI distinguish brands from websites by analysing "Entity Signals" — consistent, corroborating evidence across the web that confirms a business exists as a legal and operational reality.

| Signal Category     | Specific Signals                            | Weight      |
| ------------------- | ------------------------------------------- | ----------- |
| Structured data     | Organization schema on homepage             | High        |
| Wikidata            | QID with populated P-properties             | High        |
| Wikipedia           | Standalone article or referenced in article | Very High   |
| GBP                 | Verified profile with consistent NAP        | High        |
| sameAs links        | Cross-platform entity linking               | High        |
| Press mentions      | Coverage in authoritative publications      | Medium-High |
| Consistent NAP      | Name/Address/Phone identical everywhere     | Medium      |
| Crunchbase/LinkedIn | Profiles with consistent descriptions       | Medium      |
| Domain authority    | Age and authority of owned domain           | Medium      |

### The "Closed-Loop" Schema Strategy

The most effective technical approach is a closed loop of entity signals:

1. Homepage schema.org Organization markup with sameAs linking to Wikidata, Wikipedia, LinkedIn, Crunchbase
2. Wikidata entry linking back to official website (P856)
3. GBP linking to same official website
4. LinkedIn profile linking to same official website
5. Crunchbase profile with same website URL

When multiple independent sources describe your organisation consistently and all link to the same domain, AI systems can cite you with high confidence.

### Timeline

- Brands starting from zero: 3-6 months of consistent entity signal building to trigger a Knowledge Panel
- Established brands with offline presence: may appear faster once structured data is correctly implemented
- Wikipedia addition alone can trigger a Knowledge Panel within weeks for an existing brand

### New Approaches Beyond Wikipedia/Wikidata

- **Press release syndication** to AP, PR Newswire — these feed Google's entity recognition
- **Industry awards and listings** — "Best of" lists in trade publications create authoritative third-party mentions
- **Podcast guest appearances** — transcripts and show notes create entity associations
- **University or research citations** — academic mentions carry high trust weight
- **Google Merchant Center** (for e-commerce) — product entity data feeds directly into the Knowledge Graph

---

## 6. LinkedIn Company Pages for AI {#6-linkedin-company-pages}

### LinkedIn Citation Data (2025 Research — 89,000 LinkedIn URLs Analysed)

LinkedIn is the **#2 most cited domain** across AI models, appearing in 11% of AI responses on average across ChatGPT Search, Perplexity, and Google AI Mode.

Citation rates by platform:

- Google AI Mode: 13.5% of responses cite LinkedIn
- ChatGPT Search: 14.3% of responses cite LinkedIn
- Perplexity: 5.3% of responses cite LinkedIn

Content type cited differs by platform:

- Perplexity cites Company Pages most frequently (59% of LinkedIn citations)
- ChatGPT Search and Google AI Mode more typically cite individual creator profiles (59%)

### What LinkedIn Data Feeds Into AI Models

LinkedIn has partnerships with Microsoft (which owns LinkedIn). Microsoft Copilot and Bing have preferential access to LinkedIn data. For other AI models, LinkedIn acts as an **entity corroboration source** — AI models use LinkedIn to verify company descriptions, founding dates, employee counts, and industry classifications.

LinkedIn data is also incorporated into ChatGPT's training data and is indexed by Perplexity's real-time crawler.

### Optimisation for AI Visibility

| Field                   | AI Relevance | Action                                                                                            |
| ----------------------- | ------------ | ------------------------------------------------------------------------------------------------- |
| Company description     | High         | Match exactly to schema.org and Wikidata descriptions (first 3 sentences matter most)             |
| Industry classification | High         | Use official LinkedIn industry taxonomy, same as Wikidata P452                                    |
| Company size            | Medium       | Factual signal for entity resolution                                                              |
| Founded date            | Medium       | Matches Wikidata P571                                                                             |
| Website URL             | High         | Closes the entity loop — same URL everywhere                                                      |
| Specialties             | Medium-High  | Keyword co-occurrence signals for AI topic association                                            |
| Long-form articles      | High         | 500-2,000 word articles have highest citation rate; data-focused content cited 54-64% of the time |
| Regular posts           | Medium       | Freshness signal; mid-length posts (50-299 words) perform well                                    |

### Practical Recommendation

LinkedIn Company Page description should be written once and used as the master description across all platforms (Wikidata, schema.org, GBP, Crunchbase). This consistency is what AI trusts.

---

## 7. Crunchbase and Other Entity Databases {#7-entity-databases}

### Which Databases Matter for AI

| Database                | AI Impact   | Why                                                     | Best For                   |
| ----------------------- | ----------- | ------------------------------------------------------- | -------------------------- |
| Wikipedia               | Very High   | Training data + real-time retrieval for all major LLMs  | All brands (if eligible)   |
| Wikidata                | High        | Direct Knowledge Graph seed, machine-readable           | All brands                 |
| LinkedIn                | High        | #2 cited domain across AI models                        | All brands                 |
| Google Business Profile | High        | Direct Gemini input via Ask Maps                        | Local/physical businesses  |
| Crunchbase              | Medium-High | Widely used for company entity corroboration            | Startups, funded companies |
| Wikipedia citations     | Medium-High | Being referenced on Wikipedia (not just having a page)  | All brands                 |
| DUNS (Dun & Bradstreet) | Medium      | Business identity verification                          | B2B brands                 |
| OpenCorporates          | Medium      | Legal entity verification, used by AI for company facts | All companies              |
| GitHub                  | Medium      | For tech companies, AI models check GitHub presence     | Tech/SaaS brands           |
| Owler                   | Low-Medium  | 15M company profiles, community-driven                  | Competitive intel          |
| PitchBook/CB Insights   | Low         | Paywalled — limited AI access                           | Funded companies only      |

### Crunchbase Specifically

Crunchbase has 600+ endpoints and is used extensively by AI models for:

- Funding history (validates existence and investment)
- Founding date (entity temporal data)
- Founder names (entity associations)
- Company description (cross-platform consistency check)
- Investor names (entity network associations)

Crunchbase's own AI Visibility Score is 76/100 (Pendium.ai data), indicating it is well-recognised as an entity by AI models — making it a trustworthy corroboration source.

**Key insight:** Crunchbase is especially valuable for B2B SaaS brands. AI models use it to answer "who makes X product?" and "when was company Y founded?" queries.

### OpenCorporates — The Underused Signal

OpenCorporates maintains official legal entity data (company registration numbers, jurisdiction, registered address). This is a high-trust signal because it is based on government registry data. AI models use it for entity verification, particularly for formal company identity queries.

**Automation opportunity:** Check whether a brand is registered on OpenCorporates and Crunchbase. Flag gaps. This is a quick, automatable check that most entity tools miss.

---

## 8. Schema.org sameAs Linking {#8-sameas-linking}

### Does sameAs Actually Work?

Yes — with evidence:

- Sources with strong sameAs links receive **2-3x higher weighting** in AI responses
- Entity Linking implementation produced a **19.72% increase in AI Overview visibility** (Schema App case study, 85-day experiment)
- A 46% increase in impressions and 42% increase in clicks for non-branded queries was observed in one experiment linking entity schema across surfaces
- Schema markup is now cited as critical for AI visibility by all major SEO platforms (Semrush, Moz, Yext, BrightLocal)

### How sameAs Works Technically

The sameAs property in schema.org declares that two web resources refer to the same real-world entity. When an AI model encounters a brand's homepage schema, it reads the sameAs array and follows those links to corroborate identity. Each linked platform acts as a trust node.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "url": "https://companyname.com",
  "sameAs": [
    "https://www.wikidata.org/wiki/Q[QID]",
    "https://en.wikipedia.org/wiki/Company_Name",
    "https://www.linkedin.com/company/company-name",
    "https://www.crunchbase.com/organization/company-name",
    "https://twitter.com/companyname",
    "https://www.facebook.com/companyname"
  ]
}
```

### Priority Order for sameAs Links

1. Wikidata (QID URL) — highest trust, machine-readable structured data
2. Wikipedia — highest human-readable authority
3. LinkedIn — #2 cited domain across AI models
4. Crunchbase — company entity corroboration
5. Google Business Profile — ties GBP entity to website entity
6. Social profiles (Twitter/X, Facebook) — secondary corroboration

### Entity Nesting Beyond Organization

Advanced entity graphs nest related entities:

```
Organization
  → Person (founder, with their own Wikidata QID)
  → Product (with ProductSchema and sameAs links)
  → Service (with ServiceSchema)
  → LocalBusiness (with GBP sameAs)
```

The deeper and more accurately nested the entity graph, the more confident AI models become in citing the brand.

### Best Practices

1. All sameAs URLs must use HTTPS and resolve without redirects
2. Every linked profile must have identical brand name, description, and founding date
3. Check sameAs links quarterly — broken links remove trust nodes
4. Add sameAs to Person schema for founders (links their QID to the company entity)
5. Use the @id property on all schema items to enable cross-page entity linking

---

## 9. Competitor SaaS Tools {#9-competitor-saas-tools}

### Market Overview

The entity establishment market sits at the intersection of local SEO, brand management, and GEO. No single tool owns the full stack. The market is fragmented between:

- **Local citation managers** (BrightLocal, Moz Local, Yext) — focus on NAP consistency
- **Knowledge Panel managers** (Kalicube Pro) — focus on Google's entity graph
- **AI visibility monitors** (Otterly.ai, Profound, Semrush AI) — focus on tracking AI citations
- **Schema generators** (Schema App) — focus on structured data implementation

### Detailed Competitor Analysis

| Tool                           | Primary Focus                           | Entity Establishment Coverage                    | AI-Specific Features                                                   | Price Range                         | Gap                                                                             |
| ------------------------------ | --------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------- |
| **Yext**                       | Multi-location brand data management    | Strong — GBP, directories, Knowledge Graph       | Scout monitors AI citations; Knowledge Graph for entity structure      | Enterprise pricing ($500+/mo)       | Extremely expensive; no Wikidata automation; no Wikipedia strategy              |
| **Kalicube Pro**               | Knowledge Panel + Brand SERP management | Strong — dedicated entity tool, 25B data points  | Tracks entity across Knowledge Graph, LLMs, and Search; 6-step process | Agency-tier pricing (not published) | Steep learning curve; agency-focused; no self-serve for SMBs                    |
| **BrightLocal**                | Local SEO + citations                   | Medium — citation building, GBP audits           | Basic AI overview tracking; no dedicated entity tools                  | $29-$79/mo                          | No Wikidata/Wikipedia guidance; no schema automation; no AI entity gap analysis |
| **Moz Local**                  | Listing management                      | Medium — directory sync, NAP consistency         | Limited AI-specific features                                           | $16/mo+                             | Same as BrightLocal; trailing on AI                                             |
| **Semrush**                    | Broad SEO platform                      | Medium — local SEO module, listing management    | AI Overviews tracking; no entity-specific tooling                      | $120-$450/mo                        | Broad but shallow on entity; no Knowledge Graph tools                           |
| **Schema App**                 | Schema markup at scale                  | Strong for schema — entity linking               | Entity linking and scaling                                             | Enterprise                          | Technical; developer-focused; not accessible to non-technical users             |
| **Otterly.ai**                 | AI search monitoring                    | Weak — tracks mentions, not entity establishment | Tracks brand mentions in ChatGPT, Perplexity, Gemini                   | $49-$199/mo                         | Monitoring only — no entity building                                            |
| **Profound (tryprofound.com)** | B2B AI visibility                       | Medium — tracks citations                        | AI search monitoring for B2B SaaS                                      | Custom                              | No entity building automation                                                   |

### Yext — Deeper Analysis

Yext is the dominant player at the enterprise level ($446M ARR, 15% YoY growth in Q1 FY2026). Their Knowledge Graph approach is the closest to what AISOGEN's entity layer needs, but:

- Pricing is enterprise-only, making it inaccessible to SMBs and mid-market brands
- No Wikidata creation tooling
- No Wikipedia assessment or strategy
- Scout (AI visibility monitoring) is their newest AI product but is monitoring-only
- Complex implementation — requires professional services or dedicated team

**Gap:** Yext does for multi-location enterprise brands what AISOGEN could do for SMBs, startups, and growing brands at a fraction of the cost.

### Kalicube Pro — Deeper Analysis

Kalicube Pro is the most specialised entity tool on the market (25B data points, Jason Barnard's "Algorithmic Trinity" framework — Knowledge Graphs + LLMs + Search). Strong on:

- Knowledge Panel monitoring and optimisation
- Brand SERP analysis
- NLP analysis of how search engines describe the brand
- Entity deduplication detection

Gaps:

- Agency-tier pricing with no self-serve option
- No automated Wikidata creation
- No GBP-to-schema consistency checking
- No LinkedIn Company Page optimisation guidance
- No OpenCorporates / legal entity verification

### The Clear Market Gap

No tool on the market:

1. Guides a brand through creating a Wikidata entry step-by-step
2. Automatically checks consistency across GBP + Wikidata + LinkedIn + schema.org + Crunchbase
3. Identifies the specific P-properties missing from a Wikidata entry
4. Provides a Wikipedia eligibility assessment with specific actions needed
5. Generates the complete sameAs schema block from entity data
6. Does all of this at SMB-accessible pricing

This is the gap AISOGEN's Entity Establishment layer should fill.

---

## 10. Common Mistakes and Lessons Learned {#10-common-mistakes}

### Mistake 1: Inconsistent Entity Data Across Platforms

The most common and most damaging mistake. If the company name is "Smith AI Agency Ltd" on LinkedIn, "Smith AI Agency" on GBP, and "SmithAI" on Wikidata, AI models cannot resolve these to the same entity with confidence. They may cite competitors instead.

**Fix:** Choose a canonical brand name and description. Use it identically everywhere. Audit quarterly.

### Mistake 2: Treating GEO as a One-Time Task

Entity establishment is not "set and forget." Wikidata entries can be edited by others. GBP profiles decay without fresh posts. Schema markup breaks when websites are redesigned.

**Fix:** Monthly entity health check across all surfaces.

### Mistake 3: Skipping Wikidata Because "We Don't Have Wikipedia"

Brands assume they need Wikipedia first. They don't. Wikidata works independently as an AI trust signal and is often the faster path to Knowledge Panel emergence.

**Fix:** Create Wikidata entry before pursuing Wikipedia. Link Wikidata QID in schema.org.

### Mistake 4: sameAs Links That Don't Resolve

Broken sameAs links actively harm entity authority — they signal to AI that the entity data is unreliable. This is a surprisingly common technical failure after website migrations or social profile URL changes.

**Fix:** Automated broken sameAs link checking as part of entity health monitoring.

### Mistake 5: Artificial Entity Stuffing

AI platforms penalise content that artificially mentions companies, products, and people where they don't naturally fit. This applies to schema markup too — adding sameAs links to profiles that don't actually describe the brand damages credibility.

**Fix:** Only link to profiles that accurately describe the entity. Quality over quantity.

### Mistake 6: Ignoring the Founder Entity

Brands focus on the company entity but ignore the founder's personal entity. Many AI responses cite founders by name when answering questions about companies. A founder with a Wikidata entry, LinkedIn profile, and consistent online presence strengthens the company entity through entity association.

**Fix:** Create Wikidata entry for the founder. Link their QID to the company's Wikidata entry via P112 (founder). Add Person schema to their website/About page.

### Mistake 7: Only Optimising for One AI Platform

ChatGPT, Gemini, Perplexity, and Claude each have different citation strategies and data weighting. A brand visible on ChatGPT may be invisible on Gemini.

**Fix:** Cross-platform entity consistency is the universal solution — it improves visibility on all platforms simultaneously.

### Mistake 8: Not Claiming the Knowledge Panel

Once a Knowledge Panel appears, brands fail to claim and verify it. Unverified panels can display wrong information, which AI then cites.

**Fix:** Monitor for Knowledge Panel emergence. Claim it immediately via GBP or Google Search Console.

---

## 11. Synthesis: The Entity Establishment Stack {#11-the-entity-establishment-stack}

Based on the research, the optimal entity establishment sequence is:

### Layer 1: Legal Entity Foundation (Week 1)

- Verify OpenCorporates listing exists (or create via Companies House / Chamber of Commerce registration)
- Claim Google Business Profile and complete all fields
- Ensure LinkedIn Company Page is complete with canonical description

### Layer 2: Structured Knowledge (Week 1-2)

- Create Wikidata entry with all critical P-properties
- Note QID for use in schema.org
- Add at minimum: P31, P452, P856, P159, P112, P571

### Layer 3: Schema.org Implementation (Week 2)

- Implement Organization schema on homepage
- Add sameAs array linking to Wikidata QID, LinkedIn, GBP, Crunchbase
- Nest Person schema for founder(s) with their Wikidata QIDs
- Add BreadcrumbList and any relevant service/product schema

### Layer 4: Entity Corroboration (Week 2-4)

- Create Crunchbase profile (or verify existing)
- Ensure DUNS number is registered (B2B brands)
- Build 3-5 independent press citations (minimum for Wikipedia eligibility)
- Submit to industry-specific databases

### Layer 5: Wikipedia Strategy (Month 2+)

- Assess notability: do you have 3-5 substantial independent press citations?
- If yes: commission Wikipedia page via professional editor
- If no: get cited within existing Wikipedia articles about your industry category
- Monitor for Wikipedia mentions of the brand

### Layer 6: Monitoring and Maintenance (Ongoing)

- Monthly check: GBP freshness (posts, photos, responses)
- Quarterly: sameAs link resolution check
- Quarterly: cross-platform description consistency audit
- Monitor for Knowledge Panel emergence or changes
- Track AI citations for the brand across ChatGPT, Gemini, Perplexity

### Estimated Timeline to Knowledge Panel

| Starting Point                   | Realistic Timeline |
| -------------------------------- | ------------------ |
| Zero entity presence             | 4-6 months         |
| GBP claimed, some press coverage | 2-4 months         |
| Wikipedia page exists            | 2-8 weeks          |
| Strong Wikidata + schema + press | 3-5 months         |

---

## 12. Product Implications for AISOGEN {#12-product-implications}

### What to Build for Layer 1: Entity Establishment

Based on the market gap analysis, the Entity Establishment layer should include:

**1. Entity Audit**

- Check existence and completeness of: Wikidata, Wikipedia, GBP, LinkedIn, Crunchbase, OpenCorporates
- Score each surface (0-100%) against best practice checklist
- Identify missing P-properties in Wikidata entries

**2. Entity Creation Wizard**

- Step-by-step Wikidata entry creation guide with P-property selector
- Auto-populate from existing data (GBP, LinkedIn scrape, website schema)
- Generate the QuickStatements batch import code

**3. Consistency Checker**

- Compare brand name, description, founding date, website URL across all surfaces
- Flag inconsistencies with specific fix instructions
- Priority scoring by AI impact

**4. sameAs Schema Generator**

- Input: confirmed profile URLs for each platform
- Output: ready-to-implement JSON-LD Organization schema block
- Include validation that all URLs resolve

**5. Wikipedia Eligibility Assessor**

- Check number of independent press citations
- Assess citation quality (domain authority, independence)
- Output: "eligible now" / "X more citations needed" / "not yet eligible"

**6. Knowledge Panel Monitor**

- Alert when a Knowledge Panel appears for the brand
- Track changes to Knowledge Panel content
- Flag when AI-cited entity data diverges from actual data

### Differentiation from Competitors

| Feature                           | AISOGEN | Yext    | Kalicube | BrightLocal       |
| --------------------------------- | ------- | ------- | -------- | ----------------- |
| Wikidata creation wizard          | Yes     | No      | No       | No                |
| Wikipedia eligibility assessment  | Yes     | No      | Partial  | No                |
| Cross-platform consistency check  | Yes     | Partial | Yes      | Partial           |
| sameAs schema generator           | Yes     | No      | No       | No                |
| OpenCorporates check              | Yes     | No      | No       | No                |
| SMB-accessible pricing            | Yes     | No      | No       | Yes (but limited) |
| AI-specific optimisation guidance | Yes     | Partial | Yes      | No                |

### Priority for Build

1. Entity Audit + Consistency Checker — highest value, fastest to build
2. sameAs Schema Generator — high value, low effort
3. Wikidata Creation Wizard — unique, medium effort
4. Wikipedia Eligibility Assessor — unique, medium effort
5. Knowledge Panel Monitor — high value, requires ongoing data collection

---

## Sources

- [Google Business Profile AI 2026 Guide — Agency Jet](https://www.agencyjet.com/blog/google-business-profile-optimization-guide)
- [AI Impact on GBP 2025 — MapRanks](https://www.mapranks.com/2025/06/26/ai-impact-on-google-business-profile-2025/)
- [Google Business Profiles 2026 Playbook — Trebletree](https://trebletree.co/insights/google-business-profiles-2026/)
- [GBP AI Overviews Whitepaper — Local Falcon](https://www.localfalcon.com/blog/whitepaper-studies-the-impact-of-google-ai-overviews-on-local-business-search-visibility)
- [Wikidata vs Wikipedia for AI Visibility 2025 — TreDigital](https://tredigital.com/wikidata-vs-wikipedia-how-to-boost-your-ai-first-visibility-in-2025/)
- [AI Search Entity Recognition — iPullRank](https://ipullrank.com/ai-search-entity-recognition)
- [sameAs Property: Connecting Digital Identity — Aruntastic](https://aruntastic.com/blog/sameas-property-connecting-digital-identity/)
- [Wikidata SEO: Knowledge Graph and Entity Rankings — WikiBusines](https://www.wikibusines.com/wikidata-seo-knowledge-graph)
- [Entity Optimization for AI — GoVisible.ai](https://govisible.ai/intelligent-entity-optimization/)
- [Brand Entity SEO Guide — Stakque](https://stakque.com/brand-entity-seo-guide-build-search-authority/)
- [The Wikipedia Proxy: Using Wikidata IDs — Cubitrek](https://cubitrek.com/blog/the-wikipedia-proxy-using-wikidata-ids-to-anchor-brand-truth/)
- [Knowledge Graph SEO Ultimate Guide 2026 — ClickRank](https://www.clickrank.ai/knowledge-graph-seo-guide/)
- [Why Brands Need Knowledge Graph for AI Visibility 2026 — Yext](https://www.yext.com/blog/2025/12/knowledge-graph-for-ai-visibility-2026)
- [How to Get Brand into Google & OpenAI Knowledge Graph — ClickRank](https://www.clickrank.ai/google-openai-knowledge-graph/)
- [AI Visibility 2025: How Gemini, ChatGPT, Perplexity Cite Brands — Yext](https://www.yext.com/blog/2025/10/ai-visibility-in-2025-how-gemini-chatgpt-perplexity-cite-brands)
- [89K LinkedIn URLs Cited in AI Search — AIMactGrow](https://blog.aimactgrow.com/we-analyzed-89k-linkedin-urls-cited-in-ai-search-right-heres-what-drives-visibility/)
- [AI Search Statistics 2026 — Superlines](https://www.superlines.io/articles/ai-search-statistics/)
- [Crunchbase AI Visibility Score — Pendium.ai](https://pendium.ai/brands/crunchbase)
- [Schema Markup 2026: Critical for SERP Visibility — ALM Corp](https://almcorp.com/blog/schema-markup-detailed-guide-2026-serp-visibility/)
- [Schema Markup Redefining Brand Visibility — Digital Information World](https://www.digitalinformationworld.com/2025/12/how-schema-markup-is-redefining-brand.html)
- [Case Study: Entity Linking Increases AIO Visibility 19.72% — Schema App](https://www.schemaapp.com/schema-markup/case-study-entity-linking-increases-aio-visibility/)
- [Kalicube Pro SaaS Review — Holistic SEO](https://www.holisticseo.digital/review/kalicube-pro)
- [Kalicube Pro: 25 Billion Data Points for AI Engines — Kalicube](https://kalicube.com/kalicube-connects/press/kalicube-pro-leverages-3-billion-data-points-to-become-first-platform-to-optimize-brand-presence-in-chatgpt-and-ai-engines/)
- [Wikipedia's Impact on ChatGPT Search Results — ALLMO](https://www.allmo.ai/articles/what-we-know-about-the-impact-of-wikipedia-on-chatgpt-search-results)
- [Wikipedia Notability for Brands — Search Engine Journal](https://www.searchenginejournal.com/)
- [GEO Best Practices 2025 — Directive Consulting](https://directiveconsulting.com/blog/a-guide-to-generative-engine-optimization-geo-best-practices/)
- [AI Visibility for B2B SaaS 2025 — Wellows](https://wellows.com/blog/ai-search-visibility-for-b2b-saas-brands/)
- [Entity Recognition & Knowledge Graphs — Discovered Labs](https://discoveredlabs.com/blog/entity-recognition-knowledge-graphs-how-to-structure-your-brand-for-ai-understanding)
- [Mastering SEO Entities 2026 — WireInnovation](https://wireinnovation.com/mastering-seo-entities/)
- [BrightLocal vs Semrush 2025 — Search Atlas](https://searchatlas.com/blog/brightlocal-vs-semrush/)
- [8 Best AI Visibility Tools 2026 — Semrush](https://www.semrush.com/blog/best-ai-visibility-tools/)
