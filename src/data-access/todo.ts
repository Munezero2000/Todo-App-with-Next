import db from "@/drizzle";
import { todos } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function gettodos(id: string) {
  return await db.select().from(todos).where(eq(todos.createdBy, id));
}

export async function gettodosById(id: string) {
  return await db.query.todos.findFirst({ where: eq(todos.id, id) });
}

export async function createtodos(todosDTO: { title: string; description: string }) {
  const { title, description } = todosDTO;
  const returnedtodos = await db.insert(todos).values({ title, description }).returning();
  return returnedtodos;
}

export async function updatetodos(id: string, todosDTO: { title: string; description: string }) {
  const { title, description } = todosDTO;
  const returnedtodos = await db.update(todos).set({ title, description }).where(eq(todos.id, id)).returning();
  return returnedtodos;
}

export async function deletetodos(id: string) {
  return await db.delete(todos).where(eq(todos.id, id)).returning();
}
