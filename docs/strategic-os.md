# Strategic Operating System — SaaS Platform (PROD-004)

> Cascaded from company-level frameworks in `smith-ai-agency/docs/strategic-frameworks.md`.
> Updated quarterly alongside the company OKR cycle.
> Last updated: 2026-03-09

---

## Product Business Model Canvas

| Block                      | SaaS Platform                                                                                                                                                                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Customer Segments**      | B2B: Small business owners, solopreneurs, agencies needing sales funnels and marketing automation. First vertical (Sell Funnel) targets all industries. Second vertical (Book Rocket) targets self-published authors.                             |
| **Value Propositions**     | AI-powered sales funnel builder that creates, optimises, and tracks conversion funnels automatically. No technical skills needed. One platform serves multiple business types through vertical-specific apps on shared infrastructure.            |
| **Channels**               | Content marketing (SEO blog, YouTube), Product Hunt launch, indie hacker communities, partnership with Book Rocket for author vertical, organic search                                                                                            |
| **Customer Relationships** | Self-serve SaaS with AI-assisted onboarding. In-app help and chatbot. Community forum. Premium support for higher tiers.                                                                                                                          |
| **Revenue Streams**        | Monthly SaaS subscriptions (3 tiers: Starter €29/mo, Growth €79/mo, Scale €199/mo). AI usage add-on for heavy users. Annual discount (2 months free).                                                                                             |
| **Key Resources**          | Platform codebase (monorepo), AI models (via LiteLLM gateway), PostgreSQL database, Claude Code for rapid development, R-001 + R-002 research foundation                                                                                          |
| **Key Activities**         | Platform development (Phase 0-5), vertical product shipping, AI model integration, content marketing, customer support automation                                                                                                                 |
| **Key Partnerships**       | Clerk (auth), Stripe (billing), Vercel (hosting), Anthropic/OpenAI (AI), Resend (email). Potentially: template marketplaces, affiliate partners.                                                                                                  |
| **Cost Structure**         | Fixed: Vercel hosting (~€20/mo), domain (~€12/yr), Clerk free tier, Sentry free tier. Variable: AI API usage (~€0.01-0.10 per funnel generation), Stripe fees (2.9% + €0.30), Resend (~€0/mo free tier). Total estimated: €50-200/mo pre-revenue. |

**Company BMC connection:** This product directly serves the "Sellable AI Platforms" value proposition in the company BMC. Revenue from this product is the primary company revenue stream. The platform architecture (shared core) enables faster delivery of future products (Marketing Engine, future verticals).

---

## Product OKRs — Q2 2026 (April-June)

> Feeds into Company OKRs. See `smith-ai-agency/docs/okrs/q2-2026.md`.

**Objective:** Complete platform foundation and core, start first vertical

| #   | Key Result                                                   | Target            | Current                               | Score |
| --- | ------------------------------------------------------------ | ----------------- | ------------------------------------- | ----- |
| KR1 | Phase 0 complete — monorepo functional with `pnpm dev`       | 100%              | 70% (structure done, configs pending) | —     |
| KR2 | Phase 1 complete — auth, tenancy, billing working end-to-end | 100%              | 0%                                    | —     |
| KR3 | Sell Funnel Phase 2a started — data models and basic UI      | First cycle begun | Not started                           | —     |
| KR4 | 6 ADRs documenting all key architecture decisions            | 6                 | 6                                     | 1.0   |

**Alignment:** Supports company KR "Ship first revenue-generating product" and "Build reusable platform capability".

---

## Product Balanced Scorecard

| Perspective           | KPI                        | Current          | Target (Q2)                   | Source                |
| --------------------- | -------------------------- | ---------------- | ----------------------------- | --------------------- |
| **Financial**         | Monthly platform costs     | €0               | < €50/mo                      | Hosting + API bills   |
| **Financial**         | Revenue                    | €0               | €0 (pre-revenue)              | Stripe dashboard      |
| **Customer**          | Beta users signed up       | 0                | 5 (target end Q3)             | Clerk dashboard       |
| **Customer**          | Funnel templates available | 0                | 10 (target Q3)                | Product database      |
| **Internal Process**  | Time to ship new feature   | N/A              | < 1 week for standard feature | Git commit history    |
| **Internal Process**  | Test coverage              | 0%               | > 60% for core packages       | CI reports            |
| **Internal Process**  | Build time (CI)            | N/A              | < 5 minutes                   | GitHub Actions        |
| **Learning & Growth** | ADRs documented            | 6                | 10+ by end Q2                 | docs/decisions-log.md |
| **Learning & Growth** | Research applied           | 2 (R-001, R-002) | All key findings implemented  | Research reports      |

**Company BSC connection:** Platform development velocity directly feeds the "Internal Process" perspective of the company BSC. Platform reusability reduces cost per product launch (Financial perspective). First paying customers contribute to company revenue targets.

---

## Product SWOT

> Last reviewed: 2026-03-09. Next review: 2026-06-01 (quarterly).

|              | Helpful                                                                                                                                                                                                                                                                                                             | Harmful                                                                                                                                                                                                                                                                                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Internal** | **Strengths:** Deep research foundation (156+ sources across R-001, R-002). Proven tech stack (Next.js, PostgreSQL, Clerk, Stripe). Claude Code as AI development partner enables 10x speed. Modular architecture prevents vendor lock-in. Shape Up methodology prevents scope creep.                               | **Weaknesses:** Solo founder — bottleneck on every decision and implementation. No customers yet — all decisions based on research, not feedback. No revenue — 100% cost with uncertain payoff timeline. Complex multi-layer architecture may be premature for MVP.                                                                                         |
| **External** | **Opportunities:** AI SaaS market growing 30%+ CAGR. Funnel builders (ClickFunnels, Leadpages) are expensive and AI-weak. Solo founder SaaS success stories growing (multiple $10K-100K/mo). Platform play enables multiple verticals from one codebase. AI can generate entire funnels — competitors still manual. | **Threats:** Established players (ClickFunnels $200M+ ARR, Leadpages, Unbounce) have massive user bases. AI features being added by everyone — window for differentiation shrinking. AI API costs could spike (model pricing volatile). Platform complexity could delay MVP beyond market window. Over-engineering risk (research itself warns about this). |

**Company SWOT connection:** Platform strengths (research depth, modular architecture) directly strengthen the company's "AI-first development" strength. Solo founder weakness is company-level — affects all products equally. The biggest external threat (over-engineering) is addressed by Shape Up methodology and the "extract from two examples, never one" principle.

---

## Strategic Priorities (Next 90 Days)

1. **Ship Phase 0 + Phase 1** — Get platform core working (auth, tenancy, billing). This is the foundation everything depends on.
2. **Start Sell Funnel MVP** — Begin Phase 2 as early as possible. Revenue potential only starts when a product exists.
3. **Don't over-engineer** — The biggest risk from research is premature abstraction. Build for Sell Funnel first, generalise only when Book Rocket needs the same thing differently.
4. **Document every decision** — ADRs compound. Future-self needs them.
