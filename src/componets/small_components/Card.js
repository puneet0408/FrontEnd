import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackCardImg from "../../static/images/gallary/3.jpg"

import "./Card.css";
import {
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
let Card = (props) => {
  const navigate = useNavigate();
  const handlePage = () => {
    navigate(`/cardetails`, { state: { props } });
  };
  return (
    <div onClick={handlePage} >
      <div className="packagecard">
 
        <img className="packageimage" alt="link" src={BackCardImg} />
        <div className="card__text">
        <div className="name_div" >
        <FontAwesomeIcon className="starIcon" icon={faStar} />
        <p className="cardName">{props.package_name}</p>
        </div>
          <h6 className="packagePrice">{props.price} Rs / person </h6>
        </div>
      </div>
    </div>
  );
};
export default Card;
