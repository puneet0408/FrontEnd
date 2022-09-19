import React from "react";
import "../../style/service.css";
import {
  faHotel,
  faUtensils,
  faBullhorn,
  faGlobeAsia,
  faPlane,
  faHiking,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function service() {
  const services = [
    {
      key: 1,
      icon: faHotel,
      Name: "affordable hotels",
      About: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      key: 2,
      icon: faUtensils,
      Name: "food & drinks",
      About: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      key: 3,
      icon: faBullhorn,
      Name: "safity guide",
      About: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      key: 4,
      icon: faGlobeAsia,
      Name: "himachal",
      About: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      key: 5,
      icon: faPlane,
      Name: "fast travel",
      About: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      key: 6,
      icon: faHiking,
      Name: "adventures",
      About: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  let AvalaibleService = services.map((service) => {
    return (
      <div className="serviceCard">
        <FontAwesomeIcon
          className="serviceIcon"
          icon={service.icon}
        ></FontAwesomeIcon>
        <div className="ServiceName">{service.Name}</div>
        <div className="ServiceAbout">{service.About}</div>
      </div>
    );
  });
  return (
    <div className="ServicePage">
      <h1 className="service" >service</h1>
      <div className="mainservice" >{AvalaibleService}</div>
    </div>
  );
}
