/**
 * Platform event system — the ONLY mechanism for module-to-module communication.
 */

export type { PlatformEvent, EventHandler, EventSubscription } from "./types.js";
export { eventBus } from "./bus.js";
