import React from "react";
import App from "./App.jsx";
import { ThemeProvider } from "./utils/ThemeContext.jsx";

function Index() {
  return (
    <>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </>
  );
}

export default Index;
