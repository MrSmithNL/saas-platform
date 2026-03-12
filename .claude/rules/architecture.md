---
paths:
  - "packages/**/*"
  - "modules/**/*"
  - "apps/**/*"
---

# 6-Level Architecture Boundaries

This platform follows a strict 6-level code separation hierarchy. Dependencies flow DOWNWARD only.

```
Level 5: Verticals (apps/*) — consumes everything below
Level 3: Modules (modules/*) — pluggable business features
Level 2: Capabilities (packages/core/*, ai-gateway, notifications, feature-flags)
Level 1: Foundation (packages/database, ui, config, utils)
```

## Hard Rules

- **Foundation** (L1) MUST NOT import from Core, Modules, or Apps
- **Capabilities** (L2) MUST NOT import from Modules or Apps
- **Modules** (L3) MUST NOT import from other modules (use event bus) or from Apps
- **Verticals** (L5) MUST NOT import from other verticals (no cross-vertical imports)
- All packages and modules export through `src/index.ts` — no deep imports
- No circular dependencies between any packages or modules

## Dependency Direction

```
apps/ → modules/ → packages/ (one-way, never reverse)
```

- `apps/` can import from `modules/` and `packages/`
- `modules/` can import from `packages/` only
- `packages/` cannot import from `modules/` or `apps/`

## Module Rules

- Modules live in `modules/` (NOT in `packages/` or `apps/`)
- Every module MUST have a `module-manifest.json`
- Module-to-module communication uses the event bus ONLY (`@saas-platform/core/events`)
- Create new modules with `pnpm create:module <name>`

## Before Committing

Run `pnpm test:arch` — the architecture fitness tests must pass.
