import { useState } from "react";
import { useTodoStore } from "../stores/useTodoStore";
import { TextField, Button, Stack } from "@mui/material";

export const AddTodoForm = () => {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Add new todo form">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1}
        sx={{ alignItems: { sm: "center" } }}
      >
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          label="New todo"
          placeholder="Add a new todo"
          fullWidth
          slotProps={{
            input: {
              maxLength: 120,
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ width: { xs: "100%", sm: "auto" } }}
          aria-label="Add new todo"
        >
          Add
        </Button>
      </Stack>
    </form>
  );
};
