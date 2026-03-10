---
paths:
  - "packages/**/*"
  - "apps/**/*"
---

# Architecture Boundaries

4-layer architecture (Foundation → Core → Services → Verticals):

- `packages/utils`, `packages/config` = Foundation (no deps on Core or Services)
- `packages/core`, `packages/database` = Core (depends on Foundation only)
- `packages/ai-gateway`, `packages/notifications`, `packages/feature-flags` = Services (depends on Core + Foundation)
- `apps/sell-funnel`, `apps/aisogen`, `apps/book-rocket` = Verticals (depends on all layers)

Rules:

- Foundation MUST NOT import from Core or Services
- Packages MUST NOT import from Apps
- No circular dependencies between packages
- Export through `src/index.ts` — no deep imports
- New architectural patterns require an ADR before implementation
