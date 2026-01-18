import { AddTodoForm } from "./components/AddTodoForm.jsx";
import { CountTodos } from "./components/CountTodos.jsx";
import { TodoList } from "./components/TodoList.jsx";
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  Stack,
} from "@mui/material";
import { useTodoStore } from "./stores/useTodoStore.jsx";

export const App = () => {
  const completeAll = useTodoStore((state) => state.completeAll);
  const hasTodos = useTodoStore((state) => state.todos.length > 0);
  const hasUncompletedTodos = useTodoStore((state) =>
    state.todos.some((todo) => !todo.completed)
  );

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
          <Stack spacing={1.5} sx={{ mb: 2 }}>
            <CountTodos />
            {hasTodos &&
              (hasUncompletedTodos ? (
                <Button
                  variant="outlined"
                  onClick={completeAll}
                  aria-label="Complete all todos"
                >
                  Complete All
                </Button>
              ) : (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "center" }}
                >
                  All tasks are completed 🎉
                </Typography>
              ))}
          </Stack>
          <AddTodoForm />
          <TodoList />
        </Paper>
      </Container>
    </Box>
  );
};
