import React from "react";
import { Link } from "react-router-dom";
function Navbar () {
    return(
        <div className="nav-container">
            <div className="logo"><h1>BANKY </h1></div>
            <div className="links-wrapper">
            <div className="links">
                <Link to="/Repository" className="Repos-link">Home</Link>
               <Link to="/Repos" className="Repos-link">Repos </Link>
                <Link to="/Repository" className="Repos-link"> Error 4044</Link>
            </div>
            <div className="profile">Profile</div>
            </div>
        </div>
    )
}
export default Navbar;