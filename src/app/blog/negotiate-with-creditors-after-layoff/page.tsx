import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Negotiate With Creditors Before You Miss a Payment",
  description:
    "Losing income doesn't mean you have to miss payments and wreck your credit. Here's how to call your mortgage servicer, credit card company, and lenders before you fall behind, what to actually say, and which debt-relief offers to avoid.",
  keywords: [
    "negotiate with creditors after layoff",
    "mortgage forbearance unemployment",
    "credit card hardship program",
    "how to ask for forbearance",
    "debt settlement company scam",
    "student loan deferment unemployment",
  ],
  openGraph: {
    title: "How to Negotiate With Creditors Before You Miss a Payment",
    description:
      "Most people wait until they're already behind to call their lender. That's backwards. Here's how hardship programs actually work, and how to ask for one.",
    type: "article",
  },
};

export default function NegotiateCreditorsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Negotiate With Creditors</span>
      </nav>

      <div className="mb-8">
        <span className="text-xs font-semibold tracking-widest uppercase text-teal-600">Money</span>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2">
          How to Negotiate With Creditors Before You Miss a Payment
        </h1>
      </div>

      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200 text-sm text-gray-500">
        <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-xs">TLG</div>
        <div>
          <div className="font-semibold text-gray-900">The Layoff Guide</div>
          <div>August 4, 2026 · 7 min read</div>
        </div>
      </div>

      <article className="prose-custom text-gray-700 leading-relaxed space-y-6">
        <p>
          Most people don&apos;t call their mortgage servicer or credit card company until they&apos;ve already missed a payment. That&apos;s backwards, and it costs you leverage. Lenders have hardship programs built for exactly this situation, and they work better, and treat your credit better, when you ask before you fall behind rather than after.
        </p>

        <p>
          This isn&apos;t about ignoring your bills. It&apos;s about being proactive with the people you owe money to, the same way you&apos;d be proactive filing for unemployment the week you&apos;re laid off instead of waiting.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Call before you miss a payment, not after</h2>

        <p>
          The Consumer Financial Protection Bureau&apos;s core guidance is simple: contact your servicers and creditors before you miss a payment, not after. Once you&apos;re already delinquent, you have less room to negotiate and your credit report may already be taking a hit. Once you call ahead and explain your situation, most lenders have some kind of hardship option on the table, even if they don&apos;t advertise it.
        </p>

        <div className="border-l-4 border-teal-400 bg-teal-50 rounded-r-lg p-5 my-8">
          <p className="font-semibold text-gray-900 mb-1">What to actually say</p>
          <p className="text-gray-800 text-sm">
            You don&apos;t need a script. A short, honest version works: &ldquo;I was laid off on [date] and I&apos;m filing for unemployment. I want to stay current on this account. What hardship or forbearance options do you have?&rdquo; Ask specifically what they can offer, get the terms in writing or a reference number, and ask directly how it will be reported to the credit bureaus before you agree to anything.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Mortgage</h2>

        <p>
          Call your mortgage servicer as soon as you know you might miss a payment and ask about forbearance. Forbearance pauses or reduces your payments for a set period. Handled properly, it should not hurt your credit the same way an unplanned missed payment would: if you were current on the account before entering forbearance, your servicer is generally required to report the account as current, not delinquent. Ask directly how the forbearance will show up on your credit report before you agree to it, and get everything in writing.
        </p>

        <p>
          Forbearance is not forgiveness. The paused amount is usually still owed, through a repayment plan, a loan modification, or added to the end of your loan, depending on your servicer and loan type. Ask exactly how you&apos;ll repay it before you say yes.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Credit cards</h2>

        <p>
          Credit card issuers routinely have hardship programs that aren&apos;t on the website. Call the number on the back of the card, explain you&apos;ve lost your job, and ask about a hardship or forbearance plan. These often include a temporarily lower interest rate, a reduced minimum payment, or paused payments for a few months. Get the terms in writing and ask how it will be reported to the credit bureaus.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Federal student loans</h2>

        <p>
          If you have federal student loans, look at unemployment deferment before forbearance. Deferment postpones your payments while you&apos;re unemployed or working fewer than 30 hours a week, and if you have subsidized loans, the federal government covers the interest during that period. Forbearance is the fallback if you don&apos;t qualify for deferment, but interest keeps accruing on every loan type while you&apos;re in it. Apply directly through <a href="https://studentaid.gov" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline">studentaid.gov</a> or your loan servicer, not a third party.
        </p>

        <p>
          Private student loans work differently; each lender sets its own hardship options, so call and ask directly.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Auto loans, medical debt, and utilities</h2>

        <p>
          Auto lenders often offer a short payment deferral if you ask before you&apos;re behind, though this varies a lot by lender. Medical providers and hospital billing offices frequently have interest-free payment plans or financial assistance programs you have to ask for directly; they&apos;re rarely offered up front. For utilities, look at your provider&apos;s own hardship program first, and see the <Link href="/resources" className="text-blue-600 underline">resources page</Link> for LIHEAP and other bill assistance programs if you need help beyond what the utility offers.
        </p>

        <div className="border-l-4 border-amber-400 bg-amber-50 rounded-r-lg p-5 my-8">
          <p className="font-semibold text-gray-900 mb-1">Be careful with debt settlement companies</p>
          <p className="text-gray-800 text-sm">
            Federal law prohibits debt settlement companies from charging you a fee before they&apos;ve actually settled a debt. Any company asking for money up front, before doing anything, is breaking the law, and the CFPB has taken enforcement action against several firms for exactly this. If you want help negotiating rather than doing it yourself, contact a nonprofit credit counseling agency accredited by the <a href="https://www.nfcc.org" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline">National Foundation for Credit Counseling</a> instead. A first session is usually free.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Get everything in writing</h2>

        <p>
          Whatever a lender agrees to, get it in an email, letter, or account note you can point back to, not just a verbal promise from a phone rep. Write down the date, the name of who you spoke with, and what was agreed. If something goes wrong later, that record is what protects you.
        </p>

        <p>
          If you&apos;re building out a full picture of where your money is going while you sort this out, our <Link href="/budget-template" className="text-blue-600 underline">layoff budget template</Link> can help you see what actually needs to be negotiated first.
        </p>

        <div className="border-l-4 border-gray-300 bg-gray-50 rounded-r-lg p-5 my-8">
          <p className="font-semibold text-gray-900 mb-1">Start here</p>
          <ul className="text-gray-800 text-sm space-y-1 list-disc list-outside ml-4">
            <li>File for unemployment first: <Link href="/blog/file-for-unemployment-today" className="text-blue-600 underline">the same-day filing playbook</Link></li>
            <li>Build your numbers: <Link href="/budget-template" className="text-blue-600 underline">layoff budget template</Link></li>
            <li>Find help fast: <Link href="/resources" className="text-blue-600 underline">financial and community resources</Link></li>
          </ul>
        </div>
      </article>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/blog" className="text-blue-600 hover:underline text-sm">Back to all articles</Link>
      </div>
    </div>
  );
}
