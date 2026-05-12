import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Take a Breath, What to Do in the First 24 Hours After a Layoff",
  description:
    "Just got laid off? Here's what to do in the first 24 hours. Not a checklist, a human guide from someone who's been through it.",
  keywords: [
    "laid off what to do",
    "just got laid off",
    "first day after layoff",
    "layoff emotional support",
    "coping with job loss",
  ],
  openGraph: {
    title: "Take a Breath, What to Do in the First 24 Hours After a Layoff",
    description:
      "Just got laid off? Here's what to do in the first 24 hours, from someone who's been there.",
    type: "article",
    images: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
    ],
  },
};

export default function TakeABreathPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Part 1 of 3</span>
      </nav>

      {/* Hero Image */}
      <div className="relative rounded-xl overflow-hidden mb-8 h-72 md:h-96">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1400&q=80"
          alt="Peaceful foggy valley at sunrise"
          className="w-full h-full object-cover brightness-[0.85]"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/70 to-transparent">
          <span className="text-xs font-semibold tracking-widest uppercase text-teal-400">Getting Started</span>
          <h1 className="text-2xl md:text-4xl font-bold text-white mt-2">Take a Breath, What to Do in the First 24 Hours After a Layoff</h1>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200 text-sm text-gray-500">
        <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-xs">TLG</div>
        <div>
          <div className="font-semibold text-gray-900">The Layoff Guide</div>
          <div>April 6, 2026 · 5 min read</div>
        </div>
      </div>

      <article className="prose-custom text-gray-700 leading-relaxed space-y-6">
        <p>Hey. So it happened.</p>

        <p>Maybe you saw it coming. Maybe you didn&apos;t. Maybe you were in a meeting this morning thinking about lunch, and twenty minutes later you were holding a box and trying to remember your car&apos;s parking spot. Maybe it was a Zoom call, a calendar invite that didn&apos;t have an agenda, the HR person you didn&apos;t recognize, and that awful phrase: <em>&ldquo;We&apos;ve made the difficult decision...&rdquo;</em></p>

        <p>However it went down, you&apos;re here now. And the first thing I want you to know, the most important thing, is that <strong>you are going to be okay.</strong></p>

        <p>Not in a &ldquo;slap a smile on it&rdquo; way. In a real way. But we&apos;ll get to that. Right now, let&apos;s just talk about today.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">First: What You&apos;re Feeling Is Completely Normal</h2>

        <p>Job loss is consistently ranked as one of the top five most stressful life events, right up there with divorce and the death of a loved one. It&apos;s not just about money (though we&apos;ll deal with that tomorrow). It&apos;s about identity, routine, belonging, purpose. One minute you&apos;re a [job title] at [company], and the next minute you&apos;re... what, exactly?</p>

        <p>That disorientation? It&apos;s grief. Real grief. And it doesn&apos;t matter if you hated the job. You can feel relief and loss at the same time, that&apos;s allowed.</p>

        <p>You might feel numb right now. Or angry. Or weirdly calm. Or like you want to cry in the shower. All of it is normal. None of it means anything is wrong with you.</p>

        <div className="border-l-4 border-teal-400 bg-teal-50 rounded-r-lg p-5 my-8 text-lg italic text-gray-800">
          &ldquo;You don&apos;t have to figure out your whole life today. You just have to get through today.&rdquo;
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Don&apos;t Make Any Big Decisions Right Now</h2>

        <p>Your brain is in fight-or-flight mode. That&apos;s not a metaphor, it&apos;s literally what&apos;s happening. Your cortisol is spiked, your thinking is narrowed, and your mind is racing through worst-case scenarios at a hundred miles an hour.</p>

        <p>This is the absolute worst state to make important decisions in. So don&apos;t.</p>

        <p>Don&apos;t fire off an angry LinkedIn post. Don&apos;t accept the first job you see on Indeed. Don&apos;t sign anything from your former employer today, that severance agreement isn&apos;t going anywhere, and you deserve to read it with clear eyes.</p>

        <p>Today, your only job is to take care of yourself. Everything else can wait until tomorrow.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Do These Three Things Instead</h2>

        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Get outside and move your body</h3>

        <p>Put your shoes on, walk out the front door, and go for a 20-minute walk. There&apos;s solid research behind this, physical movement reduces cortisol and gets you out of the doom loop your brain is trying to build. The sunlight helps. The fresh air helps. You don&apos;t have to solve anything on this walk. Just notice things.</p>

        <div className="rounded-xl overflow-hidden shadow-lg my-8">
          <img src="https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=1200&q=80" alt="Person walking alone on a peaceful path" className="w-full h-64 object-cover" />
          <div className="bg-gray-100 text-center text-sm text-gray-500 py-3">You don&apos;t have to go far. Just go outside.</div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Call one person</h3>

        <p>Not to &ldquo;network.&rdquo; Not to ask for job leads. Just to say it out loud: <em>&ldquo;Hey, I got laid off today.&rdquo;</em></p>

        <p>Pick someone safe. A partner, a sibling, a best friend. You don&apos;t need advice right now. You need someone to say, &ldquo;That sucks. I&apos;m sorry. What do you need?&rdquo;</p>

        <p>Saying it out loud takes away some of its power. It moves it from a thing that&apos;s swirling in your head to a thing that&apos;s real and shared and survivable.</p>

        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Step away from your phone</h3>

        <p><strong>Not today.</strong> None of the LinkedIn scrolling, job board panic, or Glassdoor reviews is going to help you right now. The job market will be there tomorrow. Today, your phone is not your friend.</p>

        <p>Watch a movie. Cook something. Play with your kids. Take a nap. Do something that has absolutely nothing to do with work.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">A Few Things to Remember</h2>

        <p><strong>This is not your fault.</strong> Layoffs are a business decision. They&apos;re about spreadsheets and quarterly numbers. You didn&apos;t lose your job because you weren&apos;t good enough.</p>

        <p><strong>This does not define you.</strong> You are not your job title. You have skills, experience, and value that didn&apos;t evaporate when that meeting ended.</p>

        <p><strong>This is temporary.</strong> People get through this, millions of them, every year. And so will you.</p>

        <div className="border-l-4 border-teal-400 bg-teal-50 rounded-r-lg p-5 my-8 text-lg italic text-gray-800">
          &ldquo;You didn&apos;t lose your value today. You lost a job. Those are two very different things.&rdquo;
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Tomorrow, We Get to Work</h2>

        <p>Tomorrow I&apos;m going to help you sit down with your finances and figure out exactly where you stand, no panic, no judgment, just numbers on a page. After that, we&apos;ll file for unemployment and start building a plan.</p>

        <p>But that&apos;s tomorrow.</p>

        <p>Today? Today you just breathe. Take the walk. Make the call. Put the phone down. Be gentle with yourself.</p>

        <p><strong>You&apos;re going to be okay. I mean that.</strong></p>
      </article>

      {/* Series Navigation */}
      <div className="bg-gray-900 text-white rounded-xl p-8 mt-10 text-center">
        <h3 className="text-teal-400 font-bold text-lg mb-2">Ready for the Next Step?</h3>
        <p className="text-gray-400 mb-5">Tomorrow we get practical. Start with your finances.</p>
        <Link href="/blog/the-money-talk" className="inline-block bg-teal-500 text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-teal-400 transition-colors">
          Read: The Money Talk &rarr;
        </Link>
      </div>

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Take a Breath, What to Do in the First 24 Hours After a Layoff",
            description: "Just got laid off? Here's what to do in the first 24 hours.",
            image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
            url: "https://www.thelayoffguide.com/blog/take-a-breath",
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
              "@id": "https://www.thelayoffguide.com/blog/take-a-breath",
            },
          }),
        }}
      />
    </div>
  );
}
