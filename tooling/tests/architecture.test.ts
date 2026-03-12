/**
 * Architecture Fitness Tests — programmatic boundary validation.
 *
 * These tests enforce the 6-level code separation hierarchy:
 *   L1: Foundation (database, ui, config, utils)
 *   L2: Capabilities (core/*, ai-gateway, notifications, feature-flags)
 *   L3: Modules (modules/*)
 *   L5: Verticals (apps/*)
 *
 * Run: pnpm test:arch
 *
 * Replaces the bash-based check-architecture.sh with proper test assertions
 * that give clear error messages and integrate with CI.
 */

import { execSync } from "node:child_process";
import { readdirSync, existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

import { describe, it, expect } from "vitest";

const ROOT = resolve(import.meta.dirname, "../..");

// Helper: find all TypeScript source files
function findTsFiles(dir: string): string[] {
  const fullDir = join(ROOT, dir);
  if (!existsSync(fullDir)) return [];
  try {
    const result = execSync(
      `find "${fullDir}" -name "*.ts" -o -name "*.tsx" | grep -v node_modules | grep -v dist | grep -v ".test." | grep -v "__tests__"`,
      { encoding: "utf-8" }
    ).trim();
    return result ? result.split("\n") : [];
  } catch {
    return [];
  }
}

// Helper: extract imports from a file
function extractImports(filePath: string): string[] {
  if (!existsSync(filePath)) return [];
  const content = readFileSync(filePath, "utf-8");
  const importRegex = /(?:import|from)\s+['"]([^'"]+)['"]/g;
  const imports: string[] = [];
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    imports.push(match[1]);
  }
  return imports;
}

// Helper: check if any file in a directory imports from a pattern
function hasImportFrom(dir: string, pattern: string): { file: string; import: string }[] {
  const violations: { file: string; import: string }[] = [];
  const files = findTsFiles(dir);
  for (const file of files) {
    const imports = extractImports(file);
    for (const imp of imports) {
      if (imp.includes(pattern)) {
        violations.push({ file: file.replace(ROOT + "/", ""), import: imp });
      }
    }
  }
  return violations;
}

describe("Architecture Boundaries", () => {
  describe("Level 1: Foundation cannot import from higher levels", () => {
    const foundationPackages = [
      "packages/database",
      "packages/ui",
      "packages/config",
      "packages/utils",
    ];

    for (const pkg of foundationPackages) {
      it(`${pkg} does not import from core`, () => {
        const violations = hasImportFrom(pkg, "@saas-platform/core");
        expect(violations, `${pkg} imports core (Level 2)`).toEqual([]);
      });

      it(`${pkg} does not import from modules`, () => {
        const violations = hasImportFrom(pkg, "@saas-platform/module-");
        expect(violations, `${pkg} imports a module (Level 3)`).toEqual([]);
      });

      it(`${pkg} does not import from apps`, () => {
        const violations = hasImportFrom(pkg, "apps/");
        expect(violations, `${pkg} imports an app (Level 5)`).toEqual([]);
      });
    }
  });

  describe("Level 2: Capabilities cannot import from modules or verticals", () => {
    const capabilityPackages = [
      "packages/core",
      "packages/ai-gateway",
      "packages/notifications",
      "packages/feature-flags",
    ];

    for (const pkg of capabilityPackages) {
      it(`${pkg} does not import from modules`, () => {
        const violations = hasImportFrom(pkg, "@saas-platform/module-");
        expect(violations, `${pkg} imports a module (Level 3)`).toEqual([]);
      });

      it(`${pkg} does not import from apps`, () => {
        const violations = hasImportFrom(pkg, "apps/");
        expect(violations, `${pkg} imports an app (Level 5)`).toEqual([]);
      });
    }
  });

  describe("Level 3: Modules cannot import from other modules or verticals", () => {
    it("no cross-module imports exist", () => {
      const modulesDir = join(ROOT, "modules");
      if (!existsSync(modulesDir)) return; // No modules yet

      const modules = readdirSync(modulesDir, { withFileTypes: true })
        .filter((d) => d.isDirectory() && !d.name.startsWith("_"))
        .map((d) => d.name);

      const violations: string[] = [];
      for (const mod of modules) {
        const otherModulePatterns = modules
          .filter((m) => m !== mod)
          .map((m) => `@saas-platform/module-${m}`);

        const files = findTsFiles(`modules/${mod}`);
        for (const file of files) {
          const imports = extractImports(file);
          const crossImports = imports.filter((imp) =>
            otherModulePatterns.some((p) => imp.includes(p))
          );
          for (const imp of crossImports) {
            violations.push(`modules/${mod}: ${imp}`);
          }
        }
      }
      expect(violations, "Cross-module imports found — use the event bus instead").toEqual([]);
    });

    it("modules do not import from apps", () => {
      const violations = hasImportFrom("modules", "apps/");
      expect(violations, "A module imports from apps/").toEqual([]);
    });
  });

  describe("Level 5: No cross-vertical imports", () => {
    it("verticals do not import from other verticals", () => {
      const appsDir = join(ROOT, "apps");
      if (!existsSync(appsDir)) return;

      const verticals = readdirSync(appsDir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name);

      const violations: string[] = [];
      for (const vertical of verticals) {
        const otherPatterns = verticals
          .filter((v) => v !== vertical)
          .flatMap((v) => [`apps/${v}`, `../${v}`]);

        const files = findTsFiles(`apps/${vertical}`);
        for (const file of files) {
          const imports = extractImports(file);
          const crossImports = imports.filter((imp) => otherPatterns.some((p) => imp.includes(p)));
          for (const imp of crossImports) {
            violations.push(`apps/${vertical}: ${imp}`);
          }
        }
      }
      expect(violations, "Cross-vertical imports are forbidden").toEqual([]);
    });
  });
});

