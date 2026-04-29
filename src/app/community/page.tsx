import type { Metadata } from "next";
import Link from "next/link";
import { getDb } from "@/lib/db";

export const metadata: Metadata = {
  title: "Community, Connect With Others Who've Been Through It",
  description:
    "Join the conversation. Share your experience, ask questions, get advice from people who understand what you're going through. The Layoff Guide community forum.",
};

export const dynamic = "force-dynamic";

async function getCategories() {
  const sql = getDb();
  return sql`SELECT * FROM categories ORDER BY sort_order ASC`;
}

async function getRecentThreads() {
  const sql = getDb();
  return sql`
    SELECT t.*, u.display_name, u.level, c.name as category_name, c.slug as category_slug, c.icon as category_icon
    FROM threads t
    JOIN users u ON t.user_id = u.id
    JOIN categories c ON t.category_id = c.id
    WHERE t.is_approved = true
    ORDER BY t.is_pinned DESC, t.created_at DESC
    LIMIT 20
  `;
}

async function getStats() {
  const sql = getDb();
  const threads = await sql`SELECT COUNT(*) as count FROM threads WHERE is_approved = true`;
  const replies = await sql`SELECT COUNT(*) as count FROM replies WHERE is_approved = true`;
  const users = await sql`SELECT COUNT(*) as count FROM users`;
  return {
    threads: threads[0].count,
    replies: replies[0].count,
    members: users[0].count,
  };
}

export default async function CommunityPage() {
  const [categories, recentThreads, stats] = await Promise.all([
    getCategories(),
    getRecentThreads(),
    getStats(),
  ]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Community</h1>
          <p className="text-lg text-gray-600">
            You&apos;re not alone. Connect with others who&apos;ve been through it.
          </p>
        </div>
        <Link
          href="/community/new"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors shrink-0"
        >
          New Post
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-700">{stats.members}</div>
          <div className="text-sm text-gray-600">Members</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-700">{stats.threads}</div>
          <div className="text-sm text-gray-600">Discussions</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-700">{stats.replies}</div>
          <div className="text-sm text-gray-600">Replies</div>
        </div>
      </div>

      {/* Categories */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {categories.map((cat: any) => (
            <Link
              key={cat.slug}
              href={`/community?category=${cat.slug}`}
              className="flex items-start gap-3 border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50/30 transition-colors"
            >
              <span className="text-2xl">{cat.icon}</span>
              <div>
                <h3 className="font-bold text-gray-900">{cat.name}</h3>
                <p className="text-sm text-gray-500">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Ad */}
      <div className="bg-gray-100 border border-dashed border-gray-300 rounded-lg p-4 mb-10 text-center text-sm text-gray-400">
        Advertisement
      </div>

      {/* Recent Threads */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Discussions</h2>
        {recentThreads.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-gray-300 rounded-xl">
            <p className="text-gray-500 text-lg mb-2">No discussions yet.</p>
            <p className="text-gray-400 mb-6">Be the first to start a conversation!</p>
            <Link
              href="/community/new"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Start a Discussion
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {recentThreads.map((thread: any) => (
              <Link
                key={thread.id}
                href={`/community/thread/${thread.id}`}
                className="block border border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm">{thread.category_icon}</span>
                      <span className="text-xs text-gray-500">{thread.category_name}</span>
                      {thread.is_pinned && (
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-medium">
                          Pinned
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{thread.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{thread.body}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                      <span>by {thread.display_name}</span>
                      <span>{thread.level}</span>
                      <span>{new Date(thread.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center shrink-0">
                    <div className="text-sm font-bold text-blue-700">{thread.upvotes}</div>
                    <div className="text-xs text-gray-400">votes</div>
                    <div className="text-sm font-bold text-gray-600 mt-1">{thread.reply_count}</div>
                    <div className="text-xs text-gray-400">replies</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Gamification Info */}
      <section className="mt-12 bg-gray-900 text-white rounded-xl p-8">
        <h2 className="text-teal-400 font-bold text-lg mb-4">Earn Points & Badges</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="text-teal-400 font-bold mb-1">Points</div>
            <p className="text-gray-400">+10 for posting, +5 for replying, +2 for getting upvoted</p>
          </div>
          <div>
            <div className="text-teal-400 font-bold mb-1">Levels</div>
            <p className="text-gray-400">Just Laid Off → Getting Back Up → Job Hunter → Landed → Mentor</p>
          </div>
          <div>
            <div className="text-teal-400 font-bold mb-1">Badges</div>
            <p className="text-gray-400">First Post, Helpful (10 upvotes), Mentor (helped 25 people), Success Story</p>
          </div>
        </div>
      </section>
    </div>
  );
}
