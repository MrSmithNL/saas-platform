# External Authority Builder — Research Synthesis

**Date:** 2026-03-11
**Sources:** 5 parallel deep-research agents covering 50+ topics, 80+ source URLs
**Purpose:** Inform the External Authority Builder capability design for both the agency's AISO capability and the AISOGEN SaaS product

---

## The Big Picture: What We Now Know

### The Core Numbers

| Fact                                                     | Data Point                         | Source                             |
| -------------------------------------------------------- | ---------------------------------- | ---------------------------------- |
| AI citations from external sources                       | 70-77%                             | Omniscient Digital (23K citations) |
| Earned media share of AI citations                       | 48%                                | Muck Rack / GlobeNewswire          |
| Commercial/review content share                          | 30%                                | SE Ranking                         |
| Brand search volume correlation with AI citations        | 0.334 (strongest single predictor) | Ahrefs Dec 2025                    |
| Domain Authority correlation with AI citations           | 0.18 (near zero)                   | Previsible                         |
| Only 11% of domains cited by BOTH ChatGPT and Perplexity | Model-specific strategies required | Ahrefs                             |
| Content published in last 12 months                      | 65% of all citations               | Multiple sources                   |

### Each AI Model Has Different Citation Sources

| AI Model                | #1 Source                                     | Key Pattern                                                  |
| ----------------------- | --------------------------------------------- | ------------------------------------------------------------ |
| **ChatGPT**             | Wikipedia (7.8%)                              | Listings and databases (48.7%). Brand recognition driven.    |
| **Perplexity**          | Reddit (6.6%)                                 | Fresh content, explicit citations. 21.87 citations/response. |
| **Google AI Overviews** | YouTube (29.5%)                               | Multi-modal, semantic depth. 3-7 citations/response.         |
| **Gemini**              | Google Business Profile (52.1% brand-managed) | GBP-first, brand websites second.                            |
| **Claude**              | Directories and databases (65%)               | Institutional authority, directory presence.                 |
| **Copilot**             | SourceForge (21.33%)                          | Bing index, productivity context.                            |

### The Universal Strategy

No single tactic works across all models. The winning approach is **distributed presence** — appear in multiple trusted sources in formats each AI system can parse. This is exactly what the External Authority Builder must automate.

---

## Layer 1: Entity Establishment — Key Findings

### What Works

- **sameAs linking** produces 2-3x higher weighting in AI responses (Schema App case study: 19.72% increase in AI Overview visibility)
- **Wikidata has no notability requirement** — any brand can create an entry. AI indexing: hours to days. Knowledge Panel emergence: 3-6 months.
- **LinkedIn is the #2 most cited domain** across AI models (11% of responses). Company Pages cited 59% of the time by Perplexity.
- **The "Closed Loop"** strategy: all entity surfaces point to the same domain, domain schema points back. Consistency = confidence = citation.

### The Recommended Sequence

1. Verify OpenCorporates listing (most underused signal)
2. Claim and complete Google Business Profile
3. Complete LinkedIn Company Page with canonical description
4. Create Wikidata entry with critical P-properties (P31, P452, P856, P112, P159, P571)
5. Implement Organization schema with sameAs array
6. Create Crunchbase profile
7. Build toward Wikipedia (3-5 independent press citations needed)

### Market Gap for AISOGEN

No tool automates the full entity establishment stack at SMB pricing (<$100/month). Specifically missing:

- Wikidata creation wizard with P-property guidance
- Cross-platform consistency checker (GBP + Wikidata + LinkedIn + schema + Crunchbase)
- Wikipedia eligibility assessor
- sameAs schema generator from entity data

**Competitors:** Yext ($500+/mo, enterprise), Kalicube Pro (agency-only), BrightLocal ($29-79/mo, no AI features), Schema App (developer-focused).

---

## Layer 2: Review & Trust Signals — Key Findings

### Critical Discovery: Trustpilot Blocks AI Crawlers

Trustpilot is a **complete blocker** for AI retrieval. It builds consumer trust but cannot drive AI citations directly. The platforms with full AI access are: Clutch, SourceForge, TrustRadius.

### Platform Priority by AI Model

