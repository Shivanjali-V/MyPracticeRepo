import React from "react";
import ListOfPlayers from "./ListOfPlayers";
import IndianPlayers from "./IndianPlayers";

function App() {
  const flag = true; // Change to false to view other component

  return (
    <div style={{ margin: "20px" }}>
      {flag ? <ListOfPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
