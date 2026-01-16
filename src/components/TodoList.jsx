import { useTodoStore } from "../stores/useTodoStore";
import { TodoItem } from "./TodoItem";
import { Typography, List, Divider, Box, Paper } from "@mui/material";
import { EmptyState } from "./EmptyState";

export const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);

  const uncompletedTodos = todos.filter((t) => !t.completed);
  const completedTodos = todos.filter((t) => t.completed);

  // Empty state för hela appen
  if (todos.length === 0) {
    return (
      <Box sx={{ mt: 2 }}>
        <EmptyState
          icon="✅"
          title="No todos yet"
          description="Add your first todo above to get started."
        />
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 2 }}>
      <Paper variant="outlined" sx={{ p: { xs: 1.5, sm: 2 } }}>
        <Typography component="h2" variant="h6" sx={{ mb: 1 }}>
          Uncompleted ({uncompletedTodos.length})
        </Typography>

        {uncompletedTodos.length === 0 ? (
          <EmptyState
            icon="🎉"
            title="All caught up"
            description="You have no uncompleted todos right now."
          />
        ) : (
          <List dense aria-label="Uncompleted todos list">
            {uncompletedTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </List>
        )}

        <Divider sx={{ my: 2 }} />

        <Typography component="h2" variant="h6" sx={{ mb: 1 }}>
          Completed ({completedTodos.length})
        </Typography>

        {completedTodos.length === 0 ? (
          <EmptyState
            icon="⏳"
            title="No completed todos yet"
            description="Complete a todo to see it here."
          />
        ) : (
          <List dense aria-label="Completed todos list">
            {completedTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </List>
        )}
      </Paper>
    </Box>
  );
};
