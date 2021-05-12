import React, { useState } from "react";

const HookCounter = (props) => {
  // console.log(useState);
  const [count, setCount] = useState(0);

  const addition = () => setCount(count + 1);

  const substraction = () => {
    if (count < 1) return;

    setCount(count - 1);
  };

  const resetCounter = () => setCount(0);

  return (
    <>
      <h3>Hooks - useState</h3>
      <div>
        <button onClick={addition}>+</button>
        <button onClick={substraction}>-</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
      <h4>{props.title}</h4>
      <p>{count}</p>
    </>
  );
};

HookCounter.defaultProps = {
  title: "Contador de clicks",
};

export default HookCounter;
