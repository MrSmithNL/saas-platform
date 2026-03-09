/**
 * @saas-platform/database
 *
 * Database package — Prisma client with tenant-aware context.
 * All database access goes through this package.
 */

export { PrismaClient } from "@prisma/client";

// Re-export types for use across the platform
export type { Prisma } from "@prisma/client";
