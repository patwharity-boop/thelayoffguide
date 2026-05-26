import Link from "next/link";
import { states } from "@/data/states";
import { buildPageMetadata } from "@/lib/metadata";
import ComparisonTable from "./ComparisonTable";
import AuthorBlock from "@/components/AuthorBlock";
import {
  AUTHOR_ID,
  AUTHOR_NAME,
  AUTHOR_DESCRIPTION,
  LAST_REVIEWED,
  SITE_URL,
} from "@/data/site";

export const metadata = buildPageMetadata({
  title:
    "Unemployment Benefits by State 2026: Compare Max Weekly Benefit & Duration",
  description:
    "All 50 states compared by maximum weekly unemployment benefit, weeks of duration, waiting week, and total payout. Sortable table updated for 2026. From $235/wk in Mississippi to $1,152/wk in Washington.",
  path: "/compare",
});

export default function ComparePage() {
  // Pre-compute the editorial highlights at request time. Cheap, no client
  // JS needed for these summaries.
  const byWeekly = [...states].sort(
    (a, b) => b.maxWeeklyBenefit - a.maxWeeklyBenefit
  );
  const byTotal = [...states].sort(
    (a, b) =>
      b.maxWeeklyBenefit * b.maxWeeks - a.maxWeeklyBenefit * a.maxWeeks
  );
  const byWeeks = [...states].sort((a, b) => b.maxWeeks - a.maxWeeks);

  const top5Weekly = byWeekly.slice(0, 5);
  const bottom5Weekly = byWeekly.slice(-5).reverse();
  const top5Total = byTotal.slice(0, 5);
  const noWaitingWeek = states.filter((s) => !s.waitingWeek);
  const shortest = byWeeks.slice(-3).reverse(); // ascending weeks
  const longest = byWeeks.slice(0, 3);

  const fmt = (n: number) =>
    n.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">
          All States
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Compare by State</span>
      </nav>

      <AuthorBlock variant="compact" />

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Unemployment Benefits by State, 2026
        </h1>
        <p className="text-lg text-gray-600">
          Where you live decides how much unemployment pays. The gap between
          the best and worst states is roughly {fmt((byTotal[0].maxWeeklyBenefit * byTotal[0].maxWeeks) - (byTotal[byTotal.length - 1].maxWeeklyBenefit * byTotal[byTotal.length - 1].maxWeeks))} in
          total possible benefits. All 50 states sortable below.
        </p>
      </header>

      {/* Quick stats banner */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="text-xs uppercase tracking-wide text-green-800 mb-1">
            Highest weekly
          </div>
          <div className="text-2xl font-bold text-green-900">
            {fmt(byWeekly[0].maxWeeklyBenefit)}
          </div>
          <div className="text-xs text-green-700 mt-1">
            <Link href={`/${byWeekly[0].slug}`} className="underline">
              {byWeekly[0].name}
            </Link>
          </div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="text-xs uppercase tracking-wide text-red-800 mb-1">
            Lowest weekly
          </div>
          <div className="text-2xl font-bold text-red-900">
            {fmt(byWeekly[byWeekly.length - 1].maxWeeklyBenefit)}
          </div>
          <div className="text-xs text-red-700 mt-1">
            <Link
              href={`/${byWeekly[byWeekly.length - 1].slug}`}
              className="underline"
            >
              {byWeekly[byWeekly.length - 1].name}
            </Link>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="text-xs uppercase tracking-wide text-blue-800 mb-1">
            Longest duration
          </div>
          <div className="text-2xl font-bold text-blue-900">
            {byWeeks[0].maxWeeks} wks
          </div>
          <div className="text-xs text-blue-700 mt-1">
            <Link href={`/${byWeeks[0].slug}`} className="underline">
              {byWeeks[0].name}
            </Link>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="text-xs uppercase tracking-wide text-amber-800 mb-1">
            No waiting week
          </div>
          <div className="text-2xl font-bold text-amber-900">
            {noWaitingWeek.length} states
          </div>
          <div className="text-xs text-amber-700 mt-1">
            paid from week 1
          </div>
        </div>
      </section>

      <ComparisonTable states={states} />

      {/* Editorial highlights */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h2 className="font-bold text-gray-900 mb-2">
            Top 5 by weekly benefit
          </h2>
          <ol className="space-y-1.5 text-sm text-gray-700">
            {top5Weekly.map((s, i) => (
              <li key={s.slug}>
                <span className="text-gray-400 mr-2">{i + 1}.</span>
                <Link
                  href={`/${s.slug}`}
                  className="text-blue-700 hover:text-blue-900 underline"
                >
                  {s.name}
                </Link>
                <span className="text-gray-600">
                  ,{fmt(s.maxWeeklyBenefit)}/wk
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h2 className="font-bold text-gray-900 mb-2">
            Bottom 5 by weekly benefit
          </h2>
          <ol className="space-y-1.5 text-sm text-gray-700">
            {bottom5Weekly.map((s, i) => (
              <li key={s.slug}>
                <span className="text-gray-400 mr-2">{i + 1}.</span>
                <Link
                  href={`/${s.slug}`}
                  className="text-blue-700 hover:text-blue-900 underline"
                >
                  {s.name}
                </Link>
                <span className="text-gray-600">
                  ,{fmt(s.maxWeeklyBenefit)}/wk
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h2 className="font-bold text-gray-900 mb-2">
            Top 5 by total potential benefit
          </h2>
          <p className="text-xs text-gray-500 mb-2">
            Max weekly × max weeks
          </p>
          <ol className="space-y-1.5 text-sm text-gray-700">
            {top5Total.map((s, i) => (
              <li key={s.slug}>
                <span className="text-gray-400 mr-2">{i + 1}.</span>
                <Link
                  href={`/${s.slug}`}
                  className="text-blue-700 hover:text-blue-900 underline"
                >
                  {s.name}
                </Link>
                <span className="text-gray-600">
                  ,{fmt(s.maxWeeklyBenefit * s.maxWeeks)}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h2 className="font-bold text-gray-900 mb-2">
            States with no waiting week ({noWaitingWeek.length})
          </h2>
          <p className="text-xs text-gray-500 mb-2">
            Paid from your first eligible week
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            {noWaitingWeek.map((s, i) => (
              <span key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="text-blue-700 hover:text-blue-900 underline"
                >
                  {s.name}
                </Link>
                {i < noWaitingWeek.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h2 className="font-bold text-gray-900 mb-2">
            Shortest benefit duration
          </h2>
          <ol className="space-y-1.5 text-sm text-gray-700">
            {shortest.map((s, i) => (
              <li key={s.slug}>
                <span className="text-gray-400 mr-2">{i + 1}.</span>
                <Link
                  href={`/${s.slug}`}
                  className="text-blue-700 hover:text-blue-900 underline"
                >
                  {s.name}
                </Link>
                <span className="text-gray-600">
                  ,{s.maxWeeks} weeks
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h2 className="font-bold text-gray-900 mb-2">
            Longest benefit duration
          </h2>
          <ol className="space-y-1.5 text-sm text-gray-700">
            {longest.map((s, i) => (
              <li key={s.slug}>
                <span className="text-gray-400 mr-2">{i + 1}.</span>
                <Link
                  href={`/${s.slug}`}
                  className="text-blue-700 hover:text-blue-900 underline"
                >
                  {s.name}
                </Link>
                <span className="text-gray-600">
                  ,{s.maxWeeks} weeks
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Methodology + sourcing */}
      <section className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Methodology</h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          Maximum weekly benefit amounts reflect each state&apos;s posted
          ceiling for 2026, sourced from each state&apos;s Department of Labor
          or workforce agency. Total potential benefits are calculated as the
          maximum weekly amount multiplied by the state&apos;s standard
          duration cap. Actual benefits received depend on the
          claimant&apos;s base period wages, and most claimants receive less
          than the maximum.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          Several states pay supplemental dependent allowances on top of the
          base weekly benefit, which can raise the effective maximum in
          certain household configurations. The table above shows the base
          maximum without dependents.
        </p>
        <p className="text-sm text-gray-700">
          For specific eligibility rules, filing instructions, and waiting
          period mechanics in any state, see that state&apos;s guide on the
          site. For a personalized estimate based on your own wages, use the
          benefit estimator on any state page or the{" "}
          <Link
            href="/eligibility"
            className="text-blue-700 hover:text-blue-900 underline"
          >
            eligibility quiz
          </Link>
          .
        </p>
      </section>

      {/* Journalist/data note */}
      <section className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-5 text-sm">
        <p className="text-blue-900 font-medium mb-1">
          For journalists and researchers
        </p>
        <p className="text-blue-900">
          This data is updated for 2026 and free to cite. Please link back to
          this page (
          <code className="text-xs bg-white px-1 py-0.5 border border-blue-200 rounded">
            thelayoffguide.com/compare
          </code>
          ) when using the figures.
        </p>
      </section>

      <AuthorBlock variant="expanded" />

      {/* Dataset JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            name: "US Unemployment Benefits by State, 2026",
            description:
              "Maximum weekly unemployment benefit amount, maximum weeks of duration, and waiting-week status for all 50 US states in 2026.",
            url: `${SITE_URL}/compare`,
            license: "https://creativecommons.org/licenses/by/4.0/",
            creator: {
              "@type": "Person",
              "@id": AUTHOR_ID,
              name: AUTHOR_NAME,
              description: AUTHOR_DESCRIPTION,
              url: `${SITE_URL}/about`,
            },
            publisher: {
              "@type": "Organization",
              name: "The Layoff Guide",
              url: SITE_URL,
            },
            datePublished: LAST_REVIEWED,
            dateModified: LAST_REVIEWED,
            keywords: [
              "unemployment benefits by state",
              "maximum weekly benefit",
              "unemployment 2026",
              "state unemployment comparison",
              "weeks of benefits by state",
            ],
            variableMeasured: [
              "Maximum weekly unemployment benefit",
              "Maximum weeks of benefit duration",
              "Waiting week requirement",
              "Maximum total benefit",
            ],
          }),
        }}
      />
    </div>
  );
}
