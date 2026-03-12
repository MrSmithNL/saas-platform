---
capability_type: Ways of Working
domain: intelligence
status: definitive
version: 1.0
created: 2026-03-12
last_updated: 2026-03-12
owner: AISOGEN vertical (PROD-004)
---

# SEO, GEO & AISO — Complete End-to-End Process Model

> **Purpose:** Definitive blueprint of every process and sub-process in professional SEO, GEO, and AISO practice. This document is the process architecture for AISOGEN — the full-service AI-autonomous SEO platform.
>
> **Scope:** All processes a full-service agency would need, from new-client onboarding through ongoing autonomous execution.
>
> **How to read:** Processes are numbered hierarchically (1.0, 1.1, 1.1.1). Each leaf-level process is classified on the automation spectrum. GEO/AISO-specific processes start at section 9.

---

## Document Structure

- **Part 1 (Sections 1–8):** Traditional SEO processes — discovery, technical, keyword research, content, authority, rank tracking, reporting
- **Part 2 (Sections 9–13):** GEO and AISO extensions — AI visibility monitoring, AI content optimization, entity/knowledge graph, external authority for AI, AI technical optimization
- **Part 3 (Section 14):** Automation spectrum classification — every sub-process rated
- **Part 4 (Section 15):** Industry frameworks — published methodologies and certification bodies
- **Part 5 (Section 16):** Capability map — how this process model maps to AISOGEN's build roadmap

---

## Automation Legend

Throughout this document, each process leaf is tagged with one of four automation classifications:

| Tag              | Meaning                                                                   |
| ---------------- | ------------------------------------------------------------------------- |
| **[AUTO]**       | Fully automatable — AI does this end-to-end without human input           |
| **[ASSISTED]**   | AI-assisted — AI does the heavy lifting, human reviews/approves output    |
| **[HUMAN-LED]**  | Human makes decisions, AI provides data and recommendations               |
| **[HUMAN-ONLY]** | Cannot be automated — requires human presence, judgment, or relationships |

---

## Part 1: Traditional SEO

---

## 1.0 Discovery & Setup

The first engagement with a new client or site. Goal: establish a complete baseline, define the playing field, and configure all measurement infrastructure before any optimisation begins.

### 1.1 Business Intelligence Gathering

**1.1.1 Stakeholder interviews** — Define business goals, revenue model, customer personas, competitive differentiation, and prior SEO history. **[HUMAN-ONLY]**

**1.1.2 Brand and messaging audit** — Capture brand voice, tone guidelines, product positioning, and terminology the brand uses vs. the market uses. **[ASSISTED]**

**1.1.3 Prior campaign review** — Review any previous SEO work, Google Penalty history, algorithm update impacts, and past agency reports. **[ASSISTED]**

**1.1.4 Business goal-to-keyword mapping** — Translate business objectives (e.g., "grow subscription revenue by 30%") into measurable keyword and traffic goals. **[HUMAN-LED]**

### 1.2 Technical Baseline Assessment

**1.2.1 Site crawl** — Full automated crawl using Screaming Frog, Semrush, or Ahrefs to inventory all URLs, status codes, canonical tags, and page-level metadata. **[AUTO]**

**1.2.2 Index coverage audit** — Compare crawled pages against Google Search Console indexed pages to identify orphaned, non-indexed, or duplicate content. **[ASSISTED]**

**1.2.3 Core Web Vitals baseline** — Pull LCP, INP, CLS scores from Google Search Console and PageSpeed Insights for all key page templates. **[AUTO]**

**1.2.4 Mobile usability audit** — Run Google Mobile-Friendly Test across key templates; document viewport, tap target, and font issues. **[AUTO]**

**1.2.5 Security audit** — Verify HTTPS, HSTS headers, mixed content, SSL certificate expiry, and security headers. **[AUTO]**

**1.2.6 Log file analysis** — Parse server logs to identify crawl frequency, crawl budget waste, and pages Googlebot is ignoring. **[ASSISTED]**

### 1.3 Competitor Identification

**1.3.1 Business competitor mapping** — Identify 3–5 direct business competitors (companies competing for the same customers). **[HUMAN-LED]**

**1.3.2 SERP competitor discovery** — Identify 3–5 SERP competitors (sites ranking for the same keywords, even if not direct business competitors) using Ahrefs or Semrush competitor reports. **[AUTO]**

**1.3.3 Competitor content audit** — Crawl competitor sites to catalogue their page count, content types, topic coverage, and publishing frequency. **[AUTO]**

**1.3.4 Competitor backlink audit** — Pull competitor backlink profiles (DA/DR, anchor text distribution, referring domain count, link velocity). **[AUTO]**

**1.3.5 Competitor keyword universe** — Extract all keywords competitors rank for in positions 1–50 using Ahrefs/Semrush organic keyword exports. **[AUTO]**

### 1.4 Keyword Universe Definition

**1.4.1 Seed keyword generation** — Generate seed keywords from product/service names, competitor keywords, and customer language. **[ASSISTED]**

**1.4.2 Keyword expansion** — Expand seeds into full universe using keyword explorer tools (Semrush, Ahrefs, Google Keyword Planner). **[AUTO]**

**1.4.3 Initial universe sizing** — Define the total addressable keyword universe (volume, difficulty distribution, competition profile). **[ASSISTED]**

### 1.5 Goal Setting & KPI Framework

**1.5.1 Business KPI mapping** — Map SEO goals to business KPIs (organic revenue, leads, conversions, not just traffic). **[HUMAN-LED]**

**1.5.2 SEO KPI definition** — Define specific measurable SEO KPIs: target rankings, organic traffic volume, share of voice, domain rating targets. **[HUMAN-LED]**

**1.5.3 GEO/AISO KPI definition** — Define AI visibility KPIs: Share of Model targets per platform, citation count targets, sentiment targets. **[HUMAN-LED]**

**1.5.4 Reporting cadence** — Agree reporting frequency, format, and stakeholders. **[HUMAN-ONLY]**

### 1.6 Tracking Setup

**1.6.1 Google Search Console setup** — Verify domain, submit sitemap, grant agency access. **[ASSISTED]**

**1.6.2 Google Analytics 4 setup** — Verify GA4 is installed, events firing correctly, conversions defined, attribution model set. **[ASSISTED]**

**1.6.3 Rank tracker configuration** — Set up position tracking in Semrush/Ahrefs/SEOmonitor for agreed keyword set, device, and locale. **[AUTO]**

**1.6.4 AI visibility baseline** — Run initial Share of Model measurement across ChatGPT, Perplexity, Gemini, and Google AI Overviews using a set of 25–50 target queries. **[ASSISTED]**

**1.6.5 Backlink monitoring setup** — Configure new/lost link alerts in Ahrefs or Semrush. **[AUTO]**

**1.6.6 Technical monitoring setup** — Configure site health alerts (GSC errors, Core Web Vitals degradation, crawl anomalies). **[AUTO]**

---

## 2.0 Technical SEO

The complete set of processes to ensure a site is crawlable, indexable, fast, accessible, and structured correctly for both search engines and AI systems.

### 2.1 Crawlability & Indexability

**2.1.1 Robots.txt audit & optimisation** — Review and correct robots.txt directives. Ensure all important pages are crawlable, Disallow is not blocking key content, and AI crawlers (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot) are explicitly allowed. **[ASSISTED]**

**2.1.2 XML sitemap audit** — Verify sitemap contains only canonical, indexable pages (no noindex, no redirects, no pagination-only pages). Ensure sitemap is submitted in GSC and auto-updates. **[ASSISTED]**

**2.1.3 Canonical tag audit** — Identify and fix incorrect self-referencing canonicals, cross-domain canonicals, pagination canonicals, and canonical conflicts with robots.txt. **[ASSISTED]**

**2.1.4 Crawl budget analysis** — Identify crawl waste (faceted navigation, session IDs, infinite scroll, thin/duplicate pages consuming budget). **[ASSISTED]**

**2.1.5 Index coverage review** — Regular review of GSC Index Coverage report: categorise Not Indexed URLs (Crawled but not indexed, Discovered but not crawled, Excluded by noindex, Soft 404). **[ASSISTED]**

**2.1.6 Pagination handling** — Audit pagination strategy (rel=next/prev deprecated, infinite scroll, load-more patterns). Ensure paginated content is indexable where appropriate. **[ASSISTED]**

**2.1.7 Duplicate content audit** — Identify exact and near-duplicate pages using crawler comparison. Implement canonical, consolidate, or noindex as appropriate. **[ASSISTED]**

**2.1.8 Redirect audit** — Map all 3xx redirects. Identify redirect chains (3+ hops), redirect loops, incorrect 302s that should be 301s, and broken redirect targets. **[AUTO]**

**2.1.9 404 and 410 management** — Identify broken internal links and external links pointing to 404 pages. Assess reinstatement vs. 410 vs. redirect. **[ASSISTED]**

### 2.2 Core Web Vitals & Performance

