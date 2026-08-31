import Link from "next/link";
import { posts } from "@/data/blog";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Blog: Unemployment Tips, Guides & Advice",
  description:
    "Practical advice for navigating unemployment. Tips on filing, appealing denials, side hustles, and getting back on your feet.",
  path: "/blog",
});

const series = [
  {
    part: 1,
    slug: "take-a-breath",
    title: "Take a Breath: What to Do in the First 24 Hours",
    description: "The emotional one. Give yourself permission to feel it, take a walk, call a friend.",
    category: "Getting Started",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
  },
  {
    part: 2,
    slug: "the-money-talk",
    title: "The Money Talk: How to Map Your Finances",
    description: "T-chart your income vs expenses, calculate your runway, find quick wins.",
    category: "Finances",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    part: 3,
    slug: "file-for-unemployment-today",
    title: "File for Unemployment Today: Here's Exactly How",
    description: "Stop waiting. 15-30 minutes, step by step, and the mistakes to avoid.",
    category: "Action Steps",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">Blog</h1>
      <p className="text-lg text-gray-600 mb-10">
        Practical advice from people who&apos;ve been through it. No corporate
        fluff, just what you actually need to know.
      </p>

      {/* Featured 3-Part Series */}
      <section className="mb-12">
        <div className="bg-gray-900 rounded-xl p-6 md:p-8 mb-6">
          <h2 className="text-teal-400 font-bold text-sm uppercase tracking-widest mb-2">
            Featured Series
          </h2>
          <h3 className="text-white text-2xl font-bold mb-2">
            Just Got Laid Off? Start Here.
          </h3>
          <p className="text-gray-400">
            A 3-part guide that takes you from day one through filing for
            unemployment. Read them in order.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {series.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative rounded-xl overflow-hidden h-64 block"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover brightness-[0.6] group-hover:brightness-[0.5] transition-all"
              />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">
                  Part {post.part} · {post.category}
                </span>
                <h3 className="text-white font-bold text-lg mt-1 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mt-2">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Latest Articles
        </h2>
        <div className="space-y-6">
          {[
            { slug: "gaming-layoffs-unemployment", title: "Laid Off from a Game Studio? Unemployment for Game Devs (2026)", description: "Xbox and game studio cuts in 2026 left thousands navigating UI. Employee vs contractor, which state applies, severance rules, and what Washington state Xbox workers need to file.", date: "2026-08-31" },
            { slug: "freight-logistics-layoffs-unemployment", title: "Laid Off from Freight or Trucking? How to File for Unemployment", description: "If you drove a truck, worked a warehouse dock, or dispatched loads, whether you can get UI depends almost entirely on one thing: W-2 or 1099. The honest breakdown.", date: "2026-08-31" },
            { slug: "employer-relocation-unemployment", title: "Can You Collect Unemployment If Your Company Moves and You Can’t Follow?", description: "Your employer is relocating and you can’t move. Is that a layoff or a voluntary quit? How states apply good-cause-quit rules, constructive discharge, severance, and how to document your claim.", date: "2026-07-27" },
            { slug: "ai-layoffs-2026", title: "Laid Off Because of AI? What the Data Shows and What to Do (2026)", description: "AI became the most-cited reason for US layoffs in early 2026. Which roles are vulnerable, what’s actually hiring, and where to pivot after an AI-driven layoff.", date: "2026-06-29" },
            { slug: "warn-act-guide", title: "WARN Act Notice: What a 60-Day Advance Layoff Notice Actually Means", description: "Got a WARN notice? What the 60-day federal notice requires, the three exceptions employers use, state rules in CA/NY/NJ, and how to use the window.", date: "2026-06-29" },
            { slug: "working-part-time-on-unemployment", title: "Working Part-Time While on Unemployment: Partial Benefits and Gig Work (2026)", description: "Partial unemployment lets you work some and keep part of your benefit, often stretching it further. How it works, New York\u2019s hours-based system in detail, and how to handle Upwork and gig income.", date: "2026-06-08" },
            { slug: "unemployment-and-taxes", title: "Unemployment and Taxes: The 1099-G and What You Will Actually Owe", description: "Unemployment benefits are taxable but arrive with no tax withheld. How to use Form W-4V (10%), read your 1099-G, and which states do not tax benefits.", date: "2026-06-08" },
            { slug: "negotiate-severance", title: "How to Negotiate a Better Severance Package", description: "Severance is often negotiable because the company wants your signed release. What is on the table, where your leverage is, the OWBPA clock, and when to get a lawyer.", date: "2026-06-08" },
            { slug: "severance-and-unemployment", title: "Got Severance? Here's How It Actually Affects Your Unemployment Benefits", description: "Severance does not cancel your unemployment, but it can delay when payments start. The rules vary a lot by state. Here's what actually drives the outcome.", date: "2026-04-29" },
            { slug: "long-term-unemployment-rising", title: "Long-Term Unemployment Just Jumped 322K: Here's Your Playbook", description: "1.8 million Americans have been out of work 27+ weeks. Here's how to stack benefits, close the resume gap, and pivot faster.", date: "2026-04-15" },
            { slug: "fast-track-careers", title: "You Don't Need a Degree, 15 High-Paying Careers in 12 Weeks or Less", description: "Phlebotomist, CDL driver, insurance adjuster, drone pilot, and more. No degree required.", date: "2026-04-07" },
            { slug: "fired-unemployment", title: "Can I Get Unemployment If I Was Fired?", description: "It depends on why. Misconduct = probably not. Performance = maybe. Here's exactly how it works.", date: "2026-04-07" },
            { slug: "cobra-vs-marketplace", title: "Health Insurance After a Layoff in 2026: COBRA, the Marketplace, and What Just Changed", description: "The 2026 angle on COBRA vs the Marketplace: the enhanced-subsidy expiry, the two 60-day windows, the retroactive-COBRA safety net, and Medicaid.", date: "2026-06-08" },
            { slug: "explain-layoff-interview", title: "How to Explain a Layoff in a Job Interview", description: "The dreaded question, here's exactly what to say and what not to say.", date: "2026-04-07" },
            { slug: "subscription-purge", title: "The Subscription Purge: How I Saved $347/Month in One Afternoon", description: "Most people are paying $200-400/month in forgotten subscriptions. Here's how to find and cancel them all.", date: "2026-04-07" },
            { slug: "hidden-benefits", title: "The Hidden Benefits You're Probably Not Claiming", description: "SNAP, WIC, LIHEAP, Lifeline, Medicaid, you probably qualify for more than you think.", date: "2026-04-07" },
            { slug: "calling-unemployment-office", title: "I Spent 8 Hours Calling the Unemployment Office, Here's What Works", description: "The Governor's office trick and other strategies that actually get you through.", date: "2026-04-07" },
            { slug: "employer-contests-claim", title: "What to Do When Your Employer Contests Your Claim", description: "Don't panic. Here's how the appeal process works and how to win.", date: "2026-04-07" },
            { slug: "remote-jobs-no-experience", title: "Remote Jobs That Don't Require Experience, 15 Legit Options", description: "Real remote jobs you can get with no prior experience. No scams.", date: "2026-04-07" },
            { slug: "first-30-days-playbook", title: "The First 30 Days After a Layoff, A Day-by-Day Playbook", description: "A complete day-by-day guide for your first month after losing your job.", date: "2026-04-07" },
          ].map((post) => (
            <article
              key={post.slug}
              className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:bg-blue-50/30 transition-colors"
            >
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-700">
                  {post.title}
                </h3>
              </Link>
              <p className="text-gray-600 mb-3">{post.description}</p>
              <time className="text-sm text-gray-400">{post.date}</time>
            </article>
          ))}
        </div>
      </section>

      {/* Earlier Articles */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Earlier Articles
        </h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:bg-blue-50/30 transition-colors"
            >
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-700">
                  {post.title}
                </h3>
              </Link>
              <p className="text-gray-600 mb-3">{post.description}</p>
              <div className="flex items-center justify-between">
                <time className="text-sm text-gray-400">{post.date}</time>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  Read more &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
