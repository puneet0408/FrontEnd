import React from "react";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "animate.css";
import { apiContext } from "../../ContextApi/ContextProvider";

import "react-calendar/dist/Calendar.css";
import "../../style/CardDetails.css";
import img1 from "../../static/images/gallary/1.jpg";
import img2 from "../../static/images/gallary/2.jpg";
import img3 from "../../static/images/gallary/3.jpg";
import img4 from "../../static/images/gallary/4.jpg";
import img5 from "../../static/images/gallary/5.jpg";
import img6 from "../../static/images/gallary/6.jpg";
import img7 from "../../static/images/gallary/7.jpg";
import img8 from "../../static/images/gallary/8.jpg";
import img9 from "../../static/images/5.jpg";
import img10 from "../../static/images/4.jpg";
import { useLocation } from "react-router-dom";
import {
  faStar,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CarDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();

  let [memberCount, setMemberCount] = useState(1);
  

  const [readMore, setreadMore] = useState(true);
  let { logedin } = useContext(apiContext);
  const [selectDate, setSelectDate] = useState(null);
  const [makePay, setMakePayment] = useState(false);
  const [guest, setguest] = useState(false);
  const [calender, setCalender] = useState(false);


 



  const goToSignUpPage = () => {
    navigate("/singin");
  };

  const makePayment = () => {
    setMakePayment((prev) => !prev);
    setCalender(false)
    setguest(false)
  };

  const reverseCalender = () => {
    setCalender((prev) => !prev);
    setMakePayment(false)
    setguest(false)
  };

  const reverseguest = () => {
    setguest((prev) => !prev);
    setCalender(false);
    setMakePayment(false)

  };

  const add = () => {
    setMemberCount(memberCount + 1);
  };
  const rem = () => {
    if (memberCount !== 1) {
      setMemberCount(memberCount - 1);
    }
  };
  console.log(state.props);

  const imgArr = [
    { Img: img1 },
    { Img: img2 },
    { Img: img3 },
    { Img: img4 },
    { Img: img5 },
    { Img: img6 },
    { Img: img7 },
    { Img: img8 },
    { Img: img9 },
    { Img: img10 },
  ];

  let imgtoShow = imgArr.map((img) => {
    return (
      <div className="slide">
        <img className="scrollImg" src={img.Img} alt="detailPgImg" />
      </div>
    );
  });

  return (
    <div className="detailPage">
      <h1 className="packageName">{state.props.package_name}</h1>
      <div className="venu">
        <FontAwesomeIcon className="starState" icon={faStar} />
        <p>himachal INDIA</p>
      </div>

      <div className="detailPgImg">
        <div className="containerHeading">
          <h1>famous places in {state.props.package_name}</h1>
        </div>
        <div className="slider">
          <div className="slider_track">{imgtoShow}</div>
        </div>
      </div>

      <div className="famous_booking">
        <div className="AllPlaces">
          <h1 className="famousPLaces">famous places</h1>
          <p className="places">{state.props.main_destinations[0]}</p>
          <p className="places">{state.props.main_destinations[1]}</p>
          <p className="places">{state.props.main_destinations[2]}</p>
          <p className="places">{state.props.main_destinations[3]}</p>
          <p className="places">{state.props.main_destinations[4]}</p>
          <p className="places">{state.props.main_destinations[5]}</p>
        </div>
        <div className="booking_Side">
          <div className="booking_box">
            <p className="booking_price">
              from {state.props.price} <span className="person">/person</span>
            </p>
            <div className="capsule">
              {/* <div  onClick={reverseCalender} className="date_container">
                {" "}
                <h2>Dates</h2>
                <div className="date">
                  <p   className="add_date">
                    DD-MM-YYYY
                  </p>
                  <p  >
                    {" "}
                    {calender ? (
                      <FontAwesomeIcon
                        className="starIcon"
                        icon={faArrowDown}
                      />
                    ) : (
                      <FontAwesomeIcon className="starIcon" icon={faArrowUp} />
                    )}{" "}
                  </p>
                  {calender ? (
                    <div className="calender_container">
                      <DatePicker
                        selected={selectDate}
                        onChange={(date) => setSelectDate(date)}
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date()}
                        isClearable
                        shoewYearDropDown
                        scrollableMonthYearDropdowm
                      />
                      <button onClick={reverseCalender} className="btn">
                        Save
                      </button>
                    </div>
                  ) : (
                    " "
                  )}
                </div>
              </div> */}

              <div  className="guest_Container">
                <h2 onClick={reverseguest} >guests</h2>
                <div className="date">
                  <p  onClick={reverseguest} className="add_date" >
                    {memberCount} guest Added
                  </p>
                  <p>
                    {" "}
                    {guest ? (
                      <FontAwesomeIcon 
                       onClick={reverseguest}
                        className="starIcon"
                        icon={faArrowDown}
                      />
                    ) : (
                      <FontAwesomeIcon className="starIcon"  onClick={reverseguest} icon={faArrowUp} />
                    )}{" "}
                  </p>
                  {guest ? (
                    <div className="guestInfo">
                      <div className="addMember">
                        <div className="member_count">
                          <p className="member">member</p>
                          <div className="countNo">
                            <button
                              className="min sign"
                              onClick={(e) => {
                                e.stopPropagation();
                                rem();
                              }}
                            >
                              -
                            </button>
                            <p className="memberNO"> {memberCount}</p>
                            <button
                              className="add sign"
                              onClick={(e) => {
                                e.stopPropagation();
                                add();
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button className="btn" onClick={reverseguest}>
                          save member
                        </button>
                      </div>
                    </div>
                  ) : (
                    " "
                  )}
                </div>
              </div>
            </div>
            {/* <div className="inline">
              <span className="selectDA">selected Date</span>
              <span>
                {selectDate
                  ? moment(selectDate).format("DD-MM-YYYY")
                  : "DD-MM-YYYY"}
              </span>
            </div> */}
            <div className="inline">
              <span className="selectDA">total Amount -</span>
              <span>{state.props.price * memberCount} Rs</span>
            </div>
            <div>
              {makePay ? (
                <div className="makePayment_container">
                  <h1 className="makepayment">Make payment</h1>
                  <button className="btn" onClick={makePayment}>
                    Cancel
                  </button>
                </div>
              ) : (
                " "
              )}
            </div>
            <button
              className="btn_card"
              onClick={logedin ? makePayment : goToSignUpPage}
            >
              book Now
            </button>
          </div>
        </div>
      </div>

      <div className="aboutState">
        <h3>about {state.props.package_name} </h3>
        <p>
          {readMore
            ? `${state.props.package_desription.substring(0, 200)}...`
            : state.props.package_desription}
          <button onClick={() => setreadMore(!readMore)}>
            {readMore ? "readmore" : `show less`}
          </button>
        </p>
      </div>
    </div>
  );
}

export default CarDetails;
