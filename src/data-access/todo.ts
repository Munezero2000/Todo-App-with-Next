import db from "@/drizzle";
import { todos } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function getTodos(id: string) {
  return await db.select().from(todos).where(eq(todos.createdBy, id));
}

export async function getTodoById(id: string) {
  return await db.query.todos.findFirst({ where: eq(todos.id, id) });
}

export async function createTodos(todosDTO: { title: string; description: string }) {
  const { title, description } = todosDTO;
  const returnedtodos = await db.insert(todos).values({ title, description }).returning();
  return returnedtodos;
}

export async function updateTodo(id: string, todosDTO: { title: string; description: string }) {
  const { title, description } = todosDTO;
  const returnedtodos = await db.update(todos).set({ title, description }).where(eq(todos.id, id)).returning();
  return returnedtodos;
}

export async function deleteTodo(id: string) {
  return await db.delete(todos).where(eq(todos.id, id)).returning();
}
