import React from "react";
import { useState, useEffect } from "react";
export const LearnUseEffect = () => {
  const [count, setCount] = useState(0);
  let increment = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  let decrement = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };
  useEffect(() => {
    console.log("use effect called");
    //clean function
    // its called when a component is unmounted
    return () => {
      console.log("component is unmounted");
    };
  }, [count]);
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};
