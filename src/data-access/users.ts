import db from "@/drizzle";
import { todo } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function getTodo() {
  return await db.select().from(todo);
}

export async function getTodoById(id: string) {
  return await db.query.todo.findFirst({ where: eq(todo.id, id) });
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
  console.log(id);
  const returnedTodo = await db
    .update(todo)
    .set({ title, description })
    .where(eq(todo.id, id))
    .returning();
  console.log(returnedTodo);
  return returnedTodo;
}

export async function deleteTodo(id: string) {
  return await db.delete(todo).where(eq(todo.id, id)).returning();
}
