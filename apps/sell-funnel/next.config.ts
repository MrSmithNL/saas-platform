import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@saas-platform/core",
    "@saas-platform/database",
    "@saas-platform/ui",
    "@saas-platform/utils",
    "@saas-platform/ai-gateway",
    "@saas-platform/feature-flags",
    "@saas-platform/notifications",
  ],
};

export default nextConfig;
