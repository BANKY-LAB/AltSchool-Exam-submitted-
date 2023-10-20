import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import "./repo.css"

function RepoDetailsPage() {
  const { name } = useParams();
  const [repoDetails, setRepoDetails] = useState("null");

  useEffect(() => {
    fetch(`https://api.github.com/repos/BANKY-LAB/${name}`)
      .then((res) => res.json())
      .then((data) => setRepoDetails(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [name]);

  return (
    <div className="repo-container">
      <Navbar />
      <Link className="repo-back" to="/Repos">Back </Link>
      <div className="main-wrapper">
      <div className="repo-wrapper">
          <h1> {repoDetails.name}</h1>
          <p>Description: {repoDetails.description}</p>
          <p>Language: {repoDetails.language}</p>
          <p>Created at: {repoDetails.created_at}</p>
          <p>Default branch: {repoDetails.default_branch}</p>
          <Link className="repo-back-2" to={`${repoDetails.html_url}`}>Check on GitHub</Link>
        </div>
      
      </div>
       
    </div>
  );
}

export default RepoDetailsPage;

  