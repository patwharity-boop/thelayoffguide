import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Some States Are Raising Unemployment Benefits. Here's Why and When Yours Might Too.",
  description:
    "Oregon's max weekly unemployment check went from $872 to $902 in June. Washington's went to $1,208 in July. Massachusetts reset to $1,154 in October. Several states adjust every year automatically. Here's how it works.",
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
      "Oregon, Washington and Massachusetts all raised their maximums in 2026. Several states do this automatically. Here's who, how much, and why.",
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
          If your Oregon benefit year started on or after June 28, 2026, your
          maximum weekly check is $30 higher than it would have been in the
          spring. Several other states work the same way. This is not random;
          it is baked into their statutes.
        </p>
        <div className="flex items-center gap-3 mt-6 text-sm text-gray-500">
          <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-xs">
            TLG
          </div>
          <span>The Layoff Guide &middot; October 6, 2026</span>
        </div>
      </header>

      <article className="text-gray-700 leading-relaxed space-y-6">
        <p>
          In many states the unemployment maximum is a number in the statute
          books, and it changes only when lawmakers vote to change it.
          California has been
          stuck at $450 since 2005. Florida has been at $275 since 1998. Those
          are political decisions, not automatic calculations.
        </p>
        <p>
          But a different group of states wrote their maximums into law as a
          formula tied to the state average weekly wage. As wages grow, the
          maximum grows with them, no vote required.
        </p>
        <p>
          These are the published maximums, not a promise of what you will
          receive. Verify your own amount with your state&apos;s unemployment
          office before you plan around it.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          How the formula works
        </h2>
        <p>
          The typical approach: the state measures its average weekly wage for
          the prior calendar year. The maximum weekly unemployment benefit is
          then set at a fixed percentage of that figure. The percentages vary
          more than you would expect, from 50% in New York to 66 and two-thirds
          percent in Minnesota. Oregon&apos;s statute sets the maximum at 64%
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
            <strong>Oregon:</strong> indexed to 64% of the state average weekly
            wage. The maximum is $902 for claims filed on or after June 28,
            2026, up from $872.
          </li>
          <li>
            <strong>Washington:</strong> indexed to 63% of the state average
            weekly wage. The maximum is $1,208 for benefit years starting on or
            after July 5, 2026, up from $1,152.
          </li>
          <li>
            <strong>Massachusetts:</strong> indexed to 57.5% of the state
            average weekly wage, resetting for benefit years that start on or
            after the first Sunday in October. The maximum rose to $1,154 on
            October 4, 2026, up from $1,105. Dependent children add $25 each on
            top.
          </li>
          <li>
            <strong>Minnesota:</strong> indexed to 66 and two-thirds percent of
            the state average weekly wage. The maximum is $948, and it resets
            for new claims starting October 25, 2026.
          </li>
          <li>
            <strong>New Jersey:</strong> indexed to 56 and two-thirds percent of
            the statewide average weekly remuneration. The maximum rose to $905
            on January 1, 2026, and New Jersey has already posted $937 for 2027.
          </li>
          <li>
            <strong>Rhode Island:</strong> indexed to the state average weekly
            wage. The maximum rose to $777 for claims effective on or after
            July 1, 2026, and reaches $971 with five dependents.
          </li>
          <li>
            <strong>New York:</strong> the maximum sat at $504 from October 2019
            to October 2025. New York&apos;s step increases were already written
            into Labor Law section 590, but the same section blocks them in any
            year the state unemployment trust fund sits below 30% of the average
            high cost multiple, and the fund was in debt to the federal
            government. The 2025 state budget paid off that loan and suspended
            the block for one year, setting a flat $869 effective October 6,
            2025. The statute schedules 50% of the state average weekly wage
            from October 2026 onward, but that step is still subject to the same
            trust fund test, and New York has not published an increase for
            2026.
          </li>
        </ul>
        <p>
          Michigan belongs in a different category. A 2024 law set fixed dollar
          steps rather than an index: $446 for claims filed in 2025, $530 in
          2026, and $614 in 2027. The maximum is not adjusted automatically
          until claims filed on or after January 1, 2028, and when it is, it
          tracks the Consumer Price Index rather than wages.
        </p>
        <p className="text-sm text-gray-500">
          Figures verified October 6, 2026. Each state&apos;s maximum applies
          to the benefit year in which your claim starts, so an existing claim
          keeps the rate it was opened at. Individual benefit amounts are lower
          than these maximums for most claimants; the maximum only applies to
          higher earners.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          States where the maximum has not moved in years
        </h2>
        <p>
          The contrast is stark. California&apos;s $450 ceiling has been frozen
          since January 2005. Florida&apos;s statutory maximum has been $275
          since January 1998. California&apos;s own Legislative Analyst&apos;s
          Office estimates that if the state maximum had kept pace with
          inflation it would be $765 today, meaning it has fallen by nearly half
          in real terms over two decades.
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
          If your Oregon benefit year started before June 28, 2026, you are on
          the $872 schedule for the rest of that claim. Oregon fixes your weekly
          amount when your benefit year begins and does not revisit it. Claims
          starting on or after June 28 use the $902 ceiling.
        </p>
        <p>
          This is worth understanding for next year, because Oregon resets on
          roughly the same schedule every June. The temptation is to delay
          filing to land on the higher ceiling. Do not. The gap is about $30 a
          week, or $780 across a full 26 weeks, and only for people who earn
          enough to hit the maximum at all. Unemployment runs on a weekly cycle,
          so every week you wait is a week of benefits you never get back. Two
          missed weeks at $872 already costs more than the entire year&apos;s
          increase.
        </p>
        <p>
          The right call: file as soon as you separate, regardless of where the
          ceiling sits. You can&apos;t time the system for a meaningful gain,
          and waiting costs you money.
        </p>


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

      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="text-sm text-gray-500">
          <p className="font-semibold text-gray-700 mb-2">Sources verified October 6, 2026</p>
          <ul className="space-y-1 italic">
            <li>Oregon Employment Department, minimum and maximum weekly benefit amounts, May 2026 (the $902 figure, the $1,410.13 average wage, and the 64% rule): oregon.gov/employ/NewsAndMedia/Documents/2026-05-29-Minimum-Maximum-Weekly-Benefit-Amounts.pdf</li>
            <li>Washington RCW 50.20.120, amount of benefits (the 63% rule and the June 30 determination date): app.leg.wa.gov/RCW/default.aspx?cite=50.20.120</li>
            <li>Washington Employment Security Department, new average annual wage estimates adjust unemployment and paid leave benefits (the $1,208 figure): esd.wa.gov/about-us/news-release/2026/new-average-annual-wage-estimates-adjust-unemployment-insurance-and-paid-leave-benefits</li>
            <li>Massachusetts General Laws chapter 151A section 29 (57.5% of the state average weekly wage, first Sunday in October): malegislature.gov/Laws/GeneralLaws/PartI/TitleXXI/Chapter151A/Section29</li>
            <li>Massachusetts Department of Unemployment Assistance, how your unemployment benefits are determined (the $1,154 figure effective October 4, 2026): mass.gov/info-details/how-your-unemployment-benefits-are-determined</li>
            <li>Minnesota Statutes 268.07 subdivision 2a (66 and two-thirds percent, last Sunday in October): revisor.mn.gov/statutes/cite/268.07</li>
            <li>New Jersey Department of Labor, benefit rates for 2026 (the $905 figure): nj.gov/labor/lwdhome/press/2025/20251229_newbenefitrates2026.shtml</li>
            <li>Rhode Island Department of Labor and Training, maximum weekly benefit amounts (the $777 base and $971 with five dependents, effective July 1, 2026): dlt.ri.gov/individuals/unemployment-insurance/unemployment-insurance-faq</li>
            <li>New York Labor Law section 590 (the step schedule and the trust fund condition in subdivision 5(b)): nysenate.gov/legislation/laws/LAB/590</li>
            <li>New York Department of Labor, maximum benefit rate (the $869 figure effective October 6, 2025): dol.ny.gov/mbr</li>
            <li>New York Department of Labor, unemployment insurance trust fund FAQ (why the maximum was frozen at $504): dol.ny.gov/unemployment-insurance-ui-trust-fund-faq</li>
            <li>Michigan Compiled Laws 421.27 (the fixed 2025 to 2027 steps and the CPI adjustment beginning 2028): legislature.mi.gov/Laws/MCL?objectName=mcl-421-27</li>
            <li>California Unemployment Insurance Code section 1280 (the $450 maximum for claims on or after January 1, 2005): leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=UIC&amp;sectionNum=1280</li>
            <li>California Legislative Analyst&apos;s Office, Fixing Unemployment Insurance (the real-terms erosion estimate): lao.ca.gov/Publications/Report/4943</li>
            <li>Florida Statutes 443.111(3), 1997 edition (the $275 maximum taking effect for benefit years beginning January 1, 1998): flsenate.gov/Laws/Statutes/1997/443.111</li>
            <li>Florida Statutes 443.111(3), 2025 edition (confirming $275 is still current): flsenate.gov/Laws/Statutes/2025/443.111</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
