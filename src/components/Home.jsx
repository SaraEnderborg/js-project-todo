import { useTodoStore } from "../stores/useTodoStore";

export const Home = () => {
  const { todo } = useTodoStore();

  return <h1>{todo.heading}</h1>;
};
