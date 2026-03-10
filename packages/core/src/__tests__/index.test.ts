import { describe, expect, it } from "vitest";

import { AUTH_MODULE, BILLING_MODULE, TENANCY_MODULE } from "../index";

describe("@saas-platform/core", () => {
  it("exports the auth module identifier", () => {
    expect(AUTH_MODULE).toBe("auth");
  });

  it("exports the tenancy module identifier", () => {
    expect(TENANCY_MODULE).toBe("tenancy");
  });

  it("exports the billing module identifier", () => {
    expect(BILLING_MODULE).toBe("billing");
  });
});
