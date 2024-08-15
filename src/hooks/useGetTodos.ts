import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ITodo } from "@/lib/type";

const useGetTodo = () => {
  const fetchTodos = async () => {
    const res = await axios.get<ITodo[]>("http://localhost:3000/api/todos");
    return res.data;
  };
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
};

export default useGetTodo;