import { createTodo, getTodo } from "@/data-access/users";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const todos = await getTodo();
  return NextResponse.json(todos);
}

export async function POST(req: NextRequest) {
  const body: { title: string; description: string } = await req.json();
  const returnedTodo = await createTodo(body);
  return NextResponse.json({
    message: "Todo created successfully",
    data: returnedTodo,
  });
}

export async function PUT(req: NextRequest) {
    
}
