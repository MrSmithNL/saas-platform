import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/*.test.ts", "**/*.test.tsx"],
    exclude: ["**/node_modules/**", "**/dist/**", "**/.next/**", "**/e2e/**"],
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
      thresholds: {
        lines: 80,
        branches: 70,
      },
      exclude: [
        "node_modules/**",
        "dist/**",
        ".next/**",
        "**/*.config.*",
        "**/*.d.ts",
        "**/prisma/**",
      ],
    },
  },
});
