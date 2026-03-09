# Security Risk Log — SaaS Platform (PROD-004)

> Last updated: 2026-03-09

## Active Risks

| ID | Risk | Severity | Status | Mitigation | Owner |
|----|------|----------|--------|------------|-------|
| SR-001 | Multi-tenant data leakage | Critical | Open | PostgreSQL RLS policies on all tenant-scoped tables; tenant context middleware validates on every request | Malcolm |
| SR-002 | AI prompt injection | High | Open | Input sanitisation, output filtering, model-level guardrails in ai-gateway package | Malcolm |
| SR-003 | Stripe webhook spoofing | High | Open | Webhook signature verification, idempotency keys | Malcolm |
| SR-004 | Credential exposure in git | High | Mitigated | .gitignore covers .env files; .env.example has no real values; Bitwarden for storage | Malcolm |

## Resolved Risks

| ID | Risk | Resolution | Date |
|----|------|-----------|------|
| — | — | — | — |

## Security Principles

1. **Defence in depth** — RLS at database level + middleware at application level + auth at API level
2. **Least privilege** — RBAC with minimal default permissions
3. **Credentials in Bitwarden** — never in git, never in plain text
4. **Input validation at boundaries** — validate all user input, API requests, webhook payloads
5. **Audit logging** — log all auth events, data access, admin actions
