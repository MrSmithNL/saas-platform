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
Level 4: Agent Runtime (packages/core/agent-runtime) — tool registry, execution, audit
Level 3: Modules (modules/*) — pluggable business features, grouped by capability
Level 2: Capabilities (packages/core/*, ai-gateway, notifications, feature-flags)
Level 1: Foundation (packages/database, ui, config, utils)
```

## Hard Rules

- **Foundation** (L1) MUST NOT import from Core, Modules, or Apps
- **Capabilities** (L2) MUST NOT import from Modules or Apps
- **Modules** (L3) MUST NOT import from other modules (use event bus) or from Apps
- **Agent Runtime** (L4) MUST NOT import from Modules or Apps — it reads module tools via the tool registry only
- **Verticals** (L5) MUST NOT import from other verticals (no cross-vertical imports)
- All packages and modules export through `src/index.ts` — no deep imports
- No circular dependencies between any packages or modules
- Every module manifest MUST have a valid `capability` field (kebab-case)

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

## Agent Runtime (L4)

- Lives at `packages/core/src/agent-runtime/` — a Platform capability, NOT a module
- Provides `ToolRegistry` for centralised tool discovery and execution
- Modules register tools at startup; agent runtime orchestrates across modules
- All tool execution is tenant-scoped with audit logging
- Import from `@saas-platform/core/agent-runtime`
- Fitness functions FF-013 (capability field) and FF-014 (agent runtime isolation) enforce boundaries

## Capability Grouping

- Modules declare a `capability` field in `module-manifest.json` (kebab-case)
- Modules with the same capability form a logical business group (e.g., `crm-contacts` + `crm-deals` both have `"capability": "crm"`)
- The file system stays flat (`modules/crm-contacts/`, `modules/crm-deals/`) — grouping is metadata, not folders
- Tool registry uses capability for tool discovery: `toolRegistry.getToolsByCapability("seo")`

## Before Committing

Run `pnpm test:arch` — the architecture fitness tests must pass.
