

import './Style2.css/User1.css';
 import Ellipse14_6 from "../Images/Ellipse14_6.png";
import Frame30086 from "../Images/Frame 30086.png"
import message_box from "../Images/message_box.png";
function User5(props){
    return (
      <div className="user_Details_Box" style={{margin:"0 0",padding:"0 0" }} >
      <div className="Each_user_detailing_boxx_"  style={{margin:"20px 0 0 0 0",padding:"0 0"}}>
                    <p style={{marginBottom:'5px',marginTop:'25px'}}>{props.selectedUsers._id}</p>
                  <img src={Ellipse14_6}alt="#" className="user-card" style={{marginTop:'0px'}}></img>
                    <br></br>
                    <p>{props.selectedUsers.name}</p>
                    <div className="phone_email_icons"></div>
                    <img src={Frame30086} alt="#" className="icons-size"></img>
                    <img src={message_box}alt="#"  className="icons-size"></img>
                    <div className="about_">
                      <p>About :</p>
                     </div>
                     <div className="age-gender">
                      <p>Age :<span style={{color:'grey',marginRight:'5%'}}>{props.selectedUsers.age}</span></p>
                      <p> Gender :<span style={{color:'grey'}}>Female</span></p>
                     </div>
                     
              
                   </div>
                   
        </div>

    )
}
export default User5;