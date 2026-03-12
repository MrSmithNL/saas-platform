/**
 * Agent Runtime types — tool registration, execution, and audit.
 *
 * The agent runtime is a Platform capability (L2). It consumes tools
 * contributed by business modules (L3) via their module manifests.
 * Modules register tool handlers; the runtime orchestrates execution
 * within the correct tenant context.
 */

import type { TenantContext } from "../tenancy/context.js";

/**
 * Schema for a tool's input or output.
 * Uses a simplified JSON Schema subset for serialisation.
 */
export interface ToolSchema {
  type: "object";
  properties: Record<string, { type: string; description?: string }>;
  required?: string[];
}

/**
 * Tool definition registered by a module.
 */
export interface AgentTool<TInput = unknown, TOutput = unknown> {
  /** Unique tool name (module-scoped, e.g., "seo.analyse-page") */
  name: string;
  /** Human-readable description for agent tool selection */
  description: string;
  /** Module that owns this tool */
  module: string;
  /** Business capability group */
  capability: string;
  /** JSON Schema for the tool's input */
  inputSchema: ToolSchema;
  /** JSON Schema for the tool's output */
  outputSchema: ToolSchema;
  /** Required permissions to execute this tool */
  permissions: string[];
  /** The tool implementation. Runs within tenant context. */
  handler: (input: TInput, ctx: TenantContext) => Promise<TOutput>;
}

/**
 * Options for registering a tool.
 */
export type ToolRegistration = Omit<AgentTool, "handler"> & {
  handler: (input: unknown, ctx: TenantContext) => Promise<unknown>;
};

/**
 * Result of a tool execution.
 */
export interface ToolExecutionResult {
  /** Whether the tool executed successfully */
  success: boolean;
  /** Tool output (if successful) */
  data?: unknown;
  /** Error message (if failed) */
  error?: string;
  /** Execution metadata */
  metadata: {
    toolName: string;
    module: string;
    capability: string;
    tenantId: string;
    userId: string;
    durationMs: number;
    timestamp: string;
  };
}

/**
 * Audit log entry for tool executions.
 */
export interface ToolAuditEntry {
  /** Unique execution ID */
  id: string;
  /** Tool that was executed */
  toolName: string;
  /** Module that owns the tool */
  module: string;
  /** Tenant context */
  tenantId: string;
  userId: string;
  /** Input (sanitised — no secrets) */
  input: unknown;
  /** Output summary */
  output: unknown;
  /** Whether it succeeded */
  success: boolean;
  /** Error if failed */
  error?: string;
  /** Execution time in ms */
  durationMs: number;
  /** ISO timestamp */
  timestamp: string;
}
