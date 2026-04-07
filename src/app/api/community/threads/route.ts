import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET(request: NextRequest) {
  const sql = getDb();
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  let threads;
  if (category) {
    threads = await sql`
      SELECT t.*, u.display_name, u.level, u.points, c.name as category_name, c.slug as category_slug, c.icon as category_icon
      FROM threads t
      JOIN users u ON t.user_id = u.id
      JOIN categories c ON t.category_id = c.id
      WHERE t.is_approved = true AND c.slug = ${category}
      ORDER BY t.is_pinned DESC, t.created_at DESC
      LIMIT 50
    `;
  } else {
    threads = await sql`
      SELECT t.*, u.display_name, u.level, u.points, c.name as category_name, c.slug as category_slug, c.icon as category_icon
      FROM threads t
      JOIN users u ON t.user_id = u.id
      JOIN categories c ON t.category_id = c.id
      WHERE t.is_approved = true
      ORDER BY t.is_pinned DESC, t.created_at DESC
      LIMIT 50
    `;
  }

  return NextResponse.json(threads);
}

export async function POST(request: NextRequest) {
  const sql = getDb();
  const body = await request.json();
  const { title, content, categoryId, displayName, email, stateSlug } = body;

  if (!title || !content || !categoryId || !displayName || !email) {
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

  // Create thread (not approved by default — goes to mod queue)
  const thread = await sql`
    INSERT INTO threads (title, body, category_id, user_id, state_slug)
    VALUES (${title}, ${content}, ${categoryId}, ${userId}, ${stateSlug || null})
    RETURNING id
  `;

  // Award points for posting
  await sql`UPDATE users SET points = points + 10 WHERE id = ${userId}`;

  return NextResponse.json({ id: thread[0].id, message: "Post submitted for review" });
}
