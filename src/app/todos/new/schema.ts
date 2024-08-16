import { z } from "zod";

export const createTodoSchema = z.object({
  title: z
    .string()
    .min(1, { message: "todo title is required" })
    .max(200, { message: "todo title can not exceed 200 characters" }),
  description: z.string().optional(),
  dueDate: z.date(),
});
