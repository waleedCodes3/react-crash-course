import React from "react";
import { useCustomCounter } from "../hooks/useCustomCounter";

export const LearnCustomHooks = () => {
  const { count, handleIncremnet } = useCustomCounter();
  return (
    <>
      <h1>Counter is {count}</h1>
      <button onClick={handleIncremnet}>+</button>
    </>
  );
};
