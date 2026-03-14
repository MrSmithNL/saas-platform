/**
 * Event definitions for this module.
 *
 * Events are the ONLY way modules communicate with each other.
 * No direct imports between modules — publish events, subscribe to events.
 */

export { emittedEvents } from "./emitted.js";
export { subscriptions } from "./subscriptions.js";
