import React, { useState } from "react";
import EmployeesList from "./EmployeesList";
import ThemeContext from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <h1>Employee Management</h1>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle Theme
        </button>
        <EmployeesList /> {/* Removed theme prop */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
