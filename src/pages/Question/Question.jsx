import React from "react";
import "./question.css";
import { Link } from "react-router-dom";


function Question() {
  return (
    <section className="Question">
        <div className="quest-back-wrapper">
        <Link to="/"> <div className="question-back">
         <img src="src/assets/back.svg" alt="back" />
        </div>
        </Link>
        </div>
      <div className="wrapper">
        <h2>QUESTION</h2>
        <p>
          Implement an API fetch of your GitHub portfolio, show a page with a
          list of all your repositories on GitHub, and create another page
          showing data for a single repo clicked from the page showing all repos
          using nested routes while using all the necessary tools in react.
          Implement an Error Boundary (show a page to test the error boundary)
          and 404 pages. Good UI and Designs are important.
        </p>
      </div>
    </section>
  );
}

export default Question;
