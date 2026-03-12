#!/usr/bin/env bash
# Push database schema to staging
set -euo pipefail

export DATABASE_URL="postgresql://malcolmsmith@localhost:5432/saas_platform_staging?schema=public"

cd "$(dirname "$0")/.."

echo "Pushing database schema to staging..."
pnpm db:push
echo ""
echo "Staging database schema updated."
