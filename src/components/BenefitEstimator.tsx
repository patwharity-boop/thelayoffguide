"use client";

import { useEffect, useState } from "react";

interface BenefitEstimatorProps {
  stateName: string;
  stateAbbr: string;
  maxWeeklyBenefit: number;
  maxWeeks: number;
}

// Most US states calculate the weekly benefit amount as roughly 1/26th of
// the claimant's highest base-period quarter wages, capped at the state max.
// Specific divisors vary (Arizona uses 1/25, some states use 1/52 of annual,
// etc.) but 1/26 is the most common and a reasonable v1 estimator. The
// disclaimer below makes the approximation explicit.
const DEFAULT_DIVISOR = 26;

function formatMoney(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function parseMoney(input: string): number {
  // Strip $ and commas; treat empty/garbage as 0
  const cleaned = input.replace(/[$,\s]/g, "");
  const n = parseFloat(cleaned);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

export default function BenefitEstimator({
  stateName,
  stateAbbr,
  maxWeeklyBenefit,
  maxWeeks,
}: BenefitEstimatorProps) {
  const storageKey = `lg-benefit-estimate-${stateAbbr.toLowerCase()}`;
  const [highQuarter, setHighQuarter] = useState<string>("");
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage on mount so a returning visitor sees their
  // last input. SSR can't read localStorage, so we initialize state with ""
  // and sync after hydration. The set-state-in-effect lint rule is the
  // correct fit for most cases but the wrong fit for one-shot localStorage
  // hydration in a Next.js SSR app, hence the targeted suppression.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setHighQuarter(saved);
      }
    } catch {
      // localStorage unavailable, fall back to in-memory only
    }
    setHydrated(true);
  }, [storageKey]);

  // Persist after hydration so we never overwrite a real saved value with ""
  useEffect(() => {
    if (!hydrated) return;
    try {
      if (highQuarter) {
        localStorage.setItem(storageKey, highQuarter);
      } else {
        localStorage.removeItem(storageKey);
      }
    } catch {
      // ignore
    }
  }, [highQuarter, storageKey, hydrated]);

  const wages = parseMoney(highQuarter);
  const rawWeekly = Math.round(wages / DEFAULT_DIVISOR);
  const estimatedWeekly = wages > 0 ? Math.min(rawWeekly, maxWeeklyBenefit) : 0;
  const estimatedTotal = estimatedWeekly * maxWeeks;
  const isCapped = wages > 0 && rawWeekly > maxWeeklyBenefit;
  const showResult = wages > 0;

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Estimate Your Weekly Benefit
      </h2>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <p className="text-gray-700 mb-4">
          Enter the gross wages from your highest-earning quarter (a 3-month
          window) over roughly the last 18 months. {stateName} bases your
          weekly benefit on that quarter.
        </p>

        <label className="block mb-4">
          <span className="block text-sm font-medium text-gray-900 mb-1">
            Your highest quarter&apos;s gross wages
          </span>
          <input
            type="text"
            inputMode="decimal"
            value={highQuarter}
            onChange={(e) => setHighQuarter(e.target.value)}
            placeholder="e.g. 12,000"
            className="w-full max-w-xs px-3 py-2 border border-amber-300 rounded-md text-base bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            aria-label={`Your highest quarter's gross wages in ${stateName}`}
          />
        </label>

        {showResult && (
          <div className="bg-white rounded-md border border-amber-200 p-4 mb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-600">Estimated weekly</div>
                <div className="text-2xl font-bold text-amber-800">
                  {formatMoney(estimatedWeekly)}
                  <span className="text-base font-normal text-gray-600">
                    {" "}/ week
                  </span>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">
                  Estimated total ({maxWeeks} weeks max)
                </div>
                <div className="text-2xl font-bold text-amber-800">
                  {formatMoney(estimatedTotal)}
                </div>
              </div>
            </div>
            {isCapped && (
              <p className="mt-3 text-sm text-amber-900">
                Capped at the {stateName} maximum of{" "}
                {formatMoney(maxWeeklyBenefit)}/week. Without the cap, the
                formula would estimate {formatMoney(rawWeekly)}/week.
              </p>
            )}
          </div>
        )}

        <p className="text-xs text-gray-600 leading-relaxed">
          <strong>How this is estimated:</strong> a typical 1/{DEFAULT_DIVISOR}{" "}
          high-quarter formula, capped at {stateName}&apos;s{" "}
          {formatMoney(maxWeeklyBenefit)}/week and {maxWeeks}-week maximums.
          Your actual benefit is calculated by the {stateAbbr} unemployment
          office and may differ from this estimate. Use it as a planning
          number, not a final figure.
        </p>
      </div>
    </section>
  );
}
