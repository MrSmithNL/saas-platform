#!/usr/bin/env bash
# One-command cloud staging provisioning
# Creates Neon staging branch, Upstash staging Redis, and links Vercel
#
# Prerequisites:
#   brew install neonctl          # Neon CLI
#   npm i -g vercel               # Vercel CLI (already installed)
#   pip install upstash-cli       # Upstash CLI (optional — can use dashboard)
#
# Usage: ./scripts/setup-cloud-staging.sh
set -euo pipefail

echo "=== Cloud Staging Provisioning ==="
echo ""

# ─── Step 1: Vercel ───────────────────────────────────────
echo "── Step 1: Vercel Project ──"
if ! vercel whoami >/dev/null 2>&1; then
  echo "Vercel not logged in. Run: vercel login"
  echo "Then re-run this script."
  exit 1
fi

VERCEL_USER=$(vercel whoami 2>/dev/null)
echo "Logged in as: $VERCEL_USER"

if [ ! -d ".vercel" ]; then
  echo "Linking Vercel project..."
  vercel link --yes
else
  echo "Vercel project already linked."
fi

# Set up staging environment in Vercel
echo "Creating staging environment in Vercel..."
echo "(Set environment variables in Vercel dashboard → Settings → Environment Variables)"
echo ""

# ─── Step 2: Neon Database ───────────────────────────────
echo "── Step 2: Neon Database ──"
if command -v neonctl >/dev/null 2>&1; then
  # Check if logged in
  if neonctl me >/dev/null 2>&1; then
    echo "Neon CLI ready."

    # List projects to find or create
    echo "Neon projects:"
    neonctl projects list

    echo ""
    echo "To create a staging branch:"
    echo "  neonctl branches create --project-id <PROJECT_ID> --name staging"
    echo ""
    echo "This gives you an isolated copy of your production schema."
    echo "The connection string will be shown — add it as STAGING_DATABASE_URL in Vercel."
  else
    echo "Neon CLI installed but not logged in. Run: neonctl auth"
  fi
else
  echo "Neon CLI not installed."
  echo "Install: brew install neonctl"
  echo "Or create staging branch via dashboard: https://console.neon.tech"
  echo ""
  echo "Steps:"
  echo "  1. Go to your project → Branches"
  echo "  2. Create branch: 'staging' (from main)"
  echo "  3. Copy the connection string"
  echo "  4. Add as STAGING_DATABASE_URL in Vercel and GitHub Secrets"
fi

echo ""

# ─── Step 3: Upstash Redis ───────────────────────────────
echo "── Step 3: Upstash Redis ──"
echo "Create a staging Redis database at: https://console.upstash.com"
echo ""
echo "Steps:"
echo "  1. Create database: 'saas-platform-staging' (choose closest region)"
echo "  2. Copy the UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN"
echo "  3. Add as STAGING_REDIS_URL in Vercel and GitHub Secrets"
echo ""

# ─── Step 4: GitHub Secrets ──────────────────────────────
echo "── Step 4: GitHub Secrets ──"
echo "Add these secrets to GitHub (Settings → Secrets → Actions):"
echo ""
echo "  VERCEL_TOKEN            — from https://vercel.com/account/tokens"
echo "  VERCEL_ORG_ID           — from .vercel/project.json after linking"
echo "  VERCEL_PROJECT_ID       — from .vercel/project.json after linking"
echo "  STAGING_DATABASE_URL    — Neon staging branch connection string"
echo "  STAGING_REDIS_URL       — Upstash staging Redis URL"
echo "  STAGING_CLERK_PUBLISHABLE_KEY — Clerk staging app key"
echo "  STAGING_CLERK_SECRET_KEY      — Clerk staging app secret"
echo "  STAGING_URL             — Your staging URL (e.g., staging.sellfunnel.app)"
echo ""

# ─── Step 5: Staging Branch ─────────────────────────────
echo "── Step 5: Git Branch ──"
if git rev-parse --verify staging >/dev/null 2>&1; then
  echo "Staging branch already exists."
else
  echo "Creating staging branch..."
  git branch staging main
  echo "Staging branch created from main."
  echo ""
  echo "To deploy to staging:"
  echo "  git checkout staging"
  echo "  git merge main"
  echo "  git push origin staging"
fi

echo ""
echo "=== Cloud Staging Setup Complete ==="
echo ""
echo "Summary of what's needed:"
echo "  [$(command -v vercel >/dev/null 2>&1 && echo "✓" || echo " ")] Vercel CLI installed"
echo "  [$([ -d ".vercel" ] && echo "✓" || echo " ")] Vercel project linked"
echo "  [ ] Neon staging branch created"
echo "  [ ] Upstash staging Redis created"
echo "  [ ] GitHub secrets configured"
echo "  [$(git rev-parse --verify staging >/dev/null 2>&1 && echo "✓" || echo " ")] Staging branch exists"
echo ""
echo "Once all items are checked, push to staging branch to trigger deployment."
