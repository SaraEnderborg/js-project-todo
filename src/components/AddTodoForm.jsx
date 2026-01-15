import { useState } from "react";
import { useTodoStore } from "../stores/useTodoStore";
import { TextField, Button } from "@mui/material";

export const AddTodoForm = () => {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px" }}>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        variant="outlined"
        placeholder="your new todo"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Add new todo
      </Button>
    </form>
  );
};
