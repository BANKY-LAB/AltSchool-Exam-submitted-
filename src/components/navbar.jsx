import React from "react";
import { Link } from "react-router-dom";
function Navbar () {
    return(
        <div className="nav-container">
            <div className="logo"><h1>BANKY </h1></div>
            <div className="links-wrapper">
            <div className="links">
                <Link to="/" className="Repos-link">Home</Link>
               <Link to="/Repos" className="Repos-link">Repos </Link>
                <Link to="/404" className="Repos-link"> Error 404</Link>
            </div>
            <Link to="/Profile" className="profile">Profile</Link>
            </div>
        </div>
    )
}
export default Navbar;