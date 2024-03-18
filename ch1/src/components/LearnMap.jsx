import React from "react";

export const LearnMap = () => {
  let items = ["item1", "item2", "item3", "item4", "item5", "item6"];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {" "}
          {index} --- {item}
        </li>
      ))}
    </ul>
  );
};
