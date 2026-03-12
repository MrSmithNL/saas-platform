/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
export default {
  testRunner: "vitest",
  checkers: ["typescript"],
  tsconfigFile: "tsconfig.json",
  incremental: true,
  incrementalFile: ".stryker-incremental.json",
  mutate: [
    "packages/*/src/**/*.ts",
    "!packages/*/src/**/*.test.ts",
    "!packages/*/src/**/*.spec.ts",
    "!packages/*/src/**/__tests__/**",
    "!packages/*/src/**/*.d.ts",
    "!packages/*/src/**/prisma/**",
    "!packages/*/src/**/*.config.*",
  ],
  reporters: ["json", "html", "clear-text", "progress"],
  htmlReporter: {
    fileName: "reports/mutation/mutation-report.html",
  },
  jsonReporter: {
    fileName: "reports/mutation/mutation-report.json",
  },
  concurrency: 2,
  thresholds: {
    high: 80,
    low: 60,
    break: 60,
  },
};
