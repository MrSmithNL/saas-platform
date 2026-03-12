# Module: Template

> Golden path template — copy this directory to create a new business module.

## Creating a New Module

1. Copy this directory: `cp -r modules/_template modules/your-module`
2. Update `module-manifest.json` with your module's details
3. Update `package.json` name to `@saas-platform/module-your-module`
4. Define your events, commands, queries, and types
5. Register the module in the platform's module registry
6. Add the module to each vertical's `enabledModules` in their platform config

## Architecture Rules

- This module depends on `packages/` only (Foundation + Capabilities)
- This module NEVER imports from other modules or from `apps/`
- Communication with other modules happens via the event bus ONLY
- All database queries are automatically tenant-scoped via RLS
- The module manifest is the single source of truth for routes, permissions, and events