**2.2.1 LCP optimisation** — Improve Largest Contentful Paint: optimise hero images (WebP, preload, srcset), reduce render-blocking resources, implement CDN. Target: ≤2.5s at 75th percentile. **[ASSISTED]**

**2.2.2 INP optimisation** — Improve Interaction to Next Paint: defer non-critical JS, use requestIdleCallback, optimise event listeners. Target: ≤200ms at 75th percentile. **[ASSISTED]**

**2.2.3 CLS optimisation** — Eliminate Cumulative Layout Shift: reserve space for images, ads, and embeds; avoid injecting content above fold. Target: ≤0.10 at 75th percentile. **[ASSISTED]**

**2.2.4 TTFB optimisation** — Reduce Time to First Byte: implement server-side caching, CDN edge caching, database query optimisation. **[ASSISTED]**

**2.2.5 Image optimisation pipeline** — Implement automated WebP/AVIF conversion, responsive images (srcset), lazy loading, and proper sizing. **[AUTO]**

**2.2.6 CSS/JS optimisation** — Minify, bundle, defer, and tree-shake CSS and JavaScript. Remove render-blocking scripts. **[ASSISTED]**

**2.2.7 Server response time monitoring** — Configure P95 response time alerts. Investigate and fix when >200ms. **[AUTO]**

### 2.3 Mobile & Accessibility

**2.3.1 Mobile-first indexing compliance** — Ensure content parity between mobile and desktop versions. Google uses mobile version for indexing. **[ASSISTED]**

**2.3.2 Responsive design audit** — Test all page templates across device viewport sizes. Document tap target issues, horizontal scrolling, and font size problems. **[AUTO]**

**2.3.3 Accessibility audit (WCAG 2.1 AA)** — Alt text on images, ARIA labels, heading hierarchy, colour contrast. Accessibility correlates with AISO citation rates. **[ASSISTED]**

### 2.4 HTTPS & Security

**2.4.1 SSL certificate management** — Monitor certificate expiry, ensure full chain is valid, implement HSTS. **[AUTO]**

**2.4.2 Mixed content resolution** — Identify and fix all HTTP resources loaded on HTTPS pages. **[AUTO]**

**2.4.3 Security headers** — Implement Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy. **[ASSISTED]**

### 2.5 Schema Markup & Structured Data

**2.5.1 Schema architecture design** — Design entity-first schema architecture: which types to deploy, @id conventions, single vs. @graph approach, page-type conditional rendering. **[HUMAN-LED]**

**2.5.2 Organization schema** — Implement full Organization schema with name, URL, logo, sameAs (LinkedIn, Wikidata, Trustpilot), contactPoint, description, knowsAbout. This is the foundational entity — define once, reference everywhere via @id. **[ASSISTED]**

**2.5.3 WebSite schema** — Implement WebSite schema with SearchAction (sitelinks search). **[AUTO]**

**2.5.4 Product schema** — Implement Product schema with offers, aggregateRating, brand, description. Include all variants. **[ASSISTED]**

**2.5.5 Article/BlogPosting schema** — Implement Article schema with author (Person @id reference), publisher (Organization @id reference), datePublished, dateModified, headline, description. **[AUTO]**

**2.5.6 FAQPage schema** — Implement FAQPage schema on product pages and FAQ pages. Restrict to one FAQPage per page. Ensure 1:1 match with visible HTML content. **[AUTO]**

**2.5.7 HowTo schema** — Implement HowTo schema on instructional content (note: Google deprecated rich results for HowTo in Jan 2026, but AI models still parse it). **[AUTO]**

**2.5.8 Person schema** — Implement Person schema for all authors and expert reviewers with credentials, affiliation, sameAs links. **[ASSISTED]**

**2.5.9 BreadcrumbList schema** — Implement dynamic BreadcrumbList on all pages, localised per language where applicable. **[AUTO]**

**2.5.10 Schema deduplication audit** — Identify and eliminate duplicate schemas from conflicting sources (theme, apps, custom). Centralise all schema ownership. **[ASSISTED]**

**2.5.11 Schema validation** — Validate all schemas against Google Rich Results Test and Schema Markup Validator. Target: zero errors, zero warnings. Run after every deployment. **[AUTO]**

**2.5.12 GSC structured data monitoring** — Weekly review of GSC Enhancements tab for structured data errors across all schema types. **[AUTO]**

### 2.6 Site Architecture & Internal Linking

**2.6.1 Information architecture audit** — Evaluate URL structure, folder depth, and taxonomy for crawlability and topic clustering. **[HUMAN-LED]**

**2.6.2 Internal link audit** — Map current internal link graph. Identify orphaned pages, thin link clusters, and pages with too many or too few internal links. **[AUTO]**

**2.6.3 Internal linking strategy** — Design pillar-to-cluster linking structure. Define anchor text guidelines. Implement hub-and-spoke internal link architecture. **[HUMAN-LED]**

**2.6.4 Breadcrumb navigation** — Implement consistent breadcrumb navigation across all page templates. **[ASSISTED]**

**2.6.5 URL structure** — Ensure URLs are human-readable, keyword-rich, and follow consistent conventions. No session IDs, no excessive parameters. **[ASSISTED]**

### 2.7 JavaScript Rendering

**2.7.1 JS rendering audit** — Use GSC URL Inspection and Screaming Frog (JavaScript rendering mode) to identify content rendered only by JavaScript that Googlebot and AI crawlers cannot see. **[AUTO]**

**2.7.2 Server-side rendering (SSR) implementation** — Implement SSR or static site generation for critical content. AI crawlers (GPTBot, ClaudeBot, PerplexityBot) do not execute JavaScript reliably. **[HUMAN-LED]**

**2.7.3 Dynamic rendering setup** — Where full SSR is not feasible, implement dynamic rendering (serve pre-rendered HTML to bots). **[ASSISTED]**

### 2.8 International SEO

**2.8.1 Hreflang audit & implementation** — Implement hreflang on all multilingual/multiregional pages. Verify self-referencing, return tags, and x-default. **[ASSISTED]**

**2.8.2 International URL structure** — Assess ccTLD vs. subdomain vs. subfolder structure for international sites. **[HUMAN-LED]**

**2.8.3 Content localisation** — Ensure content is genuinely localised (not machine-translated) per market. **[HUMAN-LED]**

---

## 3.0 Keyword Research & Strategy

The complete process for discovering, analysing, clustering, and prioritising the keyword opportunity for a site.

### 3.1 Volume & Difficulty Analysis

**3.1.1 Search volume data pull** — Export monthly search volume and trend data for keyword universe from Semrush, Ahrefs, or Google Keyword Planner. **[AUTO]**

**3.1.2 Keyword difficulty scoring** — Score each keyword by difficulty using multiple tools (Semrush KD, Ahrefs KD), weight against domain authority. **[AUTO]**

**3.1.3 CTR modelling** — Estimate organic CTR per SERP position per keyword using CTR curves, adjusted for SERP features (featured snippets, ads, AI Overviews reduce CTR for blue links). **[ASSISTED]**

**3.1.4 Traffic potential calculation** — Calculate realistic traffic potential per keyword: volume × estimated CTR at target position. **[AUTO]**

### 3.2 Intent Classification

**3.2.1 SERP intent audit** — Review actual SERPs for each priority keyword to determine intent from what Google is showing (informational = blog posts, commercial = product listings, transactional = buy buttons). **[AUTO]**

**3.2.2 Micro-intent classification** — Classify beyond the four main intent categories into micro-intents: problem-aware, solution-aware, product comparison, purchase-ready. **[ASSISTED]**

**3.2.3 AI query intent mapping** — Map queries by how they are typically asked to AI systems — conversational, comparative, or definitional — as this differs from how they are typed into Google. **[ASSISTED]**

### 3.3 Keyword Clustering

**3.3.1 Semantic clustering** — Group keywords by semantic similarity into topic clusters using vector embeddings or tool-based clustering. **[AUTO]**

**3.3.2 SERP overlap clustering** — Group keywords by shared SERP results (if the same pages rank for keywords A and B, they belong in the same cluster). **[AUTO]**

**3.3.3 Intent-based cluster separation** — Separate keywords with different intent into different content pieces even if semantically similar (e.g., "hair loss treatment" (informational) vs. "buy hair loss treatment" (transactional)). **[ASSISTED]**

**3.3.4 Hub vs. spoke designation** — Classify each cluster as pillar (hub) or supporting (spoke) content. **[HUMAN-LED]**

### 3.4 Gap Analysis

**3.4.1 Keyword gap analysis** — Identify keywords competitors rank for that the site does not (using Semrush/Ahrefs Keyword Gap tool). **[AUTO]**

**3.4.2 Content gap analysis** — Identify topic areas covered by competitors but absent from the client's site. **[ASSISTED]**

**3.4.3 SERP feature gap** — Identify keywords where competitors own featured snippets, AI Overviews, or image packs that the client does not. **[AUTO]**

**3.4.4 Position gap analysis** — Identify keywords where the client ranks in positions 5–20 (high opportunity to move to page 1 with targeted optimisation). **[AUTO]**

