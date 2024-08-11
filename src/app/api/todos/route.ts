import { createTodos, getTodos } from "@/data-access/todo";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../auth";

export async function GET(req: NextRequest) {
  const session = await auth();
  const todos = await getTodos(session?.user?.id!);
  return NextResponse.json(todos);
}

export async function POST(req: NextRequest) {
  const body: { title: string; description: string } = await req.json();
  const returnedTodo = await createTodos(body);
  return NextResponse.json({
    message: "Todo created successfully",
    data: returnedTodo,
  });
}
