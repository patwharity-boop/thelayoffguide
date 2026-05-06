// Claim journey logic for the /my-claim dashboard.
// Pure functions on top of a (filing date, state) tuple. No DOM, no React,
// no localStorage, easy to unit-test. All time math uses local-day boundaries
// to avoid timezone surprises (cert cadence is a calendar concept, not a
// UTC-instant concept).

import type { StateData } from "@/data/states";

export type ClaimPhase =
  | "waiting_week"
  | "early_claim"
  | "active"
  | "wind_down"
  | "exhausted";

export interface ClaimInput {
  filingDate: Date;
  state: StateData;
}

export interface ClaimSnapshot {
  phase: ClaimPhase;
  weeksSinceFiling: number;
  weeksUsed: number; // capped at maxWeeks
  weeksRemaining: number;
  nextCertDate: Date;
  estimatedFirstPaymentDate: Date | null;
  expectedEndDate: Date;
  // Rough estimate using the state max benefit. Real claimants may receive
  // less based on their wage history, the user's actual estimate from
  // BenefitEstimator (if saved) is a more accurate number to display.
  benefitsRemainingMax: number;
}

const DAY_MS = 86400000;

function startOfLocalDay(d: Date): Date {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function daysBetween(a: Date, b: Date): number {
  const aMid = startOfLocalDay(a).getTime();
  const bMid = startOfLocalDay(b).getTime();
  return Math.floor((bMid - aMid) / DAY_MS);
}

// Next Sunday on or after `from`. If `from` is already a Sunday, returns it
// (Sunday is when most state portals open the next certification window).
function nextSunday(from: Date): Date {
  const d = startOfLocalDay(from);
  const day = d.getDay(); // 0 = Sunday
  const daysUntilSun = day === 0 ? 0 : 7 - day;
  return new Date(d.getTime() + daysUntilSun * DAY_MS);
}

export function computeSnapshot(
  claim: ClaimInput,
  now: Date = new Date()
): ClaimSnapshot {
  const today = startOfLocalDay(now);
  const filing = startOfLocalDay(claim.filingDate);
  const daysSince = Math.max(0, daysBetween(filing, today));
  const weeksSinceFiling = Math.floor(daysSince / 7);

  const maxWeeks = claim.state.maxWeeks;
  const weeksUsed = Math.min(weeksSinceFiling, maxWeeks);
  const weeksRemaining = Math.max(0, maxWeeks - weeksUsed);

  const nextCertDate = nextSunday(today);

  // Estimated first payment: ~3 weeks after filing in a typical state. After
  // week 4 from filing, this date is in the past or moot.
  const estFirstPayment =
    weeksSinceFiling < 4
      ? new Date(filing.getTime() + 21 * DAY_MS)
      : null;

  const expectedEndDate = new Date(
    filing.getTime() + maxWeeks * 7 * DAY_MS
  );

  let phase: ClaimPhase;
  if (claim.state.waitingWeek && weeksSinceFiling === 0) {
    phase = "waiting_week";
  } else if (weeksRemaining <= 0) {
    phase = "exhausted";
  } else if (weeksSinceFiling < 3) {
    phase = "early_claim";
  } else if (weeksRemaining <= 4) {
    phase = "wind_down";
  } else {
    phase = "active";
  }

  const benefitsRemainingMax = weeksRemaining * claim.state.maxWeeklyBenefit;

  return {
    phase,
    weeksSinceFiling,
    weeksUsed,
    weeksRemaining,
    nextCertDate,
    estimatedFirstPaymentDate: estFirstPayment,
    expectedEndDate,
    benefitsRemainingMax,
  };
}

export function formatHumanDate(d: Date): string {
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatShortDate(d: Date): string {
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatMoney(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export function relativeDays(target: Date, now: Date = new Date()): string {
  const days = daysBetween(now, target);
  if (days === 0) return "today";
  if (days === 1) return "tomorrow";
  if (days === -1) return "yesterday";
  if (days > 0) return `in ${days} days`;
  return `${Math.abs(days)} days ago`;
}
