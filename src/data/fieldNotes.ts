// Field Notes are short, state-specific tactical intel that surfaces on
// the relevant state page automatically. Each note is tagged by state(s),
// topic, and source provenance. See /field-notes for the full feed.
//
// To add a note: append to FIELD_NOTES below (or extend the seed pack).
// To remove a state from a note: drop the slug from the `states` array.
// To pin a note to the top of a state's feed: set `pinned: true`.

import { seedFieldNotes } from "./fieldNotesSeed";

export type FieldNoteSource =
  | "personal"   // Patrick's lived experience
  | "community"  // submitted by a reader
  | "official"   // pulled from a state DOL/legal-aid publication
  | "research";  // research-sourced from public materials

export type FieldNoteTopic =
  | "filing"
  | "appeals"
  | "severance"
  | "cobra"
  | "cert"
  | "portal"
  | "phone"
  | "extension"
  | "partial"
  | "remote-work"
  | "1099"
  | "denial";

export interface FieldNote {
  id: string;
  title: string;
  body: string;
  states: string[];        // state slugs from src/data/states.ts
  topics: FieldNoteTopic[];
  source: FieldNoteSource;
  sourceUrl?: string;
  publishedAt: string;     // ISO YYYY-MM-DD
  pinned?: boolean;
}

// Hand-curated notes from Patrick's experience and additions over time.
// Append new notes here so they surface alongside the seed pack.
const HAND_CURATED: FieldNote[] = [
  {
    id: "any-governors-office-hotline-trick",
    title: "Can't reach unemployment? Call the Governor's office",
    body: "When state UI phone lines disconnect or hold for hours, the Governor's office will route constituent calls to the unemployment agency's escalation queue. Every state has a Governor's constituent services line, and they treat unemployment delays as a routine constituent issue. This works in every state. It is the single most effective workaround for phone-system gridlock that I learned through experience.",
    states: ["alabama","alaska","arizona","arkansas","california","colorado","connecticut","delaware","florida","georgia","hawaii","idaho","illinois","indiana","iowa","kansas","kentucky","louisiana","maine","maryland","massachusetts","michigan","minnesota","mississippi","missouri","montana","nebraska","nevada","new-hampshire","new-jersey","new-mexico","new-york","north-carolina","north-dakota","ohio","oklahoma","oregon","pennsylvania","rhode-island","south-carolina","south-dakota","tennessee","texas","utah","vermont","virginia","washington","west-virginia","wisconsin","wyoming"],
    topics: ["phone"],
    source: "personal",
    publishedAt: "2025-10-01",
    pinned: true,
  },
  {
    id: "any-waiting-week-must-cert",
    title: "The unpaid waiting week still needs to be certified",
    body: "If your state has a one-week waiting period (most do), you do not get paid for that week, but you still have to file a weekly certification for it. Missing this cert because you assume an unpaid week doesn't count delays your first real payment by one to three weeks while the state processes the gap. File the waiting-week cert the same Sunday you file every other cert.",
    states: ["alabama","alaska","arizona","arkansas","california","colorado","delaware","florida","georgia","hawaii","idaho","indiana","iowa","kansas","kentucky","louisiana","maine","maryland","massachusetts","michigan","minnesota","mississippi","missouri","montana","nebraska","nevada","new-hampshire","new-mexico","north-carolina","north-dakota","ohio","oklahoma","oregon","pennsylvania","rhode-island","south-carolina","south-dakota","tennessee","texas","utah","vermont","virginia","washington","west-virginia","wisconsin","wyoming"],
    topics: ["cert", "filing"],
    source: "personal",
    publishedAt: "2025-10-15",
    pinned: true,
  },
];

export const FIELD_NOTES: FieldNote[] = [
  ...HAND_CURATED,
  ...seedFieldNotes,
];

// ----- Query helpers --------------------------------------------------

/** Sort notes by pinned-first, then most recent publishedAt. */
function sortNotes(notes: FieldNote[]): FieldNote[] {
  return [...notes].sort((a, b) => {
    if (!!a.pinned !== !!b.pinned) return a.pinned ? -1 : 1;
    return b.publishedAt.localeCompare(a.publishedAt);
  });
}

/** All notes that are tagged for the given state slug, sorted. */
export function getNotesForState(stateSlug: string): FieldNote[] {
  return sortNotes(FIELD_NOTES.filter((n) => n.states.includes(stateSlug)));
}

/** Top N notes for a state. Default 3. */
export function getTopNotesForState(
  stateSlug: string,
  limit = 3
): FieldNote[] {
  return getNotesForState(stateSlug).slice(0, limit);
}

/** All notes, sorted (for the /field-notes index page). */
export function getAllNotes(): FieldNote[] {
  return sortNotes(FIELD_NOTES);
}

/** Notes filtered to a topic. */
export function getNotesForTopic(topic: FieldNoteTopic): FieldNote[] {
  return sortNotes(FIELD_NOTES.filter((n) => n.topics.includes(topic)));
}
