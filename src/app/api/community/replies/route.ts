import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET(request: NextRequest) {
  const sql = getDb();
  const { searchParams } = new URL(request.url);
  const threadId = searchParams.get("threadId");

  if (!threadId) {
    return NextResponse.json({ error: "threadId required" }, { status: 400 });
  }

  const replies = await sql`
    SELECT r.*, u.display_name, u.level, u.points
    FROM replies r
    JOIN users u ON r.user_id = u.id
    WHERE r.thread_id = ${threadId} AND r.is_approved = true
    ORDER BY r.created_at ASC
  `;

  return NextResponse.json(replies);
}

export async function POST(request: NextRequest) {
  const sql = getDb();
  const body = await request.json();
  const { content, threadId, displayName, email } = body;

  if (!content || !threadId || !displayName || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Find or create user
  const existingUser = await sql`SELECT id FROM users WHERE email = ${email}`;
  let userId: number;

  if (existingUser.length > 0) {
    userId = existingUser[0].id;
  } else {
    const newUser = await sql`
      INSERT INTO users (display_name, email) VALUES (${displayName}, ${email})
      RETURNING id
    `;
    userId = newUser[0].id;
  }

  // Create reply (not approved by default)
  const reply = await sql`
    INSERT INTO replies (body, thread_id, user_id)
    VALUES (${content}, ${threadId}, ${userId})
    RETURNING id
  `;

  // Award points for replying
  await sql`UPDATE users SET points = points + 5 WHERE id = ${userId}`;

  // Increment reply count
  await sql`UPDATE threads SET reply_count = reply_count + 1 WHERE id = ${threadId}`;

  return NextResponse.json({ id: reply[0].id, message: "Reply submitted for review" });
}
