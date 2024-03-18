import React, { memo } from "react";

export const GenerateRandomNumber = memo(
  ({ randomNumber, generateRandomNumber }) => {
    console.log("generate random number component rendered");
    return (
      <>
        <h1>Random NUmber is {randomNumber}</h1>
        <button onClick={generateRandomNumber}>Generate Random Number</button>
      </>
    );
  }
);
