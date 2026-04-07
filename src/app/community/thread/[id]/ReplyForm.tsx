"use client";

import { useState, useEffect } from "react";

export default function ReplyForm({ threadId }: { threadId: number }) {
  const [content, setContent] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setDisplayName(localStorage.getItem("tlg_name") || "");
    setEmail(localStorage.getItem("tlg_email") || "");
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!content || !displayName || !email) return;

    setSubmitting(true);
    localStorage.setItem("tlg_name", displayName);
    localStorage.setItem("tlg_email", email);

    try {
      const res = await fetch("/api/community/replies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, threadId, displayName, email }),
      });
      if (res.ok) {
        setSubmitted(true);
        setContent("");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <p className="text-gray-700 font-medium">Reply submitted for review!</p>
        <p className="text-sm text-gray-500 mt-1">A moderator will approve it shortly.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-3 text-sm text-blue-600 hover:text-blue-800"
        >
          Write another reply
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-gray-200 rounded-xl p-6">
      <h3 className="font-bold text-gray-900 mb-4">Leave a Reply</h3>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Your name"
          required
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email (not shown)"
          required
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Share your thoughts, advice, or experience..."
        required
        rows={4}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />

      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-400">Replies are reviewed before appearing.</p>
        <button
          type="submit"
          disabled={submitting}
          className="bg-blue-700 text-white px-6 py-2 rounded-lg font-medium text-sm hover:bg-blue-800 disabled:opacity-50"
        >
          {submitting ? "Submitting..." : "Submit Reply"}
        </button>
      </div>
    </form>
  );
}
