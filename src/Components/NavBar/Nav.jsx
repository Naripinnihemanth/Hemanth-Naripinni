import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Profile from "../../assets/Profile.jpg";
import "./Nav.css";
function Nav() {
  const [navTogg, setNavTogg] = useState(false);
  function togg() {
    setNavTogg(!navTogg);
  }
  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 700) {
      setNavTogg(true);
    }
  }, []);

  return (
    <div className="navbar">
      <div className="name">
        <img src={Profile} alt="" className="profile" />
        <h1>Hemanth Naripinni</h1>
      </div>
      <div className="item-wrap" style={{ display: navTogg ? "flex" : "none" }}>
        <a href="#home" className="item">
          Home
        </a>
        <a href="#about" className="item">
          About
        </a>
        <a href="#projects" className="item">
          Projects
        </a>
        <a href="#home" className="item">
          Home
        </a>
        <a href="#home" className="item">
          Home
        </a>
      </div>
      <div className="cv" download>
        <p>Get my CV</p>
      </div>
      <RxHamburgerMenu className="menu" onClick={togg} />
    </div>
  );
}

export default Nav;