### 3.5 Opportunity Scoring

**3.5.1 Composite opportunity score** — Score each keyword by weighted combination of: traffic potential, keyword difficulty (inverse), business relevance, authority fit, and SERP feature opportunity. **[AUTO]**

**3.5.2 Quick-win identification** — Isolate keywords in positions 5–15 with high volume and low difficulty ("low-hanging fruit"). **[AUTO]**

**3.5.3 Keyword prioritisation matrix** — Rank keywords into tiers: Tier 1 (build immediately), Tier 2 (next 90 days), Tier 3 (12-month horizon). **[HUMAN-LED]**

### 3.6 Seasonal & Trend Analysis

**3.6.1 Google Trends analysis** — Identify seasonal patterns, rising queries, and declining interest for keyword categories. **[AUTO]**

**3.6.2 Content calendar integration** — Map seasonal keyword peaks to content publishing schedule (publish 4–6 weeks before peak). **[ASSISTED]**

**3.6.3 Keyword volatility monitoring** — Monitor queries where intent or volume changes significantly (31% of high-value keywords change substantially every 6 months). **[AUTO]**

### 3.7 Competitor Keyword Analysis

**3.7.1 Competitor ranking export** — Download full organic keyword rankings for top 5 competitors. **[AUTO]**

**3.7.2 Competitor traffic value analysis** — Calculate estimated organic traffic value for each competitor (volume × position CTR × CPC). **[AUTO]**

**3.7.3 Competitor content format mapping** — Map competitor content formats per keyword type: do they rank with blog posts, product pages, or category pages? **[ASSISTED]**

---

## 4.0 Content Strategy & Planning

The architecture and planning layer that determines what content to create, in what order, and to what standard.

### 4.1 Topic Clustering & Hub-and-Spoke Architecture

**4.1.1 Pillar page identification** — Identify one comprehensive pillar page per major topic cluster (3,000–5,000 words, covers all aspects of the topic). **[HUMAN-LED]**

**4.1.2 Cluster content mapping** — Map 5–15 supporting articles per pillar (1,500–2,500 words each, targeting specific sub-topics and long-tail keywords). **[ASSISTED]**

**4.1.3 Internal link architecture design** — Design bidirectional linking: each cluster page links back to the pillar, pillar links to all clusters. **[HUMAN-LED]**

**4.1.4 Content architecture diagram** — Document the full hub-and-spoke structure visually per topic. **[ASSISTED]**

### 4.2 Content Gap Analysis

**4.2.1 Existing content audit** — Crawl and classify all existing content: performing (top 50 for target keyword), underperforming (not ranking), orphaned (no internal links), or cannibalising (competing with another page). **[AUTO]**

**4.2.2 Competitor content mapping** — Document competitor content structure: pillar pages, supporting content, formats, word counts, update frequency. **[AUTO]**

**4.2.3 Gap prioritisation** — Prioritise content gaps by traffic opportunity, business relevance, and competitive difficulty. **[HUMAN-LED]**

### 4.3 Content Calendar

**4.3.1 Publication cadence definition** — Set sustainable publication cadence (minimum: 2x per week for authority building; more for aggressive growth). **[HUMAN-LED]**

**4.3.2 Calendar population** — Populate 90-day rolling calendar with: keyword target, content type, author, target publish date, SEO brief owner. **[ASSISTED]**

**4.3.3 Seasonal integration** — Integrate seasonal keyword peaks (from 3.6.2) and product launch timelines into the calendar. **[HUMAN-LED]**

### 4.4 Content Briefs

**4.4.1 Brief template creation** — Create standardised brief template covering: target keyword, secondary keywords, search intent, competitor pages to beat, required heading structure, word count target, E-E-A-T requirements, schema type, internal links to include/from, CTA. **[HUMAN-LED]**

**4.4.2 Brief generation per article** — Populate a complete brief for each piece of content in the calendar, including SERP analysis and competitive positioning. **[ASSISTED]**

**4.4.3 Brief review and approval** — Stakeholder review of content briefs before writing begins. **[HUMAN-ONLY]**

### 4.5 E-E-A-T Planning

**4.5.1 Author profile development** — Create detailed author profiles with credentials, publication history, social profiles, and sameAs links. E-E-A-T requires demonstrable expertise from real people. **[HUMAN-ONLY]**

**4.5.2 Expert reviewer identification** — For YMYL (Your Money Your Life) content: identify and contract subject-matter experts to review content before publication. **[HUMAN-ONLY]**

**4.5.3 Experience signals planning** — Plan content formats that demonstrate firsthand experience: case studies, product testing notes, before/after results. **[HUMAN-ONLY]**

**4.5.4 Trust signal integration** — Plan placement of trust signals: reviewer bylines, last-updated dates, source citations, methodology disclosures. **[ASSISTED]**

### 4.6 Content Refresh Planning

**4.6.1 Refresh candidate identification** — Identify pages in positions 5–20 that are losing traffic (Google Search Console + Ahrefs historical data). **[AUTO]**

**4.6.2 Refresh prioritisation** — Rank refresh candidates by traffic potential and effort required. **[ASSISTED]**

**4.6.3 Refresh brief creation** — Create briefs for each refresh: what to update, new keywords to target, competitors to beat, new data/statistics to add. **[ASSISTED]**

**4.6.4 Refresh cadence** — Schedule quarterly refresh cycle for top 20% of pages. **[ASSISTED]**

---

## 5.0 Content Creation & Optimisation

The execution layer where content is produced, optimised on-page, and technically prepared for both search and AI retrieval.

### 5.1 Content Writing & Generation

**5.1.1 First draft creation** — Generate first draft from brief. Human or AI-assisted. Note: AI-generated content is first-draft only — always requires human review for accuracy, brand voice, and E-E-A-T compliance. **[ASSISTED]**

**5.1.2 Expert review and editing** — Subject-matter expert reviews first draft for factual accuracy, depth, and added experience signals. **[HUMAN-ONLY]**

**5.1.3 Editorial review** — Editorial pass for style, brand voice, readability, and compliance with content guidelines. **[HUMAN-ONLY]**

### 5.2 On-Page Optimisation

**5.2.1 Title tag optimisation** — Write keyword-optimised title tags: primary keyword near the front, under 60 characters, compelling for CTR. **[ASSISTED]**

**5.2.2 Meta description optimisation** — Write meta descriptions: answer-first, include primary keyword, include a specific data point or differentiator, CTA, under 155 characters. **[ASSISTED]**

**5.2.3 Heading structure** — Implement H1→H2→H3 hierarchy. H1 is the primary keyword. H2s should be in question format matching search queries. **[ASSISTED]**

**5.2.4 Keyword placement** — Ensure primary keyword appears in: H1, first paragraph, at least 2 H2s, naturally throughout body, alt text of primary image, URL slug. **[ASSISTED]**

**5.2.5 Semantic keyword integration** — Integrate LSI and semantically related terms throughout the content without keyword stuffing. **[ASSISTED]**

