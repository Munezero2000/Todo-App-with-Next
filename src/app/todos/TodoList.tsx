"use client";
import React from "react";
import useGetTodo from "@/hooks/useGetTodos";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";

const TodoList = () => {
  const { data: todos } = useGetTodo();
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");

  const filteredTodos = todos?.filter((todo) => {
    if (filter === "inprogress") {
      return !todo.completed;
    }
    if (filter === "completed") {
      return todo.completed;
    }
    return true;
  });

  return (
    <div>
      <div className="grid md:grid-cols-4 gap-4 p-4">
        {filteredTodos?.map((todo) => (
          <Card key={todo.id}>
            <CardHeader>
              <CardTitle>{todo.title}</CardTitle>
              <CardDescription>{todo.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{todo.completed}</p>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
