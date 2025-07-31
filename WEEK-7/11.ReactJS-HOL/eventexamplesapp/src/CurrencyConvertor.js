import React, { useState } from "react";

function CurrencyConvertor() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("Euro");

  const rates = {
    Euro: 0.011,    // INR → Euro
    Dollar: 0.012,  // INR → USD
    Pound: 0.0095   // INR → GBP
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const converted = (amount * rates[currency]).toFixed(2);
    alert(`Converting to ${currency} Amount is ${converted}`);
  };

  return (
    <div>
      <h2 style={{ color: "green" }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Amount:{" "}
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          Currency:{" "}
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="Euro">Euro</option>
            <option value="Dollar">Dollar</option>
            <option value="Pound">Pound</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;
