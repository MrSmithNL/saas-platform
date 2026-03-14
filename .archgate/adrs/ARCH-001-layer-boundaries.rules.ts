import { defineRules } from "archgate/rules";

export default defineRules({
  "no-upward-imports-foundation": {
    description: "L1 Foundation packages must not import from higher levels",
    async check(ctx) {
      const l1Dirs = ["packages/database", "packages/ui", "packages/config", "packages/utils"];
      const forbidden = [
        /@saas-platform\/core/,
        /@saas-platform\/ai-gateway/,
        /@saas-platform\/notifications/,
        /@saas-platform\/feature-flags/,
        /@saas-platform\/module-/,
      ];

      for (const dir of l1Dirs) {
        const files = ctx.scopedFiles.filter((f) => f.startsWith(dir));
        for (const file of files) {
          for (const pattern of forbidden) {
            const matches = await ctx.grep(file, pattern);
            for (const match of matches) {
              ctx.report.violation({
                message: `L1 package "${dir}" must not import from higher levels`,
                file: match.file,
                line: match.line,
                fix: "Remove this import — foundation packages cannot depend on capabilities or modules",
              });
            }
          }
        }
      }
    },
  },

  "no-cross-module-imports": {
    description: "Modules must not import from other modules — use the event bus",
    async check(ctx) {
      const moduleFiles = ctx.scopedFiles.filter((f) => f.startsWith("modules/"));
      for (const file of moduleFiles) {
        const matches = await ctx.grep(file, /@saas-platform\/module-/);
        for (const match of matches) {
          const fileModule = file.split("/")[1];
          if (!match.text.includes(`module-${fileModule}`)) {
            ctx.report.violation({
              message: "Cross-module import detected — use the event bus instead",
              file: match.file,
              line: match.line,
              fix: "Publish an event via the event bus and subscribe to it in the target module",
            });
          }
        }
      }
    },
  },

  "no-cross-vertical-imports": {
    description: "Apps must not import from other apps",
    async check(ctx) {
      const appFiles = ctx.scopedFiles.filter((f) => f.startsWith("apps/"));
      for (const file of appFiles) {
        const currentApp = file.split("/")[1];
        const otherAppPattern = new RegExp(
          `from\\s+['"]\\.\\./${currentApp === "sell-funnel" ? "(?:admin|marketing)" : "(?:sell-funnel|admin|marketing)"}`,
          "g"
        );
        const matches = await ctx.grep(file, otherAppPattern);
        for (const match of matches) {
          ctx.report.violation({
            message: "Cross-vertical import detected — apps must be independent",
            file: match.file,
            line: match.line,
            fix: "Extract shared code to a package in packages/ and import from there",
          });
        }
      }
    },
  },
});
