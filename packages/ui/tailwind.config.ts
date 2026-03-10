import baseConfig from "../config/tailwind/index";

import type { Config } from "tailwindcss";

const config: Config = {
  ...baseConfig,
  content: ["./src/**/*.{ts,tsx}"],
};

export default config;
