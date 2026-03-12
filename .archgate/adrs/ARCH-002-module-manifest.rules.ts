import { defineRules } from "archgate/rules";

export default defineRules({
  "manifest-required-fields": {
    description: "Module manifests must contain all required fields",
    async check(ctx) {
      const required = [
        "name",
        "capability",
        "displayName",
        "version",
        "description",
        "dependencies",
        "permissions",
        "events",
      ];

      for (const file of ctx.scopedFiles) {
        if (!file.endsWith("module-manifest.json")) continue;

        const matches = await ctx.grep(file, /.*/);
        if (matches.length === 0) continue;

        try {
          const content = matches.map((m) => m.text).join("\n");
          const manifest = JSON.parse(content);

          for (const field of required) {
            if (manifest[field] === undefined) {
              ctx.report.violation({
                message: `Missing required field "${field}" in module manifest`,
                file,
                line: 1,
                fix: `Add "${field}" to the manifest — see tooling/schemas/module-manifest.schema.json`,
              });
            }
          }

          if (manifest.name && !/^[a-z][a-z0-9-]*$/.test(manifest.name)) {
            ctx.report.violation({
              message: `Module name "${manifest.name}" must be kebab-case`,
              file,
              line: 1,
              fix: "Use lowercase letters, numbers, and hyphens only",
            });
          }

          if (manifest.capability && !/^[a-z][a-z0-9-]*$/.test(manifest.capability)) {
            ctx.report.violation({
              message: `Capability "${manifest.capability}" must be kebab-case`,
              file,
              line: 1,
              fix: "Use lowercase letters, numbers, and hyphens only",
            });
          }
        } catch {
          ctx.report.violation({
            message: "Invalid JSON in module manifest",
            file,
            line: 1,
            fix: "Fix JSON syntax errors",
          });
        }
      }
    },
  },
});
