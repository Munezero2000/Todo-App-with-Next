import { deleteTodo, getTodoById, updateTodo } from "@/data-access/todo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const todo = await getTodoById(params.id);
  // checking if that todo exists
  if (!todo) {
    return NextResponse.json({ message: "todo not found" }, { status: 404 });
  } else {
    return NextResponse.json({ message: "todo found", data: todo });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const body: { title: string; description: string } = await req.json();
  const returnedTodo = await updateTodo(params.id, body);
  return NextResponse.json(
    {
      message: "Todo updated successfully",
      data: returnedTodo,
    },
    { status: 201 }
  );
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const todo = await getTodoById(params.id);
  // checking if that todo exists
  if (!todo) {
    return NextResponse.json({ message: "todo not found" }, { status: 404 });
  }
  //deleting todo
  const returnedTodo = await deleteTodo(params.id);
  return NextResponse.json({
    message: "Todo deleted successfully",
    data: returnedTodo,
  });
}