**5.2.6 Content length optimisation** — Match word count to top-ranking competitors in the SERP (not a fixed target — match what's winning). **[ASSISTED]**

**5.2.7 Readability optimisation** — Ensure short sentences, short paragraphs (2–4 sentences), active voice, and appropriate reading level for target audience. **[ASSISTED]**

### 5.3 AI-Specific On-Page Optimisation

**5.3.1 Answer-first format** — Open every page or section with a direct, extractable answer before elaborating. This is the single highest-impact AISO technique. **[ASSISTED]**

**5.3.2 Definition paragraph** — On every key concept page, include a clear 1–2 sentence definition that an AI model could quote as a snippet. Start with the key term. **[ASSISTED]**

**5.3.3 Atomic paragraph structure** — Write paragraphs that are self-contained: each makes sense without surrounding context. AI extraction tools (Trafilatura, Firecrawl, Jina Reader) extract individual paragraphs. **[ASSISTED]**

**5.3.4 Fact density** — Include verifiable claims backed by sources. Pages with verifiable facts have 89% higher AI citation probability. Aim for 1 cited claim per 300 words. **[ASSISTED]**

**5.3.5 Front-loading** — Place the most important information in the first 30% of the content. 44.2% of AI citations come from the first 30% of text. **[ASSISTED]**

**5.3.6 FAQ section** — Add structured FAQ section with 5–10 questions per page. Q&As should mirror questions users ask AI systems. **[ASSISTED]**

**5.3.7 Comparison tables** — Include side-by-side comparison tables for products, options, or alternatives. AI models frequently extract and reproduce structured comparison data. **[ASSISTED]**

**5.3.8 Snippet-ready blocks** — Create self-contained 2–3 sentence answer blocks that can be extracted without surrounding context for voice search and AI responses. **[ASSISTED]**

**5.3.9 TL;DR blocks** — Add brief summary sections under main headings: "In short: [one-sentence answer]". **[ASSISTED]**

**5.3.10 Citation/reference section** — Add a numbered reference section with PubMed DOI links, government sources, or high-authority citations. This directly increases AI citation probability. **[ASSISTED]**

### 5.4 Internal Linking Execution

**5.4.1 Contextual internal links** — Add 3–5 contextual internal links per page using descriptive anchor text. Link to the pillar page and to relevant cluster pages. **[ASSISTED]**

**5.4.2 Hub-to-spoke linking** — From every pillar page, ensure links to all supporting cluster pages. **[ASSISTED]**

**5.4.3 Orphan page resolution** — Ensure every page has at least 3 internal links pointing to it. **[ASSISTED]**

### 5.5 Media Optimisation

**5.5.1 Image alt text** — Write descriptive alt text for all images: accurate description + keyword where natural. Essential for both SEO and AI image recognition. **[ASSISTED]**

**5.5.2 Image compression and format** — Convert images to WebP/AVIF. Implement responsive images. **[AUTO]**

**5.5.3 Video integration** — Embed relevant YouTube videos (preferably own channel) into key pages. Multi-modal content has 156% higher AI selection rate vs. text-only. **[HUMAN-LED]**

**5.5.4 Video transcript** — Add full transcripts for embedded videos. AI crawlers cannot watch videos; transcripts make video content parseable. **[ASSISTED]**

**5.5.5 Infographic creation** — Create data visualisations for complex statistics. Include full data in accompanying text. **[HUMAN-LED]**

### 5.6 Schema Markup — Per-Page Execution

**5.6.1 Page-type schema selection** — Select and implement appropriate schema types per page template (Article for blog, Product for product pages, FAQPage for FAQ-containing pages). **[ASSISTED]**

**5.6.2 FAQPage schema population** — Populate FAQPage schema matching the visible Q&A content exactly. One FAQPage per page. **[AUTO]**

**5.6.3 Content-schema alignment check** — Verify every schema property has a corresponding visible HTML element. Schema without visible content violates Google policy and is ignored by AI extraction tools. **[ASSISTED]**

### 5.7 CMS Publishing & QA

**5.7.1 CMS publishing** — Publish page to CMS (WordPress, Shopify, Webflow, etc.) with correct template, categories, and metadata. **[ASSISTED]**

**5.7.2 Pre-publish QA** — Check: page renders correctly, schema validates, internal links work, images load, meta tags correct, no spelling errors. **[ASSISTED]**

**5.7.3 GSC URL inspection** — After publishing, request indexing via GSC URL Inspection tool. **[AUTO]**

**5.7.4 Social syndication** — Share new content on social channels per content distribution plan. **[ASSISTED]**

---

## 6.0 Authority & Link Building

The processes for acquiring external signals — backlinks, brand mentions, and off-page authority — that tell search engines and AI models that a site deserves to rank.

### 6.1 Backlink Audit & Baseline

**6.1.1 Backlink profile export** — Pull full backlink profile from Ahrefs/Semrush: total referring domains, domain authority distribution, anchor text distribution, dofollow/nofollow ratio, link velocity. **[AUTO]**

**6.1.2 Toxic link identification** — Identify and flag spammy, irrelevant, or paid links that violate Google's guidelines. **[ASSISTED]**

**6.1.3 Disavow file management** — Create and submit disavow file to Google for confirmed toxic links. **[ASSISTED]**

**6.1.4 Link gap analysis** — Identify domains linking to competitors but not to the client (highest-priority prospects). **[AUTO]**

### 6.2 Link Prospecting

**6.2.1 Industry publication research** — Identify editorial publications, trade journals, and industry blogs that accept contributor content or cover the niche. **[ASSISTED]**

**6.2.2 Resource page prospecting** — Find resource pages that link to tools, guides, or data in the niche. **[AUTO]**

**6.2.3 Broken link prospecting** — Identify broken links on authoritative pages in the niche that the client could replace. **[AUTO]**

**6.2.4 Competitor backlink prospecting** — Filter competitor backlinks for contact-able prospects (not auto-generated, not impossible editorial sites). **[AUTO]**

**6.2.5 Journalist/media monitoring** — Set up HARO (Help a Reporter Out), Qwoted, or similar journalist request monitoring for expert commentary opportunities. **[ASSISTED]**

### 6.3 Digital PR & Content-Led Link Building

**6.3.1 Original research design** — Design studies, surveys, or proprietary data analyses that journalists will want to cover. Original research generates 3–5x more high-authority links than generic outreach. **[HUMAN-ONLY]**

**6.3.2 Data asset creation** — Produce the research or data asset: survey, industry report, proprietary dataset. **[HUMAN-LED]**

**6.3.3 PR pitch development** — Write compelling news angle from the data: headline, supporting stats, expert quotes. **[HUMAN-ONLY]**

**6.3.4 Media distribution** — Pitch to journalists, editors, and industry publications. 95% of digital PR pros use data-backed content. **[HUMAN-ONLY]**

**6.3.5 Press release distribution** — Distribute press releases via wire services (PRNewswire, BusinessWire) for AISO benefit (AI models cite press releases directly). **[ASSISTED]**

### 6.4 Outreach Campaigns

**6.4.1 Outreach template development** — Write personalised outreach templates for each link type (resource page, guest post, broken link). **[HUMAN-LED]**

**6.4.2 Prospect personalisation** — Research each prospect and personalise the outreach message. 65% of SEOs now use AI for automated prospecting and personalisation. **[ASSISTED]**

**6.4.3 Outreach sending** — Send outreach emails via BuzzStream, Respona, or similar. **[ASSISTED]**

**6.4.4 Follow-up cadence** — Execute 2–3 follow-up sequence for non-responders. **[AUTO]**

**6.4.5 Response handling** — Handle responses, negotiate link placement, provide content or assets. **[HUMAN-ONLY]**

### 6.5 Guest Posting

**6.5.1 Target site identification** — Identify high-authority, relevant sites that accept guest contributions. **[ASSISTED]**

**6.5.2 Pitch submission** — Pitch topic ideas with brief outline. **[HUMAN-ONLY]**

**6.5.3 Guest article writing** — Write the guest article to publication standards. Include a natural contextual link to client site. **[HUMAN-LED]**

**6.5.4 Editorial liaison** — Coordinate with publication editor through review and publication process. **[HUMAN-ONLY]**

### 6.6 Link Quality Monitoring

**6.6.1 New link monitoring** — Daily alerts for new referring domains. Review all new links for quality and relevance. **[AUTO]**

**6.6.2 Lost link monitoring** — Daily alerts for lost referring domains. Investigate cause (page removed, link moved, disavow). Attempt reclamation for high-value lost links. **[ASSISTED]**

**6.6.3 Link velocity tracking** — Monitor link acquisition rate vs. historical and competitor velocity. **[AUTO]**

**6.6.4 Anchor text distribution monitoring** — Ensure natural anchor text distribution. Flag if exact-match anchor text exceeds 10% of backlink profile. **[AUTO]**

---

## 7.0 Rank Tracking & Monitoring

### 7.1 Position Tracking

**7.1.1 Daily rank tracking** — Automated daily tracking of all target keywords across configured devices (desktop, mobile), locales, and search engines. **[AUTO]**

**7.1.2 Rank change alerting** — Alerts for significant rank changes (>5 positions up or down) on high-priority keywords. **[AUTO]**

**7.1.3 Visibility index tracking** — Track overall visibility index (weighted average of rankings across all target keywords) as a health metric. **[AUTO]**

**7.1.4 Competitor rank tracking** — Track competitor rankings for the same keyword set to monitor competitive position. **[AUTO]**

### 7.2 SERP Feature Tracking

**7.2.1 Featured snippet monitoring** — Track which keywords trigger featured snippets and whether the client owns them. **[AUTO]**

**7.2.2 AI Overview monitoring** — Track appearance and frequency of Google AI Overviews for target keywords. Note: AI Overviews reduce click-through for traditional blue link results. **[AUTO]**

**7.2.3 Local pack monitoring** — For local SEO: track Local Pack appearances and position for geo-modified queries. **[AUTO]**

**7.2.4 Video carousel tracking** — Track video carousel appearances for keywords where video ranks. **[AUTO]**

**7.2.5 People Also Ask (PAA) tracking** — Monitor PAA boxes for target keywords. PAA questions are high-priority content targets for AISO. **[AUTO]**

**7.2.6 Image pack tracking** — Track image pack appearances and client image ranking. **[AUTO]**

### 7.3 Algorithm Update Monitoring

**7.3.1 Core update detection** — Monitor Google's core updates (typically 3–4 per year) and broad algorithm changes via Search Engine Land, SEJ, and official Google announcements. **[ASSISTED]**

**7.3.2 Traffic anomaly investigation** — Investigate sudden traffic drops or spikes against algorithm update timeline. Determine: algorithmic, technical, or external cause. **[HUMAN-LED]**

**7.3.3 Recovery planning** — For confirmed algorithm impact, develop recovery plan addressing the likely quality signal Google downgraded. **[HUMAN-LED]**

### 7.4 Technical Health Monitoring

**7.4.1 Crawl error monitoring** — Weekly GSC crawl error review: server errors (5xx), not found (404), redirect errors. **[AUTO]**

**7.4.2 Core Web Vitals monitoring** — Monthly review of Core Web Vitals field data in GSC and PageSpeed Insights. Alert on degradations. **[AUTO]**

**7.4.3 Site uptime monitoring** — Continuous uptime monitoring with <1 minute detection and immediate alerting. **[AUTO]**

**7.4.4 Schema error monitoring** — Weekly GSC Enhancements tab review for structured data errors. **[AUTO]**

---

## 8.0 Reporting & Analytics

### 8.1 Traffic Analysis

**8.1.1 Organic traffic trends** — Weekly and monthly organic session trends by channel, landing page, device, and geography. **[AUTO]**

**8.1.2 Keyword-level traffic attribution** — Map traffic to keyword clusters using GSC click data. **[ASSISTED]**

**8.1.3 Landing page performance** — Rank all organic landing pages by sessions, bounce rate, time on page, and conversion rate. **[AUTO]**

**8.1.4 New vs. returning visitors** — Monitor organic audience acquisition vs. retention. **[AUTO]**

### 8.2 Conversion Tracking

**8.2.1 Conversion attribution setup** — Ensure all conversions (purchases, form fills, sign-ups, phone calls) are attributed to organic search in GA4. **[ASSISTED]**

**8.2.2 Conversion rate by keyword type** — Calculate conversion rates per keyword intent type (informational vs. transactional) to validate keyword prioritisation. **[ASSISTED]**

**8.2.3 Revenue attribution** — Attribute revenue to organic search and to specific keyword categories. **[ASSISTED]**

### 8.3 ROI Measurement

**8.3.1 Organic revenue calculation** — Calculate monthly organic-attributed revenue from GA4 e-commerce or CRM data. **[AUTO]**

**8.3.2 SEO cost-per-acquisition** — Calculate cost-per-acquisition via organic search vs. paid channels. **[ASSISTED]**

**8.3.3 Link acquisition ROI** — Measure value of acquired links in terms of ranking improvement and traffic increase. **[HUMAN-LED]**

**8.3.4 Content ROI** — Measure organic traffic and revenue generated per piece of content vs. production cost. **[ASSISTED]**

### 8.4 Client Reporting

**8.4.1 Dashboard creation** — Build automated client-facing dashboard (Looker Studio, Data Studio) integrating GSC, GA4, rank tracker, and backlink data. **[ASSISTED]**

**8.4.2 Monthly report generation** — Auto-generate monthly report: ranking movements, traffic trends, link acquisitions, content published, technical issues resolved. **[AUTO]**

**8.4.3 Insight extraction** — Human analysis of data to surface the significant insights behind the numbers. Not all data is worth reporting — select what matters. **[HUMAN-LED]**

**8.4.4 Recommendation generation** — Based on reporting, generate next-period recommendations with expected impact estimates. **[ASSISTED]**

**8.4.5 Executive presentation** — Present findings to client stakeholders. Translate SEO metrics into business language. **[HUMAN-ONLY]**

---

## Part 2: GEO and AISO Extensions

---

## 9.0 AI Visibility Monitoring

The new category of measurement that tracks brand presence in AI-generated responses — the GEO equivalent of rank tracking.

### 9.1 Share of Model (SoM) Tracking

**9.1.1 Query set definition** — Define 25–50 queries that represent real customer questions at each funnel stage (awareness, consideration, decision, support). These are the queries the brand must appear in. **[HUMAN-LED]**

**9.1.2 Multi-platform monitoring** — Run defined query set against all major AI platforms: ChatGPT, Perplexity, Google AI Overviews, Google Gemini, Microsoft Copilot, Claude, Grok. **[AUTO]**

**9.1.3 Citation tracking** — Record whether the brand is cited, in what position, with what description, and with what URL reference (if any). **[AUTO]**

**9.1.4 SoM calculation** — Calculate Share of Model: percentage of responses that mention the brand across all queries and platforms. **[AUTO]**

**9.1.5 Competitor SoM tracking** — Run the same query set to measure competitor AI visibility. Calculate relative SoM share vs. top 5 competitors. **[AUTO]**

**9.1.6 SoM benchmarks** — Target benchmarks: Poor (<5%), Fair (5–10%), Good (10–15%), Excellent (15%+). **[HUMAN-LED]**

### 9.2 Sentiment Analysis

**9.2.1 Citation sentiment scoring** — Score each brand mention in AI responses as positive, neutral, or negative. **[ASSISTED]**

**9.2.2 Competitive sentiment comparison** — Compare brand sentiment vs. competitor sentiment in AI responses. **[ASSISTED]**

**9.2.3 Inaccuracy detection** — Identify incorrect information AI models state about the brand (outdated pricing, wrong features, incorrect claims). Log for correction. **[HUMAN-LED]**

**9.2.4 Sentiment trend tracking** — Track sentiment scores over time to measure impact of authority-building and content optimisation. **[AUTO]**

### 9.3 AI Inaccuracy Correction

**9.3.1 Correction content creation** — For each factual inaccuracy detected in AI responses, create authoritative content that clearly states the correct information. AI models update citations as new training data is incorporated. **[ASSISTED]**

**9.3.2 Platform-specific correction** — Some platforms (Perplexity) update in real-time. Others (ChatGPT) update via training cycles. Prioritise correction strategies by platform. **[HUMAN-LED]**

### 9.4 AI Platform Performance Analysis

**9.4.1 Per-platform citation rate** — Measure citation rate per platform to identify where the brand is strongest and weakest. **[AUTO]**

**9.4.2 Platform citation pattern analysis** — Analyse which content types, formats, and sources each platform cites most (Wikipedia for ChatGPT, Reddit for Perplexity, YouTube for Google AI Overviews). **[ASSISTED]**

**9.4.3 Platform prioritisation** — Based on where the target audience uses AI, prioritise optimisation efforts for the highest-impact platforms. **[HUMAN-LED]**

### 9.5 AI-Referred Traffic Measurement

**9.5.1 GA4 referral source configuration** — Configure GA4 to capture AI platform referral traffic (perplexity.ai, chat.openai.com, gemini.google.com, etc.) as a distinct channel. **[ASSISTED]**

**9.5.2 AI traffic trend tracking** — Monitor AI-referred sessions, conversion rate, and revenue month-over-month. **[AUTO]**

**9.5.3 AI vs. organic traffic comparison** — Compare AI-referred visitor behaviour vs. organic search visitor behaviour (AI-referred visitors convert 6x higher than traditional search on average). **[ASSISTED]**

---

## 10.0 AI Content Optimisation

The content optimisation processes specific to AI retrieval — distinct from traditional on-page SEO because AI models extract information differently from how Google's ranking algorithm works.

### 10.1 Content Structure for AI Extraction

**10.1.1 Answer-first audit** — Audit all key pages to verify the first paragraph directly answers the primary query. Rewrite pages that bury the answer. **[ASSISTED]**

**10.1.2 Heading hierarchy audit (AI)** — Verify H2s are in question format that matches how users query AI systems (e.g., "How does X work?" not "How X Works"). **[ASSISTED]**

**10.1.3 Atomic paragraph audit** — Review all paragraphs for self-containment. Break compound paragraphs into atomic units. **[ASSISTED]**

**10.1.4 Fact density improvement** — Add verifiable claims and source citations to pages below target fact density. **[ASSISTED]**

**10.1.5 Front-load audit** — Review content structure to ensure the most citeable information appears in the first 30% of text. Restructure if necessary. **[ASSISTED]**

### 10.2 AI Answer Page Strategy

**10.2.1 AI answer page identification** — Identify queries where AI systems frequently give direct answers but do not cite the client. Create dedicated pages targeting those queries. **[ASSISTED]**

**10.2.2 AI answer page template** — Follow the proven AI answer page format: Question-format H1, definition paragraph (2 sentences), mechanism explanation, evidence section with citations, comparison table, FAQ section, numbered references. **[ASSISTED]**

**10.2.3 Long-tail conversational query targeting** — Create content targeting conversational AI query patterns: "What is the best X for Y?", "How do I X without Z?", "Is X safe for Y?" **[ASSISTED]**

### 10.3 Snippet Optimisation

**10.3.1 Featured snippet targeting** — Identify keywords with featured snippets and optimise content to win those snippets. Featured snippet ownership correlates with AI Overview citation. **[ASSISTED]**

**10.3.2 People Also Ask targeting** — Create specific content pieces or FAQ entries targeting every PAA question in priority keyword SERPs. **[ASSISTED]**

**10.3.3 AI snippet format testing** — Test different answer formats (paragraph, list, table) and monitor which formats generate AI citations. **[ASSISTED]**

### 10.4 Comparison Content

**10.4.1 Competitor comparison pages** — Create "[Brand] vs [Competitor]" pages. AI models frequently reference comparison content when users ask "what is the best X?". **[ASSISTED]**

**10.4.2 Product comparison tables** — Build comprehensive comparison tables for product categories. AI models extract and reproduce structured comparison data. **[ASSISTED]**

**10.4.3 "Best X for Y" content** — Create category-level comparison content targeting "best [category] for [use case]" queries. These are high AI citation triggers. **[ASSISTED]**

### 10.5 Content Freshness Management

**10.5.1 Recency signal implementation** — Add visible "Last Updated" dates to all key pages. Perplexity and Google AI Overviews weight content freshness heavily. **[AUTO]**

**10.5.2 Content refresh execution** — Update key pages with current statistics, new research, and updated examples on the refresh cadence (minimum quarterly for top pages). **[ASSISTED]**

**10.5.3 Fresh content publication** — Maintain minimum publication cadence of 2x per week. AI retrieval platforms with real-time indexing (Perplexity) re-crawl frequently updated sites more often. **[ASSISTED]**

---

## 11.0 Entity & Knowledge Graph Optimisation

Establishing the brand as a recognised entity in knowledge databases, so AI models identify it as a real, authoritative, and classifiable entity.

### 11.1 Entity Establishment

**11.1.1 Entity status assessment** — Determine whether the brand currently exists as a recognised entity in Google's Knowledge Graph (search brand name, check for Knowledge Panel). **[AUTO]**

**11.1.2 Wikidata entry creation** — Create or verify a Wikidata entry for the brand. Even without a Wikipedia article, a well-structured Wikidata entry helps establish the brand as a recognised entity. **[HUMAN-LED]**

**11.1.3 Wikidata enrichment** — Populate all relevant Wikidata properties: founding date, founders, industry, products, headquarters, official website, social media links. **[ASSISTED]**

**11.1.4 Wikipedia strategy** — Assess brand notability for Wikipedia. If notable: create or improve Wikipedia article. This is ChatGPT's most-cited source (7.8% of all citations). Not every brand qualifies — notability must be established through third-party coverage. **[HUMAN-ONLY]**

**11.1.5 Knowledge Panel management** — Claim Google Knowledge Panel (via Google Business Profile for local businesses, Google Search Console for brands). Verify and update all fields. **[ASSISTED]**

### 11.2 Schema sameAs Linking

**11.2.1 sameAs URL inventory** — Compile all verified external profiles for the brand: LinkedIn, Twitter/X, Facebook, Instagram, YouTube, Crunchbase, Wikidata, Wikipedia, Trustpilot, industry directories. **[AUTO]**

**11.2.2 sameAs implementation** — Add all verified profile URLs to the Organization schema sameAs array. This closes the loop between the website and all external entity representations. **[ASSISTED]**

**11.2.3 sameAs profile maintenance** — Ensure all sameAs-listed profiles are active, accurate, and link back to the primary domain. Broken sameAs reduces entity recognition. **[ASSISTED]**

### 11.3 Cross-Platform Consistency

**11.3.1 NAP consistency audit** — Verify Name, Address, Phone number is identical across all platforms: website, GBP, Bing Places, Yelp, industry directories. Inconsistencies confuse Knowledge Graph entity resolution. **[AUTO]**

**11.3.2 Brand description consistency** — Audit and align brand descriptions across all platforms to be consistent with the Organization schema description. **[ASSISTED]**

**11.3.3 Logo consistency** — Ensure the same logo image URL is used across all major platforms and in schema markup. **[ASSISTED]**

### 11.4 Entity Monitoring

**11.4.1 Knowledge Panel monitoring** — Monitor Knowledge Panel content for accuracy. Google sometimes auto-generates incorrect information from third-party sources. **[AUTO]**

**11.4.2 Entity co-occurrence tracking** — Monitor which entities (topics, people, products) AI models associate with the brand. Positive associations reinforce entity position. **[ASSISTED]**

**11.4.3 Brand SERP monitoring** — Track what appears on the first page of Google for brand name queries (brand SERP). This signals how Google understands the brand. **[AUTO]**

---

## 12.0 External Authority for AI

Building the off-site signals AI models use to assess brand credibility and determine whether to cite a brand. This is distinct from link building — the goal is AI citation, not PageRank transfer.

Citation source distribution: 48% earned media (third-party coverage), 30% commercial content (third-party reviews), 23% owned content. Therefore 77% of AI citations come from sources off the primary website.

### 12.1 Review Platform Management

**12.1.1 Review platform identification** — Identify the most relevant review platforms for the niche: G2 and Capterra (SaaS), Trustpilot (e-commerce), Google Reviews (local), TripAdvisor (hospitality), Clutch (agencies). **[HUMAN-LED]**

**12.1.2 Review platform profile creation** — Create and fully complete profiles on all identified platforms. Include full description, URL, product features, and logo. **[ASSISTED]**

**12.1.3 Review acquisition strategy** — Define the post-purchase review request sequence. Review platforms generate citations in AI responses: sites with review profiles have 3x higher AI citation rates. **[HUMAN-LED]**

**12.1.4 Review monitoring** — Monitor all platforms for new reviews. Alert on negative reviews for rapid response. **[AUTO]**

**12.1.5 Review response** — Respond to all reviews (positive and negative) with a brand-voice response. **[HUMAN-ONLY]**

### 12.2 Community Presence

**12.2.1 Reddit strategy** — Identify relevant subreddits where the target audience discusses problems the brand solves. Build genuine community presence — the 95/5 rule: 95% value contribution, 5% promotional. Reddit represents 6.6% of Perplexity citations (its second-largest source). **[HUMAN-ONLY]**

**12.2.2 Reddit account development** — Build karma in relevant subreddits before any brand-adjacent participation. Reddit's AI detection removes low-karma promotional content. **[HUMAN-ONLY]**

**12.2.3 Quora presence** — Identify Quora questions related to the brand's category. Write authoritative answers to high-view questions. **[ASSISTED]**

**12.2.4 Industry forum participation** — Identify and participate in industry-specific forums, Slack groups, and Discord communities. **[HUMAN-ONLY]**

**12.2.5 Brand monitoring on community platforms** — Monitor Reddit, Quora, and forums for brand mentions to respond to and for insight into customer language. **[AUTO]**

### 12.3 Content Distribution & Syndication

**12.3.1 YouTube channel strategy** — YouTube content is the most-cited source in Google AI Overviews. Create a YouTube channel with product demonstrations, tutorials, and expert commentary. **[HUMAN-ONLY]**

**12.3.2 YouTube content production** — Script, record, and publish YouTube videos. Include full transcripts in video descriptions. **[HUMAN-ONLY]**

**12.3.3 YouTube SEO** — Optimise video titles, descriptions, chapters, and tags for discoverability. **[ASSISTED]**

**12.3.4 Podcast strategy** — Guest appearances on industry podcasts build brand mentions in an audio format AI models increasingly index. **[HUMAN-ONLY]**

**12.3.5 Medium/Substack publication** — Republish or distribute key content on Medium and Substack to build additional indexed mentions on high-authority domains. **[ASSISTED]**

**12.3.6 SlideShare/industry presentations** — Publish data-driven presentations and conference slides on SlideShare for additional citation surface area. **[ASSISTED]**

### 12.4 Earned Media & Press

**12.4.1 Media contact database** — Build and maintain a database of relevant journalists, editors, and publications covering the brand's category. **[ASSISTED]**

**12.4.2 Story angle development** — Develop news angles that are genuinely newsworthy: original data, contrarian takes, expert predictions, first-in-category achievements. **[HUMAN-ONLY]**

**12.4.3 Proactive PR outreach** — Pitch stories to journalists proactively. Earned media is 48% of all AI citations. **[HUMAN-ONLY]**

**12.4.4 Expert commentary placement** — Position brand spokespeople as expert commentators on industry trends. Respond rapidly to journalist enquiries via HARO/Qwoted. **[HUMAN-ONLY]**

**12.4.5 Press release strategy** — Issue press releases for significant milestones (funding, product launches, research publications). Press releases on wire services are directly cited by AI models. **[ASSISTED]**

### 12.5 Directory & Database Listings

**12.5.1 Industry directory identification** — Identify and list in all relevant industry directories. Claude's citations come 65% from directories and databases — this is disproportionately important for Claude visibility. **[ASSISTED]**

**12.5.2 Business database profiles** — Create/claim profiles on: Crunchbase, LinkedIn Company, D&B Hoovers, Bloomberg Company, ZoomInfo, Owler. **[ASSISTED]**

**12.5.3 Award nominations** — Identify relevant industry awards. Award recognition appears in 19% of Claude's citations. **[HUMAN-LED]**

**12.5.4 Professional association listings** — List with relevant professional associations and their member directories. **[ASSISTED]**

---

## 13.0 AI Technical Optimisation

Technical implementations that directly affect how AI crawlers access, index, and process site content.

### 13.1 AI Crawler Access

**13.1.1 robots.txt AI crawler audit** — Verify robots.txt explicitly allows all major AI crawlers: GPTBot (OpenAI), ClaudeBot (Anthropic), PerplexityBot, Google-Extended, OAI-SearchBot, Applebot-Extended, DuckAssistBot, Meta-ExternalAgent, FacebookBot. **[AUTO]**

**13.1.2 Selective AI crawler control** — If certain content should not be indexed by AI systems (proprietary data, member-only content), implement targeted Disallow directives per AI crawler. **[HUMAN-LED]**

**13.1.3 AI crawler log monitoring** — Monitor server logs for AI crawler activity: frequency of crawl, pages crawled, crawl errors. **[AUTO]**

### 13.2 llms.txt Implementation

**13.2.1 llms.txt creation** — Create a plain-text Markdown file at the site root (`/llms.txt`) following the llmstxt.org spec. Include: site title, brief description, links to all important content sections with descriptions. **[ASSISTED]**

**13.2.2 llms.txt maintenance** — Update llms.txt when significant new content is added or site structure changes. **[ASSISTED]**

**13.2.3 llms-full.txt creation** — For documentation-heavy sites: create `/llms-full.txt` with complete content for AI consumption. **[ASSISTED]**

_Note: As of August 2025, adoption of llms.txt by major AI crawlers remains limited (only ~951 domains had published it; major LLM providers had not natively implemented support). Include as a forward-looking signal while monitoring adoption._

### 13.3 Server-Side Rendering for AI

**13.3.1 JS-dependent content audit** — Identify all content that is rendered by JavaScript and therefore invisible to AI crawlers that do not execute JS. **[AUTO]**

**13.3.2 SSR/static generation implementation** — Implement server-side rendering or static pre-rendering for all important content. This is critical — AI crawlers (GPTBot, ClaudeBot, PerplexityBot) do not reliably execute JavaScript. **[HUMAN-LED]**

**13.3.3 Accordion/hidden content audit** — Identify content in accordion/details/summary elements or display:none containers. Content in these elements is not reliably extracted by AI content parsers (Trafilatura, Firecrawl, Jina Reader) and may be invisible to AI citation systems. Ensure key information is visible in standard HTML. **[ASSISTED]**

### 13.4 Structured Data for AI

**13.4.1 JSON-LD completeness audit** — Verify all key pages have appropriate JSON-LD schema and that schemas render on the live page (check for silent truncation, caching failures). **[AUTO]**

**13.4.2 Schema AI optimisation** — Add AI-specific schema properties: Organization.knowsAbout, Person.knowsAbout, Article.about, Article.citations, WebPage.citation. **[ASSISTED]**

**13.4.3 @id cross-referencing** — Implement stable entity @id values across all schemas so AI models can resolve entity relationships across the site. **[ASSISTED]**

**13.4.4 Wikidata @id integration** — Add Wikidata Q-number @id to Organization schema sameAs and consider linking the Wikidata entity directly in schema. **[ASSISTED]**

### 13.5 Page Speed for AI Crawlers

**13.5.1 AI crawler response time** — AI crawlers are not as patient as Googlebot for slow responses. Ensure server response time is <200ms for all pages. **[AUTO]**

**13.5.2 Cache-control headers** — Implement appropriate cache-control headers to allow AI crawlers to cache pages efficiently. **[ASSISTED]**

---

## Part 3: Automation Spectrum Classification

---

## 14.0 Complete Automation Classification

The following table classifies every process category by its automation potential.

| Process Area        | Sub-Process                    | Classification | Rationale                                           |
| ------------------- | ------------------------------ | -------------- | --------------------------------------------------- |
| 1. Discovery        | Stakeholder interviews         | HUMAN-ONLY     | Requires human relationship and conversation        |
| 1. Discovery        | Site crawl                     | AUTO           | Pure data collection                                |
| 1. Discovery        | Competitor keyword export      | AUTO           | API-based data extraction                           |
| 1. Discovery        | Goal setting                   | HUMAN-LED      | Business decisions requiring human judgment         |
| 1. Discovery        | Tracking setup                 | ASSISTED       | Human configures, AI can automate the mechanics     |
| 2. Technical        | Crawl + index audit            | AUTO           | Algorithmic analysis of structured data             |
| 2. Technical        | Core Web Vitals monitoring     | AUTO           | Continuous measurement against known targets        |
| 2. Technical        | Schema implementation          | ASSISTED       | AI generates code, human verifies correctness       |
| 2. Technical        | SSR implementation             | HUMAN-LED      | Architectural decision with significant code impact |
| 2. Technical        | Schema validation              | AUTO           | API-based validation against spec                   |
| 3. Keywords         | Volume/difficulty data         | AUTO           | API calls to keyword research tools                 |
| 3. Keywords         | Intent classification          | ASSISTED       | AI classifies, human validates ambiguous cases      |
| 3. Keywords         | Semantic clustering            | AUTO           | Vector embedding and similarity algorithms          |
| 3. Keywords         | Opportunity scoring            | AUTO           | Algorithmic scoring with defined weights            |
| 3. Keywords         | Tier prioritisation            | HUMAN-LED      | Business value judgments required                   |
| 4. Content Strategy | Hub/spoke architecture         | HUMAN-LED      | Strategic decisions about topic ownership           |
| 4. Content Strategy | Content brief creation         | ASSISTED       | AI generates brief from brief template + SERP data  |
| 4. Content Strategy | E-E-A-T expert identification  | HUMAN-ONLY     | Requires finding real credentialed humans           |
| 4. Content Strategy | Publication cadence            | HUMAN-LED      | Business capacity and resource decision             |
| 5. Content Creation | First draft generation         | ASSISTED       | AI generates, human must review for accuracy/EEAT   |
| 5. Content Creation | Expert review                  | HUMAN-ONLY     | Requires subject-matter expertise                   |
| 5. Content Creation | Title/meta optimisation        | ASSISTED       | AI drafts, human approves                           |
| 5. Content Creation | Answer-first rewrite           | ASSISTED       | AI restructures, human validates intent accuracy    |
| 5. Content Creation | FAQ generation                 | ASSISTED       | AI generates questions from content, human reviews  |
| 5. Content Creation | Image alt text                 | ASSISTED       | AI generates, human reviews for accuracy            |
| 5. Content Creation | CMS publishing                 | ASSISTED       | Mechanically automatable, human QA required         |
| 6. Authority        | Backlink audit                 | AUTO           | API data aggregation                                |
| 6. Authority        | Original research design       | HUMAN-ONLY     | Requires insight into what will be newsworthy       |
| 6. Authority        | Digital PR pitching            | HUMAN-ONLY     | Journalist relationships and news judgment          |
| 6. Authority        | Outreach personalisation       | ASSISTED       | AI personalises, human sends (or supervised AI)     |
| 6. Authority        | Response handling              | HUMAN-ONLY     | Relationship management                             |
| 6. Authority        | Link monitoring                | AUTO           | Automated ahrefs/semrush API monitoring             |
| 7. Rank Tracking    | Daily position tracking        | AUTO           | Continuous automated measurement                    |
| 7. Rank Tracking    | Algorithm update analysis      | HUMAN-LED      | Interpretation requires SEO expertise               |
| 7. Rank Tracking    | SERP feature monitoring        | AUTO           | Automated SERP scraping                             |
| 8. Reporting        | Dashboard data pull            | AUTO           | API integrations                                    |
| 8. Reporting        | Monthly report generation      | AUTO           | Template + data automation                          |
| 8. Reporting        | Insight extraction             | HUMAN-LED      | Requires strategic interpretation                   |
| 8. Reporting        | Client presentation            | HUMAN-ONLY     | Relationship and communication                      |
| 9. AI Monitoring    | SoM query execution            | AUTO           | Automated querying of AI platforms                  |
| 9. AI Monitoring    | Sentiment scoring              | ASSISTED       | AI scores, human validates edge cases               |
| 9. AI Monitoring    | Inaccuracy correction strategy | HUMAN-LED      | Judgment on content priority                        |
| 9. AI Monitoring    | AI traffic tracking            | AUTO           | GA4 UTM + referral tracking                         |
| 10. AI Content      | Answer-first audit             | ASSISTED       | AI flags, human confirms structural changes         |
| 10. AI Content      | AI answer page creation        | ASSISTED       | AI generates to template, human reviews             |
| 10. AI Content      | Content freshness updates      | ASSISTED       | AI updates statistics, human reviews claims         |
| 11. Entity/KG       | Wikidata entry creation        | HUMAN-LED      | Notability assessment requires human judgment       |
| 11. Entity/KG       | sameAs URL compilation         | AUTO           | Can be data-driven from existing profiles           |
| 11. Entity/KG       | NAP consistency audit          | AUTO           | Data comparison across platforms                    |
| 11. Entity/KG       | Knowledge Panel monitoring     | AUTO           | SERP scraping for brand name                        |
| 12. External Auth   | Reddit strategy                | HUMAN-ONLY     | Authentic community participation cannot be faked   |
| 12. External Auth   | YouTube production             | HUMAN-ONLY     | On-camera presence requires humans                  |
| 12. External Auth   | Review acquisition             | HUMAN-LED      | Email sequences can be automated, strategy is human |
| 12. External Auth   | Review responses               | HUMAN-ONLY     | Authentic customer communication                    |
| 12. External Auth   | PR outreach                    | HUMAN-ONLY     | Journalist relationships are human                  |
| 12. External Auth   | Directory listings             | ASSISTED       | Profile creation can be mostly automated            |
| 12. External Auth   | Expert commentary              | HUMAN-ONLY     | Requires real expert to provide commentary          |
| 13. AI Technical    | robots.txt AI audit            | AUTO           | Pattern matching against known crawler names        |
| 13. AI Technical    | llms.txt creation              | ASSISTED       | AI generates structure, human reviews               |
| 13. AI Technical    | Schema completeness audit      | AUTO           | Automated JSON-LD extraction and counting           |
| 13. AI Technical    | SSR audit                      | AUTO           | Render-comparison tooling                           |

### Automation Summary

| Classification           | Percentage of All Sub-Processes | Implication                                               |
| ------------------------ | ------------------------------- | --------------------------------------------------------- |
| Fully Automatable (AUTO) | ~35%                            | Platform can execute without any human input              |
| AI-Assisted (ASSISTED)   | ~40%                            | Platform does the work, human reviews and approves        |
| Human-Led (HUMAN-LED)    | ~15%                            | Platform provides data and recommendations; human decides |
| Human-Only (HUMAN-ONLY)  | ~10%                            | Cannot be productised — services layer required           |

---

## Part 4: Industry Frameworks

---

## 15.0 Published Frameworks and Industry Models

### 15.1 Platform-Published Frameworks

**Semrush Academy** — Free certification covering keyword research, on-page optimisation, link building, and analytics. No formal process model published. Focuses on tool usage rather than workflow architecture.

**Moz SEO Essentials Certificate** — The most examination-based SEO certification. Covers keyword research, on-page, link building, performance tracking. The Moz framework implicitly follows: Audit → Research → Optimise → Build → Measure.

**Google Search Central** — Not a process framework, but the definitive source of truth for what Google values. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is Google's quality evaluation framework for content.

**Profound 10-Step GEO Framework (2025)** — The most cited framework for GEO. Sequence: Align objectives → Audit AI visibility → Map real-user prompts → Structure content for AI → Optimise technical signals → Elevate citation authority → Strengthen E-E-A-T → Integrate multimedia → Scale prompt testing → Benchmark and iterate.

**Princeton GEO Study (KDD 2024)** — Academic paper establishing that GEO techniques (answer-first format, fact density, citations) can increase AI visibility by up to 40%. Established the academic foundation for GEO as a discipline.

### 15.2 Emerging Industry Terminology

There is currently no universally accepted terminology for AI search optimisation. The following terms are used interchangeably by practitioners in 2025–2026:

| Term           | Full Name                      | Primary Association                   |
| -------------- | ------------------------------ | ------------------------------------- |
| GEO            | Generative Engine Optimization | Profound, Princeton, agency community |
| AISO           | AI Search Optimization         | Taylor Hutzel, agency practitioners   |
| AEO            | Answer Engine Optimization     | HubSpot, Conductor, Amsive            |
| LLM SEO        | LLM Search Engine Optimization | Technical practitioners               |
| AI SEO         | AI Search Engine Optimization  | General market                        |
| Generative SEO | —                              | Search Engine Land                    |

For AISOGEN purposes, AISO is the primary term (our agency positioning), with GEO used interchangeably.

### 15.3 Process Frameworks from Published Agencies

**Search Engine Land 4-Phase GEO Cycle** — Assess AI Search Readiness → Optimise for AI Retrieval → Measure Performance → Iterate & Scale.

**Directive Consulting B2B GEO Framework** — Targeting B2B specifically: Intent mapping → Content structuring → Citation authority → KPI connection (linking AI visibility to pipeline and revenue).

**Vida AEO Framework** — The source of the 36-factor AISO scoring model used by this agency. Structured scoring across: Content Structure, Schema, Authority, Technical, Freshness, and Conversational Readiness.

### 15.4 TOGAF Applied to SEO

No published TOGAF-specific SEO framework exists as of 2025. However, the SEO/GEO/AISO capability map in this document follows TOGAF principles:

- **Business Architecture layer** — Business goals, KPIs, competitive position (sections 1.4–1.5)
- **Information Architecture layer** — Keyword universe, content strategy, entity model (sections 3–4, 11)
- **Application Architecture layer** — Platform tools, schema implementation, automation (section 14)
- **Technology Architecture layer** — Technical SEO, server rendering, crawlability (section 2, 13)

---

## Part 5: Capability Map

---

## 16.0 AISOGEN Build Roadmap — Process to Platform

This section maps every process in the model to AISOGEN's build roadmap, identifying which processes are already built, which are in progress, and which are on the roadmap.

### Process Coverage by AISOGEN Function

| Process Section        | AISOGEN Function           | Build Status                                    |
| ---------------------- | -------------------------- | ----------------------------------------------- |
| 1. Discovery & Setup   | Onboarding Module          | Not built                                       |
| 2.1–2.4 Technical SEO  | Technical Audit Agent      | Partial (recipe built)                          |
| 2.5 Schema Markup      | Schema Audit Agent         | Spec complete, not deployed                     |
| 2.6–2.8 Architecture   | Site Architecture Analyser | Not built                                       |
| 3. Keyword Research    | Keyword & Market Intel     | Production (agent + recipes)                    |
| 4. Content Strategy    | Content Strategy Module    | Production (skill only)                         |
| 5. Content Creation    | Content Pipeline           | Not built                                       |
| 6. Authority/Links     | Authority Builder          | Not built                                       |
| 7. Rank Tracking       | Rank Tracker               | Not built (integrates third-party)              |
| 8. Reporting           | Reporting & Dashboard      | Not built                                       |
| 9. AI Monitoring       | AI Visibility Monitor      | Partial (manual SoM, no automated tracking)     |
| 10. AI Content Opt     | AISO Content Optimizer     | Production (skill: aiso, seo-aiso-validator)    |
| 11. Entity/KG          | Entity Builder             | Not built                                       |
| 12. External Authority | Authority Builder          | Not built                                       |
| 13. AI Technical       | AI Technical Optimizer     | Partial (robots.txt, llms.txt, schema in audit) |

### Coverage Summary

- Fully production: ~3 of 13 process areas (AISO scoring, keyword research, content strategy)
- Partial: ~3 of 13 (technical audit, AI monitoring, AI technical)
- Not built: ~7 of 13

This process model is the architecture specification for all future AISOGEN development.

---

## Sources

Research compiled from:

- [Profound 10-Step GEO Framework (2025)](https://www.tryprofound.com/guides/generative-engine-optimization-geo-guide-2025)
- [Search Engine Land — Mastering GEO in 2026](https://searchengineland.com/mastering-generative-engine-optimization-in-2026-full-guide-469142)
- [Directive Consulting GEO Guide](https://directiveconsulting.com/blog/a-guide-to-generative-engine-optimization-geo-best-practices/)
- [Otterly.ai AI Search Monitoring](https://otterly.ai/blog/10-best-ai-search-monitoring-and-llm-monitoring-solutions/)
- [Ekamoira Best AI Brand Visibility Tools 2026](https://www.ekamoira.com/blog/best-ai-brand-visibility-tools-2026-27-platforms-compared-by-capability-tier)
- [Conductor AEO/GEO Benchmarks 2025](https://almcorp.com/blog/aeo-geo-benchmarks-2025-conductor-analysis-complete-guide/)
- [HigherVisibility Entity SEO Guide](https://www.highervisibility.com/seo/learn/entity-seo/)
- [Schema App — Entity SEO](https://www.schemaapp.com/schema-markup/what-is-entity-seo/)
- [SEMrush llms.txt Guide](https://www.semrush.com/blog/llms-txt/)
- [ClickRank — SEO Automation Spectrum](https://www.clickrank.ai/can-seo-be-automated/)
- [Respona Link Building Outreach](https://respona.com/)
- [Hub and Spoke SEO Model — SEO-kreativ](https://www.seo-kreativ.de/en/blog/hub-and-spoke-model/)
- [Digital Applied Link Building 2026](https://www.digitalapplied.com/blog/link-building-2026-digital-pr-outreach-guide/)
- [Alli AI SEO Client Onboarding](https://www.alliai.com/seo-agency-academy/seo-client-onboarding-process)
- [GetPassionFruit GEO Optimization Guide](https://www.getpassionfruit.com/blog/generative-engine-optimization-guide-for-chatgpt-perplexity-gemini-claude-copilot)
- [Amsive AEO Complete Guide](https://www.amsive.com/insights/seo/answer-engine-optimization-aeo-evolving-your-seo-strategy-in-the-age-of-ai-search/)
- Agency's own `aiso` skill — 36-factor scoring model, platform-specific strategies, lessons from Hairgenetix implementation
- Agency's own `seo-aiso-validator` skill — audit protocols, lessons from live implementation
