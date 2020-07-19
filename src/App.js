import React from "react";
import MainPage from "./pages/Main";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
