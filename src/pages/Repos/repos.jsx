import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";

import "./repos.css";

function Repos() {
  const [repos, setRepos] = useState([]);
  const [Error, setError] = useState(null);

  useEffect(() => {
    // setLoading(false)
    fetch(`https://api.github.com/users/BANKY-LAB/repos`)
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data. Please try again.");
      });

    //   setLoading(true)
  }, []);
  console.log(repos);
  return (
    <main className="main-repos">
      <Navbar />
      <div className="repos-with-back">
      <Link className="repos-back" to="/">Back</Link>
      <div className="repos-flex">
      
        {Error ? (
          <p>{Error}</p>
        ) : (
          <div className="main-repos-div">
            {repos.map((repo) => (
              <div className="card" key={repo.id}>
                <h3 className="repo-name" >
                  {repo.name}
                </h3>
                <p className="repo-description">{repo.description}</p>
                <Link to={`/Repos/${repo.name}`}>
                  <button className="view-btn">View</button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      </div>
    </main>
  );
}

export default Repos;
