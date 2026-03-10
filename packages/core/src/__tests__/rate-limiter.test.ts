import { describe, it, expect } from "vitest";

import { createRateLimiter } from "../api/rate-limiter";

describe("createRateLimiter", () => {
  // --- US-001: Basic Rate Limiting ---

  describe("US-001: Basic Rate Limiting", () => {
    it("allows requests below the configured limit", () => {
      const limiter = createRateLimiter({ maxRequests: 3, windowMs: 60000 });
      const result = limiter.check("tenant-1");
      expect(result.allowed).toBe(true);
      expect(result.remaining).toBe(2);
      expect(result.retryAfterMs).toBeNull();
    });

    it("denies requests exceeding the configured limit (429)", () => {
      const limiter = createRateLimiter({ maxRequests: 2, windowMs: 60000 });
      limiter.check("tenant-1");
      limiter.check("tenant-1");
      const result = limiter.check("tenant-1");
      expect(result.allowed).toBe(false);
      expect(result.remaining).toBe(0);
    });

    it("includes retryAfterMs when denied", () => {
      let time = 1000;
      const limiter = createRateLimiter({
        maxRequests: 1,
        windowMs: 5000,
        now: () => time,
      });
      limiter.check("tenant-1");
      time = 2000;
      const result = limiter.check("tenant-1");
      expect(result.allowed).toBe(false);
      expect(result.retryAfterMs).toBe(4000); // 5000 - (2000 - 1000)
    });
  });

  // --- US-002: Tenant-Scoped Limits ---

  describe("US-002: Tenant-Scoped Limits", () => {
    it("tracks tenants independently", () => {
      const limiter = createRateLimiter({ maxRequests: 1, windowMs: 60000 });
      limiter.check("tenant-a");
      const resultA = limiter.check("tenant-a");
      const resultB = limiter.check("tenant-b");
      expect(resultA.allowed).toBe(false);
      expect(resultB.allowed).toBe(true);
    });

    it("tenant A hitting limit does not affect tenant B", () => {
      const limiter = createRateLimiter({ maxRequests: 2, windowMs: 60000 });
      limiter.check("tenant-a");
      limiter.check("tenant-a");
      limiter.check("tenant-a"); // denied
      const resultB1 = limiter.check("tenant-b");
      const resultB2 = limiter.check("tenant-b");
      expect(resultB1.allowed).toBe(true);
      expect(resultB2.allowed).toBe(true);
      expect(resultB2.remaining).toBe(0);
    });
  });

  // --- US-003: Configurable Limits ---

  describe("US-003: Configurable Limits", () => {
    it("accepts custom maxRequests and windowMs", () => {
      const limiter = createRateLimiter({ maxRequests: 5, windowMs: 30000 });
      for (let i = 0; i < 5; i++) {
        expect(limiter.check("t").allowed).toBe(true);
      }
      expect(limiter.check("t").allowed).toBe(false);
    });

    it("uses defaults of 100 requests per 60000ms when no config", () => {
      const limiter = createRateLimiter();
      const result = limiter.check("t");
      expect(result.allowed).toBe(true);
      expect(result.remaining).toBe(99); // 100 - 1
    });
  });

  // --- NFR Tests ---

  describe("NFR-003: Clock drift / window expiry", () => {
    it("resets window after windowMs elapses", () => {
      let time = 0;
      const limiter = createRateLimiter({
        maxRequests: 1,
        windowMs: 1000,
        now: () => time,
      });
      limiter.check("t");
      expect(limiter.check("t").allowed).toBe(false);

      time = 1000; // window expired
      const result = limiter.check("t");
      expect(result.allowed).toBe(true);
      expect(result.remaining).toBe(0);
    });

    it("does not leave stale windows blocking requests", () => {
      let time = 0;
      const limiter = createRateLimiter({
        maxRequests: 1,
        windowMs: 100,
        now: () => time,
      });
      limiter.check("t");

      time = 5000; // well past window
      const result = limiter.check("t");
      expect(result.allowed).toBe(true);
    });
  });

  describe("NFR-005: Testability (injectable time)", () => {
    it("accepts a custom now function for deterministic tests", () => {
      let time = 42000;
      const limiter = createRateLimiter({
        maxRequests: 1,
        windowMs: 1000,
        now: () => time,
      });
      const r1 = limiter.check("t");
      expect(r1.allowed).toBe(true);

      time = 42500;
      const r2 = limiter.check("t");
      expect(r2.allowed).toBe(false);
      expect(r2.retryAfterMs).toBe(500); // 1000 - (42500 - 42000)

      time = 43000;
      const r3 = limiter.check("t");
      expect(r3.allowed).toBe(true);
    });
  });

  describe("Memory cleanup", () => {
    it("cleans up expired entries periodically to prevent memory leaks", () => {
      let time = 0;
      const limiter = createRateLimiter({
        maxRequests: 1,
        windowMs: 100,
        now: () => time,
      });

      // Create 50 different tenant entries
      for (let i = 0; i < 50; i++) {
        limiter.check(`tenant-${i}`);
      }

      // Advance time past the window
      time = 200;

      // Trigger 100 more checks to hit the cleanup interval
      for (let i = 50; i < 150; i++) {
        limiter.check(`tenant-${i}`);
      }

      // Original tenants should get fresh windows (expired entries cleaned)
      const result = limiter.check("tenant-0");
      expect(result.allowed).toBe(true);
      expect(result.remaining).toBe(0); // 1 max - 1 = 0
    });
  });

  describe("remaining count accuracy", () => {
    it("decrements remaining correctly from max to 0", () => {
      const limiter = createRateLimiter({ maxRequests: 3, windowMs: 60000 });
      expect(limiter.check("t").remaining).toBe(2);
      expect(limiter.check("t").remaining).toBe(1);
      expect(limiter.check("t").remaining).toBe(0);
      expect(limiter.check("t").remaining).toBe(0); // denied, still 0
    });
  });
});
