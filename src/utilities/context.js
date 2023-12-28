import React, { createContext, useContext, useState } from "react";

// Create a new context
const appContext = createContext();

// Define the context provider component
export const AppContextProvider = ({ children }) => {
  // Use local storage to get the initial theme state, or use a default value of "light"
  const storedTheme = localStorage.getItem("theme");
  // Define an array of valid theme values
  const validThemes = ["light", "dark"];

  // Specify the default theme in case the stored theme is not valid
  const defaultTheme = "light";

  // Initialize the theme state using the stored theme if valid, otherwise use the default theme
  const [theme, setTheme] = useState(
    validThemes.includes(storedTheme) ? storedTheme : defaultTheme
  );

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    // Store the selected theme in local storage
    setTheme((current) => {
      localStorage.setItem("theme", current === "light" ? "dark" : "light");
      return current === "light" ? "dark" : "light";
    });
  };

  // State and function to toggle the menu
  const [active, setActive] = useState("");

  const toggleMenu = () => {
    setActive((current) => (current === "active" ? "" : "active"));
  };

  // Provide the values to the context provider
  return (
    <appContext.Provider
      value={{ theme, active, setActive, toggleMenu, toggleTheme }}
    >
      {children}
    </appContext.Provider>
  );
};

// Custom hook to access the context values
export const useAppContext = () => {
  return useContext(appContext);
};
