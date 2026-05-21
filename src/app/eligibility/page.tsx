import Link from "next/link";
import EligibilityQuiz from "./EligibilityQuiz";
import AuthorBlock from "@/components/AuthorBlock";
import { states } from "@/data/states";
import {
  AUTHOR_ID,
  AUTHOR_NAME,
  AUTHOR_DESCRIPTION,
  LAST_REVIEWED,
  SITE_URL,
} from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title:
    "Do I Qualify for Unemployment? Eligibility Rules in Every State (2026)",
  description:
    "Take a 1-minute eligibility quiz and find out whether you likely qualify for unemployment in your state. Plain-English explanation of base periods, monetary eligibility, fired-vs-laid-off rules, and the good-cause exceptions every state recognizes.",
  path: "/eligibility",
});

export default function EligibilityPage() {
  // Top 8 states by population for the in-table preview
  const previewStates = [
    "california",
    "texas",
    "florida",
    "new-york",
    "pennsylvania",
    "illinois",
    "ohio",
    "georgia",
  ];
  const tableRows = states
    .filter((s) => previewStates.includes(s.slug))
    .sort(
      (a, b) =>
        previewStates.indexOf(a.slug) - previewStates.indexOf(b.slug)
    );

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">
          All States
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Eligibility</span>
      </nav>

      <AuthorBlock variant="compact" />

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Do I Qualify for Unemployment?
        </h1>
        <p className="text-lg text-gray-600">
          Most laid-off workers do qualify, but every state has slightly
          different rules and the official guides are written like tax forms.
          Take the 1-minute quiz below for a state-specific read on your
          situation, then dig into the explainers for the parts that matter.
        </p>
      </header>

      <EligibilityQuiz />

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          The four core eligibility tests
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Every state asks the same four questions, even though the details
          vary. If you can answer yes to all four, you almost certainly
          qualify. The rest is paperwork and timing.
        </p>
        <div className="space-y-4">
          <Pillar
            n={1}
            title="Did you separate through no fault of your own?"
            body="Layoffs, position eliminations, reductions in force, and most no-misconduct firings qualify. Voluntary quits usually don't, unless you had a documented good-cause reason like unsafe conditions or a forced move. Fired-for-misconduct is the contested category, and even there, a large share of appeals win because the burden is usually on the employer to prove misconduct."
          />
          <Pillar
            n={2}
            title="Did you earn enough during your base period?"
            body="Your base period is typically the first 4 of the last 5 completed calendar quarters before you file (your most recent 3 months don't count toward the standard base period). Most states require a few thousand dollars in your highest quarter and earnings spread across 2 quarters. If you fall short, ask whether your state allows an alternate base period that includes more recent earnings."
          />
          <Pillar
            n={3}
            title="Are you able and available to work full-time?"
            body="You must be physically able to work, available to start full-time work, and not constrained by school, caregiving, or medical issues that would prevent it. Some states make narrow exceptions; most do not. If you're not currently able and available, look into State Disability Insurance or Paid Family Leave instead."
          />
          <Pillar
            n={4}
            title="Are you actively looking for work?"
            body="Every state requires that you actively search and (usually) document a minimum number of weekly work-search activities. The exact count and what counts vary widely. State portals audit work-search logs randomly, and a missing entry can disqualify the entire week."
          />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          What is the &ldquo;base period&rdquo; and why does it matter?
        </h2>
        <div className="text-gray-700 leading-relaxed space-y-3">
          <p>
            The base period is the lookback window your state uses to compute
            both whether you qualify and how much you&apos;ll receive. Almost
            every state defines it as the first 4 of the last 5 completed
            calendar quarters. So if you file in late October 2026, the
            quarters in your base period are Q3 2025, Q4 2025, Q1 2026, Q2
            2026. The most recent quarter (Q3 2026) does not count toward your
            standard base period.
          </p>
          <p>
            <strong>Why this trips people up:</strong> if you only just
            recently started earning a lot (a promotion, a new role at a higher
            salary), those earnings may not show up in the base-period
            calculation, leaving you with a lower benefit than you&apos;d
            expect. The fix is the alternate base period.
          </p>
          <p>
            <strong>The alternate base period:</strong> most states will
            recompute your eligibility using the most recent 4 completed
            quarters (including Q3 2026 in the example above) if your standard
            base period falls short. You usually have to ask for it. State
            portals don&apos;t default to the alternate even when it would be
            more favorable.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Monetary eligibility: how much you need to have earned
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Each state sets its own minimum-earnings threshold. Examples in the
          eight largest states:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-4 py-2 text-left font-medium">State</th>
                <th className="px-4 py-2 text-left font-medium">
                  Minimum earnings test
                </th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((s) => (
                <tr key={s.slug} className="border-t border-gray-100">
                  <td className="px-4 py-2 font-medium text-gray-900">
                    <Link
                      href={`/${s.slug}`}
                      className="text-blue-700 hover:text-blue-900 underline"
                    >
                      {s.name}
                    </Link>
                  </td>
                  <td className="px-4 py-2 text-gray-700">{s.minEarnings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          See your state guide for the exact threshold and how to interpret it.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Common eligibility myths
        </h2>
        <div className="space-y-4 text-sm">
          <Myth
            myth="If I'm fired, I can't collect."
            truth="Most firings don't disqualify. Only firing for proven misconduct does, and the employer usually has to prove it. Poor performance, role mismatch, and personality conflicts are not misconduct."
          />
          <Myth
            myth="I have to be a US citizen to qualify."
            truth="No. You need to be authorized to work in the US, but citizens, lawful permanent residents, and authorized visa holders all qualify equally."
          />
          <Myth
            myth="If I take any side income, my benefits stop."
            truth="Most states allow partial benefits while you do part-time or gig work. The formulas vary, but reporting the income honestly is what matters. Underreporting triggers fraud penalties."
          />
          <Myth
            myth="I need 6 months of work to qualify."
            truth="States measure dollars earned in the base period, not months worked. A high-paying short job can qualify; a low-paying long job may not."
          />
          <Myth
            myth="If I had a severance, I can't apply."
            truth="Severance and unemployment interact differently in every state. In some, severance delays your start date by the equivalent number of weeks. In others, lump-sum severance has no effect. Don't wait until severance ends to file."
          />
        </div>
      </section>

      <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-2">
          Eligibility, by state
        </h2>
        <p className="text-sm text-gray-700 mb-3">
          Each of the 50 state guides has the exact eligibility rules,
          minimum-earnings thresholds, and filing requirements specific to
          that state.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link
            href="/"
            className="text-blue-700 hover:text-blue-900 underline"
          >
            Pick your state →
          </Link>
          <Link
            href="/timeline"
            className="text-blue-700 hover:text-blue-900 underline"
          >
            See the post-filing timeline →
          </Link>
          <Link
            href="/my-claim"
            className="text-blue-700 hover:text-blue-900 underline"
          >
            Track your claim →
          </Link>
        </div>
      </section>

      <AuthorBlock variant="expanded" />

      {/* Article schema for the eligibility hub */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Do I Qualify for Unemployment? Eligibility Rules in Every State",
            description:
              "Plain-English explanation of US unemployment eligibility, base periods, monetary tests, and good-cause exceptions, with a 1-minute state-aware eligibility quiz.",
            url: `${SITE_URL}/eligibility`,
            datePublished: LAST_REVIEWED,
            dateModified: LAST_REVIEWED,
            author: {
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
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_URL}/eligibility`,
            },
          }),
        }}
      />
    </div>
  );
}

function Pillar({
  n,
  title,
  body,
}: {
  n: number;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 text-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">
          {n}
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-700 leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  );
}

function Myth({ myth, truth }: { myth: string; truth: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <p className="text-gray-900 font-medium mb-1">
        <span className="text-red-600 font-bold">Myth:</span> {myth}
      </p>
      <p className="text-gray-700">
        <span className="text-green-700 font-bold">Reality:</span> {truth}
      </p>
    </div>
  );
}
