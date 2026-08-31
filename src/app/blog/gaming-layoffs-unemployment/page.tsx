import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Laid Off from a Game Studio? Unemployment for Game Devs (2026)",
  description:
    "The 2026 gaming industry cuts hit studios from Xbox to mid-size teams. Whether your severance delays benefits, how contractor status affects eligibility, and what Washington state workers specifically need to know.",
  keywords: [
    "game developer unemployment",
    "gaming layoffs 2026",
    "Xbox layoffs unemployment",
    "game dev unemployment benefits",
    "contractor game developer UI",
    "video game industry layoffs",
    "Seattle game developer unemployment",
  ],
  openGraph: {
    title: "Laid Off from a Game Studio? Unemployment for Game Devs (2026)",
    description:
      "Xbox and game studio cuts in 2026 left thousands figuring out UI. Employee, contractor, or studio closure: here is what you need to know.",
    type: "article",
  },
};

export default function GamingLayoffsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Gaming Industry Layoffs</span>
      </nav>

      <div className="relative rounded-xl overflow-hidden mb-8 h-72 md:h-96 bg-indigo-900">
        <img
          src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1400&q=80"
          alt="Game controller on a desk with a monitor in the background"
          className="w-full h-full object-cover brightness-[0.55]"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/70 to-transparent">
          <span className="text-xs font-semibold tracking-widest uppercase text-teal-400">Gaming Industry</span>
          <h1 className="text-2xl md:text-4xl font-bold text-white mt-2">
            Laid Off from a Game Studio? Here Is What You Need to Know
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200 text-sm text-gray-500">
        <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-xs">TLG</div>
        <div>
          <div className="font-semibold text-gray-900">The Layoff Guide</div>
          <div>August 31, 2026 &middot; 6 min read</div>
        </div>
      </div>

      <article className="prose-custom text-gray-700 leading-relaxed space-y-6">
        <p>
          The game industry entered 2026 mid-contraction. Microsoft&apos;s Xbox unit announced thousands of cuts in July, studios changed ownership or shut down entirely, and smaller teams that scaled up during the pandemic-era boom have been unwinding headcount ever since. If you just lost your job at a studio, the unemployment filing process has some specific wrinkles worth knowing.
        </p>

        <p>
          The biggest one: your employment classification at the studio matters enormously.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Employee or contractor: the question that controls everything</h2>

        <p>
          Game studios use both full-time W-2 employees and independent contractors heavily. Contract QA testers, freelance artists, short-term contract engineers brought in for crunch, and outsourced localization all fall on the 1099 side. If your studio paid you on a 1099 basis, you generally cannot file for state UI, because no UI payroll taxes were paid on your wages.
        </p>

        <p>
          If you received a W-2, you can file. The rest of this guide assumes you were on W-2.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded p-5 my-6">
          <p className="font-semibold text-amber-900 mb-1">Were you misclassified?</p>
          <p className="text-amber-800 text-sm">
            Some studios use contractor agreements but control workers&apos; schedules, tools, and deliverables in ways that look like employment under state law. If you worked on-site at a studio&apos;s facility under their supervision, were assigned a desk and equipment, and had no real ability to work for other clients simultaneously, you may have a misclassification argument. File a claim and let the state investigate.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Washington state: where most Xbox workers file</h2>

        <p>
          Microsoft&apos;s Xbox division is headquartered in Redmond, Washington, and the majority of the July 2026 cuts affected workers in that state. Washington Employment Security Department (WA ESD) handles UI for Washington-based workers.
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">Washington maximum weekly benefit</h3>
            <p className="text-sm text-gray-700">
              Washington has one of the higher maximum weekly benefit amounts in the country. Your actual benefit amount is a percentage of your base-period wages, capped at the state maximum. Check our <Link href="/washington" className="text-blue-600 hover:underline">Washington state page</Link> for the current figures.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">Washington has no waiting week</h3>
            <p className="text-sm text-gray-700">
              Washington eliminated its unpaid waiting week. Your first week of benefits is paid. File the week of your separation to start the clock immediately.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">Work-search requirements in Washington</h3>
            <p className="text-sm text-gray-700">
              Washington requires documented work-search activities each week. Game industry job boards (GameJobsDirectcom, LinkedIn, studio career pages) count as employer contacts when you apply to a posted role. Keep records with dates, the job title, and what you submitted.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Studios that spun off or changed ownership</h2>

        <p>
          Several studios separated from larger publishers in recent cycles, sometimes as spinoffs with new funding and sometimes as closures. The key distinction for UI purposes:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Studio closure:</strong> If the studio shut down entirely, you file for UI against the entity that employed you. This is straightforward.
          </li>
          <li>
            <strong>Studio spinoff with re-hiring:</strong> If the studio separated from a publisher and rehired most staff as a new entity, you may not have had a gap in employment. If there was a gap between the old entity ending and the new one starting, that gap can be a compensable period under UI.
          </li>
          <li>
            <strong>Acquisition:</strong> If your studio was acquired and you were kept on, your employer changed but your employment continued. If you were cut after the acquisition, you file against the new owner.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Severance and stock comp</h2>

        <p>
          Severance is the most common reason game industry workers delay or lose early UI benefits. If your studio offered a severance package, the state may treat that payment as wages that displace UI for the weeks it covers.
        </p>

        <p>
          How this works varies by state. In some states, a lump-sum severance payment does not delay benefits at all. In others, it delays the start of your claim by the number of weeks of pay the severance represents. Our guide on <Link href="/blog/severance-and-unemployment" className="text-blue-600 hover:underline">severance and unemployment</Link> has the breakdown by state type.
        </p>

        <p>
          Vested stock options and RSUs that you exercised or that vested during the employment period are not wages for UI purposes in most states. Unexercised options or unvested RSUs that are forfeited on separation are not wages at all. Neither affects your UI eligibility directly.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Remote workers: which state files?</h2>

        <p>
          The game industry went significantly remote during and after the pandemic. Many studio employees are working from states different from where the studio is headquartered. The rule for UI is generally: you file in the state where you actually worked, meaning where your payroll taxes were withheld.
        </p>

        <p>
          If your W-2 shows Washington taxes withheld but you worked from Colorado all year, you should check whether taxes were correctly withheld in Colorado. If they were, you file in Colorado. If your W-2 shows only Washington withholding even though you were remote in Colorado, file in Washington and be prepared to explain the situation.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Filing this week: the single most important thing</h2>

        <p>
          Most states set your UI start date as the Sunday of the week you file, not your last day of work. Every week you wait is a week you do not get back. File the moment you have your separation date confirmed.
        </p>

        <p>
          The common reasons game industry workers delay filing:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Waiting to see if the layoff is reversed (it usually is not)</li>
          <li>Assuming a severance package means they cannot file (check your state&apos;s rules first)</li>
          <li>Not sure which state to file in (see above: check your W-2 box 15)</li>
          <li>Feeling awkward about claiming a government benefit (do not. You paid into this system. Use it.)</li>
        </ul>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mt-8">
          <p className="font-semibold text-gray-900 mb-2">Find your state&apos;s UI portal</p>
          <p className="text-gray-700 text-sm">
            Go to our <Link href="/" className="text-blue-600 hover:underline">state-by-state guide</Link> to find your state&apos;s filing portal, waiting week status, and current weekly maximum. Washington, California, and Texas (where other major studios operate) each have their own quirks.
          </p>
        </div>
      </article>
    </div>
  );
}
