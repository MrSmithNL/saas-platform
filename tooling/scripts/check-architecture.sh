#!/bin/bash
# Architecture Fitness Functions — Automated Checks
# Run: bash tooling/scripts/check-architecture.sh
# CI: Runs on every PR via architecture.yml workflow
# Owner: Technical Architect

set -e

ERRORS=0
WARNINGS=0

echo "=== Architecture Fitness Functions ==="
echo ""

# FF-003 + FF-004: Dependency validation (circular deps, layer boundaries)
echo "--- FF-003/FF-004: Dependency Cruiser (circular deps + layer boundaries) ---"
if npx depcruise --config .dependency-cruiser.mjs --output-type err packages/ apps/ 2>/dev/null; then
  echo "PASS: No dependency violations found"
else
  echo "FAIL: Dependency violations detected"
  ERRORS=$((ERRORS + 1))
fi
echo ""

# FF-003: Circular dependency check (Madge — visual confirmation)
echo "--- FF-003: Madge Circular Dependency Check ---"
CIRCULAR=$(npx madge --circular --extensions ts,tsx packages/ apps/ 2>/dev/null | grep -c "Circular" || true)
if [ "$CIRCULAR" -eq 0 ]; then
  echo "PASS: No circular dependencies"
else
  echo "FAIL: $CIRCULAR circular dependency chain(s) found"
  npx madge --circular --extensions ts,tsx packages/ apps/ 2>/dev/null
  ERRORS=$((ERRORS + 1))
fi
echo ""

# FF-008: File naming convention (kebab-case for .ts/.tsx files)
echo "--- FF-008: File Naming Convention (kebab-case) ---"
BAD_FILES=$(find packages/ apps/ -name "*.ts" -o -name "*.tsx" | \
  grep -v node_modules | \
  grep -v '.d.ts' | \
  grep -v '__tests__' | \
  grep -v '.test.' | \
  grep -v '.spec.' | \
  grep -v '.config.' | \
  xargs -I {} basename {} | \
  grep -v '^index\.' | \
  grep -v '^middleware\.' | \
  grep -v '^layout\.' | \
  grep -v '^page\.' | \
  grep -v '^loading\.' | \
  grep -v '^error\.' | \
  grep -v '^not-found\.' | \
  grep -v '^global\.' | \
  grep -E '[A-Z]' | \
  grep -v '\.d\.ts$' || true)

if [ -z "$BAD_FILES" ]; then
  echo "PASS: All files follow kebab-case naming"
else
  echo "WARN: Files not in kebab-case (excluding Next.js conventions):"
  echo "$BAD_FILES" | head -20
  WARNINGS=$((WARNINGS + 1))
fi
echo ""

# FF-009: No hardcoded tenant IDs
echo "--- FF-009: No Hardcoded Tenant IDs ---"
HARDCODED=$(grep -r --include="*.ts" --include="*.tsx" \
  -E "tenant[_-]?id\s*[:=]\s*['\"][a-f0-9-]{8,}" \
  packages/ apps/ 2>/dev/null | \
  grep -v node_modules | \
  grep -v '.test.' | \
  grep -v '__tests__' | \
  grep -v '.spec.' || true)

if [ -z "$HARDCODED" ]; then
  echo "PASS: No hardcoded tenant IDs found"
else
  echo "FAIL: Hardcoded tenant IDs detected:"
  echo "$HARDCODED"
  ERRORS=$((ERRORS + 1))
fi
echo ""

# FF-010: Approved dependency check
echo "--- FF-010: Dependency Governance ---"
if [ -f "tooling/approved-dependencies.json" ]; then
  echo "Approved dependency list found — checking..."
  node tooling/scripts/check-dependencies.mjs 2>/dev/null
  if [ $? -ne 0 ]; then
    ERRORS=$((ERRORS + 1))
  fi
else
  echo "WARN: No approved dependency list yet (tooling/approved-dependencies.json)"
  WARNINGS=$((WARNINGS + 1))
fi
echo ""

# Summary
echo "=== Fitness Function Summary ==="
echo "Errors: $ERRORS"
echo "Warnings: $WARNINGS"
echo ""

if [ "$ERRORS" -gt 0 ]; then
  echo "RESULT: FAIL — $ERRORS fitness function(s) failed"
  exit 1
else
  if [ "$WARNINGS" -gt 0 ]; then
    echo "RESULT: PASS with $WARNINGS warning(s)"
  else
    echo "RESULT: PASS — all fitness functions green"
  fi
  exit 0
fi
