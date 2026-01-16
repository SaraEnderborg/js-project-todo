import { useTodoStore } from "../stores/useTodoStore";
import { ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const TodoItem = ({ todo }) => {
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  const label = todo.completed ? "Mark as uncompleted" : "Mark as completed";

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton
          edge="end"
          onClick={() => removeTodo(todo.id)}
          aria-label={`Delete todo: ${todo.text}`}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        slotProps={{
          input: {
            "aria-label": `${label}: ${todo.text}`,
          },
        }}
      />

      <ListItemText
        primary={todo.text}
        sx={{
          textDecoration: todo.completed ? "line-through" : "none",
          opacity: todo.completed ? 0.75 : 1,
          pr: 1,
        }}
      />
    </ListItem>
  );
};
