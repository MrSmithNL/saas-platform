/**
 * Events this module publishes.
 * Other modules can subscribe to these via the event bus.
 */

import type { PlatformEvent } from "@saas-platform/core";

export type TemplateCreatedEvent = PlatformEvent<{
  entityId: string;
  name: string;
}>;

export const emittedEvents = {
  TEMPLATE_CREATED: "template.entity.created" as const,
  TEMPLATE_UPDATED: "template.entity.updated" as const,
  TEMPLATE_DELETED: "template.entity.deleted" as const,
};
