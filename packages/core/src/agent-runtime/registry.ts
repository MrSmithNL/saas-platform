/**
 * Agent Tool Registry — centralised discovery and access to module tools.
 *
 * Modules register their tools at startup. The registry provides
 * tenant-aware tool discovery (only tools from enabled modules)
 * and execution within the correct tenant context.
 */

import { randomUUID } from "node:crypto";

import { getTenantContext, isModuleEnabled } from "../tenancy/context.js";

import type { ToolRegistration, ToolExecutionResult, ToolAuditEntry } from "./types.js";
import type { TenantContext } from "../tenancy/context.js";

interface ExecutionContext {
  toolName: string;
  module: string;
  capability: string;
  tenantId: string;
  userId: string;
}

interface AuditParams extends ExecutionContext {
  input: unknown;
  output: unknown;
  success: boolean;
  error: string | undefined;
  durationMs: number;
}

/**
 * Central registry for all agent tools contributed by modules.
 */
export class ToolRegistry {
  private tools = new Map<string, ToolRegistration>();
  private auditLog: ToolAuditEntry[] = [];

  register(tool: ToolRegistration): void {
    if (this.tools.has(tool.name)) {
      throw new Error(
        `Tool "${tool.name}" already registered by module "${this.tools.get(tool.name)?.module}". ` +
          `Module "${tool.module}" cannot register a duplicate.`
      );
    }
    this.tools.set(tool.name, tool);
  }

  unregister(toolName: string): boolean {
    return this.tools.delete(toolName);
  }

  getAllTools(): ToolRegistration[] {
    return Array.from(this.tools.values());
  }

  getToolsForTenant(): ToolRegistration[] {
    return this.getAllTools().filter((tool) => isModuleEnabled(tool.module));
  }

  getToolsByCapability(capability: string): ToolRegistration[] {
    return this.getToolsForTenant().filter((tool) => tool.capability === capability);
  }

  getTool(name: string): ToolRegistration | undefined {
    return this.tools.get(name);
  }

  async execute(toolName: string, input: unknown): Promise<ToolExecutionResult> {
    const ctx = getTenantContext();
    const tool = this.tools.get(toolName);
    const execCtx: ExecutionContext = {
      toolName,
      module: tool?.module ?? "unknown",
      capability: tool?.capability ?? "unknown",
      tenantId: ctx.tenantId,
      userId: ctx.userId,
    };

    if (!tool) {
      return this.buildErrorResult(execCtx, `Tool "${toolName}" not found in registry`);
    }

    if (!isModuleEnabled(tool.module)) {
      return this.buildErrorResult(
        execCtx,
        `Module "${tool.module}" is not enabled for tenant "${ctx.tenantId}"`
      );
    }

    return this.executeTool(tool, input, ctx, execCtx);
  }

  getAuditLog(): readonly ToolAuditEntry[] {
    return this.auditLog;
  }

  clearAuditLog(): void {
    this.auditLog = [];
  }

  reset(): void {
    this.tools.clear();
    this.auditLog = [];
  }

  private async executeTool(
    tool: ToolRegistration,
    input: unknown,
    tenantCtx: TenantContext,
    execCtx: ExecutionContext
  ): Promise<ToolExecutionResult> {
    const startTime = Date.now();

    try {
      const data = await tool.handler(input, tenantCtx);
      const durationMs = Date.now() - startTime;
      this.logAudit({
        ...execCtx,
        input,
        output: data,
        success: true,
        error: undefined,
        durationMs,
      });
      return {
        success: true,
        data,
        metadata: { ...execCtx, durationMs, timestamp: new Date().toISOString() },
      };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      const durationMs = Date.now() - startTime;
      this.logAudit({
        ...execCtx,
        input,
        output: undefined,
        success: false,
        error: errorMessage,
        durationMs,
      });
      return {
        success: false,
        error: errorMessage,
        metadata: { ...execCtx, durationMs, timestamp: new Date().toISOString() },
      };
    }
  }

  private buildErrorResult(execCtx: ExecutionContext, error: string): ToolExecutionResult {
    return {
      success: false,
      error,
      metadata: { ...execCtx, durationMs: 0, timestamp: new Date().toISOString() },
    };
  }

  private logAudit(params: AuditParams): void {
    this.auditLog.push({
      id: randomUUID(),
      toolName: params.toolName,
      module: params.module,
      tenantId: params.tenantId,
      userId: params.userId,
      input: params.input,
      output: params.output,
      success: params.success,
      error: params.error,
      durationMs: params.durationMs,
      timestamp: new Date().toISOString(),
    });
  }
}

/** Singleton tool registry for the platform. */
export const toolRegistry = new ToolRegistry();
