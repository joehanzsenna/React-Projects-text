import React, { useRef } from "react";
import './Style.css'

const UseRef = () => {
    const divRef = useRef(null)

    let bgColor = true

    const changeBgColor = () => {
        if(bgColor == true){
            divRef.current.style.backgroundColor = 'red'
            divRef.current.style.color = 'white'
            bgColor = false
        }else{
            divRef.current.style.backgroundColor = 'blue'
            divRef.current.style.color = 'white'
            bgColor = true

        }

        // divRef.current.style.backgroundColor = 'red'
        // divRef.current.style.color = 'white'
    }

  return <div>
    <div ref={divRef} className="refContainer">
        <h1>Changing the background color using useRef</h1>
    </div>

    <button onClick={changeBgColor} className="refBtn">Click here to change Bg color</button>
  </div>;
};

export default UseRef;
