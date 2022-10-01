import React from "react";
import "./profile.css";
import { useState, useContext, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { apiContext } from "../ContextApi/ContextProvider";
import Pic from "../static/images/pic-3.png"

function Profile() {
  const navigate = useNavigate();
  let { logedin} = useContext(apiContext);

  const goToSignUpPage = () => {
    navigate("/singin");
  };

  const [items, setItems] = useState();

  useEffect(() => {
    const items =(localStorage.getItem('name'));
    if (items) {
      setItems(items);
    }
  }, []);

  console.log(items);

  return (
    <div>
      {logedin ? (
       
      <div className="profile">
        <div className="about">
          <img className="myImage" src={Pic} alt="can't display" />
          <h1 className="name">{items}</h1>
        </div>

      </div>
    
      ) : (
        <div>
          <div className="profileLogin btn" onClick={goToSignUpPage}>
            login First{" "}
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
