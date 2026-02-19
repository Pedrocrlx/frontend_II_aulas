"use client";

import { createContext, useState } from "react";


export const ThemeContext = createContext<{theme: string, setTheme: (theme: string) => void} | undefined>(undefined);

export const ThemeProvider = ({ children } : {children: React.ReactNode}) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}