import { useTodoStore } from "../stores/useTodoStore";
import { Paper, Typography, Stack } from "@mui/material";

const StatPill = ({ label, value }) => (
  <Paper
    variant="outlined"
    sx={{
      px: 1.25,
      py: 0.5,
      borderRadius: 999,
      display: "flex",
      alignItems: "center",
      gap: 0.75,
      minWidth: 64,
      justifyContent: "center",
    }}
  >
    <Typography variant="caption" color="text.secondary">
      {label}
    </Typography>
    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
      {value}
    </Typography>
  </Paper>
);

export const CountTodos = () => {
  const total = useTodoStore((s) => s.todos.length);
  const completed = useTodoStore(
    (s) => s.todos.filter((t) => t.completed).length
  );
  const uncompleted = useTodoStore(
    (s) => s.todos.filter((t) => !t.completed).length
  );

  return (
    <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
      <StatPill label="Total" value={total} />
      <StatPill label="Completed" value={completed} />
      <StatPill label="Uncompleted" value={uncompleted} />
    </Stack>
  );
};
