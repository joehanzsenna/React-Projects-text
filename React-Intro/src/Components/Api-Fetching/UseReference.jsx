import React, { useRef } from "react";

function BackgroundColorChangeExample() {
  // Create a ref
  const divRef = useRef(null);

  // Function to change the background color of the div
  let bgColor = true
  const changeBackgroundColor = () => {
    if (bgColor == true){
        divRef.current.style.backgroundColor = "red";
        bgColor = false
    }else {
        divRef.current.style.backgroundColor = "blue";
        bgColor = true
    }
  };
  

  return (
    <div>
      <h2>Change Background Color with useRef</h2>
      <div ref={divRef} className="colored-box" style={{width:'100%', height:'50vh'}}>
        Initial Background
      </div>
      <button onClick={changeBackgroundColor}>Change Color</button>
    </div>
  );
}

export default BackgroundColorChangeExample;
