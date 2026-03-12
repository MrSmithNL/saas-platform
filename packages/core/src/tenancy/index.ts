/**
 * Multi-tenancy module — tenant context, isolation, RLS policies.
 * Every request runs with a tenant context. Every read/write enforces it.
 */

export const TENANCY_MODULE = "tenancy" as const;

// Tenant context (AsyncLocalStorage-based)
export {
  type TenantContext,
  withTenantContext,
  getTenantContext,
  tryGetTenantContext,
  getCurrentTenantId,
  isModuleEnabled,
} from "./context.js";
