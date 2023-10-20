import React from "react";
import Back from "../../components/back";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";

import "./repos.css"

function Repos() {
    const[repos, setRepos]= useState([])

    useEffect(() => {
        // setLoading(false)
        fetch(`https://api.github.com/users/BANKY-LAB/repos`)
          .then((res) => res.json())
          .then((data) => setRepos(data));
        //   setLoading(true)
      }, []);
console.log(repos)
  return (
    <main className="main-repos">
        <Navbar />
        <Back />
        <div className="repos-flex">
      <div className="main-repos-div" >{repos.map((repo) => (
        <div className="card">
             <h3 className="repo-name" key={repo.id}>{repo.name}</h3>
             <p className="repo-description">{repo.description}</p>
             <Link to={`/Repos/${repo.name}`}><button className="view-btn">View</button></Link>
             
             </div>))}
            </div>
            </div>
    </main>
  );
}

export default Repos;