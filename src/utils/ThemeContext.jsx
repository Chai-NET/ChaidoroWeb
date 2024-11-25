import { createContext, useContext, useState } from "react";

// Create the ThemeContext
const ThemeContext = createContext();

// ThemeProvider Component
export function ThemeProvider({ children }) {
  const themes = ["chai", "black", "white"];
  const [theme, setTheme] = useState(themes[0]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook to Use ThemeContext
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
