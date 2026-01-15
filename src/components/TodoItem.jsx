import { useTodoStore } from "../stores/useTodoStore";
export const TodoItem = ({ id, text, completed }) => {
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  return (
    <div>
      <p>{text}</p>
      <p>Done: {completed}</p>
      <button onClick={() => removeTodo(id)}>Remove</button>
      <button onClick={() => toggleTodo(id)}>Toggle</button>
    </div>
  );
};
