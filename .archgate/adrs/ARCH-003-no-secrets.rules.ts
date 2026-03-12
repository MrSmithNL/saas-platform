import { defineRules } from "archgate/rules";

export default defineRules({
  "no-hardcoded-tenant-ids": {
    description: "No hardcoded tenant IDs or UUIDs in source code",
    async check(ctx) {
      const patterns = [
        /tenant[_-]?id\s*[:=]\s*['"][a-f0-9-]{8,}/i,
        /['"][0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}['"]/,
      ];

      for (const file of ctx.scopedFiles) {
        if (file.includes("__tests__") || file.includes(".test.") || file.includes(".spec."))
          continue;

        for (const pattern of patterns) {
          const matches = await ctx.grep(file, pattern);
          for (const match of matches) {
            ctx.report.violation({
              message: "Hardcoded tenant ID or UUID detected",
              file: match.file,
              line: match.line,
              fix: "Use getTenantContext() from AsyncLocalStorage instead of hardcoded IDs",
            });
          }
        }
      }
    },
  },

  "no-hardcoded-api-keys": {
    description: "No hardcoded API keys or secrets in source code",
    async check(ctx) {
      const patterns = [
        /(?:api[_-]?key|secret|token|password)\s*[:=]\s*['"][a-zA-Z0-9_\-/.]{16,}['"]/i,
        /sk[-_][a-zA-Z0-9]{20,}/,
        /pk[-_][a-zA-Z0-9]{20,}/,
      ];

      for (const file of ctx.scopedFiles) {
        if (file.includes("__tests__") || file.includes(".test.") || file.includes(".spec."))
          continue;
        if (file.endsWith(".d.ts")) continue;

        for (const pattern of patterns) {
          const matches = await ctx.grep(file, pattern);
          for (const match of matches) {
            ctx.report.violation({
              message: "Potential hardcoded secret or API key detected",
              file: match.file,
              line: match.line,
              fix: "Use environment variables via process.env instead",
            });
          }
        }
      }
    },
  },
});
