/**
 * API framework — rate limiting, error handling, middleware.
 */

export const API_MODULE = "api" as const;
export { createRateLimiter } from "./rate-limiter";
export type { RateLimiter, RateLimiterConfig, RateLimitResult } from "./rate-limiter";
