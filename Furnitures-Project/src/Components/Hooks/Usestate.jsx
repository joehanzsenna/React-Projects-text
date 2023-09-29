import React, { useState } from "react";
import "./Style.css";

const Usestate = () => {
 const [count, setCount] = useState(2)

//   function increase (){
//     setCount(count + 5)
//   }
//   function decrease (){
//       if(count <= 0){
//         setCount(0)
//     }else {
//         setCount(count - 5)
//     }
//   }
//   function reset (){
//     setCount(0)
//   }


  return (
    <div>
      <div className="sec1">
        <h2>{count}</h2>
        <div className="btns">
          <button onMouseUp={() => {setCount(count + 5)}}>increase</button>
            <button onClick={() => {
                (count <= 0 ) ? setCount(0):setCount(count - 5)
            }}>decrease</button>
            <button onClick={() => {setCount(0)}}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Usestate;
