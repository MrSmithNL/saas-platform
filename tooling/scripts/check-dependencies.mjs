#!/usr/bin/env node
/**
 * FF-010: Approved Dependency Governance Check
 *
 * Verifies that all production dependencies are on the approved list.
 * New dependencies must be reviewed by the Technical Architect before merge.
 *
 * Usage: node tooling/scripts/check-dependencies.mjs
 * CI: Runs on every PR via architecture.yml workflow
 * Owner: Technical Architect
 */

import { readFileSync, readdirSync, existsSync } from "fs";
import { join, resolve } from "path";

const ROOT = resolve(import.meta.dirname, "../..");
const APPROVED_PATH = join(ROOT, "tooling/approved-dependencies.json");

if (!existsSync(APPROVED_PATH)) {
  console.log(
    "WARN: No approved dependency list found at tooling/approved-dependencies.json"
  );
  console.log("Skipping dependency governance check.");
  process.exit(0);
}

const approved = JSON.parse(readFileSync(APPROVED_PATH, "utf-8"));
const approvedSet = new Set([
  ...approved.production,
  ...approved.development,
  ...approved.workspace,
]);

const errors = [];
const checked = [];

// Check root package.json
function checkPackageJson(pkgPath, label) {
  if (!existsSync(pkgPath)) return;

  const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));

  for (const depType of ["dependencies", "peerDependencies"]) {
    const deps = pkg[depType] || {};
    for (const dep of Object.keys(deps)) {
      // Skip workspace: references
      if (deps[dep].startsWith("workspace:")) continue;
      // Skip @saas-platform/ internal packages
      if (dep.startsWith("@saas-platform/")) continue;

      checked.push(dep);
      if (!approvedSet.has(dep)) {
        errors.push({
          package: label,
          dependency: dep,
          version: deps[dep],
          type: depType,
        });
      }
    }
  }
}

// Check root
checkPackageJson(join(ROOT, "package.json"), "root");

// Check all packages
const packagesDir = join(ROOT, "packages");
if (existsSync(packagesDir)) {
  for (const pkg of readdirSync(packagesDir)) {
    checkPackageJson(
      join(packagesDir, pkg, "package.json"),
      `packages/${pkg}`
    );
  }
}

// Check all apps
const appsDir = join(ROOT, "apps");
if (existsSync(appsDir)) {
  for (const app of readdirSync(appsDir)) {
    checkPackageJson(join(appsDir, app, "package.json"), `apps/${app}`);
  }
}

console.log(`Checked ${checked.length} dependencies across all packages`);

if (errors.length > 0) {
  console.log("");
  console.log(`FAIL: ${errors.length} unapproved dependency(ies) found:`);
  console.log("");
  for (const err of errors) {
    console.log(
      `  - ${err.dependency}@${err.version} in ${err.package} (${err.type})`
    );
  }
  console.log("");
  console.log(
    "To approve: add the dependency to tooling/approved-dependencies.json"
  );
  console.log(
    "Review criteria: maintenance, security, license (MIT/Apache/BSD/ISC), size, necessity"
  );
  process.exit(1);
} else {
  console.log("PASS: All dependencies are on the approved list");
  process.exit(0);
}
