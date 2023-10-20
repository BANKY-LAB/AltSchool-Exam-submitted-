import { Link } from "react-router-dom";

function LandingPage(){
    return(
        <section className="Landing-page-wrapper">
            <div className="intro"> 
              <p className="into-p"> Hi,  <span> I'm Banky</span></p>
              <p className="into-p-2">This is my <span> AltSchool </span>second semester Exam Solution</p>
            </div>
            <div className="about">
               <Link to="/Question"><button className="Question-btn">Question</button></Link> 
               <Link to="/Repos"> <button className="Solution-btn">Solution</button> </Link>
            </div>
        </section>
    )
 }

 export default  LandingPage;