"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { StateData } from "@/data/states";

type SortKey =
  | "weekly"
  | "weeks"
  | "total"
  | "waiting"
  | "name";

type SortDir = "asc" | "desc";

interface ComparisonTableProps {
  states: StateData[];
}

function fmt(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export default function ComparisonTable({ states }: ComparisonTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("weekly");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const sorted = useMemo(() => {
    const arr = [...states];
    arr.sort((a, b) => {
      let cmp = 0;
      switch (sortKey) {
        case "weekly":
          cmp = a.maxWeeklyBenefit - b.maxWeeklyBenefit;
          break;
        case "weeks":
          cmp = a.maxWeeks - b.maxWeeks;
          break;
        case "total":
          cmp =
            a.maxWeeklyBenefit * a.maxWeeks - b.maxWeeklyBenefit * b.maxWeeks;
          break;
        case "waiting":
          // No-waiting-week states first when ascending
          cmp = Number(a.waitingWeek) - Number(b.waitingWeek);
          break;
        case "name":
          cmp = a.name.localeCompare(b.name);
          break;
      }
      return sortDir === "asc" ? cmp : -cmp;
    });
    return arr;
  }, [states, sortKey, sortDir]);

  const toggle = (k: SortKey) => {
    if (sortKey === k) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(k);
      // Sensible default direction per column
      setSortDir(k === "name" || k === "waiting" ? "asc" : "desc");
    }
  };

  const indicator = (k: SortKey) =>
    sortKey === k ? (
      <span className="text-blue-600 ml-1">
        {sortDir === "asc" ? "↑" : "↓"}
      </span>
    ) : (
      <span className="text-gray-300 ml-1">↕</span>
    );

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="py-3 pr-4 text-sm font-semibold text-gray-600">
              #
            </th>
            <th className="py-3 pr-4 text-sm font-semibold text-gray-600">
              <button
                type="button"
                onClick={() => toggle("name")}
                className="hover:text-gray-900"
                aria-label="Sort by state name"
              >
                State{indicator("name")}
              </button>
            </th>
            <th className="py-3 pr-4 text-sm font-semibold text-gray-600 text-right">
              <button
                type="button"
                onClick={() => toggle("weekly")}
                className="hover:text-gray-900"
                aria-label="Sort by max weekly benefit"
              >
                Max Weekly{indicator("weekly")}
              </button>
            </th>
            <th className="py-3 pr-4 text-sm font-semibold text-gray-600 text-right">
              <button
                type="button"
                onClick={() => toggle("weeks")}
                className="hover:text-gray-900"
                aria-label="Sort by max weeks"
              >
                Max Weeks{indicator("weeks")}
              </button>
            </th>
            <th className="py-3 pr-4 text-sm font-semibold text-gray-600 text-right">
              <button
                type="button"
                onClick={() => toggle("waiting")}
                className="hover:text-gray-900"
                aria-label="Sort by waiting week"
              >
                Waiting Week{indicator("waiting")}
              </button>
            </th>
            <th className="py-3 text-sm font-semibold text-gray-600 text-right">
              <button
                type="button"
                onClick={() => toggle("total")}
                className="hover:text-gray-900"
                aria-label="Sort by max total benefits"
              >
                Max Total{indicator("total")}
              </button>
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
                  className="font-medium text-blue-700 hover:text-blue-900"
                >
                  {state.name}
                </Link>
              </td>
              <td className="py-3 pr-4 text-right font-medium">
                {fmt(state.maxWeeklyBenefit)}
              </td>
              <td className="py-3 pr-4 text-right text-gray-700">
                {state.maxWeeks}
              </td>
              <td className="py-3 pr-4 text-right">
                <span
                  className={`text-sm ${
                    state.waitingWeek ? "text-red-600" : "text-green-700"
                  }`}
                >
                  {state.waitingWeek ? "Yes" : "No"}
                </span>
              </td>
              <td className="py-3 text-right font-medium">
                {fmt(state.maxWeeklyBenefit * state.maxWeeks)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-gray-500 mt-3">
        Click any column header to sort. Click again to reverse.
      </p>
    </div>
  );
}
