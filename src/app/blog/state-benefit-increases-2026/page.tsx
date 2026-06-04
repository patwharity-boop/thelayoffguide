import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Some States Are Raising Unemployment Benefits. Here's Why and When Yours Might Too.",
  description:
    "Oregon's max weekly unemployment check goes from $872 to $902 on June 28. Washington's went up in January. Several states automatically adjust every year. Here's how it works.",
  keywords: [
    "state unemployment benefit increase 2026",
    "Oregon unemployment increase",
    "maximum unemployment benefit state",
    "state unemployment annual adjustment",
    "unemployment benefit amount increase",
  ],
  openGraph: {
    title: "Some States Are Raising Unemployment Benefits. Is Yours?",
    description:
      "Oregon's max benefit jumps $30/week on June 28. Several states do this automatically. Here's who, how much, and why.",
    type: "article",
  },
};

export default function StateBenefitIncreasesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">State Benefit Increases 2026</span>
      </nav>

      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-2">
          State Benefits
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Some States Are Raising Unemployment Benefits. Here&apos;s Why and
          When Yours Might Too.
        </h1>
        <p className="text-lg text-gray-600">
          If you live in Oregon and your benefit year starts on or after
          June 28, 2026, your maximum weekly check is about $30 higher than it
          was six months ago. Several other states work the same way. This is
          not random; it is baked into their statutes.
        </p>
        <div className="flex items-center gap-3 mt-6 text-sm text-gray-500">
          <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-xs">
            TLG
          </div>
          <span>The Layoff Guide &middot; June 4, 2026</span>
        </div>
      </header>

      <article className="text-gray-700 leading-relaxed space-y-6">
        <p>
          Most state unemployment maximums are set by the legislature and
          changed only when lawmakers vote to change them. California has been
          stuck at $450 since 2005. Florida has been at $275 since 1998. Those
          are political decisions, not automatic calculations.
        </p>
        <p>
          But a different group of states wrote their maximums into law as a
          formula tied to the state average weekly wage. As wages grow, the
          maximum grows with them, no vote required.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          How the formula works
        </h2>
        <p>
          The typical approach: the state measures its average weekly wage for
          the prior calendar year. The maximum weekly unemployment benefit is
          then set at a fixed percentage of that figure, often somewhere
          between 60% and 67%. Oregon&apos;s statute sets the maximum at 64%
          of the state average weekly wage, rounded down.
        </p>
        <p>
          For 2026, Oregon&apos;s 2025 average weekly wage came in at
          $1,410.13, up 3.4% from the prior year. Sixty-four percent of that
          is $902.48, rounded down to $902. Before June 28, the maximum was
          $872, calculated the same way from the 2024 wage figure.
        </p>
        <p>
          The change does not affect people already receiving benefits. Your
          weekly amount is fixed when your benefit year starts. If you filed in
          March 2026, you are on the $872 schedule for the duration of your
          claim. If you file on or after June 28, 2026, the new $902 figure
          applies.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          States that index their maximums
        </h2>
        <p>
          Oregon is not alone. A number of states automatically adjust based on
          wages or some similar index:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <strong>Washington:</strong> indexed to 60% of the state average
            weekly wage. The 2026 maximum is $1,152.
          </li>
          <li>
            <strong>Massachusetts:</strong> indexed; the maximum reached $1,105
            in 2026 for single claimants, higher with dependency allowances.
          </li>
          <li>
            <strong>Minnesota:</strong> indexed, currently $948 in 2026.
          </li>
          <li>
            <strong>New Jersey:</strong> indexed, raised to $905 effective
            January 2026.
          </li>
          <li>
            <strong>New York:</strong> the legislature finally indexed the
            maximum in 2025 after freezing it at $504 for six years. The 2026
            rate is $869, set at 50% of the state average weekly wage going
            forward.
          </li>
          <li>
            <strong>Michigan:</strong> raised to $530 effective January 2026
            under a 2024 law that set annual increases.
          </li>
          <li>
            <strong>Oregon:</strong> $902 effective June 28, 2026.
          </li>
        </ul>
        <p className="text-sm text-gray-500">
          These figures are for the current benefit year unless noted.
          Individual benefit amounts are lower than these maximums for most
          claimants; the maximum only applies to higher earners.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          States where the maximum has not moved in years
        </h2>
        <p>
          The contrast is stark. California&apos;s $450 ceiling has been frozen
          since January 2005. Florida&apos;s $275 since 1998. Tennessee&apos;s
          $275 since approximately the same era. In those states, inflation has
          quietly eroded the real value of unemployment by roughly half.
        </p>
        <p>
          If you are in one of these states, the maximum is unlikely to change
          without legislation. Check{" "}
          <Link
            href="/blog/unemployment-benefits-by-state-ranked"
            className="text-blue-700 hover:underline"
          >
            our state-by-state ranking
          </Link>{" "}
          to see where yours stands.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          What this means if you are about to file
        </h2>
        <p>
          In Oregon specifically: if you were laid off recently and have not
          filed yet, your benefit calculation will use whichever maximum applies
          at the start of your benefit year. If you file before June 28, you
          get $872 as the ceiling. File on or after June 28, and the ceiling
          is $902.
        </p>
        <p>
          For most people, this difference ($30/week) is modest. Over 26 weeks,
          it is $780. If you are a higher earner who would actually hit the
          maximum, filing a few weeks later might be worth it. But
          unemployment works on a weekly cycle, so every week you delay filing
          is a week of benefits you do not get back. The $780 difference over
          a full claim does not make up for two or three missed weeks of
          benefits at $872.
        </p>
        <p>
          The right call: file as soon as you separate, regardless of where the
          ceiling sits. You can&apos;t time the system for a meaningful gain,
          and waiting costs you money.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mt-8">
          <p className="text-sm text-gray-700">
            <strong>One caveat:</strong> your state&apos;s guide on this site
            shows the current effective maximum. If you are in Oregon and filing
            after June 28, 2026, note that our Oregon page still shows $872
            until we update it on that date. The Oregon Employment Department
            published the new $902 figure in their May 29 press release.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-6 mt-8">
          <p className="text-sm text-gray-600">
            Related:{" "}
            <Link href="/oregon" className="text-blue-700 hover:underline">
              Oregon unemployment guide
            </Link>
            {" "}&middot;{" "}
            <Link
              href="/blog/unemployment-benefits-by-state-ranked"
              className="text-blue-700 hover:underline"
            >
              Benefits ranked by state
            </Link>
          </p>
        </div>
      </article>
    </div>
  );
}
