"use client";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import React from "react";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  title: z
    .string()
    .min(1, { message: "todo title is required" })
    .max(200, { message: "todo title can not exceed 200 characters" }),
  description: z.string().optional(),
  dueDate: z.string().datetime(),
});

const TodoForm = () => {
  // 1. Form definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      dueDate: Date.now().toString(),
    },
  });
  //   2.Submit handler with (type safety)

  return (
    <Form>
      <FormField
        // control={...}
        name="..."
        render={() => (
          <FormItem>
            <FormLabel />
            <FormControl>
              <Input placeholder="Todo title" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
};

export default TodoForm;
