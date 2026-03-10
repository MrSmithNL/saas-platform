#!/bin/bash
# Create a new vertical app in the monorepo.
#
# Usage: bash tooling/scripts/create-vertical.sh <name> "<description>"
# Example: bash tooling/scripts/create-vertical.sh book-rocket "AI-powered author marketing"
#
# This creates:
#   apps/<name>/           — Next.js app with platform config
#   apps/<name>/src/       — Source directory with app router, config, features
#   apps/<name>/package.json — Dependencies on all shared packages
#
# The new vertical imports shared packages and customises via config only.
# It NEVER modifies shared packages (ADR-019).

set -e

NAME=$1
DESCRIPTION=$2

if [ -z "$NAME" ]; then
  echo "Usage: bash tooling/scripts/create-vertical.sh <name> \"<description>\""
  echo "Example: bash tooling/scripts/create-vertical.sh book-rocket \"AI book marketing\""
  exit 1
fi

if [ -z "$DESCRIPTION" ]; then
  DESCRIPTION="$NAME vertical"
fi

# Convert name to display format (kebab-case to PascalCase)
DISPLAY_NAME=$(echo "$NAME" | sed -E 's/(^|-)(\w)/\U\2/g')

APP_DIR="apps/$NAME"

if [ -d "$APP_DIR" ]; then
  echo "Error: $APP_DIR already exists"
  exit 1
fi

echo "Creating vertical: $NAME ($DISPLAY_NAME)"
echo "Description: $DESCRIPTION"
echo ""

# Create directory structure
mkdir -p "$APP_DIR/src/app"
mkdir -p "$APP_DIR/src/config"
mkdir -p "$APP_DIR/src/features"

# Calculate next port (3000 + number of existing apps)
NEXT_PORT=$((3000 + $(ls -d apps/*/package.json 2>/dev/null | wc -l)))

# package.json
cat > "$APP_DIR/package.json" << PKGJSON
{
  "name": "@saas-platform/$NAME",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev --port $NEXT_PORT",
    "build": "next build",
    "start": "next start",
    "lint": "echo \"Lint via root eslint .\"",
    "test": "vitest run --passWithNoTests",
    "test:e2e": "playwright test",
    "clean": "rm -rf .next node_modules .turbo"
  },
  "dependencies": {
    "@saas-platform/core": "workspace:*",
    "@saas-platform/database": "workspace:*",
    "@saas-platform/ui": "workspace:*",
    "@saas-platform/utils": "workspace:*",
    "@saas-platform/ai-gateway": "workspace:*",
    "@saas-platform/feature-flags": "workspace:*",
    "@saas-platform/notifications": "workspace:*",
    "next": "^15.2.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "^5.7.0",
    "vitest": "^3.0.0",
    "@playwright/test": "^1.49.0"
  }
}
PKGJSON

# next.config.ts
cat > "$APP_DIR/next.config.ts" << 'NEXTCONFIG'
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
NEXTCONFIG

# tsconfig.json
cat > "$APP_DIR/tsconfig.json" << 'TSCONFIG'
{
  "extends": "../../packages/config/tsconfig/nextjs.json",
  "compilerOptions": {
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
TSCONFIG

# Platform config
cat > "$APP_DIR/src/config/platform.ts" << PLATFORMCONFIG
/**
 * $DISPLAY_NAME — Vertical platform configuration.
 *
 * This is the single place where $DISPLAY_NAME customises shared platform
 * behaviour. All shared packages read from this config (ADR-019).
 */
import { definePlatformConfig } from "@saas-platform/core/platform";

export const config = definePlatformConfig({
  vertical: "$NAME",
  name: "$DISPLAY_NAME",
  description: "$DESCRIPTION",

  theme: {
    primary: "#2563eb",
    accent: "#f59e0b",
  },

  features: {},

  billing: {
    plans: ["starter", "pro", "enterprise"],
    trialDays: 14,
    usageBased: false,
  },
});
PLATFORMCONFIG

# Root layout
cat > "$APP_DIR/src/app/layout.tsx" << 'LAYOUT'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "@APP_DISPLAY_NAME@",
  description: "@APP_DESCRIPTION@",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
LAYOUT

# Replace placeholders in layout
sed -i '' "s/@APP_DISPLAY_NAME@/$DISPLAY_NAME/g" "$APP_DIR/src/app/layout.tsx"
sed -i '' "s/@APP_DESCRIPTION@/$DESCRIPTION/g" "$APP_DIR/src/app/layout.tsx"

# Home page
cat > "$APP_DIR/src/app/page.tsx" << 'PAGE'
export default function Home() {
  return (
    <main>
      <h1>@APP_DISPLAY_NAME@</h1>
      <p>@APP_DESCRIPTION@</p>
    </main>
  );
}
PAGE

sed -i '' "s/@APP_DISPLAY_NAME@/$DISPLAY_NAME/g" "$APP_DIR/src/app/page.tsx"
sed -i '' "s/@APP_DESCRIPTION@/$DESCRIPTION/g" "$APP_DIR/src/app/page.tsx"

# Features README
cat > "$APP_DIR/src/features/README.md" << FEATURES
# $DISPLAY_NAME Features

Vertical-specific features go here. Each feature gets its own directory:

\`\`\`
features/
├── feature-name/
│   ├── components/     # Feature-specific UI
│   ├── hooks/          # Feature-specific hooks
│   └── index.ts        # Public exports
\`\`\`

Import shared packages for platform capabilities:
- \`@saas-platform/core\` — Auth, tenancy, billing, RBAC, API
- \`@saas-platform/ui\` — Design system components
- \`@saas-platform/database\` — Data access
- \`@saas-platform/ai-gateway\` — AI/LLM integration

Customise via config in \`src/config/platform.ts\` — never modify shared packages.
FEATURES

echo ""
echo "Created vertical: $APP_DIR"
echo "  Port: $NEXT_PORT"
echo "  Config: $APP_DIR/src/config/platform.ts"
echo ""
echo "Next steps:"
echo "  1. Edit src/config/platform.ts to set theme, features, billing"
echo "  2. Run: pnpm install"
echo "  3. Run: pnpm dev --filter=@saas-platform/$NAME"
echo ""
echo "Remember: customise via config, never modify shared packages (ADR-019)"
