import React from "react";
import { Link } from "react-router-dom";



function Back (){
    return (
            <div className="quest-back-wrapper">
        <Link to="/"> <div className="question-back">
         <img src="src/assets/back.svg" alt="back" />
        </div>
        </Link>
        </div> 
    )
}
export default Back;