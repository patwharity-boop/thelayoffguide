import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — Unemployment Tips, Guides & Advice",
  description:
    "Practical advice for navigating unemployment. Tips on filing, appealing denials, side hustles, and getting back on your feet.",
};

const series = [
  {
    part: 1,
    slug: "take-a-breath",
    title: "Take a Breath — What to Do in the First 24 Hours",
    description: "The emotional one. Give yourself permission to feel it, take a walk, call a friend.",
    category: "Getting Started",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
  },
  {
    part: 2,
    slug: "the-money-talk",
    title: "The Money Talk — How to Map Your Finances",
    description: "T-chart your income vs expenses, calculate your runway, find quick wins.",
    category: "Finances",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    part: 3,
    slug: "file-for-unemployment-today",
    title: "File for Unemployment Today — Here's Exactly How",
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
        fluff — just what you actually need to know.
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

      {/* Ad Placeholder */}
      <div className="bg-gray-100 border border-dashed border-gray-300 rounded-lg p-4 mb-10 text-center text-sm text-gray-400">
        Advertisement
      </div>

      {/* More Articles */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          More Articles
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
