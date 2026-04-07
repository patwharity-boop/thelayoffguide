import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function POST(request: NextRequest) {
  const sql = getDb();
  const body = await request.json();
  const { threadId, replyId, email } = body;

  if (!email || (!threadId && !replyId)) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const user = await sql`SELECT id FROM users WHERE email = ${email}`;
  if (user.length === 0) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  const userId = user[0].id;

  if (threadId) {
    // Check if already voted
    const existing = await sql`SELECT id FROM votes WHERE user_id = ${userId} AND thread_id = ${threadId}`;
    if (existing.length > 0) {
      return NextResponse.json({ error: "Already voted" }, { status: 400 });
    }
    await sql`INSERT INTO votes (user_id, thread_id) VALUES (${userId}, ${threadId})`;
    await sql`UPDATE threads SET upvotes = upvotes + 1 WHERE id = ${threadId}`;
  } else if (replyId) {
    const existing = await sql`SELECT id FROM votes WHERE user_id = ${userId} AND reply_id = ${replyId}`;
    if (existing.length > 0) {
      return NextResponse.json({ error: "Already voted" }, { status: 400 });
    }
    await sql`INSERT INTO votes (user_id, reply_id) VALUES (${userId}, ${replyId})`;
    await sql`UPDATE replies SET upvotes = upvotes + 1 WHERE id = ${replyId}`;
  }

  return NextResponse.json({ success: true });
}
