"use client";

import { useContext } from "react";
import { ThemeContext } from "./ContextApi";

const ThemeChanger = () => {
  const themeContext = useContext(ThemeContext);

if (!themeContext) {
        throw new Error("ThemeContext must be used within a ThemeProvider");
}

  const { theme, setTheme } = themeContext;

  const toggleTheme = () => {
    console.log("Current theme:", theme);
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} className="p-2 bg-gray-300 rounded">
      Mudar para {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default ThemeChanger;