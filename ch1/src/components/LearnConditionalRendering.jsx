import React from "react";

export const LearnConditionalRendering = () => {
  let showTitle = true;
  let LoggedIn = true;
  return (
    <>
      {showTitle && <h1>Welcome here</h1>}

      {LoggedIn ? <h1>Dashboard</h1> : <h1>Login</h1>}
    </>
  );
};
