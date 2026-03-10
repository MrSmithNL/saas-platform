/**
 * In-memory rate limiter — tenant-scoped, sliding window counter.
 *
 * Zero external dependencies. Configurable max requests and window duration.
 * Injectable time function for deterministic testing.
 */

export interface RateLimiterConfig {
  maxRequests: number;
  windowMs: number;
  now?: () => number;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfterMs: number | null;
}

interface WindowState {
  count: number;
  windowStart: number;
}

export interface RateLimiter {
  check(key: string): RateLimitResult;
}

const DEFAULT_MAX_REQUESTS = 100;
const DEFAULT_WINDOW_MS = 60_000;

export function createRateLimiter(config?: Partial<RateLimiterConfig>): RateLimiter {
  const maxRequests = config?.maxRequests ?? DEFAULT_MAX_REQUESTS;
  const windowMs = config?.windowMs ?? DEFAULT_WINDOW_MS;
  const now = config?.now ?? Date.now;

  const windows = new Map<string, WindowState>();
  let checksSinceCleanup = 0;
  const CLEANUP_INTERVAL = 100;

  function cleanup(currentTime: number): void {
    for (const [k, v] of windows) {
      if (currentTime - v.windowStart >= windowMs) {
        windows.delete(k);
      }
    }
  }

  function check(key: string): RateLimitResult {
    const currentTime = now();

    checksSinceCleanup++;
    if (checksSinceCleanup >= CLEANUP_INTERVAL) {
      cleanup(currentTime);
      checksSinceCleanup = 0;
    }

    const state = windows.get(key);

    if (!state || currentTime - state.windowStart >= windowMs) {
      windows.set(key, { count: 1, windowStart: currentTime });
      return { allowed: true, remaining: maxRequests - 1, retryAfterMs: null };
    }

    if (state.count < maxRequests) {
      state.count++;
      return { allowed: true, remaining: maxRequests - state.count, retryAfterMs: null };
    }

    const retryAfterMs = windowMs - (currentTime - state.windowStart);
    return { allowed: false, remaining: 0, retryAfterMs };
  }

  return { check };
}
