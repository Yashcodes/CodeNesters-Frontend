import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");

    localStorage.setItem("theme", "dark");
  };

  const lightTheme = () => {
    setThemeMode("light");

    localStorage.setItem("theme", "light");
  };

  useEffect(() => {
    setThemeMode(localStorage.getItem("theme"));
  }, [themeMode]);

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        setThemeMode,
        darkTheme,
        lightTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
