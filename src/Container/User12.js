//Ellipse 14 (7)

import "./Style2.css/User1.css";
import Frame30086 from "../Images/Frame 30086.png";
import message_box from "../Images/message_box.png";
function User12() {
  return (
    <div className="userDetails-Box" style={{ marginLeft: "200px" }}>
      <div className="Each_user_detailing_boxx_">
        <p style={{ marginBottom: "5px", marginTop: "25px" }}>270374</p>
        <img src="Ellipse 14 (12).png" alt="#" className="user-card" style={{ marginTop: "0px" }}></img>
        <br></br>
        <p>Dovon Lane</p>
        <div className="phone_email_icons"></div>
        <img src={Frame30086} alt="#" className="icons-size"></img>
        <img src={message_box} alt="#" className="icons-size"></img>
        <div className="about_">
          <p>About :</p>
        </div>
        <div className="age-gender">
          <p>
            Age :<span style={{ color: "grey", marginRight: "5%" }}>25</span>
          </p>
          <p>
            {" "}
            Gender :<span style={{ color: "grey" }}>Female</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default User12;
