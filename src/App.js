import React from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";
import TextInput from "./inputText";

function App() {
  return (
    <>
      Counter
      <Counter initialCount={0} />
      Counter Hooks
      <CounterHooks initialCount={5} />
      Input
      <TextInput />
    </>
  );
}

export default App;
