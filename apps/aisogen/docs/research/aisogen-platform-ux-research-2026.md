# AISOGEN Platform UX Research — AI-First SEO Platforms 2025-2026

> **Purpose:** Design AISOGEN for users who know nothing about SEO.
> **Researched:** 2026-03-12
> **Scope:** AI autonomy models, UX patterns for non-technical users, pricing strategies, MVP launch patterns
> **Status:** Complete — ready for design input

---

## Executive Summary

The SEO platform market is splitting into two incompatible directions: data-heavy tools for practitioners (Ahrefs, Semrush) and autonomous action systems for non-technical users (Relixir, AutoSEO). No platform successfully serves the non-technical business owner who wants results without learning SEO. This is AISOGEN's primary opening.

The single most important design decision AISOGEN must make upfront: **action-first or data-first?** Research consistently shows non-technical users abandon data-first platforms after the trial. They need to see something happen to their site within the first session.

Key finding: Conversational AI interfaces are winning for execution ("do this for me"), while dashboards are winning for monitoring ("show me what happened"). The best non-technical UX combines both: conversation for tasks, dashboard for status.

---

## Part 1: AI Autonomy in SEO Platforms — How They Actually Work

### 1.1 Relixir Rex — The Autonomous Compounding Model

**What Rex is:** An autonomous GEO agent that monitors AI search rankings, identifies gaps, generates content, and publishes it without human instruction. The term "recursive self-improvement" (RSI) means Rex learns from what works and adjusts its own content strategy accordingly.

**What the user does:**

- Connects their website and Google Analytics (onboarding, ~15 minutes)
- Reviews a weekly digest of what Rex published and its performance
- Approves or rejects the strategy direction (quarterly)
- Reads results: traffic, AI citations, inbound leads

**What Rex does:**

- Simulates thousands of buyer questions across ChatGPT, Perplexity, Google AI Overviews
- Identifies where the brand is absent from AI answers
- Generates technical SEO content to fill those gaps
- Publishes directly to the site (no human approval per article)
- Monitors performance and adjusts the content strategy

**Self-improving loop:** Rex analyses which published articles get cited by AI engines. Content that gets cited informs the next batch of content. Content that does not get cited is deprioritised. This is the "recursive" element — the strategy improves with every publication cycle.

**Results claimed:**

- 400+ customers including Rippling, Airwallex, HackerRank
- 216% average traffic increase cited (from AutoSEO, not Relixir specifically — conflated in sources)
- $50M in attributed revenue across 200+ B2B and B2C companies
- 80 hours/month saved in content creation per customer
- Rankings improvements in 30-90 days vs 6+ months for manual approaches

**Trust model:** Low user control, high trust required. The platform publishes without per-article approval. Users who want full control over every piece of content are not the target user.

**AISOGEN implication:** Rex demonstrates the ceiling of automation — it is technically possible to run a fully autonomous SEO agent. However, the trust model requires significant brand credibility to sell. AISOGEN should position at one step below Rex: human-approved automation where the AI does all the work but the user approves before anything goes live. This is safer to sell and has a wider addressable market.

