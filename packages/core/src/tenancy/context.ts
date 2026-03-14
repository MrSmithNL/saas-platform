/**
 * Tenant context via AsyncLocalStorage.
 *
 * This is the standard Node.js pattern for propagating tenant identity
 * through the full request lifecycle without passing it as a parameter.
 *
 * Usage:
 *   // In middleware (runs once per request):
 *   withTenantContext({ tenantId, orgId, userId, plan, features }, async () => {
 *     // All code in this scope has access to tenant context
 *     await handleRequest(req, res);
 *   });
 *
 *   // Anywhere downstream:
 *   const { tenantId } = getTenantContext();
 *
 * The database layer uses getTenantContext() to set the PostgreSQL
 * session variable for RLS: SET app.current_tenant_id = tenantId
 */

import { AsyncLocalStorage } from "node:async_hooks";

/**
 * Tenant context carried through every request.
 * Set once in middleware, read anywhere downstream.
 */
export interface TenantContext {
  /** Unique tenant identifier (UUID) */
  tenantId: string;
  /** Organisation ID from auth provider (Clerk/Better Auth) */
  orgId: string;
  /** Authenticated user ID */
  userId: string;
  /** Current subscription plan slug */
  plan: string;
  /** Resolved feature flags for this tenant */
  features: Record<string, boolean>;
  /** Enabled module names for this tenant */
  enabledModules: string[];
}

const tenantStorage = new AsyncLocalStorage<TenantContext>();

/**
 * Run a function within a tenant context.
 * Call this in your request middleware after resolving the tenant.
 */
export function withTenantContext<T>(ctx: TenantContext, fn: () => T): T {
  return tenantStorage.run(ctx, fn);
}

/**
 * Get the current tenant context.
 * Throws if called outside a tenant-scoped request.
 */
export function getTenantContext(): TenantContext {
  const ctx = tenantStorage.getStore();
  if (!ctx) {
    throw new Error(
      "No tenant context available. This code must run inside withTenantContext(). " +
        "If this is a background job, ensure tenant context is set before processing."
    );
  }
  return ctx;
}

/**
 * Get the current tenant context, or null if not in a tenant scope.
 * Use this for code that may run outside a request (e.g., migrations, seeds).
 */
export function tryGetTenantContext(): TenantContext | null {
  return tenantStorage.getStore() ?? null;
}

/**
 * Get the current tenant ID. Convenience shorthand.
 * Throws if not in a tenant scope.
 */
export function getCurrentTenantId(): string {
  return getTenantContext().tenantId;
}

/**
 * Check if a module is enabled for the current tenant.
 */
export function isModuleEnabled(moduleName: string): boolean {
  const ctx = tryGetTenantContext();
  if (!ctx) return false;
  return ctx.enabledModules.includes(moduleName);
}
