import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Caught in a Mass Layoff? Your 48-Hour Playbook",
  description:
    "Oracle, Disney, Chevron — mass layoffs are happening across every industry. If your number comes up, here's an hour-by-hour playbook for the first 48 hours: what to sign, what to save, what to file, and what to say.",
  keywords: [
    "mass layoff survival",
    "what to do after layoff",
    "first 48 hours after layoff",
    "RIF survival guide",
    "severance negotiation",
    "COBRA deadlines",
  ],
  openGraph: {
    title: "Caught in a Mass Layoff? Your 48-Hour Playbook",
    description: "Hour by hour: what to sign, what to save, what to file, what to say in the first two days after a mass layoff.",
    type: "article",
    images: ["https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80"],
  },
};

export default function MassLayoffPlaybookPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Mass Layoff 48-Hour Playbook</span>
      </nav>

      <div className="relative rounded-xl overflow-hidden mb-8 h-72 md:h-96">
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&q=80" alt="Empty office desk with laptop and notebook" className="w-full h-full object-cover brightness-[0.8]" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/70 to-transparent">
          <span className="text-xs font-semibold tracking-widest uppercase text-teal-400">Action Steps</span>
          <h1 className="text-2xl md:text-4xl font-bold text-white mt-2">Caught in a Mass Layoff? Your 48-Hour Playbook</h1>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200 text-sm text-gray-500">
        <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-xs">TLG</div>
        <div>
          <div className="font-semibold text-gray-900">The Layoff Guide</div>
          <div>April 15, 2026 · 5 min read</div>
        </div>
      </div>

      <div className="bg-gray-100 border border-dashed border-gray-300 rounded-lg p-4 mb-8 text-center text-sm text-gray-400">Advertisement</div>

      <article className="text-gray-700 leading-relaxed space-y-6">
        <p>Oracle let go of 10,000 people this year, with reports of up to 30,000 more. Chevron announced 8,000 cuts. Disney is in the middle of a 1,000-person reduction. That&apos;s just the last few weeks.</p>
        <p>Mass layoffs aren&apos;t a rare event anymore. They&apos;re a recurring feature of the landscape. If you&apos;re reading this because the meeting just happened — or because you&apos;re trying to be ready in case it does — this is your playbook.</p>
        <p>Hour by hour. No fluff.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Minute 0–30: Don&apos;t sign anything</h2>
        <p>The meeting ends. An HR person hands you (or emails you) a separation packet. Inside: a severance offer, a release of claims, maybe a non-disparagement clause, benefits info.</p>
        <p><strong>Do not sign it in the meeting.</strong> You almost certainly have 21 to 45 days to decide (federal law requires longer review windows for group layoffs involving age-40+ employees). Nobody is forcing you to sign today. If someone is, that&apos;s a red flag.</p>
        <p>Ask them to email the packet to your personal address if they haven&apos;t already. Thank them. End the meeting.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Minute 30 – Hour 2: Save what matters</h2>
        <p>Access to your work laptop, email, and systems often gets cut within hours. Sometimes minutes. So move fast.</p>
        <p><strong>Save these to your personal device or cloud (only what&apos;s yours — don&apos;t take company IP):</strong></p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your original offer letter and any comp/bonus amendments</li>
          <li>Your most recent performance reviews</li>
          <li>Personal contacts from your work contacts app or email (people you want to stay in touch with)</li>
          <li>Any awards, write-ups, or recognition emails you might reference in interviews</li>
          <li>Your pay stubs and vacation/PTO balance screenshots</li>
          <li>Anything you personally wrote that isn&apos;t proprietary (portfolio pieces, blog posts, case studies)</li>
        </ul>
        <p>Do not take: client lists, internal docs, source code, or anything covered by your NDA. That&apos;s a lawsuit waiting to happen.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Hour 2–4: Map the deadlines</h2>
        <p>Every layoff packet has time-sensitive items. Open a note and list them:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Severance signing deadline</strong> — usually 21 or 45 days</li>
          <li><strong>Final paycheck date</strong> — some states require immediate payment; others allow until next pay cycle</li>
          <li><strong>Last day of health insurance coverage</strong> — often end of month of termination</li>
          <li><strong>COBRA election deadline</strong> — 60 days from the date coverage ends (or the day you receive the COBRA notice, whichever is later)</li>
          <li><strong>Stock vesting cutoff</strong> — if you have RSUs or options, how much is vested and what&apos;s the exercise window</li>
          <li><strong>Unused PTO payout</strong> — state rules vary; in some states employers must pay it out, in others they don&apos;t</li>
        </ul>
        <p>Missing one of these deadlines can cost you thousands. The calendar is your friend.</p>

        <div className="bg-gray-100 border border-dashed border-gray-300 rounded-lg p-4 my-8 text-center text-sm text-gray-400">Advertisement</div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Hour 4–24: Tell your people. Then sleep.</h2>
        <p>Tell your partner or the person you live with first. Then a close friend or two. Don&apos;t announce it on LinkedIn in the first 24 hours — you&apos;ll likely regret the tone.</p>
        <p>Eat something. Go for a walk. Sleep. The adrenaline will wear off and the actual thinking starts tomorrow.</p>
        <p>If you&apos;re in a tough headspace right now, our post on <Link href="/blog/take-a-breath" className="text-blue-600 hover:text-blue-800 underline">Take a Breath</Link> might help — it&apos;s written for exactly this moment.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Day 2, Hour 1: File for unemployment</h2>
        <p>This is the single highest-ROI thing you&apos;ll do. Benefits start the week you file — not the week you lost your job. Every day you wait is money gone.</p>
        <p><Link href="/" className="text-blue-600 hover:text-blue-800 underline">Find your state&apos;s filing page here.</Link> Most applications take 20 to 45 minutes. You&apos;ll need your employer&apos;s name and EIN, your Social Security number, and the reason for separation (&ldquo;laid off&rdquo; — not &ldquo;quit&rdquo;).</p>
        <p>We have a <Link href="/blog/file-for-unemployment-today" className="text-blue-600 hover:text-blue-800 underline">step-by-step filing guide</Link> if you want to walk through it.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Day 2, Hour 2–4: Read the severance, don&apos;t sign yet</h2>
        <p>Slowly re-read the separation agreement. Look for:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Severance amount and how it&apos;s paid</strong> — lump sum or salary continuation? Salary continuation can delay unemployment eligibility in some states.</li>
          <li><strong>Non-compete clauses</strong> — many are unenforceable now (FTC rules evolving), but check before you assume.</li>
          <li><strong>Non-disparagement</strong> — standard but worth reading.</li>
          <li><strong>Reference language</strong> — what will HR say if a future employer calls?</li>
          <li><strong>Release of claims</strong> — you&apos;re giving up the right to sue. Worth understanding what you&apos;re releasing.</li>
        </ul>
        <p>If the package is substantial (more than a few weeks) or you suspect discrimination played a role, spending $300 on an employment lawyer consultation before you sign can pay for itself many times over.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Day 2, Hour 4+: The network move</h2>
        <p>This is when LinkedIn matters. Keep the announcement short, direct, and forward-looking. Example:</p>
        <blockquote className="border-l-4 border-teal-500 pl-4 italic text-gray-700">
          After [X] years with [Company], I was impacted by the recent layoff. I&apos;m open to roles in [field/function]. If you know of openings or can make an intro, I&apos;d genuinely appreciate it. Happy to share my background with anyone hiring.
        </blockquote>
        <p>Then reach out personally to 10 to 15 former colleagues or contacts in your industry. Not a group email. A real, short message to each. &ldquo;Hey, I&apos;m back on the market. Can we grab coffee or do a 15-minute call next week?&rdquo;</p>
        <p>Those calls are how most jobs actually get filled.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What 48 hours buys you</h2>
        <p>Nothing about this is fun. But 48 hours of focused action puts you in a very different position than 48 hours of panic.</p>
        <p>You&apos;ve protected your severance options. You&apos;ve saved what&apos;s yours. You&apos;ve mapped every deadline that could cost you money. You&apos;ve filed for benefits. You&apos;ve told your network.</p>
        <p>That&apos;s a solid week&apos;s worth of moves in two days. You bought runway. Now the real work — finding the next thing — starts with a cleaner desk.</p>
        <p>Read next: <Link href="/blog/first-30-days-playbook" className="text-blue-600 hover:text-blue-800 underline">The First 30 Days After a Layoff</Link>.</p>

        <div className="mt-10 pt-8 border-t border-gray-200 text-sm text-gray-500">
          <p><strong>Context:</strong></p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Layoff counts referenced: public company announcements from Oracle, Disney, and Chevron (April 2026).</li>
            <li>Severance review periods: <a href="https://www.eeoc.gov/laws/guidance/understanding-waivers-discrimination-claims-employee-severance-agreements" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">EEOC guidance on severance agreements</a> (Older Workers Benefit Protection Act).</li>
            <li>COBRA timelines: <a href="https://www.dol.gov/general/topic/health-plans/cobra" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">U.S. Department of Labor COBRA overview</a>.</li>
          </ul>
        </div>
      </article>
    </div>
  );
}
