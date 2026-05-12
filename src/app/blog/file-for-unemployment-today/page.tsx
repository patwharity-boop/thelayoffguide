import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "File for Unemployment Today: Here's Exactly How",
  description:
    "Step-by-step guide to filing for unemployment. What you need, how long it takes, and the mistakes to avoid. File today, every day you wait costs you money.",
  keywords: [
    "how to file for unemployment",
    "file unemployment online",
    "unemployment application",
    "unemployment benefits how to apply",
    "laid off file unemployment",
  ],
  openGraph: {
    title: "File for Unemployment Today: Here's Exactly How",
    description: "15-30 minutes. That's all it takes. Here's exactly what to do.",
    type: "article",
    images: ["https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"],
  },
};

export default function FileForUnemploymentPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Part 3 of 3</span>
      </nav>

      <div className="relative rounded-xl overflow-hidden mb-8 h-72 md:h-96">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80" alt="Person confidently working on laptop" className="w-full h-full object-cover brightness-[0.8]" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/70 to-transparent">
          <span className="text-xs font-semibold tracking-widest uppercase text-teal-400">Action Steps</span>
          <h1 className="text-2xl md:text-4xl font-bold text-white mt-2">File for Unemployment Today: Here&apos;s Exactly How</h1>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200 text-sm text-gray-500">
        <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-xs">TLG</div>
        <div>
          <div className="font-semibold text-gray-900">The Layoff Guide</div>
          <div>April 6, 2026 · 6 min read</div>
        </div>
      </div>

      <article className="text-gray-700 leading-relaxed space-y-6">
        <p>I&apos;m going to be direct with you: <strong>if you got laid off and you haven&apos;t filed for unemployment yet, stop reading and go do it right now.</strong></p>
        <p>Seriously. Bookmark this page, <Link href="/" className="text-teal-600 underline">find your state&apos;s unemployment website</Link>, and file. I&apos;ll be here when you get back.</p>
        <p>Still here? Okay, maybe you need a little convincing, or you&apos;re not sure how the process works. Let&apos;s fix that.</p>

        {/* Urgency Banner */}
        <div className="bg-red-500 text-white rounded-xl p-6 my-8 flex flex-col sm:flex-row items-center gap-4">
          <span className="text-4xl shrink-0">&#9200;</span>
          <div>
            <h4 className="font-bold text-lg">Every day you wait costs you money.</h4>
            <p className="text-red-100 text-sm mt-1">Unemployment benefits start the week you FILE, not the week you lost your job. If you wait two weeks to file, that&apos;s two weeks of benefits you can never get back.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">First, Let&apos;s Kill the Stigma</h2>
        <p>I know why you haven&apos;t filed yet. There&apos;s a voice in your head saying: <em>&ldquo;Unemployment is for people who really need it&rdquo;</em> or <em>&ldquo;I&apos;ll find something fast.&rdquo;</em></p>

        {/* Myth Buster */}
        <div className="bg-white border-2 border-gray-200 rounded-xl p-6 my-8">
          <div className="text-red-500 font-bold mb-2">&#10008; MYTH: &ldquo;Unemployment is a handout.&rdquo;</div>
          <div className="text-teal-600 font-bold mb-2">&#10004; REALITY: It&apos;s insurance your employer paid into on your behalf.</div>
          <p className="text-sm text-gray-600">Every paycheck you ever earned, your employer paid a percentage into the state unemployment insurance fund. That money was part of your compensation. Filing is no different than filing a claim on your car insurance after an accident. You paid for it. Use it.</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What You&apos;ll Need Before You Start</h2>
        <p>Gather these before you sit down. Most people finish in 15 to 30 minutes.</p>

        {/* Checklist */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 my-8">
          <h4 className="font-bold text-gray-900 mb-4 pb-3 border-b-2 border-teal-400">Your Filing Checklist</h4>
          {[
            { num: 1, title: "Social Security Number", desc: "Full number, not just last four." },
            { num: 2, title: "Driver's license or state ID", desc: "Some states require this for identity verification." },
            { num: 3, title: "Former employer's info", desc: "Company name, address, phone number. Check your offer letter or pay stub." },
            { num: 4, title: "Employment dates", desc: "Start date and last day worked. Approximate is fine." },
            { num: 5, title: "Reason for separation", desc: "Select \"layoff\" or \"reduction in force.\" This matters for eligibility." },
            { num: 6, title: "Bank account info", desc: "Routing and account number for direct deposit. Faster than a debit card." },
            { num: 7, title: "Recent earnings info", desc: "Last pay stub or rough idea of weekly earnings." },
          ].map((item) => (
            <div key={item.num} className="flex items-start gap-4 py-3 border-b border-gray-100 last:border-0 text-sm">
              <div className="w-7 h-7 rounded-full bg-teal-500 text-gray-900 flex items-center justify-center font-bold text-xs shrink-0">{item.num}</div>
              <div><strong className="text-gray-900">{item.title}</strong>, {item.desc}</div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Process: Step by Step</h2>

        {[
          { step: 1, title: "Find your state's unemployment website", content: "Every state runs its own program. Don't Google and click the first link, there are scam sites. We've verified the official link for all 50 states." },
          { step: 2, title: "Create an account", content: "Use a personal email (not work, you lost access). Set a strong password and write it down. You'll be coming back every week." },
          { step: 3, title: "Fill out the initial claim", content: "Employment history, reason for leaving, personal info. For separation reason, select layoff/reduction in force. Takes 15-30 minutes." },
          { step: 4, title: "Set up direct deposit", content: "Choose direct deposit and enter your bank details. It's faster than waiting for a debit card in the mail." },
          { step: 5, title: "Submit and save your confirmation", content: "Screenshot your confirmation number. Save the URL, your login, and reference numbers. Make an email folder for unemployment correspondence." },
        ].map((s) => (
          <div key={s.step} className="border-l-4 border-teal-400 bg-white rounded-r-xl p-5 my-4 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-1">Step {s.step}</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
            <p className="text-sm text-gray-600">{s.content}{s.step === 1 && <> <Link href="/" className="text-teal-600 font-semibold">Find your state&apos;s page &rarr;</Link></>}</p>
          </div>
        ))}

        <div className="rounded-xl overflow-hidden shadow-lg my-8">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80" alt="Person working on laptop" className="w-full h-64 object-cover" />
          <div className="bg-gray-100 text-center text-sm text-gray-500 py-3">15-30 minutes. That&apos;s all it takes.</div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Happens After You File</h2>
        <p><strong>Processing time:</strong> Most states take 1-3 weeks. Don&apos;t panic if you don&apos;t see money immediately.</p>
        <p><strong>Weekly certifications:</strong> After approval, you certify every week (or two) confirming you&apos;re still unemployed and looking. Takes 5 minutes. <strong>Set a phone reminder.</strong> Miss one, miss that week&apos;s payment.</p>
        <p><strong>Job search requirements:</strong> Most states require you to apply to jobs and keep a log. Check our <Link href="/resources" className="text-teal-600 underline">Resources page</Link> for free resume builders and job boards.</p>
        <p><strong>Benefit amount:</strong> Typically 40-50% of your previous weekly pay, up to a state maximum. <Link href="/compare" className="text-teal-600 underline">See how your state compares &rarr;</Link></p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Mistakes to Avoid</h2>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <h4 className="font-bold text-amber-800 mb-4">Don&apos;t make these mistakes:</h4>
          {[
            "Waiting to file. Every week you delay is a week of benefits you'll never see. File today.",
            "Saying you \"quit\" when you were laid off. How you describe your separation matters for eligibility.",
            "Forgetting weekly certifications. Your claim doesn't auto-pay. Set a recurring calendar reminder.",
            "Not reporting other income. Getting caught means repaying benefits plus penalties.",
            "Using a work email. It will be deactivated. Use a personal email.",
          ].map((m, i) => (
            <div key={i} className="text-sm text-gray-700 py-2 pl-6 relative">
              <span className="absolute left-0">&#9888;</span>
              <strong>{m.split('.')[0]}.</strong>{m.split('.').slice(1).join('.')}
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Now Go Do It</h2>
        <p>Filing for unemployment is the single highest-value thing you can do today. It takes 15-30 minutes, it&apos;s money you already earned, and every day you wait is money you&apos;ll never see.</p>
        <p>You don&apos;t need a new resume. You don&apos;t need a five-year plan. You just need to open your state&apos;s website, fill out the form, and hit submit.</p>
        <p>Check out our <Link href="/resources" className="text-teal-600 underline">Resources page</Link>, we&apos;ve put together everything from SNAP and food assistance to free health insurance options, affordable therapy, and skills training.</p>
        <p><strong>You got this.</strong></p>

        <div className="border-l-4 border-teal-400 bg-teal-50 rounded-r-lg p-5 my-8 text-lg italic text-gray-800">
          &ldquo;Filing takes 15 minutes. Not filing costs you hundreds of dollars a week. The math is simple, do it now.&rdquo;
        </div>
      </article>

      <div className="bg-gray-900 text-white rounded-xl p-8 mt-10 text-center">
        <h3 className="text-teal-400 font-bold text-lg mb-2">Find Your State&apos;s Unemployment Page</h3>
        <p className="text-gray-400 mb-5">We&apos;ve verified every state&apos;s official filing link, plus max weekly benefits, duration, and eligibility rules.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="inline-block bg-teal-500 text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-teal-400 transition-colors">
            Find Your State &rarr;
          </Link>
          <Link href="/resources" className="inline-block border-2 border-teal-500 text-teal-400 font-semibold px-8 py-3 rounded-lg hover:bg-teal-500/10 transition-colors">
            Browse All Resources &rarr;
          </Link>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        headline: "File for Unemployment Today, Here's Exactly How",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
        url: "https://www.thelayoffguide.com/blog/file-for-unemployment-today",
        datePublished: "2026-04-06",
        dateModified: "2026-04-06",
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
          "@id": "https://www.thelayoffguide.com/blog/file-for-unemployment-today",
        },
      })}} />
    </div>
  );
}
