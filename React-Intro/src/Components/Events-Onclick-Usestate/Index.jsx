import React, { useState } from "react";
import './Style.css'



const Index = () => {
    const [count, setCount] = useState(0);
    // function changeColor(){

    // }


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
    <div>
      {/* <h2>change is background color</h2>

    <button onClick={}>Click Me</button> */}

      <div className="sec1">
        <h2>{count}</h2>
        <div className="btns">
          <button onClick={increase}>increase</button>
          <button onClick={decrease}>decrease</button>
          <button onClick={reset}>reset</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
