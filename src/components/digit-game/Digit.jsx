import React, { useState } from "react";

export default function Digit() {
  const [randomNumber, setRandomNumber] = useState(random(0, 100));
  const [enteredNumber, setEnteredNumber] = useState(0);

  const text = document.querySelector("[data-text]");

  function handleSubmit(evt) {
    evt.preventDefault();

    if (randomNumber === enteredNumber) {
      text.textContent = "You win!";
      setRandomNumber(random(0, 100));
      return;
    }

    if (randomNumber > enteredNumber) {
      text.textContent = "Higher number";
    }

    if (randomNumber < enteredNumber) {
      text.textContent = "Lower number";
    }
  }

  return (
    <div>
      <h2>GUESS GAME</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(evt) => setEnteredNumber(+evt.target.value)}
          value={enteredNumber}
          type="number"
        />
        <button type="submit">
          Guess
        </button>
      </form>
      <h3 data-text></h3>
    </div>
  );
}

function random(start, end) {
    return Math.trunc(start + Math.random() * end);
  }
