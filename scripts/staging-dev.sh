#!/usr/bin/env bash
# Start all apps in dev mode against staging infrastructure
# Apps run on ports 3100, 3101, 3102 (offset from dev ports)
set -euo pipefail

export DATABASE_URL="postgresql://malcolmsmith@localhost:5432/saas_platform_staging?schema=public"
export REDIS_URL="redis://localhost:6379"
export NODE_ENV="staging"
export FEATURE_FLAG_ENV="staging"

echo "=== Starting apps against staging infrastructure ==="
echo "  Sell Funnel: http://localhost:3100"
echo "  Admin:       http://localhost:3101"
echo "  Marketing:   http://localhost:3102"
echo ""

cd "$(dirname "$0")/.."

# Start each app with its staging port using turbo filter
npx concurrently \
  "cd apps/sell-funnel && npx next dev --port 3100" \
  "cd apps/admin && npx next dev --port 3101" \
  "cd apps/marketing && npx next dev --port 3102" \
  --names "sell-funnel,admin,marketing" \
  --prefix-colors "blue,green,yellow" \
  2>/dev/null || {
    echo "concurrently not found, starting sequentially..."
    (cd apps/sell-funnel && npx next dev --port 3100) &
    (cd apps/admin && npx next dev --port 3101) &
    (cd apps/marketing && npx next dev --port 3102) &
    wait
  }
