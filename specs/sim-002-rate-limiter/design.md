---
id: "FTR-API-002"
type: feature
title: "In-Memory Rate Limiter"
project: PROD-004
domain: api
parent: null
status: draft
phase: 4-design
created: 2026-03-10
last_updated: 2026-03-10
refs:
  requirements: "./requirements.md"

# === PARENT ALIGNMENT ===
parent_baseline:
  id: null
  version: null
  hash: null
  status: aligned

# === TRACEABILITY ===
traces_to:
  product_goal: "Prevent API abuse and ensure fair usage across tenants"
  theme: null
  epic: null
  capability: "core/api"
---

# In-Memory Rate Limiter — Design

## Architecture Overview

The rate limiter lives in `packages/core/src/api/rate-limiter.ts` as part of the API module. It is a pure TypeScript module with zero dependencies. Consumers create a rate limiter instance with config, then call `check(tenantId)` to determine if a request should be allowed.

```
Request → Hono Middleware → rateLimiter.check(tenantId)
                                    │
                            ┌───────┴───────┐
                            │  In-Memory    │
                            │  Window Map   │
                            │  (per tenant) │
                            └───────────────┘
                                    │
                            ┌───────┴───────┐
                            │ ALLOW (200)   │
                            │ or DENY (429) │
                            └───────────────┘
```

## Technology Choices

| Choice    | Selected               | Rationale                                              | Alternatives Considered                                                                         |
| --------- | ---------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| Algorithm | Sliding window counter | Simple, predictable memory usage, good enough for MVP  | Token bucket (more complex), fixed window (bursty at edges), leaky bucket (harder to configure) |
| Storage   | In-memory Map          | Zero deps, <1ms lookup, sufficient for single-instance | Redis (distributed, but over-engineered for MVP), SQLite (unnecessary persistence)              |
| Language  | Pure TypeScript        | Matches project stack, zero runtime deps               | None — TypeScript is the project standard                                                       |

## Data Model

### In-Memory Structure

```
RateLimiterState (Map<string, WindowState>)
├── key: string (tenant ID)
└── value: WindowState
    ├── count: number (requests in current window)
    ├── windowStart: number (timestamp ms when window began)
    └── (auto-expires when window resets)
```

No persistent storage. No database entities.

## API Contracts

### Function: `createRateLimiter(config?)`

**Purpose:** Factory function that creates a rate limiter instance.

**Input:**

```typescript
interface RateLimiterConfig {
  maxRequests: number; // default: 100
  windowMs: number; // default: 60000 (1 minute)
}
```

**Output:**

```typescript
interface RateLimiter {
  check(key: string): RateLimitResult;
}

interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfterMs: number | null; // null if allowed, ms until reset if denied
}
```

## Component Design

### `createRateLimiter`

**Responsibility:** Create and return a rate limiter with isolated state
**Inputs:** Optional config (maxRequests, windowMs)
**Outputs:** RateLimiter object with `check()` method
**Dependencies:** None (pure TypeScript, uses Date.now() for timestamps)

### Algorithm: Sliding Window Counter

1. On `check(key)`: look up key in Map
2. If no entry or window expired: create new window, count=1, allow
3. If window active and count < max: increment count, allow
4. If window active and count >= max: deny, return retryAfterMs

## NFR Implementation

| NFR                   | Requirement (from requirements.md) | Implementation Approach                                   |
| --------------------- | ---------------------------------- | --------------------------------------------------------- |
| NFR-001 (Performance) | < 1ms per check                    | Map.get() + arithmetic only — O(1)                        |
| NFR-002 (Memory)      | < 1MB per 1000 tenants             | ~100 bytes per entry × 1000 = ~100KB — well within budget |
| NFR-003 (Clock drift) | Handle gracefully                  | Window based on elapsed time, not absolute timestamps     |
| NFR-004 (Zero deps)   | No external dependencies           | Pure TypeScript, Map for storage, Date.now() for time     |
| NFR-005 (Testability) | Unit-testable                      | Inject time function for deterministic tests              |

## Security Considerations

- No authentication in this module (handled upstream by Clerk middleware)
- No data persistence (no SQL injection surface)
- Tenant ID comes from authenticated context (not user-supplied input)
- No OWASP concerns — this is a pure computation module

## Integration Points

| System          | Direction | Protocol      | Auth           | Notes                                  |
| --------------- | --------- | ------------- | -------------- | -------------------------------------- |
| Hono middleware | Inbound   | Function call | N/A (internal) | Middleware calls `check()` per request |
| Core API module | Export    | TypeScript    | N/A (internal) | Exported from `packages/core/src/api/` |

## Architecture Decision Records

> **Mandatory during Phase 4 (Design).** Every non-trivial technology choice, pattern selection, or trade-off must be recorded here before Gate 2 (Completeness). Updated during build (Phase 6) if new decisions emerge.
>
> **ADR discipline:** If the "Technology Choices" table above has entries, each one should have a corresponding ADR row below with the rationale and alternatives evaluated. The Technical Architect reviews this section as part of Gate 2 validation.

| #   | Decision                             | Rationale                                                                           | Alternatives Considered                                                                                                | Date       |
| --- | ------------------------------------ | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------- |
| 1   | Sliding window counter algorithm     | Predictable memory (fixed per tenant), simple implementation, no timer dependencies | Token bucket (more flexible but complex state), fixed window (edge bursts), leaky bucket (queue-based, harder to test) | 2026-03-10 |
| 2   | In-memory Map storage (not Redis)    | Zero dependencies, <1ms, sufficient for single-instance MVP                         | Redis via Upstash (distributed, but adds network latency + dependency for a feature that doesn't need it yet)          | 2026-03-10 |
| 3   | Injectable time function for testing | Enables deterministic tests without real timers or mocking Date.now() globally      | Jest fake timers (fragile), real delays in tests (slow), mocking Date.now (global side effects)                        | 2026-03-10 |

---

## Monitoring & Observability

> Reference: `docs/capabilities/monitoring-and-observability.md` — apply the tier that matches this feature's type.

| Question                                      | If Yes                         | Tier   |
| --------------------------------------------- | ------------------------------ | ------ |
| Does this feature have a user-facing UI?      | No                             | —      |
| Does this feature process data automatically? | Yes — checks every API request | Tier 2 |
| Does this feature cost money per use?         | No                             | —      |
| Does this feature have an SLA?                | Not yet                        | —      |
| Is this a new autonomous agent/task?          | No                             | —      |

### Metrics This Feature Adds

| Metric                        | Source                        | Alert Threshold                       |
| ----------------------------- | ----------------------------- | ------------------------------------- |
| Rate limit denials per tenant | Application logs (structured) | > 100 denials/min for any tenant → P3 |
| Rate limiter memory usage     | Runtime metrics               | > 10MB → P2                           |

---

## Build Boundaries

> What Claude can and cannot do autonomously during build for this feature.

### Always (no approval needed)

- Write code within the scope defined above
- Run tests and fix failures
- Update documentation
- Refactor within this feature's boundaries

### Ask First (confirm with Malcolm)

- Add middleware integration to Hono (changes shared API layer)
- Change the rate limiter to use Redis/external storage
- Add new dependencies

### Never (hard stop)

- Modify authentication logic
- Change billing/payment flows
- Skip test coverage for any acceptance criteria
