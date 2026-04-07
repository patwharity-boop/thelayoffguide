import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getDb } from "@/lib/db";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const sql = getDb();
      // Find or create user in our database
      const existing = await sql`SELECT id FROM users WHERE email = ${user.email!}`;
      if (existing.length === 0) {
        await sql`
          INSERT INTO users (display_name, email, avatar_url)
          VALUES (${user.name || "Anonymous"}, ${user.email!}, ${user.image || null})
        `;
      } else {
        // Update avatar if they have one
        if (user.image) {
          await sql`UPDATE users SET avatar_url = ${user.image} WHERE email = ${user.email!}`;
        }
      }
      return true;
    },
    async session({ session }) {
      if (session.user?.email) {
        const sql = getDb();
        const dbUser = await sql`
          SELECT id, display_name, role, points, level, badges
          FROM users WHERE email = ${session.user.email}
        `;
        if (dbUser.length > 0) {
          (session.user as any).id = dbUser[0].id;
          (session.user as any).displayName = dbUser[0].display_name;
          (session.user as any).role = dbUser[0].role;
          (session.user as any).points = dbUser[0].points;
          (session.user as any).level = dbUser[0].level;
          (session.user as any).badges = dbUser[0].badges;
        }
      }
      return session;
    },
  },
  pages: {
    signIn: "/community/signin",
  },
});

export { handler as GET, handler as POST };
