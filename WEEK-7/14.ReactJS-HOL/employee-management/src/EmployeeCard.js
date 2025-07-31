import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function EmployeeCard({ name, role }) {
  const theme = useContext(ThemeContext);

  const buttonStyle =
    theme === "light"
      ? { backgroundColor: "#f0f0f0", color: "#000" }
      : { backgroundColor: "#333", color: "#fff" };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{name}</h3>
      <p>{role}</p>
      <button style={buttonStyle}>View Profile</button>
    </div>
  );
}

export default EmployeeCard;
