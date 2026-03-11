#!/usr/bin/env bash
# Stop local staging infrastructure
# Note: This stops Homebrew services. If you need PostgreSQL/Redis for
# other projects, don't stop them — just stop the apps (Ctrl+C).
set -euo pipefail

echo "Stopping staging infrastructure..."

# Check if using Docker
if [ -f "$(dirname "$0")/../docker-compose.staging.yml" ] && command -v docker >/dev/null 2>&1; then
  docker compose -f "$(dirname "$0")/../docker-compose.staging.yml" --profile tools down 2>/dev/null || true
fi

# For Homebrew services — don't stop them by default as they may be shared
echo ""
echo "Staging apps stopped."
echo ""
echo "PostgreSQL and Redis are still running (shared services)."
echo "To stop them too:  brew services stop postgresql@16 && brew services stop redis"
echo "To reset staging data:  pnpm staging:reset"
