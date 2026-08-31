import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Laid Off from Freight or Trucking? How to File for Unemployment",
  description:
    "If you drove a truck, worked a warehouse dock, or dispatched loads, whether you can get UI depends almost entirely on one thing: W-2 or 1099. Here is the honest breakdown.",
  keywords: [
    "freight layoffs unemployment",
    "truck driver unemployment benefits",
    "logistics workers UI",
    "independent contractor unemployment",
    "CDL driver unemployment",
    "warehouse worker unemployment",
    "1099 truck driver UI",
  ],
  openGraph: {
    title: "Laid Off from Freight or Trucking? How to File for Unemployment",
    description:
      "W-2 driver or 1099 owner-operator? That one question determines whether you can get unemployment. Here is the breakdown for freight and logistics workers.",
    type: "article",
  },
};

export default function FreightLogisticsLayoffsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Freight and Logistics Layoffs</span>
      </nav>

      <div className="relative rounded-xl overflow-hidden mb-8 h-72 md:h-96 bg-slate-700">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1400&q=80"
          alt="Semi trucks lined up at a freight terminal"
          className="w-full h-full object-cover brightness-[0.65]"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/70 to-transparent">
          <span className="text-xs font-semibold tracking-widest uppercase text-teal-400">Freight and Logistics</span>
          <h1 className="text-2xl md:text-4xl font-bold text-white mt-2">
            Laid Off from Freight or Trucking? How to File for Unemployment
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200 text-sm text-gray-500">
        <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-xs">TLG</div>
        <div>
          <div className="font-semibold text-gray-900">The Layoff Guide</div>
          <div>August 31, 2026 &middot; 7 min read</div>
        </div>
      </div>

      <article className="prose-custom text-gray-700 leading-relaxed space-y-6">
        <p>
          The freight and logistics sector has been contracting through 2026. Carriers are cutting routes. Third-party logistics companies are trimming headcount. Warehouses that were short-staffed two years ago now have more people than loads. If you are reading this after getting your separation notice, the first question you need to answer is not which state to file in. It is whether you were classified as an employee or a contractor.
        </p>

        <p>
          That one question controls almost everything about your eligibility for unemployment insurance.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The employee-vs-contractor divide</h2>

        <p>
          State unemployment insurance is a payroll tax system. Your employer paid into your state&apos;s UI fund on your behalf only if you were a W-2 employee. If you were classified as an independent contractor, those payments were not made, and the state has no fund to draw from on your behalf.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-5 my-6">
          <p className="font-semibold text-blue-900 mb-1">The short version</p>
          <p className="text-blue-800">
            W-2 employee: you can almost certainly file. 1099 independent contractor: you generally cannot, with narrow exceptions. Owner-operator with your own authority: generally no.
          </p>
        </div>

        <p>
          This sounds simple. It is not always. Trucking in particular has a long history of misclassification, where a carrier treats drivers as contractors to avoid payroll taxes but controls their routes, schedules, and equipment in ways that legally look more like employment. If that describes your situation, you may have grounds to file anyway and let the state adjudicate your classification.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">CDL drivers on W-2</h2>

        <p>
          If you drove for a carrier that put you on payroll, you were a W-2 employee and you file for UI the same way any laid-off worker does. A few things specific to over-the-road trucking worth knowing:
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">Which state to file in</h3>
            <p className="text-sm text-gray-700">
              File in the state where you are domiciled (your home base), or in the state where your employer&apos;s payroll was processed if that is different. For over-the-road drivers who cross state lines constantly, the governing rule is usually the state where your wages were reported for tax purposes. Check your W-2: the state listed there is your filing state.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">CDL training repayment</h3>
            <p className="text-sm text-gray-700">
              Some carriers fronted CDL training costs in exchange for a commitment period (typically 6 to 12 months of service). If you were laid off before the commitment ended, check your contract carefully. Some agreements waive repayment on involuntary separations (layoffs), but not all. This does not affect your UI eligibility, but it affects your cash on hand.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">Part-time driving while on UI</h3>
            <p className="text-sm text-gray-700">
              Most states allow you to earn up to a threshold each week before your UI benefit starts reducing. Report every dollar you earn while claiming. The partial-benefit rules vary by state, but underreporting earnings is fraud and the consequences are severe. Your state&apos;s UI claimant handbook will have the specific formula.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Owner-operators and lease operators</h2>

        <p>
          If you owned your own truck and operated under your own authority, you were almost certainly running as an independent business, not an employee. State UI funds do not cover you, and there is no self-employed UI program under normal circumstances.
        </p>

        <p>
          If you were a lease-operator who leased your truck from the carrier and operated under their authority, your classification is murkier. Some states have found lease-operators to be employees under their ABC tests or economic reality tests. It is worth filing a claim and letting the state decide rather than assuming you are excluded. The worst outcome is a denial you can appeal.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded p-5 my-6">
          <p className="font-semibold text-amber-900 mb-1">If you think you were misclassified</p>
          <p className="text-amber-800">
            File the UI claim anyway. Describe yourself as an employee separated through no fault of your own. The state will investigate and contact your former carrier. If the carrier asserts contractor status, you will get a fact-finding interview. Bring whatever evidence you have of employer control: assigned routes, required check-ins, equipment provided by the carrier, mandatory safety meetings. Misclassification rulings in UI proceedings have real consequences for carriers.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Warehouse workers and dock staff</h2>

        <p>
          If you worked in a warehouse, distribution center, or fulfillment operation as a direct employee or through a staffing agency, you were almost certainly on W-2. The UI process is straightforward:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>File the week of your separation. Benefits start the week you file in most states, not the week of your last shift.</li>
          <li>If you worked through a staffing agency, the agency (not the warehouse client) was your employer of record. File against the staffing agency.</li>
          <li>If the agency is contesting your separation reason, document why you were let go. A shift reduction that drops you to zero hours is a layoff, even if no formal termination letter was issued.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Dispatchers, load planners, and operations staff</h2>

        <p>
          Office-side logistics roles (dispatchers, account managers, operations coordinators, rate negotiators) were direct W-2 employees at most carriers and 3PLs. If your company cut your position, you file the same week. The standard UI rules apply.
        </p>

        <p>
          One wrinkle: if you were a remote dispatcher working from a different state than your employer&apos;s headquarters, confirm which state&apos;s UI program applies. The general rule is the state where your wages were taxed. Check your W-2 for the state listed in box 15.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What to do right now</h2>

        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Check your employment classification.</strong> Pull your most recent tax documents. W-2 means you can file. 1099 means you generally cannot, unless your state has an expanded definition of covered employment or you have a misclassification argument.
          </li>
          <li>
            <strong>File the same week you separate.</strong> Your benefit period starts the week you file, not your last day of work. Delay costs you money.
          </li>
          <li>
            <strong>Look up your state&apos;s work-search requirements.</strong> Most states require you to document employer contacts every week you claim benefits. Logistics and transportation job boards (DAT Freight &amp; Analytics, Convoy, load boards) count as employer contacts in most states when you apply to a posting, but check your state&apos;s specific rules.
          </li>
          <li>
            <strong>Keep your CDL current.</strong> If you hold a CDL, your license and medical certification are what get you back to work. Do not let them lapse during your claim period.
          </li>
        </ol>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mt-8">
          <p className="font-semibold text-gray-900 mb-2">Find your state&apos;s UI portal</p>
          <p className="text-gray-700 text-sm">
            Every state&apos;s unemployment insurance program is different. Go to our <Link href="/" className="text-blue-600 hover:underline">state-by-state guide</Link> to find your state&apos;s filing portal, phone number, waiting week status, and maximum weekly benefit.
          </p>
        </div>
      </article>
    </div>
  );
}
