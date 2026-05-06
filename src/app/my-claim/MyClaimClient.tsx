"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { states, getStateBySlug, type StateData } from "@/data/states";
import {
  computeSnapshot,
  formatHumanDate,
  formatMoney,
  formatShortDate,
  relativeDays,
  type ClaimPhase,
  type ClaimSnapshot,
} from "@/lib/claimMilestones";

const STORAGE_KEY = "lg-my-claim-v1";

interface SavedClaim {
  filingDate: string; // ISO YYYY-MM-DD
  stateSlug: string;
}

function loadClaim(): SavedClaim | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed.filingDate === "string" &&
      typeof parsed.stateSlug === "string" &&
      getStateBySlug(parsed.stateSlug)
    ) {
      return { filingDate: parsed.filingDate, stateSlug: parsed.stateSlug };
    }
  } catch {
    // bad JSON or no localStorage; fall through to null
  }
  return null;
}

function saveClaim(claim: SavedClaim) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(claim));
  } catch {
    // swallow
  }
}

function clearClaim() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // swallow
  }
}

// Parse YYYY-MM-DD as a local date (no timezone shift).
function parseISODate(iso: string): Date {
  const [y, m, d] = iso.split("-").map((s) => parseInt(s, 10));
  return new Date(y, (m || 1) - 1, d || 1);
}

