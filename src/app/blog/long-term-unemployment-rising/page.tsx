import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Long-Term Unemployment Just Jumped 322K: Here's Your Playbook",
  description:
    "Long-term unemployment is up 322,000 year-over-year according to the March 2026 jobs report. If you've been out of work more than 6 months, here's what to do next, state extended benefits, safety-net programs, resume-gap strategy, and the fastest pivots.",
  keywords: [
    "long-term unemployment",
    "unemployed over 6 months",
    "27 weeks unemployed",
    "extended unemployment benefits",
    "resume gap explanation",
    "what to do when unemployment runs out",
  ],
  openGraph: {
    title: "Long-Term Unemployment Just Jumped 322K: Here's Your Playbook",
    description: "If you've been out of work more than 6 months, here's the actual playbook, benefits, safety net, resume strategy, fast pivots.",
    type: "article",
    images: ["https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"],
  },
};

export default function LongTermUnemploymentPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Long-Term Unemployment Playbook</span>
      </nav>

      <div className="relative rounded-xl overflow-hidden mb-8 h-72 md:h-96">
        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80" alt="Calendar and coffee on a quiet morning table" className="w-full h-full object-cover brightness-[0.8]" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/70 to-transparent">
          <span className="text-xs font-semibold tracking-widest uppercase text-teal-400">The Numbers</span>
          <h1 className="text-2xl md:text-4xl font-bold text-white mt-2">Long-Term Unemployment Just Jumped 322K: Here&apos;s Your Playbook</h1>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200 text-sm text-gray-500">
        <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-xs">TLG</div>
        <div>
          <div className="font-semibold text-gray-900">The Layoff Guide</div>
          <div>April 15, 2026 · 6 min read</div>
        </div>
      </div>

      <article className="text-gray-700 leading-relaxed space-y-6">
        <p>The March jobs report dropped on April 3. Headlines mostly focused on the unemployment rate (4.3%, little changed) and the 178,000 jobs added. A lot of coverage moved on.</p>
        <p>But buried in the release is the number that actually matters if you&apos;ve been out of work for a while.</p>
        <p><strong>The number of long-term unemployed, people jobless 27 weeks or more, is up 322,000 from a year ago.</strong> That&apos;s now 1.8 million Americans. Long-term unemployed now make up 25.4% of everyone who&apos;s unemployed. One in four.</p>
        <p>If that&apos;s you, or you&apos;re starting to worry it might be, this one&apos;s for you.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why this matters (beyond the money)</h2>
        <p>Most state unemployment benefits last 26 weeks. Long-term unemployed = week 27 and beyond. That means your regular UI is either exhausted or about to be.</p>
        <p>There&apos;s also a less-discussed hiring penalty. Studies have shown for years that applicants with 6+ month resume gaps get called back significantly less often, even when qualifications are identical. Some employers unconsciously discount you. It&apos;s unfair. It&apos;s also reality.</p>
        <p>So you&apos;re playing two games at once: keep the bills paid and get hired despite a tougher market. The rest of this post is how.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Check if your state has extended benefits active</h2>
        <p>Federal Extended Benefits (EB) can kick in automatically when a state&apos;s unemployment rate hits certain triggers. They add up to 13 weeks on top of your regular 26.</p>
        <p>They&apos;re state-by-state and they come and go based on local unemployment numbers. Call your state&apos;s unemployment office or check your state&apos;s UI website for &ldquo;Extended Benefits&rdquo;, don&apos;t assume. Some people miss weeks of benefits because they didn&apos;t know to apply.</p>
        <p><Link href="/" className="text-blue-600 hover:text-blue-800 underline">Find your state&apos;s filing page here.</Link></p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. The safety-net checklist (you probably qualify for more than you think)</h2>
        <p>Most people who hit long-term unemployment qualify for at least two or three of these and don&apos;t realize it. Run the list:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>SNAP (food stamps)</strong>, income limits are higher than most people think. If you&apos;re unemployed with no savings cushion, you likely qualify.</li>
          <li><strong>Medicaid</strong>, if COBRA is unaffordable (it usually is), check Medicaid first. Eligibility expanded in many states.</li>
          <li><strong>LIHEAP</strong>, helps cover heating and cooling bills. Income-based. Apply through your state&apos;s energy assistance program.</li>
          <li><strong>Lifeline</strong>, discounted phone and internet for low-income households. Up to $9.25/month off.</li>
          <li><strong>WIC</strong>, if you have children under 5 or are pregnant, food support you may qualify for even if SNAP is borderline.</li>
          <li><strong>Rental assistance</strong>, many cities still have emergency rental programs. Call 211 or your local housing authority.</li>
        </ul>
        <p>Read our full <Link href="/blog/hidden-benefits" className="text-blue-600 hover:text-blue-800 underline">hidden benefits guide</Link> for the details on each.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Address the resume gap head-on</h2>
        <p>Hiding a 6-month gap doesn&apos;t work. Recruiters notice. What works better is owning it.</p>
        <p>Some options that actually land:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Say what you did.</strong> &ldquo;I took the time to complete [cert/course], care for a family member, volunteer with [org].&rdquo; Not a whole story, one sentence.</li>
          <li><strong>Show it as a line item.</strong> A short &ldquo;Professional Development&rdquo; section listing a cert, a class, a freelance project, or a volunteer role. It fills the gap with something.</li>
          <li><strong>Reframe the sabbatical.</strong> &ldquo;2025–2026: Career sabbatical, completed [X certification] and [Y project].&rdquo; That reads differently than a blank.</li>
        </ul>
        <p>The worst move is ignoring it. The second-worst is lying. Everything else is negotiable.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Pivot fast (if the old field isn&apos;t coming back)</h2>
        <p>If you&apos;re in an industry that&apos;s shrinking, staying loyal to it is expensive. There are careers you can get hired into in 4 to 12 weeks with a cert and no prior experience. Healthcare support, skilled trades, water treatment, transportation, disability services, real jobs with chronic shortages.</p>
        <p>We keep a vetted list at <Link href="/fast-track-careers" className="text-blue-600 hover:text-blue-800 underline">Fast Track Careers</Link>. Every entry is a class-then-cert-then-hired path, with honest caveats about pay and work conditions.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Bridge income isn&apos;t failure</h2>
        <p>Part-time, contract, temp, gig, these buy you runway and keep the resume alive. They&apos;re not giving up on your &ldquo;real&rdquo; career. They&apos;re funding the search for it.</p>
        <p>A few that work well as bridges: delivery/rideshare if you have a car, substitute teaching (most districts pay daily, no teaching degree needed for sub roles in most states), temp staffing agencies, seasonal retail/warehouse. Not glamorous. Pays bills. Keeps you moving.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Widen the net</h2>
        <p>After six months of the same search, it&apos;s worth asking: am I looking too narrowly?</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Geography.</strong> Would you move? Remote roles in some fields are scarcer than they were in 2021.</li>
          <li><strong>Industry.</strong> Your skills transfer to more than one sector. Marketing in tech → marketing in healthcare → marketing in nonprofit. Payroll in manufacturing → payroll anywhere.</li>
          <li><strong>Title.</strong> &ldquo;Senior X&rdquo; might be reaching. &ldquo;X&rdquo; might land you an offer and let you re-title in a year.</li>
          <li><strong>Company size.</strong> Small businesses hire differently than Fortune 500s. Different paths, often faster.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">One more thing</h2>
        <p>The long-term unemployment number going up means more people are in this with you. It&apos;s not a personal failing. It&apos;s a labor market shift.</p>
        <p>But it also means the old playbook, polish the resume, apply online, wait, doesn&apos;t cut it anymore. Stack benefits. Close the gap with a credential. Widen the search. Take bridge work without shame.</p>
        <p>And when the right thing lands, it lands.</p>

        <div className="mt-10 pt-8 border-t border-gray-200 text-sm text-gray-500">
          <p><strong>Sources:</strong></p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Bureau of Labor Statistics, Employment Situation, March 2026 (released April 3, 2026): <a href="https://www.bls.gov/news.release/empsit.nr0.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">bls.gov/news.release/empsit.nr0.htm</a></li>
          </ul>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Long-Term Unemployment Just Jumped 322K: Here's Your Playbook",
        description: "If you've been out of work more than 6 months, here's the actual playbook, benefits, safety net, resume strategy, fast pivots.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
        url: "https://www.thelayoffguide.com/blog/long-term-unemployment-rising",
        datePublished: "2026-04-15",
        dateModified: "2026-04-15",
        author: {
          "@type": "Person",
          "@id": "https://www.thelayoffguide.com/about#patrick",
          name: "Patrick",
          url: "https://www.thelayoffguide.com/about",
        },
        publisher: {
          "@type": "Organization",
          name: "The Layoff Guide",
          url: "https://www.thelayoffguide.com",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://www.thelayoffguide.com/blog/long-term-unemployment-rising",
        },
      })}} />
    </div>
  );
}
