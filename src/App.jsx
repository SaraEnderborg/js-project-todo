import { AddTodoForm } from "./components/AddTodoForm.jsx";
import { CountTodos } from "./components/CountTodos.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { Container, Paper, Typography, Box } from "@mui/material";

export const App = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        py: { xs: 3, sm: 6 },
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={2} sx={{ p: { xs: 2, sm: 3 } }}>
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Todo
          </Typography>

          <CountTodos />
          <AddTodoForm />
          <TodoList />
        </Paper>
      </Container>
    </Box>
  );
};
