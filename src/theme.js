import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },

  shape: {
    borderRadius: 14,
  },

  typography: {
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
    h4: { fontWeight: 700 },
    h6: { fontWeight: 700 },
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "medium",
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});