| Client Type               | Priority 1     | Priority 2              | Priority 3              |
| ------------------------- | -------------- | ----------------------- | ----------------------- |
| B2B SaaS                  | G2 + GetApp    | Capterra                | ProductHunt             |
| Consumer ecommerce        | Google Reviews | Trustpilot (indirect)   | Amazon                  |
| Hair/beauty (Hairgenetix) | Google Reviews | Trustpilot (conversion) | Byrdie/Allure editorial |

### Key Data Points

- **3x citation advantage** for brands with review platform profiles
- Reviews explain only **2% of citation variance** — profile completeness beats volume
- **Review request timing matters:** haircare = 5-7 days post-delivery; skincare = 14-21 days
- **FTC Rule (Oct 2024):** $51,744 per violation for fake/incentivised positive reviews
- **Schema matters:** Full implementation = 27% lift in AI extractability

### Market Gap for AISOGEN

No tool combines review platform management + AI citation optimisation:

- Review Platform Audit (crawler access status, completeness scoring)
- Schema Generator (AggregateRating + Review + sameAs linking)
- Review Content Quality Scorer (AI extractability analysis)
- Cross-Platform Citation Monitor

---

## Layer 3: Community Presence — Key Findings

### Reddit Is Still Critical (But Changing)

- Reddit citation share peaked mid-2025, dropped ~50% since — but it now **owns specific query types** completely (experience, comparison, recommendation)
- **Semrush 248K-post study:** Median upvotes on cited posts = 5-8. 80% have <20 upvotes. Average age = ~900 days. AI does NOT prefer viral content — it prefers old, focused, niche Q&A threads.
- Reddit signed **$60M/year with Google** and **$70M/year with OpenAI** for data access
- **Reddit comments posted today shape future model versions** on an 18-36 month horizon

### The Karma Ladder (Required Sequence)

1. Month 1: Account creation, build karma in low-stakes subreddits
2. Months 2-3: Pure value participation, zero brand mentions
3. Month 4+: Brand mention only when contextually required, always disclose affiliation

### GummySearch Is Dead (Product Opportunity)

GummySearch shut down Nov 30, 2025 (Reddit API licensing). **135,000+ displaced users**. No tool currently offers Reddit monitoring + AI citation prediction at SMB pricing.

### Platform Summary

| Platform       | AI Citation Rate                  | Best For                       |
| -------------- | --------------------------------- | ------------------------------ |
| Reddit         | 4-6.6% Perplexity, 21% Google AIO | Experience/comparison queries  |
| Quora          | 14.3% Google AIO only             | Consumer health, lifestyle     |
| Niche forums   | Not quantified                    | Niche authority, training data |
| Stack Exchange | High for technical                | Developer audiences            |
| Discord/Slack  | Zero direct                       | Indirect advocacy only         |

### Market Gap for AISOGEN

- Reddit monitoring + citation prediction (which threads will AI cite?)
- Community mention → AI citation → traffic attribution chain
- Engagement guidance (surface threads worth participating in)
- **The GummySearch replacement opportunity is the fastest market entry**

---

## Layer 4: Content Distribution — Key Findings

### YouTube: Highest ROI Channel, No Contest

- **200x more AI citations** than any other video platform
- **20% average citation share** across all AI platforms; 29.5% for Google AI Overviews
- Citations grew **414% in 2025** (how-to videos: +651%)
- **Transcripts are mandatory** — videos without manually-uploaded .srt files are invisible to AI
- Optimal: 8-12 minutes, answer in first 30 seconds, 3-5 chapters

### Press Releases: Fast Impact, Quantified

- Citations surged **5x since July 2025**
- GlobeNewswire = **61%** of press release citations (PR Newswire 27%, BusinessWire 12%)
- **SOAR format** wins: 2x more statistics, 2.5x more bullet points, 30% more action verbs
- Cost: $300-800 per release
- **Only 2% overlap** between journalists most pitched and journalists most cited by AI

### Original Research: Highest Multiplier

- Statistics in content: **+22% AI citation likelihood**
- Proprietary statistics from original research: **+41%**
- Expert quotations: **+37%**
- Data-rich sites: **4.31x more citation occurrences per URL**
- Zenodo (CERN): free DOI assignment, open access, any document type

