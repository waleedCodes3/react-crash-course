import React from "react";

export const PassingDataFromChildToParent = ({ onClick }) => {
  let childFunction = () => {
    console.log("ChildButtonTapped");
    let data = "data to be passed to parent";
    onClick(data);
  };
  return <button onClick={childFunction}> Hello</button>;
};
