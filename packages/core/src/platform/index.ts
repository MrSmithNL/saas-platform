/**
 * Platform configuration — the vertical configuration pattern.
 *
 * Every vertical (SellFunnel, AISOGEN, Book Rocket) provides a config
 * object that customises shared package behaviour. This is how verticals
 * customise without modifying shared code (ADR-019).
 *
 * Usage in a vertical:
 *   import { definePlatformConfig } from "@saas-platform/core/platform";
 *   export const config = definePlatformConfig({ ... });
 */

/**
 * Theme configuration for per-tenant branding.
 * Tailwind v4 CSS variables are set from these values.
 */
export interface ThemeConfig {
  /** Primary brand colour (hex) */
  primary: string;
  /** Accent colour (hex) */
  accent: string;
  /** Optional background colour */
  background?: string;
  /** Optional font family */
  fontFamily?: string;
}

/**
 * Billing plan identifiers.
 * Each vertical defines its own plan tiers.
 */
export interface BillingConfig {
  /** Available plan slugs (e.g. ["starter", "pro", "enterprise"]) */
  plans: string[];
  /** Whether usage-based billing is enabled */
  usageBased?: boolean;
  /** Trial period in days (0 = no trial) */
  trialDays?: number;
}

/**
 * Route overrides for vertical-specific navigation.
 */
export interface RoutesConfig {
  /** Dashboard path (default: "/dashboard") */
  dashboard?: string;
  /** Onboarding path (default: "/onboarding") */
  onboarding?: string;
  /** Settings path (default: "/settings") */
  settings?: string;
}

/**
 * Feature flags that verticals can toggle.
 * These are static defaults — runtime flags come from PostHog.
 */
export interface FeaturesConfig {
  [key: string]: boolean;
}

/**
 * The complete platform configuration for a vertical.
 * Passed to shared packages to customise behaviour.
 */
export interface PlatformConfig {
  /** Unique vertical identifier (kebab-case) */
  vertical: string;
  /** Display name for the vertical */
  name: string;
  /** Vertical description */
  description?: string;
  /** Theme settings for per-tenant branding */
  theme: ThemeConfig;
  /** Feature flag defaults for this vertical */
  features: FeaturesConfig;
  /** Billing configuration */
  billing: BillingConfig;
  /** Route overrides */
  routes?: RoutesConfig;
}

/**
 * Define a platform configuration for a vertical.
 * Validates and returns a frozen config object.
 *
 * @example
 * ```ts
 * export const config = definePlatformConfig({
 *   vertical: "sell-funnel",
 *   name: "SellFunnel",
 *   theme: { primary: "#2563eb", accent: "#f59e0b" },
 *   features: { aiCopywriting: true, abTesting: true },
 *   billing: { plans: ["starter", "pro", "enterprise"], trialDays: 14 },
 * });
 * ```
 */
export function definePlatformConfig(config: PlatformConfig): Readonly<PlatformConfig> {
  return Object.freeze({
    ...config,
    routes: {
      dashboard: "/dashboard",
      onboarding: "/onboarding",
      settings: "/settings",
      ...config.routes,
    },
  });
}
