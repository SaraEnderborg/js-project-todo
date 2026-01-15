import { AddTodoForm } from "./components/AddTodoForm.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { Container, Paper, Typography, Box } from "@mui/material";

export const App = () => {
  return (
    <>
      <main>
        <AddTodoForm />
        <TodoList />
      </main>
    </>
  );
};
