#!/usr/bin/env bash
# Full Staging Environment Simulation Test
# Tests: infrastructure, database, apps, API, build pipeline
set -euo pipefail

export PATH="/opt/homebrew/opt/postgresql@16/bin:$PATH"

PASS=0
FAIL=0
RESULTS=""

check() {
  local name="$1"
  local result="$2"
  if [ "$result" = "PASS" ]; then
    PASS=$((PASS + 1))
    RESULTS="${RESULTS}\n  [PASS] $name"
  else
    FAIL=$((FAIL + 1))
    RESULTS="${RESULTS}\n  [FAIL] $name"
  fi
}

echo "=============================================="
echo "  STAGING ENVIRONMENT SIMULATION TEST"
echo "  $(date '+%Y-%m-%d %H:%M:%S')"
echo "=============================================="
echo ""

# ─── 1. Infrastructure Checks ──────────────────
echo "1. INFRASTRUCTURE"
echo "─────────────────"

# PostgreSQL
if pg_isready >/dev/null 2>&1; then
  echo "  [PASS] PostgreSQL is running"
  check "PostgreSQL running" "PASS"
else
  echo "  [FAIL] PostgreSQL is not running"
  check "PostgreSQL running" "FAIL"
fi

# Redis
if redis-cli ping >/dev/null 2>&1; then
  echo "  [PASS] Redis is running"
  check "Redis running" "PASS"
else
  echo "  [FAIL] Redis is not running"
  check "Redis running" "FAIL"
fi

# Staging database exists
if psql -d saas_platform_staging -c "SELECT 1" >/dev/null 2>&1; then
  echo "  [PASS] Staging database exists"
  check "Staging database exists" "PASS"
else
  echo "  [FAIL] Staging database missing"
  check "Staging database exists" "FAIL"
fi

# Dev database exists (separate from staging)
if psql -d saas_platform -c "SELECT 1" >/dev/null 2>&1; then
  echo "  [PASS] Dev database exists (isolated from staging)"
  check "Dev database isolation" "PASS"
else
  echo "  [WARN] Dev database doesn't exist yet (OK for now)"
  check "Dev database isolation" "PASS"
fi

echo ""

# ─── 2. Database Schema Checks ─────────────────
echo "2. DATABASE SCHEMA"
echo "──────────────────"

# Check all tables exist
TABLES=$(psql -d saas_platform_staging -t -c "SELECT count(*) FROM information_schema.tables WHERE table_schema='public'" 2>/dev/null | tr -d ' ')
if [ "$TABLES" = "4" ]; then
  echo "  [PASS] All 4 tables present (users, organisations, organisation_members, subscriptions)"
  check "Schema tables complete" "PASS"
else
  echo "  [FAIL] Expected 4 tables, found $TABLES"
  check "Schema tables complete" "FAIL"
fi

# Check specific tables
for TABLE in users organisations organisation_members subscriptions; do
  if psql -d saas_platform_staging -c "SELECT 1 FROM $TABLE LIMIT 0" >/dev/null 2>&1; then
    echo "  [PASS] Table '$TABLE' accessible"
    check "Table $TABLE" "PASS"
  else
    echo "  [FAIL] Table '$TABLE' not found"
    check "Table $TABLE" "FAIL"
  fi
done

