import { useParams } from "react-router-dom";

function RepoDetailsPage() {

const {name}= useParams()

   return (
    <div>
      <h1>this is the repo details for: {name}</h1>
    </div>
   )
  }
  
  export default RepoDetailsPage;
  