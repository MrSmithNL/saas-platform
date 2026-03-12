#!/usr/bin/env bash
# Start local staging infrastructure
# Uses Homebrew PostgreSQL + Redis (or Docker Compose as fallback)
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

echo "=== SaaS Platform — Local Staging ==="
echo ""

# Check if PostgreSQL is available via Homebrew
if command -v /opt/homebrew/opt/postgresql@16/bin/pg_isready >/dev/null 2>&1; then
  echo "Using Homebrew PostgreSQL + Redis..."

  # Start services if not running
  brew services start postgresql@16 2>/dev/null || true
  brew services start redis 2>/dev/null || true

  sleep 2

  # Verify
  if /opt/homebrew/opt/postgresql@16/bin/pg_isready >/dev/null 2>&1; then
    echo "PostgreSQL ready on port 5432"
  else
    echo "ERROR: PostgreSQL failed to start"
    exit 1
  fi

  if redis-cli ping >/dev/null 2>&1; then
    echo "Redis ready on port 6379"
  else
    echo "ERROR: Redis failed to start"
    exit 1
  fi

  # Create staging database if it doesn't exist
  export PATH="/opt/homebrew/opt/postgresql@16/bin:$PATH"
  createdb saas_platform_staging 2>/dev/null || true

  # Push database schema
  echo ""
  echo "Pushing database schema to staging..."
  cd "$PROJECT_DIR"
  DATABASE_URL="postgresql://malcolmsmith@localhost:5432/saas_platform_staging?schema=public" pnpm db:push 2>/dev/null || echo "Schema push: run 'pnpm staging:db:push' manually if needed"

# Fallback to Docker Compose
elif command -v docker >/dev/null 2>&1 && docker info >/dev/null 2>&1; then
  echo "Using Docker Compose..."
  docker compose -f "$PROJECT_DIR/docker-compose.staging.yml" up -d

  echo "Waiting for services..."
  sleep 5

  echo "Pushing database schema..."
  cd "$PROJECT_DIR"
  DATABASE_URL="postgresql://staging_user:staging_password_2026@localhost:5433/saas_platform_staging?schema=public" pnpm db:push 2>/dev/null || echo "Schema push: run manually if needed"

else
  echo "ERROR: No PostgreSQL or Docker found."
  echo ""
  echo "Install one of:"
  echo "  brew install postgresql@16 redis    (recommended)"
  echo "  brew install --cask docker          (Docker Desktop)"
  exit 1
fi

echo ""
echo "=== Staging Infrastructure Ready ==="
echo ""
echo "To start the apps:"
echo "  pnpm staging:dev"
echo ""
echo "To stop:"
echo "  pnpm staging:down"
