import React, { useState } from "react";

import cls from "./style.module.scss";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleCount = () => setCounter((prev) => prev + 1);

  return (
    <div>
      <h1>{counter}</h1>
      <button className={cls.btn} onClick={handleCount}>
        click me
      </button>
    </div>
  );
};