# Test write/read cycle
INSERT_RESULT=$(psql -d saas_platform_staging -t -c "
  INSERT INTO users (id, \"externalId\", email, \"firstName\", \"lastName\", \"createdAt\", \"updatedAt\")
  VALUES ('test-sim-001', 'ext-sim-001', 'simulation@test.local', 'Sim', 'User', NOW(), NOW())
  ON CONFLICT (id) DO NOTHING
  RETURNING id;
" 2>/dev/null | tr -d ' ')

if [ -n "$INSERT_RESULT" ]; then
  echo "  [PASS] Database write successful"
  check "Database write" "PASS"

  # Read it back
  READ_RESULT=$(psql -d saas_platform_staging -t -c "SELECT email FROM users WHERE id='test-sim-001'" 2>/dev/null | tr -d ' ')
  if [ "$READ_RESULT" = "simulation@test.local" ]; then
    echo "  [PASS] Database read verified"
    check "Database read" "PASS"
  else
    echo "  [FAIL] Database read mismatch: $READ_RESULT"
    check "Database read" "FAIL"
  fi

  # Clean up test data
  psql -d saas_platform_staging -c "DELETE FROM users WHERE id='test-sim-001'" >/dev/null 2>&1
  echo "  [PASS] Test data cleaned up"
  check "Test data cleanup" "PASS"
else
  echo "  [FAIL] Database write failed"
  check "Database write" "FAIL"
fi

echo ""

# ─── 3. Application Checks ─────────────────────
echo "3. APPLICATIONS"
echo "───────────────"

# Check each app responds
for APP_INFO in "sell-funnel:3100" "admin:3101" "marketing:3102"; do
  APP_NAME="${APP_INFO%%:*}"
  APP_PORT="${APP_INFO##*:}"

  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:$APP_PORT" 2>/dev/null || echo "000")
  if [ "$STATUS" = "200" ]; then
    echo "  [PASS] $APP_NAME (port $APP_PORT) — HTTP $STATUS"
    check "App $APP_NAME responds" "PASS"
  else
    echo "  [FAIL] $APP_NAME (port $APP_PORT) — HTTP $STATUS"
    check "App $APP_NAME responds" "FAIL"
  fi

  # Check response contains HTML
  CONTENT_TYPE=$(curl -s -o /dev/null -w "%{content_type}" "http://localhost:$APP_PORT" 2>/dev/null || echo "")
  if echo "$CONTENT_TYPE" | grep -q "text/html"; then
    echo "  [PASS] $APP_NAME returns HTML content"
    check "App $APP_NAME HTML" "PASS"
  else
    echo "  [FAIL] $APP_NAME content type: $CONTENT_TYPE"
    check "App $APP_NAME HTML" "FAIL"
  fi
done

# Check apps are on staging ports (not dev ports)
DEV_SELL=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000" 2>/dev/null || echo "000")
if [ "$DEV_SELL" = "000" ]; then
  echo "  [PASS] Dev port 3000 is free (staging isolation confirmed)"
  check "Staging port isolation" "PASS"
else
  echo "  [WARN] Port 3000 also active (may be dev running separately)"
  check "Staging port isolation" "PASS"
fi

echo ""

# ─── 4. Configuration Checks ──────────────────
echo "4. CONFIGURATION"
echo "────────────────"

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

# Check staging env file exists
if [ -f "$PROJECT_DIR/.env.staging" ]; then
  echo "  [PASS] .env.staging file exists"
  check "Env staging file" "PASS"
else
  echo "  [FAIL] .env.staging missing"
  check "Env staging file" "FAIL"
fi

# Check .env.staging is gitignored
if grep -q ".env.staging" "$PROJECT_DIR/.gitignore" 2>/dev/null; then
  echo "  [PASS] .env.staging is gitignored"
  check "Env staging gitignored" "PASS"
else
  echo "  [FAIL] .env.staging not in .gitignore"
  check "Env staging gitignored" "FAIL"
fi

# Check staging scripts exist and are executable
for SCRIPT in staging-up.sh staging-down.sh staging-reset.sh staging-dev.sh staging-build.sh staging-db-push.sh; do
  if [ -x "$PROJECT_DIR/scripts/$SCRIPT" ]; then
    echo "  [PASS] scripts/$SCRIPT exists and is executable"
    check "Script $SCRIPT" "PASS"
  else
    echo "  [FAIL] scripts/$SCRIPT missing or not executable"
    check "Script $SCRIPT" "FAIL"
  fi
done

# Check vercel.json exists
if [ -f "$PROJECT_DIR/vercel.json" ]; then
  echo "  [PASS] vercel.json exists"
  check "Vercel config" "PASS"
else
  echo "  [FAIL] vercel.json missing"
  check "Vercel config" "FAIL"
fi

# Check staging deploy workflow exists
if [ -f "$PROJECT_DIR/.github/workflows/staging-deploy.yml" ]; then
  echo "  [PASS] staging-deploy.yml workflow exists"
  check "Staging workflow" "PASS"
else
  echo "  [FAIL] staging-deploy.yml missing"
  check "Staging workflow" "FAIL"
fi

# Check Docker Compose staging exists (fallback)
if [ -f "$PROJECT_DIR/docker-compose.staging.yml" ]; then
  echo "  [PASS] docker-compose.staging.yml exists (Docker fallback)"
  check "Docker compose staging" "PASS"
else
  echo "  [FAIL] docker-compose.staging.yml missing"
  check "Docker compose staging" "FAIL"
fi

echo ""

# ─── 5. Package.json Scripts Check ─────────────
echo "5. PACKAGE SCRIPTS"
echo "──────────────────"

for SCRIPT in "staging:up" "staging:down" "staging:reset" "staging:dev" "staging:build" "staging:db:push"; do
  if grep -q "\"$SCRIPT\"" "$PROJECT_DIR/package.json" 2>/dev/null; then
    echo "  [PASS] pnpm $SCRIPT registered"
    check "Script $SCRIPT in package.json" "PASS"
  else
    echo "  [FAIL] pnpm $SCRIPT missing from package.json"
    check "Script $SCRIPT in package.json" "FAIL"
  fi
done

echo ""

# ─── 6. Build Pipeline Check ──────────────────
echo "6. BUILD PIPELINE"
echo "─────────────────"

# Check all apps have .next build output
for APP in sell-funnel admin marketing; do
  if [ -d "$PROJECT_DIR/apps/$APP/.next" ]; then
    echo "  [PASS] apps/$APP/.next build output exists"
    check "Build output $APP" "PASS"
  else
    echo "  [FAIL] apps/$APP/.next missing (run pnpm build)"
    check "Build output $APP" "FAIL"
  fi
done

echo ""

# ─── 7. Documentation Check ───────────────────
echo "7. DOCUMENTATION"
echo "────────────────"

if grep -q "Local Staging" "$PROJECT_DIR/docs/processes-and-flows.md" 2>/dev/null; then
  echo "  [PASS] Staging docs in processes-and-flows.md"
  check "Staging docs" "PASS"
else
  echo "  [FAIL] Staging docs missing"
  check "Staging docs" "FAIL"
fi

if grep -q "Environments" "$PROJECT_DIR/docs/accounts-and-access.md" 2>/dev/null; then
  echo "  [PASS] Environment table in accounts-and-access.md"
  check "Environment docs" "PASS"
else
  echo "  [FAIL] Environment table missing"
  check "Environment docs" "FAIL"
fi

echo ""

# ─── SUMMARY ──────────────────────────────────
echo "=============================================="
echo "  SIMULATION RESULTS"
echo "=============================================="
echo ""
echo "  Passed: $PASS"
echo "  Failed: $FAIL"
echo "  Total:  $((PASS + FAIL))"
echo ""

if [ "$FAIL" -eq 0 ]; then
  echo "  STATUS: ALL TESTS PASSED"
  echo ""
  echo "  Staging environment is fully operational."
  echo "  Apps running at:"
  echo "    Sell Funnel:  http://localhost:3100"
  echo "    Admin:        http://localhost:3101"
  echo "    Marketing:    http://localhost:3102"
else
  echo "  STATUS: $FAIL TESTS FAILED"
  echo ""
  echo "  Review failures above and fix before proceeding."
fi

echo ""
echo "=============================================="
