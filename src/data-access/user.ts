import db from "@/drizzle";
import { users } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function getUserByEmail(email: string) {
  return await db.query.users.findFirst({ where: eq(users.email, email) });
}
