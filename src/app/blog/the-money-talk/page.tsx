import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Money Talk, How to Map Your Finances After a Layoff",
  description:
    "How to map your finances after a layoff. T-chart your income vs expenses, calculate your runway, and find quick wins. Free budget template included.",
  keywords: [
    "finances after layoff",
    "budget after job loss",
    "layoff financial planning",
    "unemployment budget",
    "how long can I survive without a job",
  ],
  openGraph: {
    title: "The Money Talk, How to Map Your Finances After a Layoff",
    description: "Figure out exactly where you stand financially in 20 minutes. Free budget template included.",
    type: "article",
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"],
  },
};

export default function MoneyTalkPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Part 2 of 3</span>
      </nav>

      <div className="relative rounded-xl overflow-hidden mb-8 h-72 md:h-96">
        <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80" alt="Financial planning notebook and calculator" className="w-full h-full object-cover brightness-[0.8]" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/70 to-transparent">
          <span className="text-xs font-semibold tracking-widest uppercase text-teal-400">Finances</span>
          <h1 className="text-2xl md:text-4xl font-bold text-white mt-2">The Money Talk, How to Map Your Finances After a Layoff</h1>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200 text-sm text-gray-500">
        <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-xs">TLG</div>
        <div>
          <div className="font-semibold text-gray-900">The Layoff Guide</div>
          <div>April 6, 2026 · 6 min read</div>
        </div>
      </div>

      <div className="bg-gray-100 border border-dashed border-gray-300 rounded-lg p-4 mb-8 text-center text-sm text-gray-400">Advertisement</div>

      <article className="text-gray-700 leading-relaxed space-y-6">
        <p>Okay. You made it through yesterday. You took the walk. You made the call. You let yourself feel it. Nice work, seriously.</p>
        <p>Now let&apos;s talk about money.</p>
        <p>I know. This is the part everyone dreads. The &ldquo;how long can I survive?&rdquo; conversation you&apos;ve been having with the ceiling at 3am. But here&apos;s the thing: <strong>the unknown is always scarier than the known.</strong> Once we put real numbers on paper, the panic almost always goes down, because you usually have more runway than you think.</p>
        <p>Grab a notebook, open a spreadsheet, or honestly just use the back of an envelope. We&apos;re going to figure out exactly where you stand in about 20 minutes.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 1: The T-Chart, Income vs. Expenses</h2>
        <p>Draw a line down the middle of your page. Left side: money coming in. Right side: money going out.</p>

        {/* T-Chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden shadow-md my-8">
          <div className="bg-teal-50 p-6 md:border-r-2 md:border-teal-400 border-b-2 md:border-b-0 border-teal-400">
            <h4 className="text-sm font-bold uppercase tracking-wider text-teal-700 mb-4 pb-2 border-b border-teal-200">Money Coming In</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between"><span>Severance (if any)</span><span className="font-semibold">$X,XXX</span></li>
              <li className="flex justify-between"><span>Unemployment benefits</span><span className="font-semibold">$XXX/wk</span></li>
              <li className="flex justify-between"><span>Partner&apos;s income</span><span className="font-semibold">$X,XXX</span></li>
              <li className="flex justify-between"><span>Side gig / freelance</span><span className="font-semibold">$XXX</span></li>
              <li className="flex justify-between"><span>Last paycheck + PTO payout</span><span className="font-semibold">$X,XXX</span></li>
            </ul>
          </div>
          <div className="bg-red-50 p-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-red-700 mb-4 pb-2 border-b border-red-200">Money Going Out</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between"><span>Rent / Mortgage</span><span className="font-semibold">$X,XXX</span></li>
              <li className="flex justify-between"><span>Car payment</span><span className="font-semibold">$XXX</span></li>
              <li className="flex justify-between"><span>Insurance</span><span className="font-semibold">$XXX</span></li>
              <li className="flex justify-between"><span>Groceries</span><span className="font-semibold">$XXX</span></li>
              <li className="flex justify-between"><span>Utilities &amp; phone</span><span className="font-semibold">$XXX</span></li>
              <li className="flex justify-between"><span>Subscriptions</span><span className="font-semibold">$XXX</span></li>
              <li className="flex justify-between"><span>Minimum debt payments</span><span className="font-semibold">$XXX</span></li>
            </ul>
          </div>
        </div>

        <p>Don&apos;t overthink it. Rough numbers are fine. We&apos;re going for &ldquo;directionally correct,&rdquo; not &ldquo;auditor-approved.&rdquo;</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 2: The Subscription Purge</h2>
        <p>All those $9.99 and $14.99 charges that quietly drain your account every month? Time to go through every single one.</p>

        <div className="bg-white border border-gray-200 rounded-xl p-6 my-8">
          <h4 className="font-bold text-gray-900 mb-4">Quick wins, things you can pause or cancel today:</h4>
          <div className="space-y-3 text-sm">
            {[
              { item: "Streaming services you barely use (keep one)", save: "~$30-50/mo" },
              { item: "Gym membership (most allow a \"freeze\")", save: "~$30-80/mo" },
              { item: "Premium app subscriptions", save: "~$15-30/mo" },
              { item: "Meal kit deliveries", save: "~$60-120/mo" },
              { item: "Subscription boxes", save: "~$20-50/mo" },
              { item: "Unused SaaS tools or professional memberships", save: "~$10-50/mo" },
            ].map((w, i) => (
              <div key={i} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0">
                <div className="w-5 h-5 border-2 border-teal-400 rounded shrink-0 mt-0.5"></div>
                <span className="flex-1 text-gray-700">{w.item}</span>
                <span className="text-teal-700 font-semibold whitespace-nowrap">{w.save}</span>
              </div>
            ))}
          </div>
        </div>

        <p>Most people find $100-300/month in subscriptions they can pause without really noticing. That&apos;s real money, that&apos;s an extra month of runway.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 3: Calculate Your Runway</h2>
        <p>This is the big one. The number that will either keep you up at night or help you sleep.</p>

        <div className="bg-gray-900 text-white rounded-xl p-8 my-8 text-center">
          <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">Your Runway Formula</div>
          <div className="text-xl md:text-2xl font-bold text-teal-400 mb-2">Total Savings ÷ Monthly Expenses = Months of Runway</div>
          <div className="text-sm text-gray-400">Example: $12,000 savings ÷ $3,200/month = 3.75 months</div>
        </div>

        <p>Now add in any income, severance, unemployment benefits, a partner&apos;s paycheck. Most people, once they actually do this math, realize they&apos;re not in &ldquo;the house is on fire&rdquo; territory. They&apos;re in &ldquo;I have some time to be thoughtful&rdquo; territory.</p>

        <div className="border-l-4 border-teal-400 bg-teal-50 rounded-r-lg p-5 my-8 text-lg italic text-gray-800">
          &ldquo;Knowing your numbers doesn&apos;t create the problem, it takes away the panic. You probably have more runway than you think.&rdquo;
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 4: Don&apos;t Forget the Income Side</h2>

        <p><strong>Unemployment benefits.</strong> If you were laid off, you almost certainly qualify. Benefits replace 40-50% of your previous income. <Link href="/" className="text-teal-600 hover:text-teal-800 underline">Find your state&apos;s unemployment page here &rarr;</Link></p>

        <p><strong>Your last paycheck and PTO.</strong> Most states require your employer to pay out unused vacation. That check is often bigger than you expect.</p>

        <p><strong>Severance.</strong> If it was offered, great. If it wasn&apos;t, it doesn&apos;t hurt to ask, especially if you&apos;re being asked to sign a release.</p>

        <p><strong>SNAP and food assistance.</strong> If you qualify, use it. These programs exist precisely for moments like this. <Link href="/resources" className="text-teal-600 hover:text-teal-800 underline">Check available assistance programs &rarr;</Link></p>

        <div className="rounded-xl overflow-hidden shadow-lg my-8">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80" alt="Person writing notes at a desk" className="w-full h-64 object-cover" />
          <div className="bg-gray-100 text-center text-sm text-gray-500 py-3">Twenty minutes with a pen and paper can change everything.</div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 5: Put It All in One Place</h2>

        <p>We built a free budget template that does the math for you. Plug in your numbers and it&apos;ll show you your monthly burn rate, your runway, and where the quick wins are.</p>

        <p><Link href="/budget-template" className="text-teal-600 hover:text-teal-800 font-semibold underline">Grab the free budget template here &rarr;</Link></p>

        <p>The moment you replace &ldquo;I have no idea how long I can survive&rdquo; with &ldquo;I have 4.2 months of runway and here&apos;s how I can stretch it to 6&rdquo;, the entire game changes.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">One More Thing: No Shame in This Game</h2>

        <p>If your savings are thin, that&apos;s okay. If your runway is shorter than you&apos;d like, that&apos;s okay. You&apos;re not behind. You just got hit with something unexpected, and now you&apos;re dealing with it, which is exactly the right thing to do.</p>

        <p>The people who struggle most after a layoff aren&apos;t the ones with small savings accounts. They&apos;re the ones who avoid looking at the numbers entirely. You&apos;re here, doing the work. That puts you ahead of most people already.</p>

        <div className="border-l-4 border-teal-400 bg-teal-50 rounded-r-lg p-5 my-8 text-lg italic text-gray-800">
          &ldquo;You don&apos;t need a perfect financial plan. You need a 20-minute honest look at your numbers. That&apos;s enough to start.&rdquo;
        </div>
      </article>

      <div className="bg-gray-100 border border-dashed border-gray-300 rounded-lg p-4 mt-8 mb-8 text-center text-sm text-gray-400">Advertisement</div>

      {/* Series Navigation */}
      <div className="bg-gray-900 text-white rounded-xl p-8 mt-10 text-center">
        <h3 className="text-teal-400 font-bold text-lg mb-2">Next Step: File for Unemployment</h3>
        <p className="text-gray-400 mb-5">This is the single most important thing you can do today. Don&apos;t wait, every day costs you money.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/blog/file-for-unemployment-today" className="inline-block bg-teal-500 text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-teal-400 transition-colors">
            Read: File for Unemployment Today &rarr;
          </Link>
          <Link href="/budget-template" className="inline-block border-2 border-teal-500 text-teal-400 font-semibold px-8 py-3 rounded-lg hover:bg-teal-500/10 transition-colors">
            Get the Free Budget Template
          </Link>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        headline: "The Money Talk, How to Map Your Finances After a Layoff",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
        author: { "@type": "Organization", name: "The Layoff Guide" },
        datePublished: "2026-04-06",
      })}} />
    </div>
  );
}
