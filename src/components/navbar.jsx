import React from "react";
function Navbar () {
    return(
        <div className="nav-container">
            <div className="logo"><h1>BANKY </h1></div>
            <div className="links-wrapper">
            <div className="links">
                <p>Home</p>
                <p>Contact</p>
                <p>About</p>
            </div>
            <div className="profile">Profile</div>
            </div>
        </div>
    )
}
export default Navbar;