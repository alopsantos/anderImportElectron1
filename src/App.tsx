import React from "react";
import { ThemeProvider } from "styled-components";
import Home from "./screen/home";
import { GlobalStyle } from "./styles/GlobalStyle";
import { defaultTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
