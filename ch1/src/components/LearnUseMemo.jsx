import React, { useMemo } from "react";
import { useState, useEffect } from "react";
export const LearnUseMemo = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  let increment = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  let isCount10 = useMemo(() => {
    console.log("count10  called");
    if (count === 10) return "Yes";
    else return "No";
  }, [count]);
  let decrement = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h3>is value of Count 10?--{isCount10}</h3>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};
