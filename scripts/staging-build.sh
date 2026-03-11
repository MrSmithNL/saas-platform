#!/usr/bin/env bash
# Build all apps with staging environment
set -euo pipefail

export DATABASE_URL="postgresql://malcolmsmith@localhost:5432/saas_platform_staging?schema=public"
export REDIS_URL="redis://localhost:6379"
export NODE_ENV="staging"
export FEATURE_FLAG_ENV="staging"

cd "$(dirname "$0")/.."

echo "Building all apps for staging..."
pnpm build
echo ""
echo "Build complete. Run 'pnpm staging:dev' to start."
