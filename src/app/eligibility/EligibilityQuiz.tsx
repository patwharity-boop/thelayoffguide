"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { states, getStateBySlug } from "@/data/states";

const STORAGE_KEY = "lg-eligibility-quiz-v1";

// Quiz inputs are deliberately small and discrete so the user can complete
// the whole thing in under a minute on mobile. The outcome tiers are
// intentionally probabilistic, eligibility is determined by the state, not by
// a 6-question quiz, but we can give a strong signal of the most likely
// outcome and what to do next.

type Reason =
  | "laid-off"
  | "fired-not-misconduct"
  | "fired-misconduct"
  | "voluntary-quit"
  | "1099-contractor";

type Tenure = "lt6mo" | "6-12mo" | "gt12mo";

type Available = "yes" | "no";

interface QuizState {
  reason: Reason | null;
  tenure: Tenure | null;
  stateSlug: string | null;
  available: Available | null;
  highQuarterStr: string;
}

const initialQuiz: QuizState = {
  reason: null,
  tenure: null,
  stateSlug: null,
  available: null,
  highQuarterStr: "",
};

type Tier = "strong" | "likely" | "maybe" | "unlikely";

interface Result {
  tier: Tier;
  headline: string;
  body: string;
  nextSteps: string[];
}

function parseMoney(input: string): number {
  const cleaned = input.replace(/[$,\s]/g, "");
  const n = parseFloat(cleaned);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

function computeResult(quiz: QuizState): Result | null {
  const { reason, tenure, stateSlug, available, highQuarterStr } = quiz;
  if (!reason || !tenure || !stateSlug || !available) return null;

  const state = getStateBySlug(stateSlug);
  if (!state) return null;

  const stateName = state.name;
  const wages = parseMoney(highQuarterStr);

  // Strong disqualifiers come first, in priority order.
  if (reason === "fired-misconduct") {
    return {
      tier: "unlikely",
      headline: "You'll likely face a misconduct dispute",
      body: `If your employer in ${stateName} reports your separation as "discharged for misconduct," your initial claim will probably be denied. The good news: the burden is usually on the employer to prove misconduct, and a large share of appeals win. Misconduct typically means willful, deliberate behavior, not poor performance, missed targets, or personality issues.`,
      nextSteps: [
        "File anyway. The state, not your employer, makes the eligibility call. Don't self-disqualify.",
        "If denied, file an appeal within the deadline (10-30 days depending on state). Most appeals succeed when the worker shows up prepared.",
        `Read the ${stateName} guide for the state-specific appeal process and deadlines.`,
        "Consider reaching out to a free legal aid clinic if the misconduct claim looks contested.",
      ],
    };
  }

  if (reason === "voluntary-quit") {
    return {
      tier: "unlikely",
      headline: "Voluntary quits are rarely covered, but exceptions exist",
      body: `Most states require that you separated through no fault of your own. A voluntary quit is usually disqualifying. But ${stateName} (like every state) has good-cause exceptions: unsafe working conditions, harassment that the employer failed to address, a medical issue that made the job impossible, or quitting to follow a spouse for a job. If any of those apply, you may still qualify.`,
      nextSteps: [
        "If you had a documented good-cause reason, file your claim and clearly explain it on the separation question.",
        `Read the ${stateName} guide for state-specific good-cause exceptions.`,
        "If denied, appeal. Good-cause cases are common appeals and frequently succeed when documented.",
      ],
    };
  }

  if (reason === "1099-contractor") {
    return {
      tier: "unlikely",
      headline: "Independent contractors usually don't qualify",
      body: `Standard unemployment insurance only covers W-2 employees whose employers paid into the state UI fund. As a 1099 contractor, your client did not pay UI taxes on your behalf, so you have no base-period wages from a covered employer. The Pandemic Unemployment Assistance (PUA) program that covered 1099 workers ended in 2021. Some states briefly opened state-funded analogs but most are inactive.`,
      nextSteps: [
        "If you believe you were misclassified as 1099 when you should have been a W-2 employee, you can file a claim and the state will investigate. Misclassification is real and the state may rule in your favor.",
        `Check ${stateName}'s current PUA-equivalent program, if any. Most states do not have one currently.`,
        "Apply for SNAP, Medicaid, and any state hardship grants. These are not employment-tied and may help bridge the gap.",
      ],
    };
  }

  if (available === "no") {
    return {
      tier: "unlikely",
      headline: "Most states require you to be able and available to work",
      body: `${stateName}, like nearly every state, requires that claimants be able to work, available for full-time work, and actively searching. If you're not currently able or available (for example, due to a medical condition, school, or caregiving), unemployment benefits are usually not the right program right now. State disability or family-leave programs may be a better fit.`,
      nextSteps: [
        "If your unavailability is short-term and you'll be available again soon, you can file when that becomes true.",
        "If your unavailability is medical, look into state Disability Insurance (CA, NJ, NY, RI, HI have programs) or federal SSDI.",
        "If your unavailability is caregiving, check whether your state has a Paid Family Leave program.",
      ],
    };
  }

  if (tenure === "lt6mo") {
    return {
      tier: "maybe",
      headline: "Short tenure, eligibility depends on your wages",
      body: `${stateName} requires a minimum amount of base-period wages, not a minimum number of months worked. If you earned enough in your highest quarter (typically a few thousand dollars), you can qualify even with under 6 months of recent work. Some states also let you use an "alternate base period" that includes more recent earnings if your standard base period falls short.`,
      nextSteps: [
        "File anyway. The state will compute your monetary eligibility based on actual wages reported by your employer.",
        wages > 0
          ? `You entered ${formatMoney(wages)} as your highest quarter. ${
              wages >= 3000
                ? "That's likely above the threshold in most states."
                : "That may be below the threshold; the state will determine."
            }`
          : "If you know your highest-quarter gross wages, the BenefitEstimator on the state page can give you a rough monetary determination.",
        `Read the ${stateName} guide for the exact wage threshold and base-period rules.`,
      ],
    };
  }

  // Strong-qualify path: laid-off OR fired-not-misconduct, available, 6+ months tenure.
  if (reason === "laid-off" || reason === "fired-not-misconduct") {
    const reasonLabel =
      reason === "laid-off"
        ? "Layoffs and reductions in force are universally covered."
        : "Being fired without misconduct (poor performance, role elimination, mutual exit) is also covered.";
    return {
      tier: "strong",
      headline: `You almost certainly qualify in ${stateName}`,
      body: `Based on your answers, you meet the core eligibility tests for ${stateName} unemployment insurance. ${reasonLabel} You have at least 6 months of recent tenure and you're available to work. The remaining question is monetary: did you earn enough in your base period? Most W-2 workers do.`,
      nextSteps: [
        "File your claim today. Your benefits start the Sunday of the week you file, not the date of separation. Every day you wait is benefit days lost.",
        `Use the ${stateName} guide on this site for the exact filing portal, documents, and waiting-week rules.`,
        "If your monetary determination comes back lower than expected, ask whether you can use an alternate base period.",
      ],
    };
  }

  return {
    tier: "likely",
    headline: "You probably qualify, but read the state guide for specifics",
    body: `Based on your answers, you fit the general profile of someone who qualifies for unemployment in ${stateName}. The exact monetary determination and any state-specific rules will be made by ${stateName}'s unemployment office once you file.`,
    nextSteps: [
      "File your claim. Your claim's effective date is the Sunday of the filing week.",
      `Read the ${stateName} guide for state-specific documents, portal links, and waiting-week behavior.`,
    ],
  };
}

function formatMoney(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

const TIER_STYLE: Record<Tier, string> = {
  strong: "bg-green-50 border-green-300 text-green-900",
  likely: "bg-blue-50 border-blue-300 text-blue-900",
  maybe: "bg-amber-50 border-amber-300 text-amber-900",
  unlikely: "bg-orange-50 border-orange-300 text-orange-900",
};

export default function EligibilityQuiz() {
  const [quiz, setQuiz] = useState<QuizState>(initialQuiz);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setQuiz({ ...initialQuiz, ...parsed });
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(quiz));
    } catch {
      // ignore
    }
  }, [quiz, hydrated]);

  const result = computeResult(quiz);

  const reset = () => {
    setQuiz(initialQuiz);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <section className="bg-white border border-gray-200 rounded-lg p-6 mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Quick eligibility check
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Six questions, under a minute. Your answers stay in your browser.
      </p>

      <div className="space-y-6">
        <Question
          label="1. Why did you stop working at your most recent job?"
          options={[
            { id: "laid-off", text: "Laid off, position eliminated, or company reduced staff" },
            { id: "fired-not-misconduct", text: "Fired (performance, role fit, mutual exit), but not for misconduct" },
            { id: "fired-misconduct", text: "Fired for cause that the employer is calling misconduct" },
            { id: "voluntary-quit", text: "I voluntarily quit" },
            { id: "1099-contractor", text: "I was a 1099 contractor or self-employed" },
          ]}
          value={quiz.reason}
          onChange={(v) => setQuiz({ ...quiz, reason: v as Reason })}
        />

        <Question
          label="2. How long had you been working in the last 18 months?"
          options={[
            { id: "lt6mo", text: "Less than 6 months total" },
            { id: "6-12mo", text: "6 to 12 months" },
            { id: "gt12mo", text: "More than 12 months" },
          ]}
          value={quiz.tenure}
          onChange={(v) => setQuiz({ ...quiz, tenure: v as Tenure })}
        />

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            3. Which state did you primarily work in?
          </label>
          <select
            value={quiz.stateSlug ?? ""}
            onChange={(e) =>
              setQuiz({ ...quiz, stateSlug: e.target.value || null })
            }
            className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Pick a state...</option>
            {states.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
          {quiz.stateSlug && (
            <p className="text-xs text-gray-600 mt-1">
              If you worked remotely for an out-of-state employer, you usually
              file in the state where you actually worked, which for remote
              employees is typically where you live.
            </p>
          )}
        </div>

        <Question
          label="4. Are you currently able and available to work full-time?"
          options={[
            { id: "yes", text: "Yes, I'm able to work and looking" },
            { id: "no", text: "No, not currently (medical, caregiving, or other)" },
          ]}
          value={quiz.available}
          onChange={(v) => setQuiz({ ...quiz, available: v as Available })}
        />

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            5. Optional: your gross wages in your highest-earning quarter (3-month window) of the last 18 months
          </label>
          <input
            type="text"
            inputMode="decimal"
            placeholder="e.g. 12,000"
            value={quiz.highQuarterStr}
            onChange={(e) =>
              setQuiz({ ...quiz, highQuarterStr: e.target.value })
            }
            className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            aria-label="Highest quarter gross wages, optional"
          />
          <p className="text-xs text-gray-600 mt-1">
            Used to flag potential monetary-eligibility issues. Skip if you don&apos;t know.
          </p>
        </div>
      </div>

      {result && (
        <div
          className={`mt-8 border-2 rounded-lg p-6 ${TIER_STYLE[result.tier]}`}
        >
          <h3 className="text-xl font-bold mb-2">{result.headline}</h3>
          <p className="text-sm leading-relaxed mb-4">{result.body}</p>
          <div className="text-sm">
            <strong className="block mb-2">What to do next:</strong>
            <ul className="list-disc list-inside space-y-1.5">
              {result.nextSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>
          {quiz.stateSlug && (
            <div className="mt-4 pt-4 border-t border-current/20 flex flex-wrap gap-3 text-sm">
              <Link
                href={`/${quiz.stateSlug}`}
                className="underline font-medium"
              >
                {getStateBySlug(quiz.stateSlug)?.name} guide →
              </Link>
              <Link href="/my-claim" className="underline font-medium">
                Track my claim →
              </Link>
            </div>
          )}
          <button
            type="button"
            onClick={reset}
            className="mt-4 text-xs underline opacity-70 hover:opacity-100"
          >
            Reset quiz
          </button>
        </div>
      )}

      <p className="text-xs text-gray-500 mt-6">
        This is general guidance, not legal advice. The state, not this site,
        determines actual eligibility once you file.
      </p>
    </section>
  );
}

function Question({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: string; text: string }[];
  value: string | null;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="block text-sm font-medium text-gray-900 mb-2">
        {label}
      </legend>
      <div className="space-y-2">
        {options.map((opt) => (
          <label
            key={opt.id}
            className={`flex items-start gap-3 p-3 border rounded-md cursor-pointer transition-colors ${
              value === opt.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            }`}
          >
            <input
              type="radio"
              name={label}
              value={opt.id}
              checked={value === opt.id}
              onChange={() => onChange(opt.id)}
              className="mt-1 shrink-0"
            />
            <span className="text-sm text-gray-700">{opt.text}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
