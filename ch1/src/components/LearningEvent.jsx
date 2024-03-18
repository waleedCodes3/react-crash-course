import React from "react";

export const LearningEvent = () => {
  let eventFunction = (e) => {
    e.preventDefault();
    console.log("button Clicked");
  };
  return <button onClick={eventFunction}>LearningEvent</button>;
};
