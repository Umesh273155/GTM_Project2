import "./Style2.css/User1.css";
import Frame30086 from "../Images/Frame 30086.png"
import message_box from "../Images/message_box.png";
import   Ellipse14_4 from "../Images/Ellipse14_4.png";
function User1(props1) {
  console.log(props1.selectedUsers);
  return (
    <div className="user_Details_Box" style={{margin:"0 0",padding:"0 0" }} >
      <div className="Each_user_detailing_boxx_"  style={{margin:"20px 0 0 0 0",padding:"0 0"}}>
        <p style={{ marginBottom: "5px", marginTop: "25px" }}>{props1.selectedUsers._id}</p>
        <img src={ Ellipse14_4} alt="#" className="user_card" style={{ marginTop: "0px" }}></img>
        <br></br>
        <p>{props1.selectedUsers.name}</p>
        <div className="phone_email_icons"></div>
        <img src={Frame30086} alt="#" className="icons-size"></img>
        <img src={message_box} alt="#" className="icons-size"></img>
        <div className="about_">
          <p>About :</p>
        </div>
        <div className="age-gender">
          <p>
            Age :<span style={{ color: "grey", marginRight: "5%" }}>{props1.selectedUsers.age}</span>
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
export default User1;