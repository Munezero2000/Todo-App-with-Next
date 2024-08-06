import db from "@/drizzle";
import { todo } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function getTodo(id: string) {
  return await db.select().from(todo).where(eq(todo.createdBy, id));
}

export async function getTodoById(id: string) {
  return await db.query.todo.findFirst({ where: eq(todo.id, id) });
}

export async function createTodo(todoDTO: { title: string; description: string }) {
  const { title, description } = todoDTO;
  const returnedTodo = await db.insert(todo).values({ title, description }).returning();
  return returnedTodo;
}

export async function updateTodo(id: string, todoDTO: { title: string; description: string }) {
  const { title, description } = todoDTO;
  const returnedTodo = await db.update(todo).set({ title, description }).where(eq(todo.id, id)).returning();
  return returnedTodo;
}

export async function deleteTodo(id: string) {
  return await db.delete(todo).where(eq(todo.id, id)).returning();
}
