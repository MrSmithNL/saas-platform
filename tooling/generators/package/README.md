# Golden Path — New Package Template

> Use this template when creating a new shared package in the saas-platform monorepo.
> Owner: Technical Architect
> Last updated: 2026-03-10

## Usage

Copy this template to `packages/<package-name>/` and replace all `{{PACKAGE_NAME}}` placeholders.

```bash
cp -r tooling/generators/package packages/<your-package-name>
# Then find-replace {{PACKAGE_NAME}} with your-package-name
```

## Required structure

Every new package MUST have:

- `package.json` — with correct @saas-platform/ naming, workspace deps only
- `src/index.ts` — barrel export (the ONLY public API)
- `src/__tests__/index.test.ts` — at least one test
- `tsconfig.json` — extending shared config
- `README.md` — describing what the package does

## Architecture rules

- Package name: `@saas-platform/kebab-case`
- Only export from `src/index.ts` (no deep imports allowed)
- Dependencies must be on the approved list (`tooling/approved-dependencies.json`)
- No circular dependencies with other packages
- Follow layer hierarchy: Foundation → Core → Services → Verticals
