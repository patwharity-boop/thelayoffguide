import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET() {
  const sql = getDb();
  const categories = await sql`SELECT * FROM categories ORDER BY sort_order ASC`;
  return NextResponse.json(categories);
}
