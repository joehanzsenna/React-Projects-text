import React, { useState } from "react";
import './Hero.css'
import menuIcon00 from '../../../assets/menuIcon.png'
import homeImg from '../../../assets/Imgg01.jpg'

const Hero = () => {

  const [navMenu, setNavMenu] = useState("navMenu");

  function menuClick(){
    if(navMenu === 'navMenu'){
      setNavMenu(" navMenu navActive");

    }else{
      setNavMenu("navMenu");
    }

  }


  return (
    // main container
    <div className="Hero">
      {/* navbar section  */}
      <nav className="navbar">
        {/* logo  */}
        <h1>Furns</h1>

        {/* lists / buttons  */}
        <div className={navMenu}>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
          <div className="buttons">
            <button>Log In</button>
            <button>Signup</button>
          </div>
        </div>
        <img src={menuIcon00} alt="" onClick={menuClick} className="menuIcon"/>
      </nav>

      {/* sub Hero section  */}
    <section className="subHero">
    <img src={homeImg}  alt="" className="homeImg"/>
    <div className="subHeroTexts">
      <h1>Furniture Store</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, cum. Maiores laboriosam quisquam autem magni dolore expedita, sit id iste distinctio repellat asperiores neque repellendus minus nam est, ducimus placeat!</p>
      <button className="subBtn">Get Started</button>
    </div>
    </section>

    </div>
  );
};

export default Hero;
