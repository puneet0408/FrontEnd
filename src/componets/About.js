import React,{useContext} from "react";
import "./about.css";
import AboutImg from "../static/images/topbanner.jpg";
import { Navigate, useNavigate } from "react-router-dom";

import { apiContext } from "../ContextApi/ContextProvider";

 
const About = () => {
  let {logedin,setLogedin} = useContext(apiContext);
  const navigate = useNavigate();
  return (
    <div className="aboutContainer" >
      <img className="aboutBgImg" src={AboutImg} />
      <div className="aboutTravels">
        <div className="whole">
          <div className="Abouttext">
            <h1 className="unique">What makes our trip unique</h1>
            
            <p className="aboutPara">
              <span> OUR ADVENTURES START WHERE OTHERS END”</span> ...is MOSER
              Active’s primary mission: taking clients on a trip of a lifetime,
              off the beaten path away from the popular tourist routes to
              witness Chile’s pristine natural beauty where they will explore
              breathtaking places, come face to face with mother nature.
            </p>
           
          </div>
        </div>
        <div className="btn_ContainerAb" >
       <div className="btn aboutBtn" onClick={(()=>{logedin? navigate("/"):navigate("/singin")})} >  come Join with us</div>
       </div>
      </div>
    </div>
  );
};
export default About;
