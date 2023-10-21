import React, { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {
  const [isNavVisible, setNavVisible] = useState(false);

  const hamburger = () => {
    setNavVisible(!isNavVisible);
  };

  const handleBack =()=>{
    setNavVisible(flase)
  }

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <Link className="banky-logo" to="/">_BANK<span>Y</span>_</Link>
        </div>
        <div className="links-wrapper">
          <div className="links">
            <Link to="/" className="Repos-link">
              Home
            </Link>
            <Link to="/Repos" className="Repos-link">
              Repos
            </Link>
            <Link to="/404" className="Repos-link">
              Error 404
            </Link>
          </div>
          <Link to="/Profile" className="profile">
            Profile
          </Link>
          <img
            onClick={hamburger}
            className="hamburga"
            src="/images/icons8-menu-48.png"
            alt=""
          />
        </div>
      </div>
      {isNavVisible ? (
        <div className="small-screen-nav">
          <div className="small-links">
            <Link onClick={handleBack} to="/" className="small">
              Back
            </Link>
            <Link onClick={handleBack} to="/" className="small small-Repos-link">
              Home
            </Link>
            <Link onClick={handleBack} to="Repos" className="small small-Repos-link">
              Repos
            </Link>
            <Link onClick={handleBack} to="404" className="small small-Repos-link">
              Error 404
            </Link>
            <Link onClick={handleBack} to="Profile" className="small small-profile">
              Profile
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;