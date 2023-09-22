import React, { useState } from "react";
import "./Style.css";

const Section1 = () => {
  const [friend, setFriend] = useState(false);
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="sec1">
      <h2>This is a new section's page</h2>
      <h2>{count}</h2>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>reset</button>

    </div>
  );
};

export default Section1;
