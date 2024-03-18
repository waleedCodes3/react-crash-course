import React, { useCallback } from "react";
import { useState } from "react";
import { GenerateRandomNumber } from "./GenerateRandomNumber";

export const LearnCallback = () => {
  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);

  let generateRandomNumber = useCallback(() => {
    const newRandomNumber = Math.floor(Math.random() * 100);
    setRandomNumber(newRandomNumber);
  }, [randomNumber]);

  let increment = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  let decrement = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <hr />
      <GenerateRandomNumber
        randomNumber={randomNumber}
        generateRandomNumber={generateRandomNumber}
      />
    </>
  );
};
