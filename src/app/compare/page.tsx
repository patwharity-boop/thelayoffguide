import type { Metadata } from "next";
import Link from "next/link";
import { states } from "@/data/states";

export const metadata: Metadata = {
  title: "Compare Unemployment Benefits by State",
  description:
    "Compare unemployment benefits across all 50 states. See max weekly benefits, duration, waiting weeks, and total potential benefits side by side.",
};

export default function ComparePage() {
  const sorted = [...states].sort(
    (a, b) => b.maxWeeklyBenefit - a.maxWeeklyBenefit
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">
        Compare Unemployment Benefits by State
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        All 50 states ranked by maximum weekly benefit amount. Updated for{" "}
        {new Date().getFullYear()}.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="py-3 pr-4 text-sm font-semibold text-gray-600">
                #
              </th>
              <th className="py-3 pr-4 text-sm font-semibold text-gray-600">
                State
              </th>
              <th className="py-3 pr-4 text-sm font-semibold text-gray-600 text-right">
                Max Weekly
              </th>
              <th className="py-3 pr-4 text-sm font-semibold text-gray-600 text-right">
                Max Weeks
              </th>
              <th className="py-3 pr-4 text-sm font-semibold text-gray-600 text-right">
                Waiting Week
              </th>
              <th className="py-3 text-sm font-semibold text-gray-600 text-right">
                Max Total
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((state, i) => (
              <tr
                key={state.slug}
                className="border-b border-gray-100 hover:bg-blue-50 transition-colors"
              >
                <td className="py-3 pr-4 text-sm text-gray-400">{i + 1}</td>
                <td className="py-3 pr-4">
                  <Link
                    href={`/${state.slug}`}
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    {state.name}
                  </Link>
                </td>
                <td className="py-3 pr-4 text-right font-medium">
                  ${state.maxWeeklyBenefit}
                </td>
                <td className="py-3 pr-4 text-right text-gray-600">
                  {state.maxWeeks}
                </td>
                <td className="py-3 pr-4 text-right">
                  <span
                    className={`text-sm ${state.waitingWeek ? "text-red-500" : "text-green-600"}`}
                  >
                    {state.waitingWeek ? "Yes" : "No"}
                  </span>
                </td>
                <td className="py-3 text-right font-medium">
                  $
                  {(
                    state.maxWeeklyBenefit * state.maxWeeks
                  ).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Insights */}
      <section className="mt-8 bg-gray-50 rounded-lg p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            <strong>Highest weekly benefit:</strong> Washington state at $1,152/week,
            followed by Massachusetts at $1,105/week (with dependents).
          </p>
          <p>
            <strong>Lowest weekly benefit:</strong> Mississippi at $235/week.
          </p>
          <p>
            <strong>Shortest duration:</strong> Florida and North Carolina at just 12
            weeks, less than half of what most states offer.
          </p>
          <p>
            <strong>Longest duration:</strong> Montana at 28 weeks.
          </p>
          <p>
            <strong>No waiting week:</strong> Several states let you start
            collecting immediately, including Texas, New York, Connecticut, and
            others. States with a waiting week require you to wait one unpaid
            week before benefits begin.
          </p>
        </div>
      </section>
    </div>
  );
}
