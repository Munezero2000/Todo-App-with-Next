import db from "@/drizzle";
import NextAuth, { DefaultSession } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import Google from "next-auth/providers/google";
import { AdapterUser } from "next-auth/adapters";

type User = {
  id: string;
  role: string;
} & DefaultSession["user"];

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  // providers: [Google],
  providers: [
    Google({
      profile(profile) {
        return { role: profile.role ?? "PLANNER", ...profile };
      },
    }),
  ],
  callbacks: {
    session({ session, token }) {
      session.user.role = token;
      return session;
    },
  },
});
