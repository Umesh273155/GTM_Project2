import "./Style.css/DashBoardPage.css";
import CardPage from "./CardPage";

import { logout } from "../reduxx/authslices";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Frame30083 from "../Images/Frame 30083.png";
import Frame30084 from "../Images/Frame 30084.png";
import Frame30085 from "../Images/Frame 30085.png";

function DashBoardPage() {
  const useremail = useSelector((state) => state.userSlice.user.email);
  const dispatch = useDispatch();
   
  //logout
 
  const handleLogout = async () => {
    await axios
      .get("/api/session/logout")
      .then(() => dispatch(logout()))
      .catch((error) => console.log(error));
   
  };

  return (
    <div className="dashboard_main_box">
      <div className="dashboard-inner-box">
        <CardPage />
        <div className="dashboard-section">
          <div className="top-paragraph-box" style={{ display: "flex" }}>
            <div className="para_Box">
              <p className="paragraph">Learn how to launch faster Watch our webinar for tips from our experts and get a limited time offer.</p>
             
            </div>
            <div>
            
              
              <h3 className="user_logged_email_">{useremail}</h3>
              <div style={{ display: "flex", justifyContent: "space-around", marginLeft: "5rem" }}>
                <img src="bell_icon.png" alt="" className="bell_img"></img>
                <br></br>

                <button className="logout-btn" onClick={handleLogout}>
                  Log out
                </button>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "20px",marginLeft:"15%" }} className="dash_board">
            <h2 className="heading1">Welcome to your dashboard</h2>
          </div>

          <div className="heading-icons" style={{ display: "flex", marginLeft: "130px", marginTop: "30px" }}>
            <img src={Frame30083} alt="#" className="icons"></img>
            <h3 className="heading">Add other State</h3>
          </div>

          <p className="parax"> Create rich course content and coaching products for your students.</p>
          <p className="parax">when you give them a pricing plan , they'll appear on your site! </p>

          <div className="heading-icons" style={{ display: "flex", marginLeft: "130px", marginTop: "30px" }}>
            <img src={Frame30084} alt="#" className="icons"></img>
            <h3 className="heading">Add ATC's</h3>
          </div>

          <p className="parax"> Create rich course content and coaching products for your students.</p>
          <p className="parax">when you give them a pricing plan , they'll appear on your site! </p>

          <div className="heading-icons" style={{ display: "flex", marginLeft: "130px", marginTop: "30px" }}>
            <img src={Frame30085} alt="#" className="icons"></img>
            <h3 className="heading">Add Project Office</h3>

            <button className="support-btn"> Support Me</button>
          </div>
          <p className="parax"> Create rich course content and coaching products for your students.</p>
          <p className="parax">when you give them a pricing plan , they'll appear on your site! </p>
        </div>
      </div>
    </div>
  );
}
export default DashBoardPage;
