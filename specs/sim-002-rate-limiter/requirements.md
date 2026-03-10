---
id: "FTR-API-002"
type: feature
title: "In-Memory Rate Limiter"
project: PROD-004
domain: api
status: draft
phase: 3-requirements
created: 2026-03-10
last_updated: 2026-03-10
---

# In-Memory Rate Limiter — Requirements

## Context

The SaaS platform API layer needs rate limiting to prevent abuse and ensure fair usage across tenants. This is a foundational capability that all API endpoints will use.

## User Stories

### US-001: Basic Rate Limiting

**As** an API consumer,
**I want** the API to enforce request rate limits per client,
**So that** no single client can overwhelm the service and degrade it for others.

**Acceptance Criteria (EARS notation):**

- WHEN a client sends requests below the configured limit, THE SYSTEM SHALL process all requests normally with 200 responses.
- WHEN a client exceeds the configured rate limit, THE SYSTEM SHALL respond with HTTP 429 (Too Many Requests).
- WHEN a client receives a 429 response, THE SYSTEM SHALL include a `Retry-After` header indicating seconds until the limit resets.

### US-002: Tenant-Scoped Limits

**As** a platform operator,
**I want** rate limits to be scoped per tenant,
**So that** one tenant's heavy usage does not affect another tenant's quota.

**Acceptance Criteria (EARS notation):**

- WHEN tenant A reaches its rate limit, THE SYSTEM SHALL continue serving tenant B at full capacity.
- WHEN a rate limiter is created with a tenant ID, THE SYSTEM SHALL track that tenant's requests independently from all other tenants.

### US-003: Configurable Limits

**As** a platform operator,
**I want** to configure the rate limit window and max requests,
**So that** different endpoints can have different throttling policies.

**Acceptance Criteria (EARS notation):**

- WHEN creating a rate limiter, THE SYSTEM SHALL accept `maxRequests` (number) and `windowMs` (milliseconds) as configuration.
- WHEN no configuration is provided, THE SYSTEM SHALL use defaults of 100 requests per 60,000ms (1 minute).

## Non-Functional Requirements

| ID      | Category          | Requirement                                                                          |
| ------- | ----------------- | ------------------------------------------------------------------------------------ |
| NFR-001 | Performance       | Rate limit check MUST complete in < 1ms (in-memory lookup)                           |
| NFR-002 | Memory            | Rate limiter MUST NOT consume more than 1MB per 1000 active tenants                  |
| NFR-003 | Reliability       | Rate limiter MUST handle clock drift gracefully (no stale windows blocking requests) |
| NFR-004 | Zero Dependencies | Rate limiter MUST NOT introduce any external dependencies (pure TypeScript)          |
| NFR-005 | Testability       | All acceptance criteria MUST be verifiable with unit tests (no network, no timers)   |

## Assumptions

- Rate limiting is in-memory only (not distributed across instances). Redis-backed rate limiting is a future enhancement.
- The sliding window algorithm is acceptable (vs fixed window or token bucket).
- Tenant ID is a string passed by the caller (extracted from auth context upstream).

## Out of Scope

- Redis/distributed rate limiting
- Rate limit configuration stored in database
- Admin UI for managing rate limits
- IP-based rate limiting (only tenant-based)

## RAID Log

| Type       | Item                                     | Impact                                | Mitigation                                    |
| ---------- | ---------------------------------------- | ------------------------------------- | --------------------------------------------- |
| Risk       | In-memory limits reset on server restart | Temporary over-quota during restart   | Acceptable for MVP; Redis upgrade planned     |
| Assumption | Single-instance deployment initially     | No cross-instance coordination needed | Validated with architecture plan              |
| Dependency | Hono middleware integration              | Must fit Hono middleware pattern      | Design will use standard middleware signature |
