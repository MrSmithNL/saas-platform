---
paths:
  - "modules/**/*"
---

# Module Development Rules

When working in a module (`modules/*`):

## Structure

Every module follows the golden path template:

- `module-manifest.json` — self-description (routes, permissions, events, agent tools)
- `src/index.ts` — public API only (commands, queries, types, events)
- `src/api/` — commands (writes) and queries (reads)
- `src/events/` — emitted events and subscriptions
- `src/features/` — feature-based organisation
- `src/ui/` — React components for this module
- `tests/` — unit, integration, and contract tests

## Import Rules

- ONLY import from `@saas-platform/core`, `@saas-platform/database`, `@saas-platform/ui`, `@saas-platform/utils`
- NEVER import from other modules (`@saas-platform/module-*`)
- NEVER import from apps (`apps/*`)
- Use the event bus for cross-module communication:
  ```typescript
  import { eventBus } from "@saas-platform/core/events";
  await eventBus.publish("module.entity.action", data, "module-name");
  ```

## Tenant Context

All module code runs within a tenant scope. Use `getTenantContext()` from `@saas-platform/core/tenancy`:

```typescript
import { getTenantContext } from "@saas-platform/core/tenancy";
const { tenantId } = getTenantContext();
```

Database queries are automatically filtered by RLS — do NOT manually add tenant_id filters.

## Creating a New Module

Run `pnpm create:module <name>` — never create modules manually.