Sources: [Relixir](https://www.relixir.ai/), [YC profile](https://www.ycombinator.com/companies/relixir), [Relixir blog](https://relixir.ai/blog/blog-autonomous-technical-seo-content-generation-relixir-2025-landscape)

---

### 1.2 AutoSEO — Daily Auto-Published Articles + Backlinks

**What it is:** A subscription service (not a tool) that writes and publishes one article per day to your site plus builds backlinks monthly. Positioned as "what a $5,000/month agency used to cost."

**What the user does:**

- Enters URL + business description at signup
- Sets brand voice guidelines during onboarding (can use AI to help write them)
- Reviews articles before they go live (articles are NOT auto-posted — approval required)
- Monitors traffic in a simple dashboard

**What AutoSEO does:**

- Researches the user's business, competitors, and high-value keywords
- Writes 30 articles/month (1,500-2,500 words, 1 per day) with images and infographics
- Publishes via WordPress plugin, Shopify integration, or Webflow connector
- Builds 100 domain authority worth of backlinks monthly through syndication
- Supports 98+ languages

**Content quality:** Mixed reviews. Positive: "The quality of the published articles is truly remarkable" — Trustpilot. Negative: "No improvements in rankings whatsoever in a month, keyword research needing improvement" — Trustpilot. Quality appears adequate but not exceptional. Articles use Claude and OpenAI o3 as the AI backend.

**Brand voice handling:** Users establish brand voice guidelines during onboarding, described as a guided process. AI uses these guidelines for every article. Users can edit before approving publication.

**Controls available:** Approve/reject each article. Edit articles. Set topic preferences. No per-keyword control — AutoSEO decides what to write about.

**AISOGEN implication:** AutoSEO shows there is demand for a "done for you, but I approve it" model. The approval step before publishing is the key trust mechanism. Users feel in control without doing the work. AISOGEN's Content Pipeline should follow this exact pattern: AI generates, human approves, AI publishes.

Sources: [getautoseo.com](https://getautoseo.com/), [AutoSEO Trustpilot](https://www.trustpilot.com/review/getautoseo.com), [Shopify App Store](https://apps.shopify.com/autoseo)

---

### 1.3 SearchAtlas OTTO + Atlas Brain — The Two-Interface Model

**What OTTO does:**

- Scans the website continuously using Google Analytics, Search Console, and Google Business Profile data
- Identifies technical issues, on-page gaps, and content opportunities
- Generates fixes and optimisations
- Deploys changes directly to the CMS with one click from the dashboard
- Supports WordPress (native plugin, two-way sync), Shopify (code integration), and 14 other CMS platforms via Universal CMS Connector
- Handles: technical SEO, on-page optimisation, content creation, link building, press releases, local SEO

**What Atlas Brain (conversational interface) does:**

- Accepts natural language instructions: "audit my site", "map topical clusters for keyword X", "write a 90-day SEO plan"
- Executes the task directly rather than just advising
- Maintains context through multi-turn conversation
- Routes complex requests to OTTO for site changes

**The two-interface insight:** SearchAtlas uses conversation for tasks and a dashboard for approvals/monitoring. OTTO surfaces all recommended changes in the dashboard where the user selects which to deploy and can roll back at any time. This combines the ease of conversational AI with the safety of a review step.

**Won:** Global Search Awards 2025 Best AI Search Software Solution

**AISOGEN implication:** This is the clearest UX model to study. Conversation for input ("what should I fix?", "write a blog post about X"), dashboard for output (see what changed, approve what's pending, track what's improving). The separation means non-technical users can use conversation without being overwhelmed by a feature-rich UI they don't understand.

Sources: [SearchAtlas OTTO](https://searchatlas.com/otto-seo/), [Atlas Brain](https://searchatlas.com/atlas-brain/)

---

### 1.4 Frase — 80+ Skills Agentic Workflow

**Positioning (as of 2026):** "The Agentic SEO & GEO Platform — Rank on Google. Get Cited by AI."

**How the workflow works:**

1. User states a goal in natural language (any of 100+ languages)
2. Frase selects relevant skills automatically from its library
3. Results appear in chat for the user's review
4. User gives follow-up commands — context is maintained throughout
5. Complex multi-step workflows execute end-to-end with user approvals at key points

**The 80+ skills are organised into 8 categories:**

1. Research and Discovery (SERP analysis, competitor breakdown, gap identification, question mining)
2. Content Creation (briefs, full articles, outlines, meta descriptions)
3. SEO Optimisation (real-time scoring, entity analysis, internal linking, technical audits)
4. AI Search / GEO (citation readiness, answer formatting, authority signals)
5. Performance Tracking (visibility monitoring, decay detection, ranking movement)
6. Workflow Automation (tool chaining, batch processing, scheduling)
7. Brand Governance (voice enforcement, style compliance, terminology rules)
8. Team Collaboration (role-based access, approval workflows, audit logs)

**How it decides what to do next:** The agent maintains context through the conversation. If you say "now optimise it for AI search too", it applies GEO skills to the same content it just created. The user drives direction; the agent picks the tools.

**GEO monitoring:** Tracks brand visibility across 8 AI platforms (ChatGPT, Claude, Perplexity, Gemini, Google AI Overview, Copilot, Grok, DeepSeek). This is the most comprehensive AI platform coverage of any mid-market tool.

**2026 direction:** Frase is adding MCP support so its research and SEO capabilities can be invoked from inside other AI tools (e.g., Claude, Cursor). This moves it from a standalone platform to an intelligence layer.

**AISOGEN implication:** Frase shows that 80 skills can be made accessible through conversation. Non-technical users do not need to know which skill to invoke — they just describe what they want. This is the correct model. AISOGEN should not present its 9 functions as tabs to navigate — it should let the user describe their goal and route to the right function automatically.

Sources: [Frase agent page](https://www.frase.io/features/agent), [Frase.io](https://www.frase.io/)

---

### 1.5 Semrush Copilot — Recommendations Inside a Traditional Platform

**What it is:** An AI assistant layer added to Semrush's existing dashboard. Not a separate product — it lives on the main dashboard and analyses data from six Semrush tools automatically.

**How it guides users:**

- Analyses data from Position Tracking, Site Audit, Backlink Analytics, Organic Research, On Page SEO Checker, and Keyword Magic Tool
- Surfaces 3-7 prioritised recommendations per session, categorised by type (technical, content, links, competitors)
- Each recommendation links directly to the relevant Semrush tool for action
- Users rate recommendations (thumbs up/down) to train the AI
- Recommendations can be copied to share with clients or teammates

**What it recommends (examples):**

- "You lost 14 backlinks this week — click here to see which domains dropped you"
- "Competitor [X] started ranking for [keyword] you're not targeting — click to see the gap"
- "3 of your top 10 pages have missing meta descriptions — click to fix them"

**What it does NOT do:** It does not execute changes. It points users at the right tool and lets them decide. This is the "recommendations" level of automation — AI advises, human executes.

**Who this works for:** Experienced SEO practitioners who know what to do once they see a recommendation. Not ideal for total beginners who may not understand what "you lost 14 backlinks" means or why it matters.

**AISOGEN implication:** Semrush Copilot shows the minimum viable AI layer — prioritised recommendations with direct links to action. AISOGEN must go further: not just "here is the issue and here is the tool" but "here is the issue, here is why it matters in plain English, and here is the exact thing I am going to do about it — approve?"

Sources: [Semrush Copilot](https://www.semrush.com/kb/1425-semrush-copilot), [Semrush blog](https://www.semrush.com/blog/copilot-ai-seo-assistant/)

---

### 1.6 BrightEdge Autopilot — Enterprise Zero-Touch

**What it is:** A fully automated SEO solution for enterprise sites with thousands of pages. Zero human intervention required after initial setup.

**How it works:**

- Trained on petabytes of data from BrightEdge's Data Cube (billions of pages and keywords)
- Continuously analyses ranking potential for every page
- Adjusts page elements and implements improvements automatically
- Does not require developer support or user intervention
- Used alongside BrightEdge Copilot (an interactive AI layer for strategy)

**What it automates:** Title tags, meta descriptions, structured data, content recommendations, internal linking — all deployed automatically at scale.

**Human oversight required:** Minimal. Autopilot is designed for enterprise teams that have dozens or hundreds of sites and cannot review every change. The trust model is: "BrightEdge's AI has seen billions of pages — trust it."

**Claimed results:** 65% average performance increase across all industry verticals.

**Why this does not apply to AISOGEN:** BrightEdge Autopilot is $3,000+/month enterprise software. The zero-touch model works for enterprise because the customer's SEO team understands what is being changed. For small businesses and agencies managing client sites, zero-touch is too risky — one bad automated change can tank rankings and destroy the client relationship.

**AISOGEN implication:** Full zero-touch is the wrong model for AISOGEN's target audience. Human-approved automation is the correct positioning.

Sources: [BrightEdge Autopilot](https://www.brightedge.com/products/autopilot), [Search Engine Land](https://searchengineland.com/brightedge-promises-self-driving-seo-with-new-autopilot-offering-323268)

---

## Part 2: UX Patterns for Non-Technical Users

### 2.1 Onboarding Flows — From Signup to First Value

**The key metric:** Time to first value (TTFV). Best platforms get users to a meaningful result within their first session. Platforms that require configuration before showing value see high churn in the first week.

**Semrush onboarding:**

- Four options: DIY, tutorial videos, live workshops, or certification programme
- Users can set up their toolkit in 2 hours (per Semrush's own documentation)
- The Copilot assistant activates immediately after adding a domain — first recommendations appear without any setup work
- SEO Onboarding page walks users through a structured setup checklist

**Surfer SEO onboarding:**

- Starts with keyword input — no domain setup required
- User enters a keyword, gets a content brief immediately
- TTFV is under 5 minutes: enter keyword, see what you need to write
- Onboarding tasks include watching tutorial videos and tracking setup
- The Content Score (0-100) is visible immediately — non-technical users understand a percentage score without explanation

**Frase onboarding:**

- Focused on the first content brief
- User enters a target keyword; Frase analyses the top 14 SERP results immediately
- First deliverable: a structured content brief with competitor analysis, question clusters, and an outline
- TTFV: under 3 minutes

**Relixir onboarding:**

- Domain connection + Google Analytics + brand context
- Estimated ~15 minutes setup
- First AI scan results visible within 24 hours
- The delay is unavoidable for a monitoring/publishing model but risks losing impatient users

**Pattern for AISOGEN:**
The fastest path to first value for a non-technical user is: enter URL → see a score → see the top 3 things wrong → approve one fix. This should be achievable in under 10 minutes. The free audit tool (planned in Phase 7) should be the onboarding mechanism — it shows value before the user even creates an account.

---

### 2.2 Dashboard Design — What Non-Technical Dashboards Look Like

**The fundamental tension:** Non-technical users need simplicity; technical users need depth. Trying to serve both in one dashboard produces a cluttered result that serves neither.

**What works for non-technical dashboards:**

1. **A single headline health score.** One number (0-100, A-F grade, or RAG status) that tells users whether things are getting better or worse. Ahrefs uses a Domain Rating. Semrush uses an SEO Health Score. Surfer uses a Content Score. Users remember one number. They do not remember 47 metrics.

2. **"Here is what needs your attention" section.** 3-5 items maximum. Prioritised by impact. Each one states the problem, why it matters, and what to do. Never more than 5 active recommendations — more than 5 creates paralysis.

3. **Trend lines over point-in-time data.** Non-technical users understand "this is going up" intuitively. They do not understand "your DA increased from 23 to 27". Show the trend, annotate the cause.

4. **Action buttons next to data.** Never separate data from action. If a recommendation says "3 pages are missing meta descriptions", the button to fix them is right there — not in a different menu.

5. **Status not configuration.** Non-technical users should not need to configure a dashboard. The default view should be correct for them. Configuration should be optional and secondary.

**What to avoid:**

- Multiple tabs with different data types at the same level (this is Ahrefs' model — works for professionals, overwhelms beginners)
- Acronyms without explanation (DA, KD, CTR, SERP, PA, TF, CF — every SEO tool uses these as if they are common knowledge)
- Empty state screens that show features without data (e.g., "No keywords tracked yet" with no guidance on what to do)
- Charts that require understanding of baselines (e.g., "Organic visibility: 0.03" — meaningless without context)

**AISOGEN dashboard recommendation:**

```
HOME SCREEN (non-technical user)
├── SITE HEALTH: 74/100 (up from 67 last month) ✓
├── THIS WEEK: 2 articles published, 1 change made, 3 keywords improved
├── TOP PRIORITY (approve these):
│   ├── Article ready for review: "10 Best Hair Growth Tips" [REVIEW]
│   ├── Meta description missing on 4 pages [FIX IN ONE CLICK]
│   └── Competitor now ranking for "peptide hair loss" [WRITE ARTICLE]
└── TRAFFIC: 1,247 visitors this month (+18% from last month)
```

Everything non-technical users need to know is visible in one screen. Complexity is available through drill-down, not shown by default.

---

### 2.3 Guided Workflows — Turning Complex SEO into Step-by-Step Actions

**Surfer's Content Score model:**

The 0-100 score updates in real time as the user writes. The sidebar shows exactly what to add: "Add 3 more mentions of [keyword]", "Increase word count to 2,100", "Add a heading about [topic]". The user does not need to understand why — they follow the instructions and the score goes up. This is the most effective non-technical SEO workflow design in the market.

Key design decisions behind Surfer's score:

- Single number (not "your NLP coverage is 67% and your semantic density is 0.43")
- Real-time feedback (every change is reflected instantly)
- Specific, actionable instructions (not "improve keyword density" but "add the word 'peptide' 4 more times")
- A target (score of 75-100 = publishable) — users know when they are done

**Frase's brief-to-article workflow:**

1. Enter keyword
2. See top 14 competitors and their scores
3. See question clusters from "People Also Ask"
4. Get an AI-generated outline
5. Write or generate the full article
6. See real-time optimisation score
7. Publish

Each step is presented sequentially. Users cannot accidentally skip to step 6 without completing step 4. The workflow is linear by design, which reduces decision fatigue.

**SearchAtlas OTTO's one-click deployment:**

OTTO identifies issues and presents them as cards:

- "Missing meta description on /blog/hair-growth — suggested: [text]"
- User reviews the suggestion
- One click deploys it to the live site
- The card moves to "Resolved"

The key UX insight: users feel progress because items move from a "To Do" list to a "Done" list. This is the same psychological mechanism as Kanban boards and to-do apps — completion is satisfying.

**AISOGEN workflow recommendation:**

Do not build free-form tools. Build workflows. Every SEO task should be a guided process with a clear start, step sequence, and definition of done. Users should never stare at an empty text box wondering what to do.

---

### 2.4 Conversational AI Interfaces — Effectiveness for SEO

**What research shows:**

Conversational interfaces outperform traditional forms and menus for:

- Task initiation ("what should I work on?")
- Complex queries that span multiple data sources ("show me which keywords my competitor ranks for that I don't")
- Understanding output ("why did my ranking drop last week?")

Traditional dashboards outperform conversation for:

- Monitoring status over time (you do not want to ask "what were my rankings for every keyword this week?" in chat)
- Approving pending actions (reviewing a list is faster than reviewing chat messages)
- Batch operations (checking off multiple items)

**SearchAtlas Atlas Brain — the practical implementation:**

Users can ask Atlas Brain to:

- "Audit my site" → runs a full technical audit and presents the results in the chat
- "Create a 90-day SEO plan for a SaaS company" → generates a structured plan
- "Write a blog post about peptide hair growth" → generates a full article
- "Show me competitor backlinks" → pulls the data and presents it conversationally

What Atlas Brain cannot replace: reviewing multiple items side by side, seeing trend data over time, approving a queue of pending changes. For these, it routes users to the visual dashboard.

**The hybrid model that works:**

The most effective model is conversational input + visual output. User asks a question in natural language; the answer appears as a structured visual component in the chat (a table, a card, a score). The user can then click through to the full view or approve an action.

This is fundamentally different from either pure conversation (like ChatGPT) or pure dashboard (like Ahrefs). It combines the ease of asking with the clarity of structured data.

**AISOGEN recommendation:**

Build a conversational entry point for every function. "Help me get more traffic" should trigger an onboarding audit. "Write an article about [topic]" should launch the Content Pipeline workflow. "What should I fix first?" should surface the prioritised recommendations. The conversation handles discovery; the dashboard handles execution and monitoring.

---

### 2.5 Action-First vs Data-First — Which Wins for Non-Technical Users

**Data-first platforms (Ahrefs, Moz):**

Present data and expect the user to interpret it, prioritise actions, and execute. This model requires SEO knowledge to extract value. Non-technical users open Ahrefs, see a dashboard with 40+ metrics, and do not know where to start.

Churn pattern: non-technical users sign up, spend 2 sessions trying to understand the data, conclude "this is too complicated" and cancel.

**Action-first platforms (Relixir, AutoSEO, Alli AI):**

Present a list of what to do (or do it automatically). Data is buried — the interface shows outcomes, not inputs. This model works for non-technical users because it answers the only question they care about: "what should I do?"

Churn pattern: lower early churn, but risks disengagement if actions do not produce visible results quickly.

**The winning model for non-technical users:**

"Here is what we did, here is what it changed, here is what to approve next."

- Status is visible (what happened)
- Actions are explicit (what to approve)
- Results are contextualised (why this matters, what changed)
- Data is available on demand (for users who want to go deeper)

Alli AI demonstrates a key insight: gamifying SEO reduces intimidation. Its interface assigns a "score" to the site and shows progress as the score improves. Non-technical users understand games — points go up when you do good things.

**AISOGEN recommendation:**

Default to action-first. Data is accessible but not the default view. The home screen shows: what happened, what is ready to approve, and what changed in performance. Charts and keyword tables are one level deeper.

---

### 2.6 Jargon Handling — Making SEO Accessible

**The problem:** SEO is riddled with jargon that is meaningful to practitioners and meaningless to everyone else. DA, DR, KD, CTR, SERP, PA, TF, CF, E-E-A-T, schema markup, canonical tags, hreflang — any one of these terms will cause a non-technical user to feel out of their depth.

**How the best platforms handle it:**

1. **Contextual tooltips with plain English.** Hover over "Domain Authority" and see "A score from 1-100 that measures how trustworthy Google considers your site. Higher is better. Yours is 23; your top competitor's is 67."

2. **Outcome language, not technical language.** Instead of "your crawl budget is being wasted on low-value URLs" say "Google is spending too much time on pages that do not help your business". The underlying fix is the same; the language is completely different.

3. **Why it matters, not just what it is.** Instead of "you have 14 broken links" say "You have 14 broken links. These send visitors to dead pages, make your site look unprofessional, and tell Google your site is not well-maintained. Click here to fix them all."

4. **Progressive disclosure.** Show the plain English summary. Offer a "learn more" link for those who want the technical explanation. Never lead with the technical explanation.

5. **AI explanations on demand.** SearchAtlas Atlas Brain and Frase agent both allow users to ask "why does this matter?" and get a plain English explanation. This is more scalable than writing tooltips for every data point — the AI generates the explanation in the user's context.

**Terms to translate for AISOGEN's non-technical UI:**

| Technical term            | Plain English equivalent                               |
| ------------------------- | ------------------------------------------------------ |
| Domain Authority / Rating | Site trust score                                       |
| Keyword difficulty        | How hard it is to rank for this topic                  |
| SERP                      | Google's search results page                           |
| Organic traffic           | Visitors who found you on Google (not from ads)        |
| Backlink                  | Another website linking to yours                       |
| Meta description          | The short description shown under your site in Google  |
| Schema markup             | Special code that helps Google understand your content |
| E-E-A-T                   | How Google judges whether to trust your content        |
| Crawl / index             | How Google reads and remembers your site               |
| AI citation               | When ChatGPT or Perplexity mentions your brand         |

**AISOGEN recommendation:**

Never show a technical term without its plain English equivalent immediately adjacent. Apply the "grandmother test" — if the user's grandmother would not understand the phrase, it needs a plain English version. The AI can generate these on demand for any data point.

---

### 2.7 Agency vs SMB UX — The Key Differences

**SMB (single-site) UX:**

- One project at a time
- User is the business owner, not an SEO specialist
- Primary goal: more customers finding my business online
- Key interactions: check how things are going, approve the next action, see if traffic is improving
- Success metric: more phone calls, more enquiries, more sales — not ranking positions

**Agency (multi-client) UX:**

- 10-50+ projects simultaneously
- User is an account manager or SEO specialist
- Primary goal: demonstrate value to clients without spending too much time per client
- Key interactions: client-ready reporting, bulk actions across multiple sites, white-label branding
- Success metric: client retention and upsell

**The critical UX differences:**

| Feature          | SMB                 | Agency                                                    |
| ---------------- | ------------------- | --------------------------------------------------------- |
| Project switcher | Not needed          | Essential — must be prominent                             |
| Client reporting | Not needed          | Core — branded PDFs or client portals                     |
| Bulk operations  | Not needed          | Essential — e.g., apply same audit fix to all clients     |
| White-label      | Not needed          | Essential — client sees agency brand, not AISOGEN         |
| Access levels    | Single user         | Multiple roles (admin, account manager, client view-only) |
| Billing          | Per site            | Per agency (unlimited projects at tier)                   |
| Overview         | One site health     | All clients overview + red flags                          |
| Notifications    | "Your site dropped" | "Client X's site dropped" + send alert to client          |

**The problem with building for both simultaneously:** Agency UX and SMB UX are so different that building one product serving both produces a compromised product. Semrush tries to serve both and the result is a complex platform that SMBs find overwhelming and agencies find lacking.

**AISOGEN recommendation:**

Launch agency-first as planned (50 agencies at $199/mo). Agency users can use it for their own site too. Build SMB mode as a later simplification layer, not as a foundation. The agency-first approach also provides a natural distribution mechanism — agencies bring their clients.

---

## Part 3: The Autonomy Spectrum — Mapped

### Positioning of Each Platform

| Level                        | Description                                     | Platforms                             | User Experience                                           | Trust Model                                     |
| ---------------------------- | ----------------------------------------------- | ------------------------------------- | --------------------------------------------------------- | ----------------------------------------------- |
| **Manual**                   | Raw data, user decides everything               | Screaming Frog, Google Search Console | Export CSV, write your own analysis                       | Tool handles nothing — user expertise required  |
| **Data + Insights**          | Great data, AI-surfaced trends, no actions      | Ahrefs, Moz                           | 40+ metrics, comparative tables, position tracking        | High capability, high learning curve            |
| **Recommendations**          | AI suggests, user executes manually             | Semrush Copilot, AgencyAnalytics      | "Here are your top 5 priorities" → links to relevant tool | Moderate — user decides whether to act          |
| **One-Click Actions**        | AI recommends + user approves + tool executes   | Alli AI, SearchAtlas OTTO             | Review card → click approve → change goes live            | Lower — user reviews but does not write the fix |
| **Human-Approved Autopilot** | AI does all work, human approves before publish | AutoSEO, Frase, AISOGEN target        | "This article is ready — review and approve"              | Minimal — user trusts the output quality        |
| **Full Autopilot**           | AI executes without human per-action approval   | Relixir Rex, BrightEdge Autopilot     | Weekly digest of what was done                            | Very high — user trusts the strategy direction  |

### Where AISOGEN Should Position

**Target: Human-Approved Autopilot** — one level below Full Autopilot.

Why not Full Autopilot:

- Autopilot is harder to sell to agencies (they cannot guarantee what is published to client sites)
- Autopilot creates liability when content quality fails
- Autopilot requires a very high-trust brand to sell (Relixir is YC-backed and has enterprise references; AISOGEN is launching)

Why not One-Click Actions:

- One-Click requires users to review every change — this is appropriate for technical SEO fixes (which are specific and verifiable) but creates friction for content (which requires judgement)
- One-Click is already well-served by Alli AI and OTTO

**Human-Approved Autopilot means:**

- AI runs the entire workflow in the background (research, strategy, writing, optimisation)
- Human sees the finished output and approves or rejects with one click
- Nothing goes live without explicit human approval
- Rollback is available for anything that was deployed

This positioning allows AISOGEN to say: "We do all the work. You stay in control."

---

## Part 4: Pricing and Packaging Patterns

### Current Market Pricing (March 2026)

| Platform           | Entry Price                | Mid-Tier          | Enterprise            | Free Trial                                |
| ------------------ | -------------------------- | ----------------- | --------------------- | ----------------------------------------- |
| Ahrefs             | $29/mo (Starter, limited)  | $129/mo (Lite)    | $449/mo               | No free trial (removed 2025 due to abuse) |
| Semrush            | Free tier (10 queries/day) | $139.95/mo (Pro)  | $499.95/mo (Business) | 7-day free trial                          |
| Surfer SEO         | $59/mo                     | $119/mo           | $239/mo               | 7-day free trial                          |
| Frase              | $44.99/mo                  | N/A (single tier) | —                     | Free account with limits                  |
| SearchAtlas / OTTO | $99/mo                     | $199/mo           | $399/mo               | 7-day free trial                          |
| Relixir            | Custom (enterprise)        | —                 | —                     | Pilot programmes                          |
| AutoSEO            | ~$99/mo                    | ~$199/mo          | —                     | Free 7-day trial                          |
| Otterly.ai         | $189/mo                    | $389/mo           | Custom                | —                                         |

### Feature Gating Patterns

**Gating by projects/sites:** Most common. Free or entry tier allows 1-3 projects; mid-tier allows 10-20; enterprise is unlimited. This is the most intuitive gating for users to understand.

**Gating by usage (credits):** Ahrefs uses a credit system at entry tier (100 credits/month). This is confusing for non-technical users who do not know how many credits a task consumes. Avoid this model for AISOGEN's non-technical target audience.

**Gating by features:** Core features (audit, basic keywords) are free or cheap; advanced features (content pipeline, authority builder, white-label) are mid/high tier. This works well as an upgrade path — users get value from the free tier, then discover they need a paid feature.

**Free trial strategy:**

Ahrefs eliminated its free trial in 2025 due to service abuse. This created a significant acquisition problem — new users cannot test before buying. Semrush's 7-day free trial is the industry standard.

For AISOGEN: the correct acquisition model (as planned) is a **freemium audit tool** — free site audit + AISO score, no time limit. Users can run the audit as many times as they like. To act on the results (fix issues, generate content, track rankings), they need a paid account. This is the Semrush playbook and it works at scale.

### What Hooks Users at the Free/Cheap Tier

Research across multiple platforms shows these features drive conversion from free to paid:

1. **Site audit + score** — Users get a failing grade on their first audit. Curiosity and anxiety drive upgrade. Semrush's freemium audit is their biggest lead generation mechanism.

2. **Keyword research with search volume** — Users see keywords they could rank for. They want to track and act on them. This requires a paid account.

3. **Competitor analysis** — Users see what competitors are doing. This creates urgency. "They are doing this and I am not — I need to fix that."

4. **AI citation gap** — For AISOGEN specifically: "ChatGPT mentioned your competitor 47 times last month and mentioned you 0 times." This is a powerful, novel hook that none of the incumbents offer at the free tier.

### Packaging Recommendation for AISOGEN (Refined)

| Tier         | Name   | Price      | Key Features                                                            | Target                             |
| ------------ | ------ | ---------- | ----------------------------------------------------------------------- | ---------------------------------- |
| Free         | Audit  | Free       | 1 site, monthly audit, AISO score, top 5 recommendations                | Lead generation                    |
| Starter      | Solo   | $79/mo     | 3 sites, audit, keywords, AI visibility monitoring, basic content tools | Freelancers, one-person businesses |
| Professional | Agency | $199/mo    | 15 sites, full content pipeline, authority builder, white-label reports | Small agencies (10-50 clients)     |
| Business     | Scale  | $499/mo    | 50 sites, earned link engine, API access, bulk operations               | Mid-market agencies                |
| Enterprise   | Custom | $1,500+/mo | Unlimited, SSO, dedicated onboarding, SLA                               | Large agencies, enterprise brands  |

Usage-based overlay: AI content generation ($0.50/article over monthly allowance), AI citation monitoring ($0.01/prompt query), authority actions tracked (included).

---

## Part 5: MVP Patterns for New SEO Platforms

### Otterly.ai — Monitoring-First MVP

**Launch approach:** Launched October 2024 with a single focused product: AI search monitoring. Not "AI search optimisation" — just monitoring. Track where your brand appears in ChatGPT, Perplexity, Google AI Overviews.

**Why it worked:**

- Extremely narrow scope — one clear use case
- Filling a genuine gap (no existing tool tracked AI search visibility)
- Direct, measurable value: "You went from 0 mentions to 47 mentions last month"
- Launched at exactly the right time — AI search exploded in 2024

**Growth:** 1,000+ marketers in the first 2 months; 20,000+ by mid-2025; named Gartner Cool Vendor 2025.

**Lesson:** A narrow, specific product launched at the right time beats a comprehensive product launched late. Otterly did not try to also do keyword research, content creation, or backlinks. It did one thing exceptionally well.

---

### Relixir — Full Autonomy from Day One

**Launch approach:** YC X25 batch (early 2025). Launched as a premium autonomous GEO agent, not a tool. Target: B2B SaaS companies who could not afford a $5,000/month agency but wanted agency-level results.

**MVP features:**

- AI query simulation (ask thousands of buyer questions to find where the brand is absent)
- Autonomous content generation and publishing
- Weekly performance digest
- No dashboard complexity — just results

**First customers:** YC network. The YC accelerator provides an immediate pool of B2B SaaS companies willing to try new tools. YC companies are risk-tolerant early adopters who move fast. This allowed Relixir to test and iterate quickly.

**Growth:** 200+ companies, $50M attributed revenue within the first year of operation.

**Lesson:** A YC batch gives immediate credibility and access to risk-tolerant early adopters. Without a similar network, AISOGEN needs a different first-customer strategy — direct agency outreach is the right approach.

---

### Surfer SEO — Content Scoring to Content Intelligence Platform

**Launch approach:** Surfer started as a single feature: the Content Score. One tool, one score, one use case — "is this article optimised?"

**Growth path:** Added keyword research, SERP analyser, briefs, topical maps, and integrations over 4+ years. Each feature added expanded the addressable audience and gave existing users more reason to stay.

**Retention driver:** The Content Score is used on every piece of content, every week. High-frequency usage creates habit loops. Users who publish twice a week use Surfer twice a week — this is the highest retention mechanism in the market.

**What drove initial growth:** Integrations. WordPress plugin, Google Docs integration, and Jasper integration brought Surfer to where writers already work, rather than requiring writers to come to Surfer.

**Lesson:** Build where your users already work. If AISOGEN's target agencies already use WordPress, the WordPress plugin is more important than a standalone dashboard.

---

### Frase — From Content Brief Tool to GEO Platform

**Original positioning (2019-2022):** Content brief generation tool. User enters a keyword; Frase generates a brief based on top-ranking competitors. Simple, specific, immediately useful.

**Pivot 1 (2022-2024):** Added AI content writing. Brief tool became a content creation platform. Added integrations with popular writing workflows.

**Pivot 2 (2024-present):** "Agentic SEO & GEO Platform." Reframed as an AI agent that handles all content and SEO tasks. Added GEO monitoring, brand governance, team collaboration.

**Why the pivots worked:** Each expansion addressed a pain point that existing users had already expressed. Users who used Frase for briefs also needed to write the articles. Users who wrote the articles also needed to track their performance. Each pivot deepened existing relationships rather than acquiring entirely new users.

**Lesson:** Build the MVP feature that gets users to return weekly. Everything else is built on top of that retained base.

---

### GetAISO — Hyper-Specific Differentiation

**Positioning:** Tracks real ChatGPT conversations (not theoretical predictions). The key differentiator is that GetAISO monitors what ChatGPT actually says when real users ask questions about their industry — not what it might say based on training data.

**Why this matters for differentiation:** Otterly and Relixir simulate queries. GetAISO monitors organic queries. These are different data sources with different insights. GetAISO's data is harder to collect (requires actual ChatGPT API access and conversation monitoring) but more representative of real user behaviour.

**AISOGEN implication:** Differentiation does not require being better across all dimensions. It requires being better at one specific dimension that matters to your target user. For AISOGEN, the differentiation dimensions are: full pipeline (audit to publish in one platform), authority building (unique to AISOGEN), and earned link engine (no competitor has this as a SaaS feature).

---

## Key Design Patterns for AISOGEN — Synthesised

### Pattern 1: The Single Question Onboarding

Best non-technical onboarding asks one question at a time. Not a multi-page form.

```
Step 1: What's your website? [URL input]
Step 2: What does your business do? [One sentence]
Step 3: Who are your main competitors? [Optional — AI can guess]
```

That is enough to run the first audit. Everything else can be inferred or collected later.

### Pattern 2: The Score That Moves

Non-technical users do not care about rankings for individual keywords. They care about one number that tells them if things are improving. The AISOGEN SEO + AISO composite score (already designed in the aiso skill as a 36-factor model) should be the primary headline metric on every screen.

The score needs to be designed to move visibly and frequently. A score that changes once a quarter is not motivating. Weekly recalculation with visible movement (even +1 point) creates engagement.

### Pattern 3: The Approval Queue

The home screen primary action for a non-technical user should be: "You have [N] things ready to approve." This is the same pattern as email inboxes, task managers, and notification centres — all non-technical users understand it intuitively.

Each item in the queue is:

- A one-sentence description of what the AI prepared
- A plain English explanation of why it matters
- A preview of what will change
- Two buttons: Approve / Skip

### Pattern 4: Plain English Everywhere, Technical Details on Demand

No jargon in the default view. Technical explanations available via "What does this mean?" links. AI generates plain English explanations on demand — this scales infinitely without requiring copy for every data point.

### Pattern 5: Show the Competition

The single most motivating message for a non-technical user is: "Your competitor is doing [X] and getting [result]. You are not doing [X]." Competition is universally understood, crosses all technical literacy levels, and creates immediate motivation to act.

For AISOGEN: the first AI citation gap report (showing that competitors appear in ChatGPT and the user does not) is the most powerful activation mechanism. This should appear in the freemium audit and in the first session after signup.

### Pattern 6: Progress Visibility Over Completeness

Non-technical users need to see progress more than they need to see completion. An article in progress is more motivating than a blank queue. A ranking trend moving up is more motivating than a static ranking list.

Design every function to show "here is what is happening" even if nothing has been completed yet.

---

## Competitive Gaps — What AISOGEN Can Own

Based on this research, the following UX patterns exist in the market but no single platform combines them well:

| Pattern                    | Best Current Implementation | What AISOGEN Can Improve                                                         |
| -------------------------- | --------------------------- | -------------------------------------------------------------------------------- |
| Non-technical onboarding   | Surfer (5-min TTFV)         | Add AI citation gap in onboarding — instant differentiation                      |
| Approval queue             | AutoSEO, OTTO               | Design for both articles AND technical fixes AND link opportunities in one queue |
| Conversational interface   | Atlas Brain, Frase          | Route to right workflow automatically, not just answer questions                 |
| Plain English explanations | Minimal in all platforms    | Build AI explanation layer for every data point                                  |
| Score that moves           | Surfer (content-only)       | Site-wide score combining SEO + AISO, updated weekly                             |
| Competition context        | All platforms partially     | Show specific AI citation gap vs named competitors                               |
| Authority building         | Nobody                      | AISOGEN owns this entirely — unique feature                                      |
| Earned link engine         | Nobody                      | AISOGEN owns this entirely — unique feature                                      |

---

## Sources

- [Relixir homepage](https://www.relixir.ai/)
- [Relixir YC profile](https://www.ycombinator.com/companies/relixir)
- [Relixir autonomous SEO content blog](https://relixir.ai/blog/blog-autonomous-technical-seo-content-generation-relixir-2025-landscape)
- [SearchAtlas OTTO](https://searchatlas.com/otto-seo/)
- [SearchAtlas Atlas Brain](https://searchatlas.com/atlas-brain/)
- [AutoSEO](https://getautoseo.com/)
- [AutoSEO Trustpilot](https://www.trustpilot.com/review/getautoseo.com)
- [AutoSEO Shopify App](https://apps.shopify.com/autoseo)
- [Frase AI Agent](https://www.frase.io/features/agent)
- [Frase.io](https://www.frase.io/)
- [Semrush Copilot](https://www.semrush.com/kb/1425-semrush-copilot)
- [Semrush Copilot blog](https://www.semrush.com/blog/copilot-ai-seo-assistant/)
- [BrightEdge Autopilot](https://www.brightedge.com/products/autopilot)
- [Search Engine Land: BrightEdge Autopilot](https://searchengineland.com/brightedge-promises-self-driving-seo-with-new-autopilot-offering-323268)
- [Surfer SEO content score study](https://surferseo.com/blog/surfer-content-score-study/)
- [Surfer SEO docs](https://docs.surferseo.com/en/articles/5700317-what-is-content-score)
- [Otterly.AI](https://otterly.ai/)
- [Otterly G2 reviews](https://www.g2.com/products/otterly-ai/reviews)
- [GetAISO founder interview](https://www.getaiso.com/blog/founder_interview_blog_post)
- [Alli AI features](https://www.alliai.com/features/ai-seo-automation-software)
- [Alli AI review - Dupple](https://www.dupple.com/tools/alli-ai)
- [Semrush pricing](https://www.semrush.com/pricing/)
- [Ahrefs pricing review](https://max-productive.ai/ai-tools/ahrefs/)
- [SearchAtlas 2026 review](https://max-productive.ai/ai-tools/search-atlas/)
- [SearchAtlas wins Global Search Awards 2025](https://finance.yahoo.com/news/search-atlas-otto-seo-wins-025245520.html)
- [Frase GEO guide](https://www.frase.io/blog/what-is-generative-engine-optimization-geo)
- [White label SEO agency UX](https://getzendo.io/blog/white-label-seo-software/)
- [Relixir YC case study](https://relixir.ai/blog/blog-yc-startup-chatgpt-rankings-relixir-case-study-30-days)