### Medium vs Substack

- Medium: 0.36% of AI citations (worthwhile)
- Substack: 0.07% (paywalls block AI, skip for AISO)

### Guest Posting (Changed Since 2024)

- High-DR guest posts: +60% AI visibility
- HARO (Connectively) shut down Dec 2024, relaunched but degraded
- Best platforms now: **Featured.com** (fastest, 18 days), **Qwoted** (verified journalists), **Help a B2B Writer** (B2B)
- New strategy: test which publications actually appear in AI responses, then target THOSE

### Podcasts: Transcript-Dependent

- Shows with transcripts: **4-7x more AI citations**
- Must specify: full transcript publication + YouTube upload
- Without these, near-zero AI citation value

### Skip: Outbrain/Taboola (94% of AI citations from non-paid sources)

### Market Gap for AISOGEN

No tool delivers: external multi-channel distribution + AI citation tracking + attribution + multi-language support. Priority builds:

1. YouTube transcript cleaner + chapter generator + VideoObject schema
2. SOAR press release formatter
3. Zenodo/SSRN automated filing
4. AI-response tester (before/after citation count)
5. Guest post publication scorer (which publications appear in AI responses?)

---

## Layer 5: Earned Media & PR — Key Findings

### Wikipedia: Truth Anchor

- **7.8% of all ChatGPT citations** — the single most cited domain
- Companies WITH Wikipedia article: first AI citation in **28 days**
- Companies WITHOUT: **52 days** (24-day penalty)
- Notability requires 3-5 in-depth articles in DR 70+ independent publications
- Paid editing requires full disclosure — undisclosed = deletion + negative press

### Directory Listings: Model-Specific

- **Claude: 65% of citations from directories** — most amenable to directory strategy
- **ChatGPT: 48.7% from listings/databases** (Wikipedia, Reddit, Amazon, Forbes, G2)
- **Gemini: 52.1% from brand-managed sources** (GBP, brand websites)
- For beauty: only **4 domains** cited by ALL 4 LLMs: Reddit, Sephora, Byrdie, Allure

### Press Coverage

- **95% of AI citations from unpaid media** (Muck Rack)
- **50% of AI responses** include at least one earned media citation
- Press release citations grew **5x** since July 2025
- **PR teams pitch the wrong journalists:** only 2% overlap between most-pitched and most-cited-by-AI

### HARO Replacements (Post-Connectively)

- **Qwoted:** 70.3% quality rate, ~70% market share
- **SOS (Source of Sources):** Free, founded by original HARO creator, 54.7% quality
- **Featured.com:** Fastest turnaround (18 days), acquired HARO brand
- Respond within 1 hour, 4-5 sentences, one data point, human-written only

### Awards as PR Triggers

For Hairgenetix: target **Allure Best of Beauty** and **Byrdie Wellness Awards** — these are the only beauty publications cited by all 4 LLMs. EWG Verified for ethical signaling.

### Case Studies

- **Ramp (fintech):** 8.1% → 12.2% citation share in 75 days via Profound + content strategy
- **B2B SaaS (unnamed):** 0% → 40% of relevant ChatGPT queries in 90 days via systematic GEO
- **Ranko bilingual seeding:** 55% increase in AI citations in 14-30 days; 70% additional boost from bilingual content (validates Hairgenetix 9-language strategy)

### Market Gap for AISOGEN

The entire current market monitors earned media's impact on AI citations. **Nobody automates generating it.** Missing capabilities:

- Journalist query matching + response drafting (HARO workflow)
- Wikipedia eligibility assessment + preparation pipeline
- Directory listing audit + submission for AI citation gaps
- Press release optimisation for AI citation
- Podcast booking intelligence (transcript + YouTube status)
- Multi-language earned media

---

## AISOGEN Product Implications — Combined Gap Analysis

### What Exists (Monitoring Only)

