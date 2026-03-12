/**
 * Agent Runtime — Platform capability (L2) for AI agent orchestration.
 *
 * Modules (L3) contribute tools via their manifests. The agent runtime
 * provides centralised tool discovery, tenant-scoped execution, and
 * audit logging. Agent orchestration is a platform concern — modules
 * never own the orchestration, only the tool implementations.
 *
 * Usage:
 *   // Module registration (at startup):
 *   toolRegistry.register({
 *     name: "seo.analyse-page",
 *     description: "Analyses a page for SEO issues",
 *     module: "seo-audit",
 *     capability: "seo",
 *     inputSchema: { type: "object", properties: { url: { type: "string" } } },
 *     outputSchema: { type: "object", properties: { score: { type: "number" } } },
 *     permissions: ["seo:read"],
 *     handler: async (input, ctx) => { ... },
 *   });
 *
 *   // Agent execution (within tenant context):
 *   const result = await toolRegistry.execute("seo.analyse-page", { url: "..." });
 */

export { ToolRegistry, toolRegistry } from "./registry.js";

export type {
  AgentTool,
  ToolRegistration,
  ToolExecutionResult,
  ToolAuditEntry,
  ToolSchema,
} from "./types.js";
