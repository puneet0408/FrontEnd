import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import kullu from "../../static/images/00.jpg"
import kangra from "../../static/images/02.jpg"
import Chamba from "../../static/images/03.jpg"
import manali from "../../static/images/01.jpg"
import shimla from "../../static/images/04.jpg"
 


import "./Card.css";

import {
  faLocation
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const  Card = (props) => {


  const BackImg = [
    {
      img:shimla
    },
    {
      img:Chamba
    },
    {
      img:kangra
    },
    {
      img:manali
    },
    {
      img:kullu
    }
  ]


  const navigate = useNavigate();
  
  const handlePage = () => {
    navigate(`/cardetails`, { state: { props } });
  };
  return (
    <div onClick={handlePage} >
      <div className="packagecard">
 
        <img className="packageimage" alt="link" src={BackImg[props.index].img} />
        <div className="card__text">
       <div className="name_price" >
        <div className="name_div" >
        <FontAwesomeIcon className="starIcon" icon={faLocation} />
        <p className="cardName">{props.package_name}</p>
        </div>
        <h6 className="packagePrice">{props.price} Rs / person </h6>
        </div>
   
        
        <h6 className="keyword" > {props.famousFor} </h6>
         
        <p className="card_Desc" >{props.package_desription.substring(0, 100)}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