| Tool       | What It Does                         | Price             | Limitation                    |
| ---------- | ------------------------------------ | ----------------- | ----------------------------- |
| Profound   | Enterprise GEO tracking              | $499/mo           | Monitoring only, no execution |
| Otterly.ai | AI mention tracking                  | $29-489/mo        | Monitoring only               |
| ZipTie     | Content gap recommendations          | $69/mo            | Limited PR execution          |
| Semrush    | AI Visibility Index                  | Included in plans | Monitoring only               |
| Ahrefs     | Brand Radar                          | Included in plans | Monitoring only               |
| Muck Rack  | Generative Pulse (earned media + AI) | Enterprise        | Monitoring only               |

### What Nobody Offers (The AISOGEN Differentiator)

| Capability                         | Description                                                       | Build Priority                    |
| ---------------------------------- | ----------------------------------------------------------------- | --------------------------------- |
| **Entity Audit + Builder**         | Score entity presence across 7+ platforms, guide creation         | HIGH — fastest value              |
| **sameAs Schema Generator**        | Auto-generate from entity data                                    | HIGH — low effort, high impact    |
| **Wikidata Creation Wizard**       | Step-by-step with P-property guidance                             | HIGH — unique in market           |
| **Community Intelligence**         | Reddit monitoring + citation prediction (GummySearch replacement) | HIGH — 135K displaced users       |
| **Review Platform Audit**          | Crawler access status, completeness, schema                       | MEDIUM                            |
| **YouTube AI Optimizer**           | Transcript cleaner, chapter generator, VideoObject schema         | MEDIUM                            |
| **Press Release Formatter**        | SOAR format, statistic insertion, entity clarity                  | MEDIUM                            |
| **Wikipedia Eligibility Assessor** | Score notability, track coverage toward threshold                 | MEDIUM                            |
| **Publication Scorer**             | Test which outlets appear in AI responses for target queries      | MEDIUM                            |
| **Attribution Chain**              | Community mention → AI citation → traffic → conversion            | HIGH — the key differentiator     |
| **Multi-Language Support**         | All features across 9+ languages                                  | HIGH — validates with Hairgenetix |

### The Core Product Thesis

Every existing tool either (a) monitors AI visibility or (b) manages one channel (reviews OR listings OR PR). **No tool builds external authority across all 5 layers with AI citation attribution.** AISOGEN's External Authority Builder would be the first.

---

## Hairgenetix-Specific Recommendations

Based on all 5 research layers, the priority actions for Hairgenetix:

### This Week (Quick Wins)

1. Complete Google Business Profile — direct Gemini feed
2. Create LinkedIn Company Page with canonical description
3. Create Wikidata entry (no notability requirement)
4. Update Organization schema with sameAs array
5. Register on Qwoted and SOS for journalist queries

### This Month

6. Issue a data-rich press release on GlobeNewswire ($300-800) — 5x citation growth
7. Write 4 Reddit-ready comments for r/tressless (95/5 rule, human-posted)
8. Create YouTube video with transcript (product demo or mesotherapy tutorial)
9. Adapt copper peptides blog post for Medium
10. Draft Trustpilot profile (conversion value, not AI citation)

### Next 3 Months

11. Target Byrdie and Allure editorial coverage — only beauty pubs cited by all 4 LLMs
12. Publish clinical trial white paper on Zenodo (free DOI)
13. Pitch 3 podcasts with transcript + YouTube requirements
14. Build toward Wikipedia notability (need 3-5 qualifying press pieces)
15. Apply for Allure Best of Beauty / Byrdie Wellness Awards

### 6-Month Targets

| Metric                | Current | Target |
| --------------------- | ------- | ------ |
| ChatGPT SoM           | 0%      | 25%    |
| Gemini SoM            | 20%     | 50%    |
| Entity platforms      | ~2      | 10+    |
| External mentions     | ~0      | 50+    |
| Review count (Google) | 0       | 25+    |

---

## Research Sources Index

5 detailed research files saved:

1. `research/entity-establishment-aiso-research.md` — 25 sources
2. `research/aiso-review-trust-signals-research.md` — 20 sources
3. `research/aiso-community-presence-research.md` — 18 sources
4. `research/aiso-content-distribution-research.md` — 16 sources
5. `research/aiso-earned-media-pr-research.md` — 20 sources

Total: ~100 unique sources, all from 2025-2026.
