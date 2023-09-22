import React from "react";
import database from "./database";

const Property = (props) => {

  // console.log(props);
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.firstname}</p>
      <p>{props.secondname}</p>
      <p>{props.age}</p>

      {/* <div className={props.className }>
        <h2>{props.title}</h2>
        <p>{props.firstname}</p>
        <p>{props.lastname}</p>
        <p>{props.age}</p>
      </div> */}

      {/* <div style={{ background: "green" }}>
        <h2>{props.title}</h2>
        <p>{props.firstname}</p>
        <p>{props.lastname}</p>
        <p>{props.age}</p>
      </div> */}
    </div>
  );
};

export default Property;
