# Rollback Runbook — SaaS Platform (PROD-004)

> Last updated: 2026-03-10
> Owner: DevOps Manager
> Applies to: All deployments to production (Vercel) and database migrations (Neon)

---

## 1. Vercel Deployment Rollback

### When to Rollback

- 5xx error rate > 1% after deploy
- Core Web Vitals regression (LCP > 4s, CLS > 0.25)
- Critical UI breakage reported
- Health check endpoint returning non-200

### How to Rollback

**Option A: Vercel Dashboard (fastest)**

1. Go to Vercel project → Deployments
2. Find the last known-good deployment
3. Click "..." → "Promote to Production"
4. Verify health check returns `status: "ok"`

**Option B: Git revert**

```bash
git revert HEAD --no-edit
git push origin main
# Vercel auto-deploys from main
```

**Option C: Vercel CLI**

```bash
vercel rollback --yes
```

### Verification After Rollback

- [ ] Health check endpoint returns 200 with `status: "ok"`
- [ ] No 5xx errors in Vercel logs (check last 5 minutes)
- [ ] Key user flows working (login, dashboard load)
- [ ] Sentry error rate returned to baseline

---

## 2. Database Migration Rollback (Neon + Drizzle)

### Prevention First

- All migrations run in a Neon branch first (not production)
- Destructive migrations (DROP, ALTER column type) require Malcolm approval
- Every migration has a corresponding down migration

### How to Rollback

**Step 1: Identify the failing migration**

```bash
pnpm drizzle-kit status
```

**Step 2: Revert using Neon branching**

1. Neon Dashboard → Branches → production branch
2. Reset to point-in-time before the migration
3. Verify data integrity

**Step 3: Revert the migration code**

```bash
git revert <migration-commit> --no-edit
git push origin main
```

### Data Loss Prevention

- Neon has point-in-time recovery (PITR) — 7 days retention on free tier
- Before any destructive migration: snapshot the branch
- Never run `DROP TABLE` without a backup confirmation

---

## 3. Dependency Rollback

### When to Rollback

- New dependency introduces runtime error
- Security scan finds critical CVE in newly added dependency
- Bundle size increases > 20%

### How to Rollback

```bash
git revert <dependency-update-commit> --no-edit
pnpm install
pnpm test
git push origin main
```

---

## 4. Feature Flag Rollback (PostHog)

For features behind feature flags, rollback is instant:

1. PostHog Dashboard → Feature Flags
2. Find the flag for the problematic feature
3. Toggle OFF
4. Verify the feature is disabled for all users

No deployment needed.

---

## 5. Incident Response Checklist

When a production issue is detected:

1. **Assess severity** (P1-P4 per monitoring-and-observability.md)
2. **Communicate** — notify Malcolm via Pushover for P1/P2
3. **Rollback or fix forward?**
   - Rollback if: root cause unclear, fix will take > 15 min, data integrity at risk
   - Fix forward if: root cause clear, fix is < 5 lines, no data risk
4. **Execute rollback** using the appropriate section above
5. **Verify** using the verification checklist
6. **Post-incident:** Create incident report (DevOps Manager format), add to change log

---

## 6. DORA Metric Impact

Every rollback counts as a "change failure" in DORA metrics:

- **Change Failure Rate** — target: < 5%
- **MTTR (Mean Time to Recovery)** — target: < 1 hour (elite band)

Track in `docs/metrics.md` after each incident.

---

## Change Log

| Date       | Change                                                                       |
| ---------- | ---------------------------------------------------------------------------- |
| 2026-03-10 | Initial runbook — Vercel, Neon, dependency, feature flag rollback procedures |
