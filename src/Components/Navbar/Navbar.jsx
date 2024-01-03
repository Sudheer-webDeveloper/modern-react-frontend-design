import React, { useState } from "react";
import images from "../../constants/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoRestaurant } from "react-icons/io5";

const Navbar = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  console.log(smallScreen)
  return (
    <nav className="navbar">
      <div className="app-logo">
        <img src={images.gericht} alt="hello" />
      </div>
      <ul className="app-links">
        <li>
          <a href="#home"> Home</a>{" "}
        </li>
        <li>
          <a href="#about"> About</a>{" "}
        </li>
        <li>
          <a href="#menu"> Menu</a>{" "}
        </li>
        <li>
          <a href="#awards"> Awards</a>{" "}
        </li>
        <li>
          <a href="#contact"> Contact</a>{" "}
        </li>
      </ul>
      <div className="register">
        <a>Log In /Register</a>
        <div />
        <a>Book Table</a>
      </div>

      <div className="app-hamburger" >
        <h3 onClick={() => setSmallScreen(true)}>
          <GiHamburgerMenu />
        </h3>

        {smallScreen && (
          <div className="app-overlay">
            <div className="app-cross">
              <h6  onClick={() => setSmallScreen(false)} >
                <IoRestaurant/>
              </h6>
            </div>
            <ul className="app-small-screen-links">
              <li>
                <a href="#home"> Home</a>{" "}
              </li>
              <li>
                <a href="#about"> About</a>{" "}
              </li>
              <li>
                <a href="#menu"> Menu</a>{" "}
              </li>
              <li>
                <a href="#awards"> Awards</a>{" "}
              </li>
              <li>
                <a href="#contact"> Contact</a>{" "}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
