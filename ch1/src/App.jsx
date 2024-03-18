import { useEffect } from "react";
import { CounterApp } from "./components/CounterApp";
import { LearnProps } from "./components/LearnProps";
import { LearnUseEffect } from "./components/LearnUseEffect";
import { LearningEvent } from "./components/LearningEvent";
import { PassingDataFromChildToParent } from "./components/PassingDataFromChildToParent";
import { Learn_jsx_component } from "./components/learn_jsx_component";
import { MyComponent } from "./components/my_component";
import { LearnUseMemo } from "./components/LearnUseMemo";
import { LearnCallback } from "./components/LearnCallback";
import { LearnCustomHook } from "./components/LearnCustomHook";
import { LearnCustomHooks } from "./components/LearnCustomHooks";
import { LearnConditionalRendering } from "./components/LearnConditionalRendering";
import { LearnMap } from "./components/LearnMap";

function App() {
  let functionThatwillGetDataFromChildComponent = (data) => {
    console.log(data);
  };

  return (
    <>
      {/* <MyComponent /> */}
      {/* <MyComponent /> */}
      {/* <Learn_jsx_component /> */}
      {/* <LearnProps name="Waleed" />
      <LearningEvent />
      <PassingDataFromChildToParent
        onClick={functionThatwillGetDataFromChildComponent}
      /> */}
      {/* <LearnCallback /> */}
      {/* <LearnCustomHooks /> */}
      <LearnMap />
    </>
  );
}

export default App;
