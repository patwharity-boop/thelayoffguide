import type { Metadata } from "next";
import Link from "next/link";
import { getDb } from "@/lib/db";
import { notFound } from "next/navigation";
import ReplyForm from "./ReplyForm";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const sql = getDb();
  const threads = await sql`SELECT title FROM threads WHERE id = ${id} AND is_approved = true`;
  if (threads.length === 0) return {};
  return {
    title: threads[0].title,
    description: `Community discussion: ${threads[0].title}`,
  };
}

export default async function ThreadPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const sql = getDb();

  const threads = await sql`
    SELECT t.*, u.display_name, u.level, u.points, c.name as category_name, c.icon as category_icon
    FROM threads t
    JOIN users u ON t.user_id = u.id
    JOIN categories c ON t.category_id = c.id
    WHERE t.id = ${id} AND t.is_approved = true
  `;

  if (threads.length === 0) notFound();
  const thread = threads[0];

  // Increment view count
  await sql`UPDATE threads SET view_count = view_count + 1 WHERE id = ${id}`;

  const replies = await sql`
    SELECT r.*, u.display_name, u.level, u.points
    FROM replies r
    JOIN users u ON r.user_id = u.id
    WHERE r.thread_id = ${id} AND r.is_approved = true
    ORDER BY r.created_at ASC
  `;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/community" className="hover:text-blue-600">Community</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Thread</span>
      </nav>

      {/* Thread */}
      <article className="border border-gray-200 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span>{thread.category_icon}</span>
          <span className="text-sm text-gray-500">{thread.category_name}</span>
          {thread.is_pinned && (
            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-medium">Pinned</span>
          )}
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">{thread.title}</h1>

        <div className="text-gray-700 leading-relaxed whitespace-pre-wrap mb-6">
          {thread.body}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
              {thread.display_name[0]?.toUpperCase()}
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">{thread.display_name}</div>
              <div className="text-xs text-gray-400">{thread.level} · {thread.points} pts</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{thread.upvotes} upvotes</span>
            <span>{thread.view_count} views</span>
            <span>{new Date(thread.created_at).toLocaleDateString()}</span>
          </div>
        </div>
      </article>

      {/* Replies */}
      <section className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          {replies.length} {replies.length === 1 ? "Reply" : "Replies"}
        </h2>

        {replies.length === 0 ? (
          <p className="text-gray-500 text-sm py-4">No replies yet. Be the first to respond!</p>
        ) : (
          <div className="space-y-4">
            {replies.map((reply: any) => (
              <div key={reply.id} className="border border-gray-100 rounded-lg p-5 bg-gray-50">
                <div className="text-gray-700 leading-relaxed whitespace-pre-wrap mb-4">
                  {reply.body}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-xs">
                      {reply.display_name[0]?.toUpperCase()}
                    </div>
                    <span className="text-sm text-gray-600">{reply.display_name}</span>
                    <span className="text-xs text-gray-400">{reply.level} · {reply.points} pts</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{reply.upvotes} upvotes</span>
                    <span>{new Date(reply.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Reply Form */}
      <ReplyForm threadId={parseInt(id)} />
    </div>
  );
}
