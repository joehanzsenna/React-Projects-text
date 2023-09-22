import React from "react";
import "./Style.css";
// import Section1 from "./Section1";
import Property from "./props/Property";
import database from "./props/database";

const Section2 = () => {
  const res = database.map((item) => {
    return (
      <div key={item.id} >
        <Property {...item}  />
      </div>
    );
  });
  
  return (
    <div className="sec2"style={{
        display: `grid`,gridTemplateColumns: `repeat(3, 1fr)`,
        minHeight: `100vh`,justifyContent: `center`,
        alignItems: `center`,margin: `0 auto`,
        placeItems: `center`,color: `#000`,
      }}
    >
      {res}
    </div>
  );
};

export default Section2;