describe("Module Manifest Validation", () => {
  it("every module has a valid module-manifest.json", () => {
    const modulesDir = join(ROOT, "modules");
    if (!existsSync(modulesDir)) return;

    const modules = readdirSync(modulesDir, { withFileTypes: true })
      .filter((d) => d.isDirectory() && !d.name.startsWith("_"))
      .map((d) => d.name);

    for (const mod of modules) {
      const manifestPath = join(modulesDir, mod, "module-manifest.json");
      expect(existsSync(manifestPath), `modules/${mod} missing module-manifest.json`).toBe(true);

      const manifest = JSON.parse(readFileSync(manifestPath, "utf-8"));
      expect(manifest.name, `modules/${mod} manifest missing name`).toBeDefined();
      expect(manifest.capability, `modules/${mod} manifest missing capability`).toBeDefined();
      expect(manifest.displayName, `modules/${mod} manifest missing displayName`).toBeDefined();
      expect(manifest.events, `modules/${mod} manifest missing events`).toBeDefined();
      expect(manifest.permissions, `modules/${mod} manifest missing permissions`).toBeDefined();
    }
  });

  it("every module manifest has a valid capability field (FF-013)", () => {
    const modulesDir = join(ROOT, "modules");
    if (!existsSync(modulesDir)) return;

    const modules = readdirSync(modulesDir, { withFileTypes: true })
      .filter((d) => d.isDirectory() && !d.name.startsWith("_"))
      .map((d) => d.name);

    const violations: string[] = [];
    for (const mod of modules) {
      const manifestPath = join(modulesDir, mod, "module-manifest.json");
      if (!existsSync(manifestPath)) continue;

      const manifest = JSON.parse(readFileSync(manifestPath, "utf-8"));
      if (!manifest.capability || typeof manifest.capability !== "string") {
        violations.push(`modules/${mod}: missing or invalid capability field`);
      } else if (!/^[a-z][a-z0-9-]*$/.test(manifest.capability)) {
        violations.push(`modules/${mod}: capability "${manifest.capability}" must be kebab-case`);
      }
    }
    expect(violations, "Module manifests with invalid capability field").toEqual([]);
  });
});

