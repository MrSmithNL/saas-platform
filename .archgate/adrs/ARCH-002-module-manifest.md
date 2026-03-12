---
id: ARCH-002
title: Module Manifest Contract
domain: architecture
rules: true
files: ["modules/*/module-manifest.json"]
---

# Module Manifest Contract

## Context

Every business module must declare a self-describing manifest that the platform reads at startup for routing, permissions, events, and agent tool registration.

## Decision

Every module directory must contain a `module-manifest.json` with all required fields validated against the JSON schema at `tooling/schemas/module-manifest.schema.json`.

## Required Fields

- `name` — kebab-case module identifier
- `capability` — kebab-case capability group
- `displayName` — human-readable name
- `version` — semver (X.Y.Z)
- `description` — what the module does
- `dependencies.platform` — array of required platform capabilities
- `dependencies.modules` — array of module event dependencies
- `permissions` — array of `domain:action` permission strings
- `events.emits` — event types this module publishes
- `events.subscribes` — event types this module listens to

## Don'ts

- Never omit required fields
- Never use non-kebab-case for name or capability
- Never declare module dependencies that aren't used via events