// Format a Date as YYYY-MM-DD in local time for HTML <input type="date">.
function toISODate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${dd}`;
}

export default function MyClaimClient() {
  const [claim, setClaim] = useState<SavedClaim | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // One-shot localStorage hydration. SSR can't read localStorage so we
    // initialize empty and sync after mount. The lint rule below flags this
    // as a "cascading render" but it's the right pattern for SSR + storage.
    const loaded = loadClaim();
    if (loaded) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setClaim(loaded);
    } else {
      setEditing(true);
    }
    setHydrated(true);
  }, []);

  const handleSave = (newClaim: SavedClaim) => {
    saveClaim(newClaim);
    setClaim(newClaim);
    setEditing(false);
  };

  const handleForget = () => {
    if (
      typeof window !== "undefined" &&
      !window.confirm(
        "Delete your saved claim from this browser? This action cannot be undone."
      )
    ) {
      return;
    }
    clearClaim();
    setClaim(null);
    setEditing(true);
  };

  if (!hydrated) {
    // Render a small placeholder during hydration to match server output.
    return (
      <div className="text-gray-500 text-sm py-8">Loading your claim...</div>
    );
  }

  const showForm = editing || !claim;

  return (
    <div>
      {showForm ? (
        <ClaimForm
          initial={claim}
          onSubmit={handleSave}
          onCancel={claim ? () => setEditing(false) : undefined}
        />
      ) : (
        <ClaimDashboard
          claim={claim}
          onEdit={() => setEditing(true)}
          onForget={handleForget}
        />
      )}
    </div>
  );
}

// -- Form ---------------------------------------------------------------

function ClaimForm({
  initial,
  onSubmit,
  onCancel,
}: {
  initial: SavedClaim | null;
  onSubmit: (c: SavedClaim) => void;
  onCancel?: () => void;
}) {
  const today = useMemo(() => toISODate(new Date()), []);
  const [filingDate, setFilingDate] = useState<string>(
    initial?.filingDate ?? today
  );
  const [stateSlug, setStateSlug] = useState<string>(
    initial?.stateSlug ?? ""
  );
  const [error, setError] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!stateSlug) {
      setError("Pick the state where you filed.");
      return;
    }
    if (!filingDate) {
      setError("Enter the date you filed your claim.");
      return;
    }
    const parsed = parseISODate(filingDate);
    if (Number.isNaN(parsed.getTime())) {
      setError("That filing date doesn't look right.");
      return;
    }
    setError(null);
    onSubmit({ filingDate, stateSlug });
  };

  return (
    <form onSubmit={submit} className="bg-white border border-gray-200 rounded-lg p-6 space-y-5">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          {initial ? "Edit your claim" : "Set up your claim tracker"}
        </h2>
        <p className="text-sm text-gray-600">
          Two pieces of info. Stays in your browser. We never see it.
        </p>
      </div>

      <label className="block">
        <span className="block text-sm font-medium text-gray-900 mb-1">
          State you filed in
        </span>
        <select
          value={stateSlug}
          onChange={(e) => setStateSlug(e.target.value)}
          className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Pick a state...</option>
          {states.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="block text-sm font-medium text-gray-900 mb-1">
          Filing date
        </span>
        <input
          type="date"
          value={filingDate}
          max={today}
          onChange={(e) => setFilingDate(e.target.value)}
          className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <span className="block text-xs text-gray-500 mt-1">
          The date your claim was submitted. Most states use the Sunday of
          your filing week as the effective start date.
        </span>
      </label>

      {error && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded p-3">
          {error}
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          className="bg-blue-700 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-800 transition-colors"
        >
          {initial ? "Update claim" : "Start tracking"}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

// -- Dashboard ----------------------------------------------------------

function ClaimDashboard({
  claim,
  onEdit,
  onForget,
}: {
  claim: SavedClaim;
  onEdit: () => void;
  onForget: () => void;
}) {
  const state = getStateBySlug(claim.stateSlug);
  const filingDate = parseISODate(claim.filingDate);
  // Snapshot is cheap to compute; no useMemo needed and avoids hook-order
  // issues with the early return below.
  const snapshot = state
    ? computeSnapshot({ filingDate, state })
    : null;

  if (!state || !snapshot) {
    return (
      <div className="text-sm text-gray-700">
        State not found.{" "}
        <button onClick={onEdit} className="underline">
          Update your claim →
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PhaseBanner phase={snapshot.phase} stateName={state.name} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat
          label="Week of claim"
          primary={`Week ${snapshot.weeksSinceFiling + 1}`}
          secondary={`of ${state.maxWeeks} max`}
        />
        <Stat
          label="Weeks remaining"
          primary={`${snapshot.weeksRemaining}`}
          secondary={
            snapshot.weeksRemaining === 0
              ? "benefits ended"
              : `through ${formatShortDate(snapshot.expectedEndDate)}`
          }
        />
        <Stat
          label="Max remaining benefits"
          primary={formatMoney(snapshot.benefitsRemainingMax)}
          secondary={`at ${formatMoney(state.maxWeeklyBenefit)}/wk max`}
        />
        <Stat
          label="Next certification"
          primary={formatShortDate(snapshot.nextCertDate)}
          secondary={relativeDays(snapshot.nextCertDate)}
        />
      </div>

      <PhaseGuidance
        phase={snapshot.phase}
        snapshot={snapshot}
        state={state}
      />

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
        <h3 className="font-bold text-blue-900 mb-2">Your filing details</h3>
        <p className="text-sm text-gray-700 mb-1">
          Filed in <strong>{state.name}</strong> on{" "}
          <strong>{formatHumanDate(filingDate)}</strong>.
        </p>
        <p className="text-sm text-gray-700 mb-3">
          {state.waitingWeek
            ? `${state.name} has a one-week unpaid waiting period.`
            : `${state.name} pays from your first eligible week, no waiting period.`}
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link
            href={`/${state.slug}`}
            className="text-blue-700 hover:text-blue-900 underline"
          >
            {state.name} guide →
          </Link>
          <a
            href={state.filingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 underline"
          >
            File / certify at {state.abbreviation} portal →
          </a>
          <button
            onClick={onEdit}
            className="text-gray-700 hover:text-gray-900 underline"
          >
            Edit my claim
          </button>
          <button
            onClick={onForget}
            className="text-red-700 hover:text-red-900 underline"
          >
            Forget my claim
          </button>
        </div>
      </div>

      <p className="text-xs text-gray-500">
        This dashboard is a guide, not legal or financial advice. Numbers shown
        use {state.name}&apos;s maximum weekly benefit; your actual benefit is
        determined by the state. All data is stored only in this browser.
      </p>
    </div>
  );
}

function Stat({
  label,
  primary,
  secondary,
}: {
  label: string;
  primary: string;
  secondary?: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="text-xs uppercase tracking-wide text-gray-500 mb-1">
        {label}
      </div>
      <div className="text-2xl font-bold text-gray-900">{primary}</div>
      {secondary && (
        <div className="text-xs text-gray-500 mt-1">{secondary}</div>
      )}
    </div>
  );
}

// -- Phase content ------------------------------------------------------

const PHASE_TITLES: Record<ClaimPhase, string> = {
  waiting_week: "You're in your waiting week",
  early_claim: "Awaiting your first payment",
  active: "Active claim",
  wind_down: "Your benefits are running out",
  exhausted: "Your benefits have ended",
};

function PhaseBanner({
  phase,
  stateName,
}: {
  phase: ClaimPhase;
  stateName: string;
}) {
  const colors: Record<ClaimPhase, string> = {
    waiting_week: "bg-amber-50 border-amber-200 text-amber-900",
    early_claim: "bg-blue-50 border-blue-200 text-blue-900",
    active: "bg-green-50 border-green-200 text-green-900",
    wind_down: "bg-orange-50 border-orange-200 text-orange-900",
    exhausted: "bg-gray-100 border-gray-300 text-gray-900",
  };
  return (
    <div className={`border rounded-lg p-5 ${colors[phase]}`}>
      <div className="text-xs uppercase tracking-wide opacity-70 mb-1">
        Where you are
      </div>
      <h2 className="text-2xl font-bold">{PHASE_TITLES[phase]}</h2>
      <p className="text-sm mt-1 opacity-90">
        Tracking your {stateName} unemployment claim.
      </p>
    </div>
  );
}

function PhaseGuidance({
  phase,
  snapshot,
  state,
}: {
  phase: ClaimPhase;
  snapshot: ClaimSnapshot;
  state: StateData;
}) {
  return (
    <section className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-3">
        What&apos;s normal right now, and what to do
      </h3>
      <div className="text-gray-700 space-y-3 leading-relaxed text-sm">
        {phase === "waiting_week" && (
          <>
            <p>
              {state.name} requires a one-week unpaid waiting period before
              paid benefits begin. <strong>You will not get paid for this
              week, even though you are eligible.</strong> Most first-time
              claimants miss this and assume their first cert disqualified
              them. It didn&apos;t.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Your first cert is due Sunday,{" "}
                <strong>{formatShortDate(snapshot.nextCertDate)}</strong>. File
                it. The week is unpaid but it has to be certified to count.
              </li>
              <li>
                Register on {state.name}&apos;s separate workforce portal if
                you haven&apos;t. Most states block payment until you do.
              </li>
              <li>
                Start logging work-search activities this week. {state.name}{" "}
                audits work search.
              </li>
            </ul>
          </>
        )}

        {phase === "early_claim" && (
          <>
            <p>
              You&apos;ve filed and you&apos;re past the waiting week. Most
              claimants in {state.name} see their first payment about{" "}
              <strong>2–4 weeks after filing</strong>, often the Tuesday or
              Wednesday after their first paid certification clears.
            </p>
            {snapshot.estimatedFirstPaymentDate && (
              <p>
                Rough first-payment estimate:{" "}
                <strong>
                  {formatShortDate(snapshot.estimatedFirstPaymentDate)}
                </strong>{" "}
                ({relativeDays(snapshot.estimatedFirstPaymentDate)}). If
                it&apos;s a week past that and nothing arrives, your claim is
                probably stuck on adjudication or ID verification.
              </p>
            )}
            <ul className="list-disc list-inside space-y-1">
              <li>
                Cert every Sunday. One missed cert pauses payment.
              </li>
              <li>
                Watch for state mail (paper). Monetary determinations and
                appeal-deadline letters often only arrive by mail.
              </li>
              <li>
                If you got a determination in the mail, read every line. The
                appeal deadline is short (usually 10–30 days) and missing it
                forfeits the right to challenge.
              </li>
            </ul>
          </>
        )}

        {phase === "active" && (
          <>
            <p>
              Steady-state claim. Cert weekly, log work-search activity,
              monitor for any state notices that pause your claim.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Next cert: <strong>{formatShortDate(snapshot.nextCertDate)}</strong>.
                The portal opens Sunday morning in most states.
              </li>
              <li>
                You&apos;ve used <strong>{snapshot.weeksUsed}</strong> of{" "}
                <strong>{state.maxWeeks}</strong> weeks.{" "}
                {snapshot.weeksRemaining} remaining (through{" "}
                {formatShortDate(snapshot.expectedEndDate)}).
              </li>
              <li>
                If you take a part-time gig, report the earnings. Most states
                allow partial benefits but penalize unreported wages with
                disqualification + overpayment.
              </li>
              <li>
                If you&apos;ve been claiming 8+ weeks, this is a normal
                checkpoint to revisit COBRA/ACA, your budget, and
                interview-pipeline health. You&apos;re not failing. The market
                is hard.
              </li>
            </ul>
          </>
        )}

        {phase === "wind_down" && (
          <>
            <p>
              <strong>You have {snapshot.weeksRemaining} weeks left</strong>{" "}
              before your {state.name} benefits exhaust on{" "}
              {formatShortDate(snapshot.expectedEndDate)}. Time to plan.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Check whether you qualify for any extension program.{" "}
                {state.name} sometimes activates Extended Benefits during high
                unemployment periods.
              </li>
              <li>
                If you&apos;re close to landing a job, some states let you
                claim partial benefits while you ramp up at a new role.
              </li>
              <li>
                Lock in health insurance now. COBRA election windows and ACA
                Special Enrollment Periods both have hard deadlines. Don&apos;t
                wait for the last week.
              </li>
              <li>
                If you applied for SNAP / Medicaid / utility assistance during
                the claim, check renewal dates. They don&apos;t auto-extend.
              </li>
            </ul>
          </>
        )}

        {phase === "exhausted" && (
          <>
            <p>
              Your {state.name} benefits ended on{" "}
              <strong>{formatShortDate(snapshot.expectedEndDate)}</strong>{" "}
              after {state.maxWeeks} weeks. There&apos;s no more standard UI
              payment from this claim.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                If you&apos;re now working, congratulations. Your earnings
                from the new job will count toward a future base period if you
                ever need to file again.
              </li>
              <li>
                If you&apos;re still searching, check whether {state.name} has
                any extension or workforce-development program currently
                active. The state DOL is the source of truth.
              </li>
              <li>
                Consider Medicaid (income-based, no enrollment window) or ACA
                marketplace (60-day SEP after losing job-based coverage).
              </li>
              <li>
                Your past benefits are taxable. Watch for a 1099-G in January
                from {state.name}.
              </li>
            </ul>
          </>
        )}

        <p className="text-xs text-gray-500 pt-2 border-t border-gray-100">
          The exact timing of certifications, payments, and rules vary by
          state. Always confirm with the {state.name} unemployment office.
        </p>
      </div>
    </section>
  );
}
