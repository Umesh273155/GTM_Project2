import  './Style.css/CardPage.css';
import {Link} from "react-router-dom";
import gradugateImg from "../Images/Ellipse 6.png";
import feature from "../Images/feature.png"
import barChart from "../Images/barChart.webp";
import featurex from "../Images/feature.png";
import home from "../Images/home.png";

import setting3 from "../Images/setting3.png";
import result3 from "../Images/result3.png";
import hat from "../Images/hat.png";

function CardPage(){

    return (
        <>

       
             <section className="card-nav-Box" style={{marginBottom:'20px',marginRight:"0"}} >
              <div className="cap-box" style={{marginRight:"0"}}>
              <img src={gradugateImg}alt="cap" className="graduate-cap"></img>
             
              </div>
              <div style={{display:'flex',justifyContent:'center'}}> 
              <p style={{marginBottom:'30px'}}>State Name</p>
              </div>
             
             <hr></hr>
          
             <div className="navlink">
              <Link to="/dashboard" style={{color:'white',textDecoration:'none'}}>
              <h4 className="dashboard h"> <span><img src={home}alt="card_image" className="home_"></img></span>Dashboard</h4>
              </Link>
        
            
              <Link to="/atcs"style={{color:'white',textDecoration:'none'}}>
              <h4 className="ATC h"><span><img src={feature}alt="card_image" className="home_"></img></span> ATC's </h4> 
              </Link>
              <Link to="/project"style={{color:'white',textDecoration:'none'}}>
              <h4 className="ATC h"><span><img src={home}alt="#" className="home_"></img></span> Project Office </h4> 
              </Link>
              <Link to="/school"style={{color:'white',textDecoration:'none'}}>
              <h4 className="graducation-cap h"> <span><img src={hat}alt="#" className="home_"></img></span>School & Classes</h4>
              </Link>
            
             <h4 className="result h"><span><img src={result3}alt="#" className="home_"></img></span>Result</h4>
             <h4 className="setting h"><span><img src={setting3}alt="#" className="home_"></img></span>Setting and Profile</h4>
             <h4 className="exam_routine h" >  <span><img src={barChart}alt="#" className="home_"></img></span>Exam Routine</h4>
             <div className="feature_new">
             <h4 className="feature h" >  <span><img src={featurex}alt="home" className="home_"></img></span>Feature</h4>
             <br></br>
             <img src="new.png"alt="home" className="new"></img>
             </div>
            
             </div>
             </section>
        
        </>
    )    
}
export  default CardPage;
