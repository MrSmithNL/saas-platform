import { describe, it, expect } from "vitest";

describe("{{PACKAGE_NAME}}", () => {
  it("should be importable", async () => {
    const mod = await import("../index.js");
    expect(mod).toBeDefined();
  });
});
