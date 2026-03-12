---
id: ARCH-001
title: 6-Level Code Separation Hierarchy
domain: architecture
rules: true
files: ["packages/**/*.ts", "modules/**/*.ts", "apps/**/*.ts"]
---

# 6-Level Code Separation Hierarchy

## Context

The SaaS platform uses a strict 6-level hierarchy to prevent coupling and ensure clean architecture.

## Decision

Dependencies flow one way only: apps → modules → packages. Never reverse.

| Level            | Location                                                | Can Import From                            |
| ---------------- | ------------------------------------------------------- | ------------------------------------------ |
| L1 Foundation    | packages/database, ui, config, utils                    | Nothing (standalone)                       |
| L2 Capabilities  | packages/core, ai-gateway, notifications, feature-flags | L1 only                                    |
| L3 Modules       | modules/\*                                              | L1, L2 only (never other modules)          |
| L4 Agent Runtime | packages/core/agent-runtime                             | L1, L2 only (reads manifests, not imports) |
| L5 Verticals     | apps/\*                                                 | L1, L2, L3 (never other apps)              |
| L6 Tenant Config | Runtime data                                            | N/A                                        |

## Do's

- Import from lower levels only
- Use event bus for cross-module communication
- Export through `src/index.ts` barrel files only

## Don'ts

- Never import from a higher level
- Never import across modules (modules/a → modules/b)
- Never import across verticals (apps/x → apps/y)
- Never use deep imports (e.g., `@saas-platform/core/src/internal/...`)
