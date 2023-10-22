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
        <div className={isNavVisible? "links-wrapper" :"small-screen-nav"}>
          <div className= {isNavVisible? "links" :"small-Repos-link"}>
            <Link to="/" className= {isNavVisible? "Repos-link" :"small"}>
              Home
            </Link>
            <Link to="/Repos" className= {isNavVisible? "Repos-link" :"small"} >
              Repos
            </Link>
            <Link to="/404" className={isNavVisible? "Repos-link" :"small"} >
              Error 404
            </Link>
          </div>
          <Link to="/Profile" className={isNavVisible? "Repos-link" :"small"} >
            Profile
          </Link>
          <img
            onClick={hamburger}
            className="hamburga"
            src="/images/icons8-menu-48.png"
            alt=""
            height="30px"
          />
        </div>
      </div>
      {/* {isNavVisible ? (
        <div className="small-screen-nav">
          <div className="small-links">
            <Link onClick={handleBack} to="/" className="small">
              Back
            </Link>
            <Link onClick={handleBack} to="/" className="small small-Repos-link">
              Home
            </Link>
            <Link onClick={handleBack} to="/" className="small small-Repos-link">
              Repos
            </Link>
            <Link onClick={handleBack} to="/" className="small small-Repos-link">
              Error 404
            </Link>
            <Link onClick={handleBack} to="/" className="small small-profile">
              Profile
            </Link>
          </div>
        </div>
      ) : null} */}
    </nav>
  );
}

export default Navbar;