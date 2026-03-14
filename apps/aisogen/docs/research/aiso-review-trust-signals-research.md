# AISO Layer 2 — Review & Trust Signals Research

> Research into review platforms, trust signals, and their role in AI search visibility (AISO/GEO).
> Covers Trustpilot, Google Reviews, G2, Capterra, Amazon, schema markup, review generation tools,
> fake review risks, competitor SaaS products, and startup platforms.
>
> **Purpose:** Foundation for Layer 2 (External Authority Builder) of the AISOGEN capability,
> applicable to both agency client work and the AISOGEN SaaS vertical.
>
> **Research date:** 2026-03-11
> **Sources:** 30+ industry publications, platform studies, and vendor research (2025-2026 data).

---

## Table of Contents

1. [The Core Thesis](#1-core-thesis)
2. [Trustpilot and AI Visibility](#2-trustpilot)
3. [Google Reviews and AI Overviews](#3-google-reviews)
4. [G2, Capterra, and B2B Review Platforms](#4-g2-capterra)
5. [Amazon Reviews and Marketplace AI](#5-amazon)
6. [Review Schema and Structured Data](#6-schema)
7. [Review Generation Strategies and Tools](#7-review-generation)
8. [Fake Review Detection and Penalties](#8-fake-reviews)
9. [Competitor SaaS Tools — Review Management](#9-competitor-tools)
10. [ProductHunt, Indie Hackers, and Startup Platforms](#10-startup-platforms)
11. [What Works, What Doesn't — Lessons Learned](#11-lessons-learned)
12. [Capability Recommendations for AISOGEN Layer 2](#12-recommendations)

---

## 1. The Core Thesis {#1-core-thesis}

### Why Review Signals Matter for AI Visibility

Three data points establish the strategic importance of review platforms for AI citations:

- **3x citation advantage:** Domains with profiles on review platforms (Trustpilot, G2, Capterra) have 3x higher chances of being cited by ChatGPT than sites without them. (SE Ranking, November 2025)
- **30% of AI citations from commercial/review content:** Roughly 30% of citations in AI models originate from third-party commercial and review content rather than brand-owned pages.
- **Sentiment now a ranking factor:** From early 2026, ChatGPT's algorithm factors in sentiment — whether mentions are positive, negative, or neutral — meaning review profiles directly influence citation likelihood.

### The Paradox: Citations Without Traffic

A December 2025 SE Ranking study revealed a critical finding: review platforms are heavily cited by AI systems even as they lose organic search traffic.

| Platform              | AI Overview Citation Share     | Organic Traffic Loss (2024-2025) |
| --------------------- | ------------------------------ | -------------------------------- |
| Gartner Peer Insights | 26.0% of review platform links | 76.5%                            |
| G2                    | 23.1%                          | 84.5%                            |
| Capterra              | 17.8%                          | 89%                              |
| TrustRadius           | 8.3%                           | 92.2%                            |
| Software Advice       | 12.8%                          | ~85%                             |

Review platforms represent only 8.5% of all AI Overview links, yet three of the top five most cited domains are review sites. The implication: these platforms have become AI citation infrastructure rather than user destination sites.

---

## 2. Trustpilot and AI Visibility {#2-trustpilot}

### How Trustpilot Data Feeds into AI Models

**The blocking problem:** This is the most significant finding for Trustpilot. The Hall.com citation analysis classifies Trustpilot as a "complete blocker" — disallowing all AI crawlers via robots.txt. This has a direct consequence: reviews on Trustpilot are not being indexed by AI retrieval systems in the same way as open platforms.

The three-tier AI crawler access policy, as categorised by platform:

- **Complete blockers** (Yelp, Trustpilot): Disallow all AI access
- **Selective access** (G2, Capterra, GetApp): Allow search crawling; restrict training data use
- **Full access** (Clutch, SourceForge, TrustRadius): Permit unrestricted crawling

**Practical implication:** A Trustpilot profile may still contribute to AI brand perception through prior training data, but it is unlikely to be cited directly in real-time retrieval (RAG) responses. The signal value is indirect — brand credibility and E-E-A-T reinforcement — rather than direct citation.

**What ChatGPT and Gemini actually do with Trustpilot:**

- Gemini (52.15% of citations from brand-owned websites) is unlikely to cite Trustpilot directly
- ChatGPT (48.73% from third-party sites) may reference Trustpilot brand mentions but cannot crawl live review content
- Perplexity (favors industry-specific directories) shows similar constraints

### Trustpilot Scale and Detection Data (2025)

From the Trustpilot Trust Report 2025:

- 300 million total reviews on platform
- 61 million reviews posted in 2024
- 4.5 million fake reviews removed in 2024 (7.4% of submissions)
- 90% of fake reviews detected automatically using ML, neural networks, and generative AI
- 53% increase in automated fake review removals year-over-year

### Trustpilot API Capabilities

The Trustpilot developer API provides:

- **Service Reviews API** — request, collect, and manage service-level reviews
- **Product Reviews API** — product-specific review collection
- **Consumer API** — access review data for display
- **Webhooks** — real-time event triggers for new reviews, replies, and flags
- **Automation support** — post-purchase invitation flows, customisable templates

The API supports: fetching reviews with full data (rating, text, consumer details, timestamps), creating custom dashboards, and building review collection into purchase flows.

**Verdict for AISOGEN:** Trustpilot profiles provide brand legitimacy and indirect AI trust signals. They should be in the "maintain and complete" category rather than primary AI citation infrastructure. Prioritise platforms with open AI crawler access for maximum citation ROI.

---

## 3. Google Reviews and AI Overviews {#3-google-reviews}

### How Google Reviews Influence AI Overviews

**Google Business Profile (GBP) is uniquely positioned** because AI Overviews are Google's own product. The data shows:

- In June 2025, 97.9% of Google.com links in AI Overviews pointed to Google Business Profiles
- 59% of Google AI Mode citations now point directly to Google SERPs
- 36.1% still cite GBPs directly
- Google's self-citation rate tripled from 5.7% (June 2025) to 17.42%

### What Volume and Quality Signals Matter

There is no publicly confirmed minimum review count for AI Overviews inclusion, but the research establishes:

1. **Quality over quantity:** Detailed, contextual feedback outweighs review volume. AI systems extract specific mentions of people, services, and experiences.
2. **No reviews = invisible:** Businesses with zero reviews risk not appearing in AI-generated summaries at all.
3. **Sentiment extraction:** AI Overviews analyses sentiment across review sets — a high positive sentiment ratio improves summary quality and citation likelihood.
4. **Response signals:** Actively responding to reviews (positive and negative) demonstrates customer care and encourages richer future submissions.
5. **Cross-platform consistency:** Google cross-checks GBP data against other listings. Mismatches in hours, phone, or address can cause omission from AI Overviews.

### Actionable Practices for Google Reviews

- Request reviews immediately after service interactions (not days later)
- Ask specific prompting questions: "Did anyone go above and beyond?" generates richer text than "Please leave a review"
- Ensure NAP (Name, Address, Phone) consistency across all directories — Google validates this for AI inclusion
- Review content functions as SEO content — treat it that way in your review request prompts

**Verdict for AISOGEN:** Google Reviews / GBP is the highest-priority review platform for local and service businesses targeting AI Overviews. For SaaS and digital products, impact is lower but not zero.

---

## 4. G2, Capterra, and B2B Review Platforms {#4-g2-capterra}

### G2's Dominant Position

G2 was ranked among the top 20 most-cited domains overall by Semrush in November 2025, placing it ahead of Instagram. It is the only B2B software review platform on that list.

**Citation rates across AI models (B2B SaaS vertical, from Hall.com analysis):**

| AI Model            | Primary Platform     | G2 Share                               |
| ------------------- | -------------------- | -------------------------------------- |
| ChatGPT             | GetApp (47.65%)      | G2: 8.25%                              |
| Perplexity          | GetApp (39.74%)      | G2: ~10%                               |
| Google AI Overviews | Mixed                | G2: 23.1% of review platform citations |
| Microsoft Copilot   | SourceForge (21.33%) | G2: 11.70%                             |

**Note:** GetApp significantly outperforms G2 in ChatGPT and Perplexity citations for B2B SaaS — a counter-intuitive finding. G2's strength is most pronounced in Google AI Overviews.

### The G2 Review Volume vs Citations Relationship

G2's own research (30,000 citations analysed):

- A 10% increase in G2 reviews correlates with a 2% increase in AI citations
- Regression coefficient: 0.097, R-squared: 0.009
- Reviews explain less than 2% of the total variance in citations
- The remaining 98% comes from brand authority, content quality, organic search visibility, and cross-web mentions

**Conclusion:** More G2 reviews help but are not the primary driver. G2 profile completeness, pricing data, and category positioning matter more.

### Why G2 is Cited by AI Despite Traffic Loss

G2 provides three attributes AI models prioritise:

1. **Verified buyers** — reduces noise, increases signal reliability
2. **Standardised schema** — machine-readable format AI can parse efficiently
3. **Review velocity** — current market signals, not stale data

### G2 Profile Best Practices for AI Visibility

From G2's own recommendations:

1. Write profile descriptions 250+ characters highlighting unique value propositions
2. Add comprehensive pricing information (AI models use this for comparison queries)
3. Drive review submissions through multi-channel linking (email, in-product, post-onboarding)
4. Engage in product discussions on the platform
5. Maintain review velocity — recent reviews outweigh old review clusters

### Capterra, GetApp, Software Advice

Post the G2 acquisition of Capterra/Software Advice/GetApp, G2's in-network citation share would increase by 76%, moving to position 2 in bottom-of-funnel queries (surpassing YouTube and LinkedIn). This acquisition makes the Gartner Digital Markets ecosystem (Capterra, GetApp, Software Advice) and G2 the two dominant forces in B2B SaaS AI citations.

**For consumer products:** G2, Capterra, and similar B2B platforms have limited relevance. Consumer equivalents (Trustpilot, Google Reviews, Yelp, Amazon) are the appropriate targets.

---

## 5. Amazon Reviews and Marketplace AI {#5-amazon}

### Amazon Rufus — The New Discovery Layer

Amazon's AI shopping assistant Rufus was handling 274.3 million daily queries by October 2024 — approximately 13.7% of all Amazon searches. This is a fundamentally different AI citation environment: it operates within Amazon's closed ecosystem rather than the open web.

**What Rufus is trained on:**

- Product catalogs
- Customer reviews
- Community Q&As
- Web data

**How reviews affect Rufus recommendations:**

- Detailed, positive reviews with active Q&A threads increase recommendation probability
- Rufus prioritises listings that connect product features to real-world use cases
- Intent and context now drive visibility more than keyword matching
- 53% of US consumers (Adobe 2025 survey of 5,000 people) now use AI tools in their shopping journey

### Optimising Amazon Listings for Rufus AI

The "science behind Rufus" (from Ecomtent's analysis):

1. Rewrite titles to emphasise main use cases and buyer context, not just product specs
2. Rewrite bullet points to explicitly connect features to real-world uses
3. Write listing content that answers natural language questions
4. Ensure complete, structured information — Rufus extracts answers from listing text
5. Detailed reviews that describe use scenarios boost recommendations

### Reviews as Amazon AI Signals

For Hairgenetix (the agency's Shopify-based hair product client):

- Amazon presence is not currently part of the product strategy
- However, if Amazon were used, review volume and quality directly train Rufus recommendations
- A product with 50+ detailed, use-case-rich reviews significantly outperforms one with 200+ short reviews

**Verdict for AISOGEN:** The Amazon/Rufus ecosystem is separate from open-web AI citations. It matters enormously if a client sells on Amazon. For web-only brands, Amazon's contribution is indirect (training data from web crawls, not direct integration).

---

## 6. Review Schema and Structured Data {#6-schema}

### Do AI Models Actually Parse Review Schema?

Yes — structured data provides a "translation layer" between content and AI systems. Key findings:

- Pages with full schema implementation show a 27% lift in AI extractability
- Pages using three or more schema types show higher AI citation rates
- Pages with visible author credentials have a 41% higher likelihood of citations
- FAQPage schema: pages with this markup are 3.2x more likely to appear in Google AI Overviews
- AI-referred sessions jumped 527% in 2025 (baseline from structured data adoption)

Schema acts as explicit signals rather than requiring AI to parse and guess meaning through natural language. This is especially important as LLMs process vast amounts of unstructured data — structured signals reduce ambiguity and increase confidence in citation.

### Review Schema Types That Matter

**AggregateRating schema:**

```json
{
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "reviewCount": "247",
  "bestRating": "5"
}
```

- Nested into Product, Organization, or LocalBusiness schema
- Provides social proof AI systems reference when recommending businesses
- Used for Google Shopping star ratings (table stakes for ecommerce)

**Review schema:**

- Captures individual customer feedback
- Enables AI to extract specific testimonials and sentiment
- Most valuable when reviews contain specific, descriptive language

**Combined schema approach:**

- Nest AggregateRating within Product or LocalBusiness
- Add individual Review entities for 3-5 standout reviews
- Layer Organization schema with sameAs properties linking to all review platform profiles

### Schema Best Practices for AI Citations

1. Use JSON-LD format (preferred by Google, easier for AI to parse)
2. Combine Review + AggregateRating + Organization schema on the same page
3. Keep ratingValue, reviewCount, and author fields populated
4. The sameAs property in Organization schema should include links to Trustpilot, G2, Capterra profiles — this entity consistency across platforms boosts AI recognition
5. Validate with Google's Rich Results Test before deploying

**Limitation:** Perfect schema does not guarantee citations. Schema increases eligibility; it does not force inclusion.

---

## 7. Review Generation Strategies and Tools {#7-review-generation}

### Optimal Timing for Review Requests

Data-backed timing by product category:

| Product Type                     | Optimal Request Window                  |
| -------------------------------- | --------------------------------------- |
| Makeup / Haircare                | 5-7 days post-delivery (allow 2-3 uses) |
| Skincare with active ingredients | 14-21 days post-delivery                |
| Electronics                      | 7-10 days after delivery                |
| Fitness / sports equipment       | 10-14 days                              |
| General / default                | 5 days post-delivery                    |

Additional timing findings:

- Email performs best 10am-12pm local time, Tuesday-Thursday
- SMS performs best 2-5pm local time, Monday-Friday
- Response rates drop 60-70% after two weeks vs optimal timing
- 68% of customers leave a review on the first ask; an additional 28% leave one on the second ask
- 96% of consumers are open to leaving a review if asked at the right time

### Review Collection Tools Comparison

| Tool             | Best For                             | AI Features                                     | Price Signal        |
| ---------------- | ------------------------------------ | ----------------------------------------------- | ------------------- |
| Judge.me         | Budget ecommerce (Shopify)           | Basic automation                                | Free plan available |
| Loox             | Visual products (fashion, beauty)    | AI sorting, auto-translation                    | Mid-tier            |
| Yotpo            | Enterprise ecommerce                 | AI prompts, smart sorting, AI summaries         | Premium             |
| Birdeye          | Multi-location businesses            | AI-automated solicitation, 150+ site monitoring | Enterprise          |
| Podium           | Local service businesses (SMS-first) | SMS-based review flow                           | Mid-enterprise      |
| Reputation.com   | Large organisations                  | AI SWOT, competitor benchmarking                | Enterprise          |
| RightResponse AI | AI-personalised requests             | Generative AI invitations                       | Mid-tier            |

### What Yotpo Does for AI Visibility Specifically

Yotpo leads on AI features in 2025:

- AI-powered review prompts that help customers write more detailed feedback
- Smart sorting surfaces the most conversion-driving reviews
- AI summaries distil common themes from review content
- Analytics use AI to identify actionable insights about product performance

### Review Request Best Practices (FTC-Compliant)

**What is allowed:**

- Offering incentives for reviews (discounts, loyalty points)
- Automated email and SMS request flows
- Follow-up reminders (one or two maximum)

**What is prohibited (FTC Rule, effective October 21, 2024):**

- Conditioning incentives on the sentiment of the review (e.g., "get a discount if you leave 5 stars")
- AI-generated fake reviews
- Suppressing negative reviews
- Using insider reviews without disclosure

**FTC enforcement status:** In December 2025, the FTC issued warning letters to 10 companies for potential violations. Penalties are up to $51,744 per violation.

---

## 8. Fake Review Detection and Penalties {#8-fake-reviews}

### How Sophisticated Is Detection in 2025-2026?

Detection has reached a level where it is operationally risky to pursue fake reviews:

**Platform-level detection:**

- Trustpilot: 90% of fake reviews detected automatically (ML + neural networks + generative AI), up 53% year-over-year. 4.5 million fake reviews removed in 2024.
- TripAdvisor: Fake AI reviews on TripAdvisor increased 137% from 2019 to 2024 (Originality.AI study), prompting heavy counter-investment in detection
- Amazon: Runs proprietary ML-based detection across all marketplace reviews
- Google: Automated spam detection integrated into GBP

**AI model-level detection:**

- From 2026, ChatGPT's sentiment analysis means brands with clusters of unnaturally positive reviews may be treated with lower confidence
- LLMs that train on review platform data also train on flagging signals — unnatural language patterns, review velocity spikes, reviewer profile age
- Perplexity's emphasis on "research-backed evaluations" (Gartner citations) over consumer reviews suggests higher bar for trust

**Regulatory risk:**

- FTC Rule (October 21, 2024): Prohibition on AI-generated fake reviews, suppression, and conditioned incentives
- Penalties: $51,744 per violation
- December 2025: First FTC warning letters issued to 10 companies

**What constitutes "incentivised" risk:**

- Sending review requests only to customers who had positive experiences (cherry-picking)
- Offering incentives that are conditional on positive sentiment
- Using third-party services that fabricate review language

**Safe territory:**

- Timing-based review requests (all purchasers, not just positive ones)
- Generic incentives ("leave a review for 10% off your next order" — no sentiment condition)
- AI-assisted review request personalisation (not AI-generated fake review content)

---

## 9. Competitor SaaS Tools — Review Management {#9-competitor-tools}

### Market Size and Growth

The review management SaaS market is $4.2 billion in 2025, growing at approximately 38% per year.

### Platform Breakdown

**Birdeye** (market leader for multi-location, G2 rated #1):

- Review monitoring across 150+ sites in a single dashboard
- BirdAI autonomous agents execute complex marketing workflows
- AI-automated review solicitation with smart targeting (predicts likely positive reviewers)
- LLM-powered suggested replies and sentiment detection
- Weakness: premium pricing, annual contracts, some stability complaints
- Gap: no native AI visibility tracking (ChatGPT/Perplexity citation monitoring)

**Podium** (ranked #2 on G2, SMS-first):

- Text message-based review collection
- Real-time chat, payment collection, lead management
- Strength: local service businesses, high SMS response rates
- Weakness: no listings management, no SEO tools, minimal analytics
- Gap: no AI search visibility features at all

**Reputation.com** (enterprise):

- All-in-one platform: reviews, surveys, social mentions, listings
- AI-powered SWOT analysis, competitor benchmarking
- Single "Reputation Score" across platforms
- Weakness: enterprise price point, complex onboarding

**Grade.us** (agency-focused):

- White-label review management
- Flexible review funnels and strong reporting
- Starting at $110/month
- Weakness: less AI-native than Birdeye

**ReviewTrackers:**

- 100+ site monitoring, real-time alerts
- Strong on integration and data aggregation
- Weakness: collection tools are weaker than Birdeye/Podium

### The Critical Gap: AI Visibility is Not in Any of These Tools

None of the major review management platforms (Birdeye, Podium, Reputation.com, Grade.us, ReviewTrackers) currently offer:

- ChatGPT/Perplexity/Claude citation monitoring
- AI-specific review platform optimisation recommendations
- Schema implementation for AI extractability
- Cross-platform entity consistency auditing for AI models
- Review platform crawler access status monitoring

This is where newer specialised tools are emerging:

- **AICarma**: AI visibility scoring across AI-powered search engines
- **Otterly.ai**: AI search monitoring for ChatGPT, Perplexity, Google AIO
- **Brand24**: AI mentions tracking across LLMs
- **Gauge/PromptSignal**: LLM visibility measurement

**Strategic gap for AISOGEN:** None of these new tools combine review platform management WITH AI visibility optimisation. The convergence of reputation management + AI citation optimisation is the product opportunity.

---

## 10. ProductHunt, Indie Hackers, and Startup Platforms {#10-startup-platforms}

### ProductHunt and AI Citations

ProductHunt conducted a direct case study on AI citation visibility in 2026, after discovering ChatGPT was rarely citing them in product recommendations.

**The experiment:** Product Hunt focused on AI dictation apps as a controlled test category, creating a new style of structured category page. After several iterations:

- Shifted from near zero AI citations to consistent inclusion across multiple AI models
- Google AI Overviews showed strongest impact (e.g., SuperWhisper's visibility in Google AIO at ~5.5%)

**Why ProductHunt matters:**

- Product launches generate external citations across tech media
- ProductHunt's category pages use structured data that AI models can parse
- Community upvotes and reviews function as quality signals
- The platform is increasingly positioned as "AI retrieval infrastructure" — its content is structured specifically to be surfaced in AI product research workflows

**For AISOGEN clients launching SaaS products:** A ProductHunt launch creates a citation anchor. The launch page, upvotes, and reviews collectively build AI-accessible authority faster than blog content alone.

### Indie Hackers

No direct citation data found for Indie Hackers specifically. The platform's forum-style content (discussions, revenue reports, founder stories) is likely included in AI training data (Perplexity indexes it). However:

- Domain authority is moderate compared to G2 or ProductHunt
- Content is less structured, making AI extraction harder
- Value is brand narrative building rather than direct citation generation

### Other Startup Platforms

| Platform            | AI Citation Relevance | Notes                                       |
| ------------------- | --------------------- | ------------------------------------------- |
| ProductHunt         | High (B2B SaaS)       | Structured pages, active case study program |
| Crunchbase          | Medium-High           | Frequently cited for company data           |
| AngelList/Wellfound | Low-Medium            | Less structured content                     |
| Indie Hackers       | Low-Medium            | Training data likely, not direct citations  |
| Hacker News         | Medium                | Cited for industry commentary               |

---

## 11. What Works, What Doesn't — Lessons Learned {#11-lessons-learned}

### What Works

**1. Platform selection by vertical (citation share is highly concentrated):**

- B2B SaaS: G2 + GetApp + Capterra (control 88% of review platform citations in AI Overviews)
- Digital agencies: Clutch + GoodFirms (control 95%+ of agency citations across all AI systems)
- Travel/hospitality: TripAdvisor (87-94% citation share across all AI models)
- Local business: Google Business Profile (dominant in AI Overviews for local queries)
- Consumer ecommerce: Trustpilot + Google Reviews (though Trustpilot blocks AI crawlers)

**2. Verify crawler access before prioritising a platform:**
The difference between Clutch (full AI access) and Trustpilot (blocks all AI crawlers) is the difference between driving citations and building indirect brand credibility. Both have value, but they serve different purposes.

**3. Profile completeness matters more than review volume:**
G2's research shows reviews explain only 2% of citation variance. The remaining 98% is brand authority, content quality, organic visibility, and cross-web mentions. A complete, detailed G2 profile with accurate pricing outperforms an incomplete profile with 200 reviews.

**4. Content inside reviews drives extraction quality:**
AI models extract specific language from reviews. Review requests that prompt detailed, use-case-rich responses generate more useful content than generic star ratings. Prompting customers to describe the specific problem they solved increases AI extractability.

**5. Schema + review platform presence + brand authority = compounding effect:**
The top-cited brands combine: AggregateRating schema on their own site, complete G2/Capterra profiles, consistent NAP data, and high brand search volume. These signals compound.

**6. Brand search volume is the strongest single predictor:**
One 2025 analysis found brand search volume has a 0.334 correlation with AI citation frequency — stronger than backlink profiles. Building brand awareness (through PR, content, and community) is the highest-leverage action.

### What Doesn't Work

**1. Buying or generating fake reviews:**
Detection is now at 90%+ automated. FTC enforcement is active. AI models' sentiment analysis is sophisticated enough to penalise brands with unnatural review patterns.

**2. Relying on Trustpilot alone for AI visibility:**
Trustpilot blocks AI crawlers. It builds brand legitimacy and consumer trust, but will not drive AI citations the same way G2 or Clutch does.

**3. Chasing review volume without substance:**
Short, generic reviews ("Great product!") have near-zero AI extractability. Five detailed, scenario-rich reviews outperform 50 one-liners.

**4. Treating review management as separate from AI/SEO strategy:**
All major review management tools (Birdeye, Podium, Reputation.com) operate in a silo from AI visibility tooling. Brands that manage these separately are leaving an integration opportunity unrealised.

**5. Ignoring the traffic paradox:**
Review platforms are losing organic traffic (up to 92%) while gaining AI citation share. Brands should not invest in review platforms expecting traffic referrals — the ROI is AI citation authority and consumer trust, not direct referral traffic.

---

## 12. Capability Recommendations for AISOGEN Layer 2 {#12-recommendations}

### Proposed Layer 2 Feature Set: External Authority Builder (Review & Trust Signals)

Based on this research, the following capabilities are differentiated and not available in existing tools:

**Tier 1 — Core (build first):**

1. **Review Platform Audit**
   - Check which review platforms the client has profiles on
   - Verify AI crawler access status for each platform (open/restricted/blocked)
   - Score profile completeness (description length, pricing data, categories, logo, screenshots)
   - Prioritise platforms by vertical-specific citation share

2. **Schema Implementation Generator**
   - Generate AggregateRating + Review + Organization schema from existing review data
   - Validate sameAs entity links across all review platforms
   - Output JSON-LD ready to embed
   - Audit existing schema for AI extractability gaps

3. **Review Content Quality Scorer**
   - Analyse existing reviews for AI extractability (length, specificity, use-case mentions)
   - Flag thin reviews (under 50 words, generic language)
   - Recommend review request templates designed for AI-extractable content

**Tier 2 — Differentiated (build second):**

4. **Review Request Flow Builder**
   - Timing recommendations by product category
   - FTC-compliant template library
   - Integration with Shopify, WooCommerce, and email platforms
   - A/B testing for review request copy

5. **Cross-Platform Citation Monitor**
   - Track which review platforms are driving AI citations for the brand
   - Alert when citation share changes
   - Competitor review platform benchmarking

6. **Entity Consistency Checker**
   - Verify NAP data consistency across all review platforms and directories
   - Flag mismatches that may cause AI Overviews omission
   - Automated correction recommendations

**Tier 3 — Future (research required):**

7. **Automated Review Collection**
   - Direct API integration with Judge.me, Yotpo, Trustpilot for review ingestion
   - Post-purchase flow automation across platforms
   - Review response drafting (AI-generated, human-approved)

### Platform Priority Matrix for Clients

| Client Type                        | Priority 1           | Priority 2     | Priority 3             | Skip              |
| ---------------------------------- | -------------------- | -------------- | ---------------------- | ----------------- |
| B2B SaaS                           | G2 + GetApp          | Capterra       | ProductHunt            | Yelp, TripAdvisor |
| Digital Agency                     | Clutch               | GoodFirms      | G2                     | Yelp, Amazon      |
| Consumer ecommerce                 | Google Reviews       | Trustpilot     | Amazon (if applicable) | G2, Capterra      |
| Local service business             | Google Reviews (GBP) | Yelp           | Trustpilot             | G2, Clutch        |
| Travel/hospitality                 | TripAdvisor          | Google Reviews | Trustpilot             | G2, Clutch        |
| Hair/beauty products (Hairgenetix) | Google Reviews       | Trustpilot     | Amazon                 | G2, Clutch        |

### Hairgenetix Specific Recommendations

Given Hairgenetix is a consumer hair growth product (peptide-based, Shopify-based, multi-language):

1. **Google Reviews (GBP):** Set up and optimise if not done. Highest ROI for consumer product AI visibility.
2. **Trustpilot:** Maintain existing profile if it exists (consumer trust signal, even if AI crawler access is blocked).
3. **AggregateRating schema:** Implement on product pages using existing review data (from Judge.me or equivalent).
4. **Review request timing:** 7-10 days post-delivery for haircare products (allow 2-3 uses before requesting).
5. **Review content templates:** Request templates asking customers to describe the specific problem (e.g., "describe what your hair loss looked like before and what you noticed after 6 weeks").
6. **Amazon:** Only relevant if Hairgenetix lists on Amazon Marketplace — not currently part of strategy.

---

## Sources

- [SE Ranking — Despite 90% Traffic Loss, Review Platforms Top AI Overview Citations](https://seranking.com/blog/review-platforms-in-ai-overviews/)
- [Yext — AI Visibility in 2025: How Gemini, ChatGPT, and Perplexity Cite Brands](https://www.yext.com/blog/2025/10/ai-visibility-in-2025-how-gemini-chatgpt-perplexity-cite-brands)
- [Hall.com — Review Platform AI Citation Analysis: ChatGPT, Perplexity, AI Overviews, and Copilot](https://usehall.com/guides/review-platform-ai-citation-analysis)
- [G2 — Do More G2 Reviews Mean More AI Visibility? Insights from 30k Citations](https://learn.g2.com/do-more-g2-reviews-mean-more-ai-visibility)
- [G2 — Does G2 Get Ranked in AI LLM Search?](https://learn.g2.com/tech-signals-does-g2-get-ranked-in-ai-llm-search)
- [Omniscient Digital — G2's 2026 Acquisition Could Increase its AI Citation Share by 76%](https://beomniscient.com/blog/g2-acquisition-ai-citation-share/)
- [Quoleady — Do G2 and Capterra Reviews Influence ChatGPT Rankings? 2025 Research](https://www.quoleady.com/llmo-research/)
- [Trustpilot — Trust Report 2025](https://corporate.trustpilot.com/press/news/trust-report-2025)
- [Widewail — Google AI Overviews: How Your Reviews Impact Rankings and Reputation](https://www.widewail.com/blog/google-ai-overviews-how-your-reviews-impact-rankings-and-reputation)
- [Amazon Rufus AI: How to Optimize for AI Shopping](https://higoodie.com/blog/amazon-rufus-ai)
- [Ecomtent — The Science Behind Amazon RUFUS](https://www.ecomtent.ai/blog-page/the-science-behind-amazon-rufus-and-how-sellers-can-optimize-product-listings)
- [SeoTuners — Structured Data for AEO & GEO in 2025](https://seotuners.com/blog/seo/schema-for-aeo-geo-faq-how-to-entities-that-win/)
- [WPRiders — Schema Markup: 8 Essential Tactics to Boost AI Citations](https://wpriders.com/schema-markup-for-ai-search-types-that-get-you-cited/)
- [FTC — Consumer Review Rule Enforcement (December 2025)](https://www.ftc.gov/news-events/news/press-releases/2025/12/ftc-warns-10-companies-about-possible-violations-agencys-new-consumer-review-rule)
- [DLA Piper — FTC Warning Letters for Fake Consumer Reviews and AI (December 2025)](https://www.dlapiper.com/en-us/insights/publications/2025/12/ftc-warning-letters-ai-consumer-reviews)
- [Birdeye — AI Online Reputation Management Software 2026](https://birdeye.com/blog/ai-online-reputation-management-software/)
- [Birdeye — BirdAI Autonomous Agents](https://birdeye.com/ai/)
- [ProductHunt — Case Study: How Product Hunt Can Improve AI Visibility in 2026](https://www.producthunt.com/p/producthunt/case-study-how-product-hunt-can-improve-ai-visibility-in-2026)
- [Digital Bloom — 2025 AI Visibility Report: How LLMs Choose What Sources to Mention](https://thedigitalbloom.com/learn/2025-ai-citation-llm-visibility-report/)
- [PowerReviews — When To Ask for Reviews: Best Practice Guide](https://www.powerreviews.com/when-to-ask-for-reviews-best-practice-guide/)
- [Birdeye — SMS vs. Email Review Requests: Which Works Best in 2025?](https://birdeye.com/blog/sms-vs-email-review-requests-2025/)
- [Semrush — AI Search Trust Signals: The Practical Audit (2026)](https://www.semrush.com/blog/ai-search-trust-signals/)
- [Originality.AI — Fake AI TripAdvisor Reviews Increased 137% from 2019 to 2024](https://originality.ai/blog/ai-tripadvisor-reviews-study)
- [Stackmatix — Structured Data for AI Search: Complete Schema Markup Guide (2026)](https://www.stackmatix.com/blog/structured-data-ai-search)
- [Brandi AI — 2026 Trends for GEO and AI Visibility](https://www.martechcube.com/brandi-ai-unveils-2026-trends-for-geo-and-ai-visibility/)
- [ALM Corp — Google AI Overview Citations From Top-10 Pages Dropped From 76% to 38%](https://almcorp.com/blog/google-ai-overview-citations-drop-top-ranking-pages-2026/)
