import { useTodoStore } from "../stores/useTodoStore";
import { TodoItem } from "./todoItem";

export const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);

  if (todos.length === 0) return <p>No todos</p>;

  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};
