import db from "@/drizzle";
import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth,  } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [Google],
});
