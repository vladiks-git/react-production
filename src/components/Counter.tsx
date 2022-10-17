import React, { useState } from "react";

import "./style.scss";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleCount = () => setCounter((prev) => prev + 1);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleCount}>click me</button>
    </div>
  );
};
