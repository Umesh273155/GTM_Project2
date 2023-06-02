import "./Style3.css/Users1.css";
import fullStar from "../Images/star.png";
import halfstar from "../Images/image 10.png";
import img11 from "../Images/img11.png";
import Frame30086 from "../Images/Frame 30086.png";
import message_box from "../Images/message_box.png";
import Ellipse14_8 from "../Images/Ellipse14_8.png";
function Users9(props) {
  return (
    <div className="user_s_Box"style={{marginLeft: "0",marginTop:"20px",marginBottom:"0",marginRight:"0",paddingLeft:"0",paddingTop:"0",paddingRight:"0",paddingBottom:"0" }}>
      <div className="Each_user_details_box"style={{marginLeft: "0",marginTop:"20px",marginBottom:"0",marginRight:"0",paddingLeft:"0",paddingTop:"0",paddingRight:"0",paddingBottom:"0" }}>
        <div className="_user_box">
          <p>{props.selectedUser._id}</p>
          <img src={Ellipse14_8} alt="#" className="users-cards" style={{ marginTop: "0px" }}></img>
          <br></br>
          <p>Science Student</p>
        </div>

        <div className="cap-phone-comment-box">
        <img src={img11} alt="#" className="icons_size"></img>
          <img src={Frame30086} alt="#" className="icons_size"></img>
          <img src={message_box} alt="#" className="icons_size"></img>
        </div>

        <div className="star-icons">
        <img src= {fullStar} alt="#" className="icons-star"></img>
          <img src= {fullStar} alt="#" className="icons-star"></img>
          <img src= {fullStar}alt="#" className="icons-star"></img>
          <img src= {fullStar} alt="#" className="icons-star"></img>
          <img src= {halfstar} alt="#" className="icons-star"></img>
        </div>
        <div className="user_Table">
          <div className="row">
            <p className="para1st">1st July 2023</p>
            <p className="para2nd">Introduction</p>
            <p className="para3rd R1">PO</p>
            <p className="para2nd">1</p>
          </div>
          <div className="row">
            <p className="para1st">8th July 2023</p>
            <p className="para2nd"> AboutFamily</p>
            <p className="para3rd R2">ATC</p>
            <p>1</p>
          </div>
          <div className="row">
            <p className="para1st">15th July 2023</p>
            <p className="para2nd">AboutSchool</p>
            <p className="para3rd R3"></p>
            <p></p>
          </div>
          <div className="row">
            <p className="para1st">15th July 2023</p>
            <p className="para2nd">Independence</p>
            <p className="para3rd R4">HM</p>
            <p>4</p>
          </div>
        </div>

        <div className="about-">
          <p>About :</p>
        </div>
        <div className="age-gender-box">
          <p>Age : {props.selectedUser.age}</p>

          <p>Marks : 90%</p>
        </div>
        <div className="footer-icons-box">
          <button className="btn">
            {" "}
            <img src="Like.png" alt="#" className="footer-icons"></img>
          </button>
          <button className="btn">
            <img src="Share.png" alt="#" className="footer-icons"></img>
          </button>
          <button className="btn">
            {" "}
            <img src="Comment.png" alt="#" className="footer-icons"></img>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Users9;
