import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@mui/material";
import holidayTheme from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={holidayTheme}>
      <CssBaseline /> {/* ensures background colors etc. are applied */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
