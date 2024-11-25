import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const themes = ["chai", "white", "black"];
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("app-theme") || "white";
  });

  useEffect(() => {
    // Save the theme to localStorage whenever it changes
    localStorage.setItem("app-theme", theme);
    // Optionally, add theme as a class to the body for global styling
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themes, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
