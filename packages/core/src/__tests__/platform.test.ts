import { describe, expect, it } from "vitest";

import { definePlatformConfig } from "../platform";

describe("definePlatformConfig", () => {
  const validConfig = {
    vertical: "test-vertical",
    name: "TestVertical",
    theme: { primary: "#2563eb", accent: "#f59e0b" },
    features: { featureA: true, featureB: false },
    billing: { plans: ["starter", "pro"], trialDays: 14 },
  };

  it("returns a frozen config object", () => {
    const config = definePlatformConfig(validConfig);
    expect(Object.isFrozen(config)).toBe(true);
  });

  it("preserves all provided values", () => {
    const config = definePlatformConfig(validConfig);
    expect(config.vertical).toBe("test-vertical");
    expect(config.name).toBe("TestVertical");
    expect(config.theme.primary).toBe("#2563eb");
    expect(config.features.featureA).toBe(true);
    expect(config.billing.plans).toEqual(["starter", "pro"]);
  });

  it("applies default routes when none provided", () => {
    const config = definePlatformConfig(validConfig);
    expect(config.routes).toEqual({
      dashboard: "/dashboard",
      onboarding: "/onboarding",
      settings: "/settings",
    });
  });

  it("allows overriding individual routes", () => {
    const config = definePlatformConfig({
      ...validConfig,
      routes: { dashboard: "/home", onboarding: "/setup" },
    });
    expect(config.routes?.dashboard).toBe("/home");
    expect(config.routes?.onboarding).toBe("/setup");
    expect(config.routes?.settings).toBe("/settings");
  });

  it("preserves optional description", () => {
    const config = definePlatformConfig({
      ...validConfig,
      description: "A test vertical",
    });
    expect(config.description).toBe("A test vertical");
  });
});
