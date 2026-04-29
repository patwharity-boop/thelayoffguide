import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Got Severance? Here's How It Actually Affects Your Unemployment Benefits",
  description:
    "Severance pay can delay your unemployment benefits, but the rules are messier than most online guides admit. Here's what actually drives the outcome, with verified examples from NY, TX, CA, and FL.",
  keywords: [
    "severance and unemployment",
    "does severance delay unemployment",
    "severance pay unemployment benefits",
    "lump sum severance unemployment",
    "wages in lieu of notice",
    "severance agreement unemployment",
  ],
  openGraph: {
    title: "Got Severance? Here's How It Actually Affects Your Unemployment Benefits",
    description: "Severance does not cancel your unemployment, but it can delay when payments start. Here's what actually drives the outcome by state.",
    type: "article",
    images: ["https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"],
  },
};

export default function SeveranceAndUnemploymentPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Severance and Unemployment</span>
      </nav>

      <div className="relative rounded-xl overflow-hidden mb-8 h-72 md:h-96">
        <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80" alt="Documents and a pen on a desk" className="w-full h-full object-cover brightness-[0.8]" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/70 to-transparent">
          <span className="text-xs font-semibold tracking-widest uppercase text-teal-400">Severance & Pay</span>
          <h1 className="text-2xl md:text-4xl font-bold text-white mt-2">Got Severance? Here&apos;s How It Actually Affects Your Unemployment Benefits</h1>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200 text-sm text-gray-500">
        <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-xs">TLG</div>
        <div>
          <div className="font-semibold text-gray-900">The Layoff Guide</div>
          <div>April 29, 2026 · 4 min read</div>
        </div>
      </div>

      <div className="bg-gray-100 border border-dashed border-gray-300 rounded-lg p-4 mb-8 text-center text-sm text-gray-400">Advertisement</div>

      <article className="text-gray-700 leading-relaxed space-y-6">
        <p>If you just got laid off and your employer offered severance, the question on most people&apos;s minds is simple: do I still qualify for unemployment?</p>
        <p>The short answer is yes, almost always. The longer answer is that most online guides oversimplify what happens next. Severance does not cancel your unemployment, but it can delay when payments start, sometimes by weeks. Whether yours will depends on two things: how your severance is structured, and how your state classifies it.</p>
        <p>Most workers get this wrong because they assume there is a single rule. There isn&apos;t.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Two Factors That Drive Everything</h2>
        <p>Forget the simple &ldquo;yes or no&rdquo; framing. The real outcome depends on two variables.</p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">1. How Your Severance Is Structured</h3>
        <p>There are three common shapes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Lump sum tied to a release of claims.</strong> You sign a release agreement (waiving your right to sue) in exchange for a one-time payment. In many states, this is treated as a settlement rather than wages, and it does not delay your unemployment.</li>
          <li><strong>Salary continuation.</strong> Your old paycheck keeps coming on the regular schedule for a set number of weeks. In most states, this is treated as ongoing wages, and your unemployment is delayed until it ends.</li>
          <li><strong>Wages in lieu of notice.</strong> Your employer terminates you immediately but pays you for the notice period (often two to four weeks) you would have worked. This almost always delays unemployment for that period.</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">2. How Your State Classifies It</h3>
        <p>States interpret severance through their own statutes. Some states care a lot about whether a release was signed. Others care about the structure of the payment. A few apply formulas (severance amount divided by your average weekly wage) to calculate exactly how many weeks you are disqualified.</p>

        <div className="bg-gray-100 border border-dashed border-gray-300 rounded-lg p-4 my-8 text-center text-sm text-gray-400">Advertisement</div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Examples From Four Common States</h2>
        <p>These are simplified summaries, not legal advice. Verify with your state&apos;s official handbook before making decisions.</p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">New York</h3>
        <p>Severance does not affect your weekly benefit if the first payment is made 30 or more days after your last day of employment. If the first payment lands within 30 days of separation, it can delay benefits for the period the severance covers.</p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Texas</h3>
        <p>Treatment depends on the type. Wages in lieu of notice and certain unilaterally offered severance disqualify you for the period covered. Negotiated severance, contractual severance, and settlement payments typically do not affect eligibility. The state issues an individual decision after you file.</p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">California</h3>
        <p>Severance pay is generally not considered wages for unemployment purposes. Lump-sum payments tied to a release of claims usually do not delay benefits. Salary-continuation severance can delay benefits while it is being paid.</p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Florida</h3>
        <p>Severance delays your Reemployment Assistance for a number of weeks equal to the severance amount divided by your average weekly wage at that employer, rounded down. So a $20,000 severance with a $2,000 average weekly wage would delay benefits by 10 weeks.</p>

        <p className="mt-6">The pattern across states: structure matters, releases matter, and lump sum versus continuation matters in most places.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Three Strategic Moves</h2>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">File Immediately, Even With Severance</h3>
        <p>Whatever your state does, file for unemployment on day one. The state evaluates your claim, classifies your severance, and decides when payments start. If the answer is &ldquo;after your severance ends,&rdquo; your claim is at least set up and waiting for you. If the answer is &ldquo;now,&rdquo; you collect right away. Waiting to file is never the right play.</p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Report Your Severance Honestly</h3>
        <p>Every state&apos;s UI office cross-references employer payroll data. Hiding severance is fraud, and it leads to overpayment claims, penalties, and sometimes prosecution. Report it accurately and let the state decide how to classify it.</p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Read the Severance Agreement Before Signing</h3>
        <p>Severance offers often include a release of claims, a non-disparagement clause, or a non-compete. They sometimes include language about how the company will respond to your unemployment claim. The federal Older Workers Benefit Protection Act gives you 21 days to review (45 if a group is being laid off, plus 7 days to revoke after signing). Use that time. Many employment attorneys offer free 30-minute consultations and can spot terms that hurt you.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Bottom Line</h2>
        <p>Severance and unemployment can almost always coexist. The real question is timing, and timing depends on how your severance was structured and how your state reads it. File immediately, report honestly, and read the agreement before you sign. The biggest mistake is assuming one state&apos;s rule applies to yours, or assuming severance disqualifies you entirely. Neither is usually true.</p>

        <div className="mt-10 pt-8 border-t border-gray-200 text-sm text-gray-500">
          <p><strong>Sources:</strong></p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>NY Department of Labor, Dismissal/Severance Pay and Pensions FAQ: <a href="https://dol.ny.gov/dismissalseverance-pay-and-pensions-frequently-asked-questions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">dol.ny.gov</a></li>
            <li>Texas Workforce Commission, How Money From Other Sources Can Affect Your Benefits: <a href="https://www.twc.texas.gov/programs/unemployment-benefits/how-money-other-sources-can-affect-your-benefits" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">twc.texas.gov</a></li>
            <li>California EDD, Total and Partial Unemployment (TPU 460.35): <a href="https://edd.ca.gov/en/UIBDG/Total_and_Partial_Unemployment_TPU_46035" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">edd.ca.gov</a></li>
            <li>Florida Statutes Chapter 443.101, Reemployment Assistance Eligibility: <a href="https://www.flsenate.gov/Laws/Statutes/2025/443.101" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">flsenate.gov</a></li>
            <li>US Department of Labor, Older Workers Benefit Protection Act: <a href="https://www.dol.gov/general/topic/discrimination/agedisc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">dol.gov</a></li>
          </ul>
        </div>
      </article>
    </div>
  );
}
