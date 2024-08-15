import { redirect } from "next/navigation";
import { auth } from "../../../auth";
import TodoList from "./TodoList";

const TodoPage = async () => {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  return (
    <div>
      <TodoList />
    </div>
  );
};

export default TodoPage;
