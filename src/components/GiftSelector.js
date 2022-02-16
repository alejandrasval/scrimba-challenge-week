import React, { useState } from "react";
import "./Styles.css";

const GiftSelector = () => {
  const [food, setFood] = useState("");
  const [transport, setTransport] = useState("");

  function costFood(e) {
    if (e.target.value !== "option") {
      let food = Number(e.target.value);
      setFood(food);
    }
  }

  function costTransport(e) {
    if (e.target.value !== "option") {
      let transport = Number(e.target.value);
      setTransport(transport);
    }
  }

  let totalCost = food + transport;

  return (
    <div className="container">
      <h1>Gift Selector 💖</h1>
      <label>Select food</label>
      <select onClick={costFood}>
        <option value="option">-- Please select an option</option>
        <option value="5">🍓 Strawberries - $5</option>
        <option value="10">🍫 Chocolates - $10</option>
        <option value="20">🧁 Cupcakes - $20</option>
      </select>
      <label>Select transport</label>
      <select onClick={costTransport}>
        <option value="option">-- Please select an option</option>
        <option value="5">🚲 Bicycle - $5</option>
        <option value="50">🚘 Limo - $50</option>
        <option value="500">🚁 Helicopter - $500</option>
      </select>
      <div className="container-balloons">
        <label>Add balloons? 🎈</label>
        <input type="checkbox" />
      </div>
      <p>Total cost: ${totalCost}</p>
    </div>
  );
};

export default GiftSelector;
