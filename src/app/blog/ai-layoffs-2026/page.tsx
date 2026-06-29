import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Laid Off Because of AI? What the Data Shows and What to Do (2026)",
  description:
    "In early 2026, AI became the single most-cited reason US employers gave for layoffs. If you were displaced by automation, here's the honest read on which roles are vulnerable, what's actually hiring, and where to pivot.",
  keywords: [
    "AI layoffs 2026",
    "laid off because of AI",
    "AI replacing jobs",
    "AI job displacement",
    "tech layoffs AI",
    "AI unemployment",
    "career pivot after AI layoff",
  ],
  openGraph: {
    title: "Laid Off Because of AI? What the Data Shows and What to Do (2026)",
    description:
      "AI became the top stated reason for US layoffs in early 2026. The honest read on what's vulnerable, what's hiring, and where to pivot.",
    type: "article",
    images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80"],
  },
};

export default function AiLayoffs2026Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">AI Layoffs 2026</span>
      </nav>

      <div className="relative rounded-xl overflow-hidden mb-8 h-72 md:h-96">
        <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1400&q=80" alt="Robotic arm working alongside a computer monitor" className="w-full h-full object-cover brightness-[0.75]" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/70 to-transparent">
          <span className="text-xs font-semibold tracking-widest uppercase text-teal-400">The Numbers</span>
          <h1 className="text-2xl md:text-4xl font-bold text-white mt-2">Laid Off Because of AI? What the Data Shows and What to Do</h1>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200 text-sm text-gray-500">
        <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-xs">TLG</div>
        <div>
          <div className="font-semibold text-gray-900">The Layoff Guide</div>
          <div>June 29, 2026 · 8 min read</div>
        </div>
      </div>

      <article className="prose-custom text-gray-700 leading-relaxed space-y-6">
        <p>
          You got the call. The wording was careful. &ldquo;Role consolidation due to changes in how we operate.&rdquo; Or maybe it was bolder. &ldquo;We are restructuring around AI-first workflows.&rdquo; Either way, the practical result is the same. You are out, and you suspect that a model trained on text or code or images is doing some version of what you used to do.
        </p>

        <p>
          You are not imagining the pattern. In March 2026, AI became the single most-cited reason employers gave for job cuts, the first time it led all reasons since Challenger, Gray &amp; Christmas began tracking it. AI accounted for about 25 percent of that month&apos;s announced cuts (15,341 of them). Tech-sector cuts, meanwhile, rose 40 percent year over year to 52,050 in the first quarter. The reason on your layoff is now a national trend.
        </p>

        <p>
          But the headline number hides a more useful story. Not all roles are equally exposed, what is actually being hired right now is not what most people assume, and the people who are landing softer than expected have one specific thing in common. Here is the read.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Which roles are actually vulnerable</h2>

        <p>
          The blunt truth is that AI right now is much better at narrow, well-defined, document-heavy tasks than it is at anything requiring novel judgment, accountability, or human relationships. The roles getting hit hardest in 2026 cluster in three buckets:
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">Mid-level content production</h3>
            <p className="text-sm text-gray-700">
              Marketing copy, technical writing, SEO content, first-draft journalism, junior legal research, basic graphic design. Tasks where the output is a deliverable that gets edited by someone senior. Companies are not eliminating the function. They are removing the middle of it.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">Tier-1 customer support and admin</h3>
            <p className="text-sm text-gray-700">
              Chat support, scheduling, basic account servicing, intake coordination, transactional sales follow-up. The questions that resolve in three back-and-forth turns are now handled by automated agents at scale. The complex escalations still need humans, but each support team needs fewer of them.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">Junior software engineering</h3>
            <p className="text-sm text-gray-700">
              This one is less about AI replacing engineers and more about AI letting senior engineers ship what a small team used to need. Bootcamp grads with one to two years of experience are finding the ladder pulled up. The work still exists; the on-ramp does not.
            </p>
          </div>
        </div>

        <p>
          If you were in one of those three buckets, the layoff is consistent with what the market is doing. You are not the problem. You were on the wrong rung at the wrong time, and the rung went away.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What is actually being hired</h2>

        <p>
          There is a real and persistent gap between the AI work companies want done and the people who can actually do it. The demand is not for pure machine-learning researchers. It is practical, and a lot of it sits open because employers are still figuring out the right hire:
        </p>

        <ul className="list-disc list-outside ml-6 space-y-2">
          <li><strong>AI integration analysts and program managers.</strong> People who can sit between a vendor model, a domain team, and a procurement budget and ship a working pilot in 90 days.</li>
          <li><strong>AI policy, governance, and risk roles.</strong> Compliance, audit, and legal review of AI workflows. Boring work, real demand, regulatory tailwinds.</li>
          <li><strong>Data quality and pipeline engineering.</strong> The unsexy work of cleaning and structuring the data that models actually need to be useful inside a company.</li>
          <li><strong>Human-in-the-loop review and ops.</strong> Senior reviewers who can spot when an AI output is plausibly correct but actually wrong, in their specific domain. Insurance, healthcare, legal, finance all need this.</li>
          <li><strong>Vendor management and AI sourcing.</strong> Companies are buying a lot of AI tools and managing them badly. People who can run an AI vendor portfolio professionally are valuable.</li>
        </ul>

        <p>
          The pattern: judgment, context, and accountability. None of these require a machine-learning PhD. Most require working knowledge of how the underlying systems behave, plus deep familiarity with the domain you came from.
        </p>

        <div className="border-l-4 border-amber-400 bg-amber-50 rounded-r-lg p-5 my-8">
          <p className="font-semibold text-gray-900 mb-1">The honest caveat</p>
          <p className="text-gray-800">
            Many of these listings are real but slow to close. Hiring managers are still figuring out the ideal candidate profile and the budget. Plan for a longer search than a comparable non-AI role, even when you are well qualified.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What displaced workers are actually doing</h2>

        <p>
          Anecdotally, three patterns are working, based on what is showing up on LinkedIn and in posts to r/layoffs:
        </p>

        <ol className="list-decimal list-outside ml-6 space-y-3">
          <li>
            <strong>Vertical specialization inside the same field.</strong> A generalist content marketer becomes an AI-policy content marketer. A junior engineer becomes a data-quality specialist for healthcare AI. The label shifts; the underlying skills carry over.
          </li>
          <li>
            <strong>Adjacent industry move.</strong> Tech-sector marketing pros are landing in healthcare, energy, government contracting, and education marketing teams, where the AI shock has been slower and the budgets are protected. Same role, less AI exposure, often lower salary.
          </li>
          <li>
            <strong>The 12-week credential play.</strong> A short cert that signals AI literacy alongside existing experience, IBM AI Engineering, Google Cloud AI, AWS Solutions Architect with AI add-ons, Pluralsight AI pathway. None of these turn you into a researcher. They do reposition your resume past the keyword filter.
          </li>
        </ol>

        <p>
          The pattern that is not working is trying to compete head-on with new AI specialists for AI specialist roles. The people graduating into AI roles in 2026 are coming in with two years of model-tuning experience from internships and side projects. If you have neither, the ladder is short.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The first 30 days, if you suspect AI replaced you</h2>

        <p>
          Practical sequence, in priority order. The first three are time-sensitive.
        </p>

        <ol className="list-decimal list-outside ml-6 space-y-3">
          <li>
            <strong>File for unemployment the week you separate.</strong> AI-driven layoffs are still layoffs under state UI rules. You qualify on the same terms as any other no-fault separation. See <Link href="/eligibility" className="text-blue-700 hover:text-blue-900 underline">our eligibility quiz</Link> for a state-by-state read.
          </li>
          <li>
            <strong>Get your separation agreement reviewed.</strong> Some 2026 packages include AI-specific non-compete language (cannot work on similar AI workflows for a defined period). If you intend to pivot into AI-adjacent roles, that matters. Spend the money on a one-hour employment-lawyer review if the language is broad.
          </li>
          <li>
            <strong>Update LinkedIn before you tell your network.</strong> Add &ldquo;Open to Work&rdquo; with the role types you want, including the AI-adjacent ones. Recruiters search by current title plus &ldquo;open to&rdquo;, in that order. Get found first, then post.
          </li>
          <li>
            <strong>Pick one credential, not three.</strong> The temptation is to stack four certifications. Don&apos;t. Pick the one that maps cleanly to where you actually want to land, finish it, and put it on the resume. Three half-finished certifications signal anxious churn, not skill acquisition.
          </li>
          <li>
            <strong>Apply with the new framing.</strong> &ldquo;Marketing manager&rdquo; becomes &ldquo;Marketing manager experienced in AI content workflows.&rdquo; Truthful and keyword-aware. Your prior experience absolutely counts as AI-workflow experience if you used the tools in your last role at all.
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">One more thing</h2>

        <p>
          The 2026 AI labor shock is real and it is sorting people by adaptability more than by background. The folks landing softest are not the ones with the cleanest AI-native resumes. They are the ones who can describe, in three sentences, exactly which part of their last job is now better automated and which part still needs human judgment. That clarity reads as senior. It also reads as honest, which is the part hiring managers are starving for in 2026.
        </p>

        <p>
          Layoffs do not get easier when the reason is &ldquo;a machine learned to do it.&rdquo; If anything they sting more, because the loss feels less personal but more systemic. Take the practical steps anyway. Most of the people who landed well after a 2025 layoff started by filing for benefits the same week and updating LinkedIn before lunch. The hard part is not knowing what to do. It is doing it on day one when the news is still raw.
        </p>

        <div className="border-l-4 border-teal-400 bg-teal-50 rounded-r-lg p-5 my-8 text-lg italic text-gray-800">
          &ldquo;The model didn&apos;t take the part of the job that mattered. It took the part that was already getting boring. The opportunity is to go find the part of the work that still requires you.&rdquo;
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Related on this site</h2>

        <ul className="list-disc list-outside ml-6 space-y-2 text-sm">
          <li><Link href="/timeline" className="text-blue-700 hover:text-blue-900 underline">The realistic timeline of an unemployment claim</Link> shows what to do at each phase of an unemployment claim.</li>
          <li><Link href="/eligibility" className="text-blue-700 hover:text-blue-900 underline">The eligibility quiz</Link> gives a state-aware read on whether you qualify for benefits while you job search.</li>
          <li><Link href="/blog/how-to-get-past-ats" className="text-blue-700 hover:text-blue-900 underline">How to get past ATS</Link> covers resume optimization, which matters more in 2026 than ever as application volume per opening has roughly doubled.</li>
          <li><Link href="/fast-track-careers" className="text-blue-700 hover:text-blue-900 underline">Fast-track careers</Link> covers 30+ careers that don&apos;t require a degree and can ramp in 4 to 12 weeks.</li>
        </ul>

        <div className="mt-10 pt-8 border-t border-gray-200 text-sm text-gray-500">
          <p><strong>Sources:</strong></p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Challenger, Gray &amp; Christmas, Job Cut Announcement Report, March 2026 (AI the most-cited reason for job cuts that month, about 25% of the total; Q1 2026 tech-sector cuts of 52,050).</li>
            <li>Skillsyncer 2026 Layoffs Tracker (share of 2026 layoff events that cite AI or automation as a driver).</li>
          </ul>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Laid Off Because of AI? What the Data Shows and What to Do (2026)",
        description: "AI became the top stated reason for US layoffs in early 2026. The honest read on what's vulnerable, what's hiring, and where to pivot.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80",
        url: "https://www.thelayoffguide.com/blog/ai-layoffs-2026",
        datePublished: "2026-06-29",
        dateModified: "2026-06-29",
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
          "@id": "https://www.thelayoffguide.com/blog/ai-layoffs-2026",
        },
      })}} />
    </div>
  );
}