describe("Agent Runtime Isolation (FF-014)", () => {
  it("agent-runtime does not import from modules", () => {
    const violations = hasImportFrom("packages/core/src/agent-runtime", "@saas-platform/module-");
    expect(
      violations,
      "Agent runtime imports from a module — it should only read manifests"
    ).toEqual([]);
  });

  it("agent-runtime does not import from apps", () => {
    const violations = hasImportFrom("packages/core/src/agent-runtime", "apps/");
    expect(violations, "Agent runtime imports from apps/").toEqual([]);
  });
});

describe("Horizontal Coupling (same-level isolation)", () => {
  describe("L1: Foundation packages do not import each other", () => {
    const l1Packages = [
      { name: "database", pkg: "@saas-platform/database" },
      { name: "ui", pkg: "@saas-platform/ui" },
      { name: "config", pkg: "@saas-platform/config" },
      { name: "utils", pkg: "@saas-platform/utils" },
    ];

    for (const source of l1Packages) {
      for (const target of l1Packages) {
        if (source.name === target.name) continue;
        it(`packages/${source.name} does not import ${target.pkg}`, () => {
          const violations = hasImportFrom(`packages/${source.name}`, target.pkg);
          expect(violations, `L1 horizontal coupling: ${source.name} → ${target.name}`).toEqual([]);
        });
      }
    }
  });

  describe("L2: Core sub-packages do not import from non-core L2 packages", () => {
    const nonCoreL2 = [
      { name: "ai-gateway", pkg: "@saas-platform/ai-gateway" },
      { name: "notifications", pkg: "@saas-platform/notifications" },
      { name: "feature-flags", pkg: "@saas-platform/feature-flags" },
    ];

    for (const source of nonCoreL2) {
      for (const target of nonCoreL2) {
        if (source.name === target.name) continue;
        it(`packages/${source.name} does not import ${target.pkg}`, () => {
          const violations = hasImportFrom(`packages/${source.name}`, target.pkg);
          expect(violations, `L2 horizontal coupling: ${source.name} → ${target.name}`).toEqual([]);
        });
      }
    }
  });
});

// Helper: validate a manifest field value matches a schema pattern
function validatePattern(
  mod: string,
  field: string,
  value: string,
  pattern: string
): string | null {
  if (!value || !pattern) return null;
  return new RegExp(pattern).test(value)
    ? null
    : `modules/${mod}: ${field} "${value}" fails pattern ${pattern}`;
}

// Helper: check required fields are present
function validateRequired(
  mod: string,
  manifest: Record<string, unknown>,
  required: string[]
): string[] {
  return required
    .filter((field) => manifest[field] === undefined)
    .map((field) => `modules/${mod}: missing required field "${field}"`);
}

// Helper: validate string field patterns (name, capability, version)
function validatePatterns(
  mod: string,
  manifest: Record<string, unknown>,
  properties: Record<string, Record<string, string>>
): string[] {
  return ["name", "capability", "version"]
    .map((field) =>
      validatePattern(mod, field, manifest[field] as string, properties[field]?.pattern)
    )
    .filter((err): err is string => err !== null);
}

// Helper: validate dependencies, permissions, and events structure
function validateStructure(mod: string, manifest: Record<string, unknown>): string[] {
  const violations: string[] = [];
  const deps = manifest.dependencies as Record<string, unknown> | undefined;
  if (deps) {
    if (!Array.isArray(deps.platform))
      violations.push(`modules/${mod}: dependencies.platform must be an array`);
    if (!Array.isArray(deps.modules))
      violations.push(`modules/${mod}: dependencies.modules must be an array`);
  }
  const permPattern = /^[a-z-]+:[a-z]+$/;
  const perms = manifest.permissions as string[] | undefined;
  if (Array.isArray(perms)) {
    violations.push(
      ...perms
        .filter((p) => !permPattern.test(p))
        .map((p) => `modules/${mod}: permission "${p}" fails format`)
    );
  }
  const events = manifest.events as Record<string, unknown> | undefined;
  if (events) {
    if (!Array.isArray(events.emits))
      violations.push(`modules/${mod}: events.emits must be an array`);
    if (!Array.isArray(events.subscribes))
      violations.push(`modules/${mod}: events.subscribes must be an array`);
  }
  return violations;
}

