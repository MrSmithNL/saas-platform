#!/usr/bin/env bash
# Reset staging database — destroys all staging data
set -euo pipefail

export PATH="/opt/homebrew/opt/postgresql@16/bin:$PATH"

echo "=== Resetting Staging Database ==="
echo ""

# Drop and recreate staging database
if command -v dropdb >/dev/null 2>&1; then
  dropdb saas_platform_staging 2>/dev/null || true
  createdb saas_platform_staging
  echo "Staging database recreated."
fi

# Flush Redis cache
if command -v redis-cli >/dev/null 2>&1; then
  redis-cli FLUSHALL >/dev/null 2>&1 || true
  echo "Redis cache cleared."
fi

# Re-push schema
cd "$(dirname "$0")/.."
DATABASE_URL="postgresql://malcolmsmith@localhost:5432/saas_platform_staging?schema=public" pnpm db:push 2>/dev/null || echo "Re-run 'pnpm staging:db:push' to push schema"

echo ""
echo "Staging environment reset complete."
