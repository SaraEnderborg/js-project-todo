import { Box, Typography } from "@mui/material";

export const EmptyState = ({
  title = "Nothing here",
  description = "Add something to get started.",
  icon = "📝",
}) => {
  return (
    <Box
      role="status"
      aria-live="polite"
      sx={{
        textAlign: "center",
        py: { xs: 4, sm: 5 },
        px: { xs: 2, sm: 3 },
        borderRadius: 3,
        border: "1px dashed",
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Typography
        component="div"
        sx={{ fontSize: { xs: 40, sm: 48 }, mb: 1 }}
        aria-hidden="true"
      >
        {icon}
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5 }}>
        {title}
      </Typography>

      <Typography color="text.secondary" sx={{ maxWidth: 420, mx: "auto" }}>
        {description}
      </Typography>
    </Box>
  );
};