describe("Module Manifest Schema Validation", () => {
  it("every module manifest validates against the JSON schema", () => {
    const modulesDir = join(ROOT, "modules");
    if (!existsSync(modulesDir)) return;

    const schemaPath = join(ROOT, "tooling/schemas/module-manifest.schema.json");
    expect(existsSync(schemaPath), "module-manifest.schema.json missing").toBe(true);
    const schema = JSON.parse(readFileSync(schemaPath, "utf-8"));

    const modules = readdirSync(modulesDir, { withFileTypes: true })
      .filter((d) => d.isDirectory() && !d.name.startsWith("_"))
      .map((d) => d.name);

    const properties = schema.properties as Record<string, Record<string, string>>;
    const violations: string[] = [];
    for (const mod of modules) {
      const manifestPath = join(modulesDir, mod, "module-manifest.json");
      if (!existsSync(manifestPath)) continue;
      const manifest = JSON.parse(readFileSync(manifestPath, "utf-8"));
      violations.push(
        ...validateRequired(mod, manifest, schema.required as string[]),
        ...validatePatterns(mod, manifest, properties),
        ...validateStructure(mod, manifest)
      );
    }
    expect(violations, "Module manifests failing schema validation").toEqual([]);
  });
});

describe("Naming Conventions", () => {
  it("all TypeScript files use kebab-case", () => {
    const dirs = ["packages", "modules", "apps"];
    const violations: string[] = [];

    for (const dir of dirs) {
      const files = findTsFiles(dir);
      for (const file of files) {
        const filename = file.split("/").pop() ?? "";
        // Allow index.ts and files starting with uppercase (React components)
        if (filename === "index.ts" || filename === "index.tsx") continue;
        if (/^[A-Z].*\.tsx$/.test(filename)) continue; // React components are PascalCase

        if (/[A-Z]/.test(filename.replace(/\.tsx?$/, ""))) {
          violations.push(file.replace(ROOT + "/", ""));
        }
      }
    }

    expect(violations, "Files not using kebab-case").toEqual([]);
  });
});

describe("Dependency Governance", () => {
  it("no hardcoded tenant IDs in source code", () => {
    const dirs = ["packages", "modules", "apps"];
    const violations: string[] = [];
    const tenantIdPattern = /tenant_[a-f0-9]{8,}|tenantId\s*[:=]\s*['"][^'"]+['"]/;

    for (const dir of dirs) {
      const files = findTsFiles(dir);
      for (const file of files) {
        const content = readFileSync(file, "utf-8");
        if (
          tenantIdPattern.test(content) &&
          !file.includes("__tests__") &&
          !file.includes(".test.")
        ) {
          violations.push(file.replace(ROOT + "/", ""));
        }
      }
    }

    expect(violations, "Files with hardcoded tenant IDs").toEqual([]);
  });

  it("packages export through index.ts only", () => {
    const packageDirs = ["packages", "modules"];
    const violations: string[] = [];

    for (const baseDir of packageDirs) {
      const fullBase = join(ROOT, baseDir);
      if (!existsSync(fullBase)) continue;

      const pkgs = readdirSync(fullBase, { withFileTypes: true })
        .filter((d) => d.isDirectory() && !d.name.startsWith("_"))
        .map((d) => d.name);

      for (const pkg of pkgs) {
        const srcDir = join(fullBase, pkg, "src");
        if (!existsSync(srcDir)) continue;
        if (!existsSync(join(srcDir, "index.ts"))) {
          violations.push(`${baseDir}/${pkg}/src/index.ts missing`);
        }
      }
    }

    expect(violations, "Packages missing src/index.ts barrel export").toEqual([]);
  });
});
