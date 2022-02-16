import React, { useState } from "react";
import "./Styles.css";

const Greetings = () => {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  function loveMessage(e) {
    if (e.target.value !== "option") {
      let message = e.target.value;
      setMessage(message);
    }
  }

  function messageReceiver(e) {
    if (e.target.value) {
      let receiver = e.target.value;
      setTo(receiver);
    }
  }

  function messageTransmitter(e) {
    if (e.target.value) {
      let transmitter = e.target.value;
      setFrom(transmitter);
    }
  }

  let finalQuote = "Dear " + to + ": " + message + ". With love, " + from;

  return (
    <div className="container-greetings">
      <h1>Greeting Card 💌</h1>
      <label>To:</label>
      <input onChange={messageReceiver} />
      <label>Select greeting:</label>
      <select onClick={loveMessage}>
        <option>-- Please select a greeting</option>
        <option>"I choo choo choose you" 🚂</option>
        <option>"You are my sunshine" 🌞</option>
        <option>"Happy Valentine's!" 💖</option>
      </select>
      <label>From:</label>
      <input onChange={messageTransmitter} />
      <div>
        <p>{finalQuote}</p>
      </div>
    </div>
  );
};

export default Greetings;
