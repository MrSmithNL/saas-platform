/**
 * Platform Event Bus — in-process implementation (Phase 1).
 *
 * Phase 1: In-process EventEmitter (synchronous, simple, good enough)
 * Phase 2: Async queue via Trigger.dev (guaranteed delivery)
 * Phase 3: External message broker (only if we extract microservices)
 *
 * The interface stays the same across all phases — modules don't know
 * or care about the transport mechanism.
 */

import { randomUUID } from "node:crypto";

import { getCurrentTenantId } from "../tenancy/context.js";

import type { EventHandler, EventSubscription, PlatformEvent } from "./types.js";

class EventBus {
  private subscriptions: Map<string, EventHandler[]> = new Map();

  /**
   * Subscribe to an event type.
   * Returns an unsubscribe function.
   */
  subscribe<T = unknown>(eventType: string, handler: EventHandler<T>): () => void {
    const handlers = this.subscriptions.get(eventType) ?? [];
    handlers.push(handler as EventHandler);
    this.subscriptions.set(eventType, handlers);

    return () => {
      const current = this.subscriptions.get(eventType) ?? [];
      this.subscriptions.set(
        eventType,
        current.filter((h) => h !== handler)
      );
    };
  }

  /**
   * Register multiple subscriptions at once (from a module manifest).
   */
  registerSubscriptions(subscriptions: EventSubscription[]): void {
    for (const sub of subscriptions) {
      this.subscribe(sub.eventType, sub.handler);
    }
  }

  /**
   * Publish an event. All matching handlers are called.
   * Automatically stamps the event with tenant context and metadata.
   */
  async publish<T>(type: string, data: T, source: string): Promise<PlatformEvent<T>> {
    const event: PlatformEvent<T> = {
      id: randomUUID(),
      type,
      tenantId: getCurrentTenantId(),
      timestamp: new Date().toISOString(),
      data,
      source,
    };

    const handlers = this.subscriptions.get(type) ?? [];

    // Also check wildcard subscriptions (e.g., "crm.*" matches "crm.contact.created")
    for (const [pattern, patternHandlers] of this.subscriptions.entries()) {
      if (pattern.endsWith(".*") && type.startsWith(pattern.slice(0, -1))) {
        handlers.push(...patternHandlers);
      }
    }

    // Execute all handlers (Phase 1: sequential, in-process)
    for (const handler of handlers) {
      await handler(event);
    }

    return event;
  }

  /**
   * Clear all subscriptions (useful for testing).
   */
  reset(): void {
    this.subscriptions.clear();
  }
}

/** Singleton event bus instance */
export const eventBus = new EventBus();
