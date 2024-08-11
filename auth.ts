import db from "@/drizzle";
import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import Google, { GoogleProfile } from "next-auth/providers/google";
import { getUserByEmail } from "@/data-access/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    Google({
      allowDangerousEmailAccountLinking: true,
      profile(profile: GoogleProfile) {
        return {
          id: profile.sub,
          role: "PLANNER",
          image: profile.picture,
          email: profile.email,
          name: profile.name,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
});
