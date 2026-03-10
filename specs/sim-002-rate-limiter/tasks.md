---
id: "FTR-API-002"
type: feature
title: "In-Memory Rate Limiter"
status: draft
phase: 5-tasks
---

# In-Memory Rate Limiter — Tasks

## Implementation Tasks

| #   | Task                                                                           | Est | Depends On | Status  |
| --- | ------------------------------------------------------------------------------ | --- | ---------- | ------- |
| T1  | Create `packages/core/src/api/rate-limiter.ts` with types and factory function | 30m | —          | pending |
| T2  | Write unit tests for all acceptance criteria (US-001, US-002, US-003)          | 45m | T1         | pending |
| T3  | Write unit tests for NFRs (clock handling, defaults)                           | 15m | T1         | pending |
| T4  | Export rate limiter from `packages/core/src/api/index.ts`                      | 5m  | T1         | pending |

## Verification Tasks

| #   | Task                                                                          | Depends On | Status  |
| --- | ----------------------------------------------------------------------------- | ---------- | ------- |
| V1  | Run `pnpm vitest run` — all tests pass                                        | T1-T4      | pending |
| V2  | Run `pnpm vitest run --coverage` — coverage ≥85% on rate-limiter.ts           | T1-T4      | pending |
| V3  | Run `pnpm turbo build` — TypeScript compiles clean                            | T1, T4     | pending |
| V4  | Run `pnpm lint` — no lint errors                                              | T1         | pending |
| V5  | Verify architecture compliance — rate-limiter is in packages/core (not apps/) | T1         | pending |
