import { createtodos, gettodos } from "@/data-access/todo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const todos = await getodos();
  return NextResponse.json(todos);
}

export async function POST(req: NextRequest) {
  const body: { title: string; description: string } = await req.json();
  const returnedTodo = await createtodos(body);
  return NextResponse.json({
    message: "Todo created successfully",
    data: returnedTodo,
  });
}
