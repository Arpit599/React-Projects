import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [menuActive, setmenuActive] = useState(false);
  const handleMenuIconClick = () => {
    setmenuActive(!menuActive);
  };
  const [showSignupBtn, setShowSignupBtn] = useState(true);

  const signupBtnHandle = () => {
    if (window.innerWidth <= 960) {
      setShowSignupBtn(false);
    } else {
      setShowSignupBtn(true);
    }
  };

  window.addEventListener("resize", signupBtnHandle);

  // Signup button gets displayed at refresh time, therefore using useEffect
  useEffect(() => {
    signupBtnHandle();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRVL
            <i class="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleMenuIconClick}>
            <i className={menuActive ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={menuActive ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links">
                Products
              </Link>
            </li>
            <li>
              <Link to="/sign-up" className="nav-links-mobile">
                Sign Up
              </Link>
            </li>
          </ul>
          {showSignupBtn && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
