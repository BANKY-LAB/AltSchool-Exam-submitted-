import React from "react";
import LandingPage from "../../components/landing-page";
import Navbar from "../../components/navbar";
import "./home-page.css"
 function Home(){
    return(
        <main className="main-page">
            <Navbar />
            <LandingPage />
        </main>
    )
 }

 export default  Home
