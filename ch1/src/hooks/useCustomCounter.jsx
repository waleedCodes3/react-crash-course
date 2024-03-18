import React, { useState } from "react";

export const useCustomCounter = () => {
  const [count, setCount] = useState(0);
  const handleIncremnet = () => {
    setCount(count + 1);
  };
  return {
    count,
    handleIncremnet,
  };
};