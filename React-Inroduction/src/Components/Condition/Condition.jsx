import React from "react";
import CompBtn1 from "./CompBtn1";
import CompBtn2 from "./CompBtn2";


const Condition = () => {
  let content;
  let isLoggedIn = false;

  if (isLoggedIn == true) {
    content = <CompBtn1 />;
  } else {
    content = <CompBtn2/>;
  }

  return (
    <div>

      <h1>{content}</h1>

      {/* Tenary operator  */}
      <div
        style={{
          width: "50%",
          height: "50vh",
          backgroundColor: "red",
          color: "white",
          padding: "3rem",
        }}
      >
        {isLoggedIn == true ? <CompBtn1 /> : <CompBtn2 />}
      </div>

      {/* // You can also “escape into JavaScript” from JSX attributes, but you have
      to use curly braces instead of quotes.*/}

    </div>
  );
};

export default Condition;
