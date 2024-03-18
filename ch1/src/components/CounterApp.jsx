import React from "react";
import { useState } from "react";

export const CounterApp = () => {
  const [count, setCount] = useState(0);
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
    </>
  );
};
