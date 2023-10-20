import React from "react";
import Back from "../../components/back";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        <Back />
        <div className="repos-flex">
      <div className="main-repos-div" >{repos.map((repo) => (
        <div className="card">
             <h3 className="repo" key={repo.id}>{repo.name}</h3>
             <p className="repo-description">{repo.description}</p>
             <p className="repo-language">Language: {repo.language}</p>
             <p className="created-at">Created-at: {repo.created_at}</p>
             <p className="default-branch">Default-branch: {repo.default_branch}</p>
             <Link to={`/Repos/${repo.name}`}><button>View</button></Link>
             
             </div>))}
            </div>
            </div>
    </main>
  );
}

export default Repos;