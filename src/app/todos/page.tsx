import { auth } from "../../../auth";
import TodoList from "./TodoList";

const TodoPage = async () => {
  const session = await auth();
  console.log("session", session);
  return (
    <div>
      <TodoList />
    </div>
  );
};

export default TodoPage;
