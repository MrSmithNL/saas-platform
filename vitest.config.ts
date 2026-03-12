import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    passWithNoTests: true,
    include: ["**/*.test.ts", "**/*.test.tsx"],
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.next/**",
      "**/e2e/**",
      "**/generators/**",
      "**/.stryker-tmp/**",
    ],
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
      thresholds: {
        lines: 80,
        branches: 70,
      },
      include: ["packages/core/src/**"],
      exclude: [
        "node_modules/**",
        "dist/**",
        ".next/**",
        "**/*.config.*",
        "**/*.d.ts",
        "**/prisma/**",
        "**/generators/**",
        "**/.stryker-tmp/**",
        "**/tooling/**",
        "**/apps/**",
      ],
    },
  },
});
