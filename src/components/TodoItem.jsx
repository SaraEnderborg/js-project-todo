import { useTodoStore } from "../stores/useTodoStore";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const TodoItem = ({ todo }) => {
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  return (
    <ListItem>
      <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      <ListItemText primary={todo.text} />
      <IconButton onClick={() => removeTodo(todo.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};
