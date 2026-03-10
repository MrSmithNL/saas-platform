/**
 * SellFunnel — Vertical platform configuration.
 *
 * This is the single place where SellFunnel customises shared platform
 * behaviour. All shared packages read from this config instead of
 * hard-coding vertical-specific logic (ADR-019).
 */
import { definePlatformConfig } from "@saas-platform/core/platform";

export const config = definePlatformConfig({
  vertical: "sell-funnel",
  name: "SellFunnel",
  description: "AI-powered sales funnel builder",

  theme: {
    primary: "#2563eb",
    accent: "#f59e0b",
  },

  features: {
    aiCopywriting: true,
    abTesting: true,
    funnelBuilder: true,
    conversionTracking: true,
    templateLibrary: true,
  },

  billing: {
    plans: ["starter", "pro", "enterprise"],
    trialDays: 14,
    usageBased: false,
  },

  routes: {
    dashboard: "/dashboard",
    onboarding: "/get-started",
    settings: "/settings",
  },
});
