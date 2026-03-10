/** @type {import('dependency-cruiser').IConfiguration} */
export default {
  forbidden: [
    // FF-003: No circular dependencies
    {
      name: "no-circular",
      severity: "error",
      comment:
        "Circular dependencies lead to hard-to-debug issues and make the codebase brittle. Refactor to break the cycle.",
      from: {},
      to: {
        circular: true,
      },
    },

    // FF-004: Dependency direction — apps cannot import from other apps
    {
      name: "no-app-to-app",
      severity: "error",
      comment:
        "Apps must not import from other apps. Use shared packages instead.",
      from: { path: "^apps/" },
      to: { path: "^apps/", pathNot: "^apps/[^/]+$" },
    },

    // FF-004: Dependency direction — apps cannot import directly from database internals
    {
      name: "no-app-direct-database",
      severity: "error",
      comment:
        "Apps must not import database internals directly. Use the core package's data access layer.",
      from: { path: "^apps/" },
      to: { path: "^packages/database/src/" },
    },

    // FF-004: UI package cannot import from core or database
    {
      name: "no-ui-to-core",
      severity: "error",
      comment:
        "UI package must remain presentation-only. It cannot import from core or database.",
      from: { path: "^packages/ui/" },
      to: { path: "^packages/(core|database)/" },
    },

    // FF-004: Utils cannot import from any other package
    {
      name: "no-utils-to-packages",
      severity: "error",
      comment:
        "Utils is the foundation layer — it cannot depend on any other package.",
      from: { path: "^packages/utils/" },
      to: {
        path: "^packages/(core|database|ui|ai-gateway|notifications|feature-flags)/",
      },
    },

    // FF-004: Database cannot import from core or higher layers
    {
      name: "no-database-to-higher",
      severity: "error",
      comment:
        "Database is a foundation package — it cannot import from core or service packages.",
      from: { path: "^packages/database/" },
      to: {
        path: "^packages/(core|ai-gateway|notifications|feature-flags|ui)/",
      },
    },

    // No orphan modules (files not imported by anything and not entry points)
    {
      name: "no-orphans",
      severity: "warn",
      comment:
        "This module is not imported by anything. Is it dead code? Remove it or add an import.",
      from: {
        orphan: true,
        pathNot: [
          "(^|/)\\.[^/]+",
          "\\.d\\.ts$",
          "(^|/)tsconfig\\.json$",
          "(^|/)vitest\\.config\\.",
          "(^|/)stryker\\.config\\.",
          "\\.(test|spec)\\.",
          "__tests__/",
          "index\\.(ts|tsx|js|mjs)$",
          "^apps/.*/app/",
          "^apps/.*/pages/",
          "prisma/",
        ],
      },
      to: {},
    },

    // No deprecated Node.js core modules
    {
      name: "no-deprecated-core",
      severity: "warn",
      comment: "This module depends on a deprecated Node.js core module.",
      from: {},
      to: { dependencyTypes: ["core"], path: "^(punycode|domain|constants|sys|_linklist|_stream_wrap)$" },
    },
  ],

  options: {
    doNotFollow: {
      path: "node_modules",
    },
    exclude: {
      path: ["\\.(next|turbo)/", "\\.d\\.ts$", "dist/"],
    },
    tsPreCompilationDeps: true,
    tsConfig: {
      fileName: "tsconfig.json",
    },
    enhancedResolveOptions: {
      exportsFields: ["exports"],
      conditionNames: ["import", "require", "node", "default", "types"],
      mainFields: ["module", "main", "types", "typings"],
    },
    reporterOptions: {
      dot: {
        collapsePattern: "node_modules/(@[^/]+/[^/]+|[^/]+)",
      },
      text: {
        highlightFocused: true,
      },
    },
  },
};
