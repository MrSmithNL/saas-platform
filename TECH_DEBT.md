# Technical Debt Register — SaaS Platform (PROD-004)

> **Owner:** Quality Manager (weekly audit, Thu 06:00)
> **Fed by:** PR debt declarations, automated scans, sprint retros
> **Reference:** `docs/capabilities/tech-debt-management.md` (agency standard)

---

## Open Debt Items

| #   | Severity | Type  | Location                    | Description                                                          | Epic       | Detected   | PR Source | Status |
| --- | -------- | ----- | --------------------------- | -------------------------------------------------------------------- | ---------- | ---------- | --------- | ------ |
| 1   | Medium   | Test  | packages/utils, packages/ui | No tests — scaffold packages with 0% coverage                        | Foundation | 2026-03-12 | #14       | Open   |
| 2   | Low      | Code  | tooling/generators/         | Generator template tsconfig extends non-existent parent              | Tooling    | 2026-03-12 | #14       | Open   |
| 3   | Medium   | Infra | vitest.config.ts            | Coverage scoped to packages/core only — expand as packages get tests | Foundation | 2026-03-12 | #14       | Open   |

---

## Debt Metrics (Weekly)

| Date       | Avg CC | Max CC | Duplication % | Dead Exports | Open Items | Mutation Score | Cognitive Items |
| ---------- | ------ | ------ | ------------- | ------------ | ---------- | -------------- | --------------- |
| 2026-03-12 | 1.2    | 3      | 0%            | 0            | 3          | N/A            | 0               |

---

## Debt Budget

- **Sprint Day 10** is reserved for debt reduction (non-negotiable)
- **Metrics gate:** If avg complexity > 8 OR duplication > 10% OR critical items > 3, no new feature work until one debt item is resolved

---

## Severity Guide

| Severity     | When to Use                                                    | Response Time         |
| ------------ | -------------------------------------------------------------- | --------------------- |
| **Critical** | Blocks delivery, security risk, or multiplies other debt       | Fix this sprint       |
| **High**     | Slows development noticeably, missing tests on critical paths  | Fix within 2 sprints  |
| **Medium**   | Increases future maintenance cost (duplication, inconsistency) | Fix within quarter    |
| **Low**      | Cosmetic or documentation gaps                                 | Fix opportunistically |

**AI-generated debt:** Unreviewed AI output = Critical until human review pass.
**Cognitive debt:** Code nobody understands = High by default.

---

## Change Log

| Date       | What Changed                                                        |
| ---------- | ------------------------------------------------------------------- |
| 2026-03-12 | Initial register created. 3 items from Phase 0 scaffold identified. |
