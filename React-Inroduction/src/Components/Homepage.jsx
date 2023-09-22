import React from "react";
import Button from "./Button";
import './Homepage.css'
import myImage from '../assets/pcImage02.jpg'

const Homepage = () => {
  return (
    <div className="HomeContainer">
      <h1>This is my home page </h1>

        <Button/>
        <Button/>

        <img src={myImage} alt="" className="myImg"/>
    </div>
  );
};

export default Homepage;
