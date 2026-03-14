/**
 * Platform event system types.
 *
 * Events are the ONLY mechanism for module-to-module communication.
 * Modules publish events about what happened, other modules react independently.
 *
 * Event naming convention: {module}.{entity}.{action}
 * Examples: crm.contact.created, billing.subscription.cancelled
 */

/**
 * Base event interface. All platform events extend this.
 */
export interface PlatformEvent<T = unknown> {
  /** Unique event ID (UUID) */
  id: string;
  /** Event type in dot notation (module.entity.action) */
  type: string;
  /** Tenant context — every event is tenant-scoped */
  tenantId: string;
  /** ISO 8601 timestamp */
  timestamp: string;
  /** Event payload (typed per event) */
  data: T;
  /** Correlation ID for request tracing */
  correlationId?: string;
  /** Source module that emitted this event */
  source: string;
}

/**
 * Event handler function type.
 */
export type EventHandler<T = unknown> = (event: PlatformEvent<T>) => Promise<void>;

/**
 * Event subscription definition.
 */
export interface EventSubscription {
  /** Event type pattern to match (supports wildcards: "crm.*") */
  eventType: string;
  /** Handler function */
  handler: EventHandler;
  /** Optional: only process events from specific modules */
  sourceFilter?: string[];
}
