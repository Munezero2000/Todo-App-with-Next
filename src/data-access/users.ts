import db from "@/drizzle";
import { todo } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function getTodo() {
  return await db.select().from(todo);
}

export async function createTodo(todoDTO: {
  title: string;
  description: string;
}) {
  const { title, description } = todoDTO;
  const returnedTodo = await db
    .insert(todo)
    .values({ title, description })
    .returning();
  return returnedTodo;
}

export async function updateTodo(
  id: string,
  todoDTO: {
    title: string;
    description: string;
  }
) {
  const { title, description } = todoDTO;
  const returnedTodo = await db
    .update(todo)
    .set({ title, description })
    .where(eq(todo.id, id));
  return returnedTodo;
}
