import Navbar from "../../components/navbar";
import "./404.css"
function Page404(){
    return(
        <div className="page-404">
        <Navbar/>
        
        <div className="wrapper-404">
            
            <div className="container-404">
            <h1>404</h1>
            <p>PAGE NOT FOUND</p>
            </div>
          
        </div>
        </div>
    )
}

export default Page404;