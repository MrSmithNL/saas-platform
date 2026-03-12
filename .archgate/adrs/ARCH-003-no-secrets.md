---
id: ARCH-003
title: No Hardcoded Secrets or Tenant IDs
domain: architecture
rules: true
files: ["packages/**/*.ts", "modules/**/*.ts", "apps/**/*.ts"]
---

# No Hardcoded Secrets or Tenant IDs

## Context

Multi-tenant platform — hardcoded tenant IDs, API keys, or secrets break tenant isolation and create security vulnerabilities.

## Decision

All tenant-specific values come from runtime context (AsyncLocalStorage). All secrets come from environment variables.

## Don'ts

- Never hardcode tenant IDs (UUIDs, hex strings) in source code
- Never hardcode API keys, tokens, or passwords
- Never commit `.env` files with real values
- Never use string literals that look like UUIDs as identifiers
