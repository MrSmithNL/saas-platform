import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@saas-platform/core",
    "@saas-platform/database",
    "@saas-platform/ui",
    "@saas-platform/utils",
  ],
};

export default nextConfig;
