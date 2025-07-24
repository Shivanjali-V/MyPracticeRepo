import React from "react";

function IndianPlayers() {
  const oddPlayers = ["Sachin1", "Virat3", "Yuvaraj5"];
  const evenPlayers = ["Dhoni2", "Rohit4", "Raina6"];

  // Destructuring Example
  const [first, second, third] = oddPlayers;

  // Merge arrays using spread operator
  const T20Players = ["First Player", "Second Player", "Third Player"];
  const RanjiPlayers = ["Fourth Player", "Fifth Player", "Sixth Player"];
  const mergedPlayers = [...T20Players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        <li>First : {first}</li>
        <li>Third : {second}</li>
        <li>Fifth : {third}</li>
      </ul>

      <hr />
      <h2>Even Players</h2>
      <ul>
        {evenPlayers.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>

      <hr />
      <h2>List of Indian Players Merged:</h2>
      <ul>
        {mergedPlayers.map((p, index) => (
          <li key={index}>Mr. {p}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
