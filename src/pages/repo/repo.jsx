import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";

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
    <div>
      <Navbar />
      <Link to="/Repos"> <p> back </p></Link>
        <div>
          <h1>Name: {repoDetails.name}</h1>
          <p>Description: {repoDetails.description}</p>
          <p>Language: {repoDetails.language}</p>
          <p>Created at: {repoDetails.created_at}</p>
          <p>Default branch: {repoDetails.default_branch}</p>
          {/* Display other properties as needed */}
        </div>
      
    </div>
  );
}

export default RepoDetailsPage;

  