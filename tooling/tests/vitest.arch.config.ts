import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tooling/tests/architecture.test.ts"],
    testTimeout: 30000,
  },
});
