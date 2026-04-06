import Link from "next/link";
import { states } from "@/data/states";

export default function HomePage() {
  const grouped = states.reduce(
    (acc, state) => {
      const letter = state.name[0];
      if (!acc[letter]) acc[letter] = [];
      acc[letter].push(state);
      return acc;
    },
    {} as Record<string, typeof states>
  );

  const sortedLetters = Object.keys(grouped).sort();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How to File for Unemployment in Your State
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Just lost your job? We&apos;ve been there. Here&apos;s everything you
          need to know about filing for unemployment — in plain English, not
          government jargon.
        </p>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-700">50</div>
          <div className="text-sm text-gray-600">State Guides</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-700">$235–$1,152</div>
          <div className="text-sm text-gray-600">Weekly Benefit Range</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-700">12–28</div>
          <div className="text-sm text-gray-600">Weeks of Benefits</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-700">2026</div>
          <div className="text-sm text-gray-600">Updated Data</div>
        </div>
      </section>

      {/* State List */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Select Your State
        </h2>

        {sortedLetters.map((letter) => (
          <div key={letter} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-400 mb-2">
              {letter}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {grouped[letter].map((state) => (
                <Link
                  key={state.slug}
                  href={`/${state.slug}`}
                  className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">
                    {state.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    Up to ${state.maxWeeklyBenefit}/wk
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Bottom Info */}
      <section className="mt-12 bg-gray-50 rounded-lg p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          What You Need to Know
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>File immediately.</strong> In most states, your benefits
            start the week you file — not when you lost your job. Every week you
            wait is money left on the table.
          </p>
          <p>
            <strong>You probably qualify.</strong> If you were laid off,
            downsized, or let go due to business reasons, you almost certainly
            qualify. Even if you were fired (not for misconduct), you may still
            be eligible.
          </p>
          <p>
            <strong>It&apos;s your money.</strong> Your employer paid into the
            unemployment insurance fund on your behalf. Filing for benefits
            isn&apos;t charity — it&apos;s insurance you&apos;ve already paid
            for.
          </p>
        </div>
      </section>
    </div>
  );
}
