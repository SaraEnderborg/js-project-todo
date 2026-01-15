import { AddTodoForm } from "./components/AddTodoForm.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { TodoItem } from "./components/TodoItem.jsx";

export const App = () => {
  return (
    <>
      <main>
        <AddTodoForm />
        <todoList />
        <TodoItem />
      </main>
    </>
  );
};
