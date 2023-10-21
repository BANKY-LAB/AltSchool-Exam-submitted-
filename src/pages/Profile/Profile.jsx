import Navbar from "../../components/navbar";
import "./Profile.css"

function Profile (){
    return (
        <div className="profile-page-1">
        <Navbar/>
        <div className="profile-page">
            
            <div className="profile-card">
                <div className="image-wrapper">
                   <img className="profile-img" height="200px"  src="/src/assets/WhatsApp Image 2023-10-20 at 15.14.13.jpeg" alt="profile-pic" />
                </div>
                <div className="profile-body">
                    <p><span>Surname</span>: Olowoyeye</p>
                    <p><span>Middle Name</span>: Emmanuel</p>
                    <p><span>First Name</span>: Odunayo</p>
                    <p><span>Sex</span>: Male</p>
                    <p><span>Student Id</span>: ALT/SOE/023/0955</p>

                </div>
            </div>
            <div className="social-links">
                <div className="social-links-1">
                    <a target='_blank' href="https://github.com/BANKY-LAB">
                    <img height="20px" src="src/assets/github.png" alt="github" />
                    </a>
                </div>

                <div className="social-links-1">
                    <a target='_blank' href="http://wa.me/08104031440">
                    <img height="20px" src="src/assets/whatsapp.png" alt="Whatsapp" />
                    </a>
                </div>
                <div className="social-links-1">
                    <a target='_blank' href="https://www.linkedin.com/in/olowoyeye-odunayo-a45856269/">
                    <img height="20px" src="src/assets/linkedin.png" alt="Linked-in" />
                    </a>
                </div>
                <div className="social-links-1">
                    <a target='_blank' href="https://twitter.com/Olowoyeyeoduna2">
                    <img height="20px"  src="src/assets/x-twitter.svg" alt="X-app" />
                    </a>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Profile;