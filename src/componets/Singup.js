
import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
//import { useNavigate } from "react-router-dom"
import {
  faSignature,
  faAt,
  faPhone,
  faLocationDot,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';



import { singUpApi } from "../BackendApi/auth";

function Singup() {




  const [signupForm, setForm] = React.useState({
    name: "",
    email: "",
    number: "",
    address: "",
    password: "",
    confirm_password: "",

  });

  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }



  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    if (signupForm.password !== signupForm.confirm_password) {
      alert("Passwords don't match");
    } else {
      // make API call
      let data = JSON.stringify(signupForm);
      var config = {
        method: 'post',
        url: 'https://touristbackend.herokuapp.com/api/signup',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };
      axios(config)
        .then(function (response) {
          console.log(response.data.message);
          toast(response.data.message);
        })
        .catch(function (error) {
          console.log(error.response.data.error);
          toast(error.response.data.error);
        });
    }
  }



  useEffect(() => {
    console.log(error);
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log(signupForm);
    }
  }, [error]);

  const validate = (values) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      (error.name = "name is required");
    } else if (values.name.length > 15) {
      error.name = "Must be 15 characters or less";
    }

    if (!values.email) {
      error.email = "email is required";
    } else if (!regex.test(values.email)) {
      error.email = "this is not a valid format";
    }

    if (!values.number) {
      error.number = "mobile No is required";
    } else if (values.number.length < 10) {
      error.number = "atleast 10 number must be require";
    } else if (values.number.length > 10) {
      error.number = "number more then 10 will not be acceptable";
    }
    if (!(values.password && values.confirm_password)) {
      error.confirm_password = "password is required";
      error.password = "password is required";
    } else if (values.password !== values.confirm_password) {
      error.confirm_password = "password did'nt match";
    }
    return error;
  };

  return (
    <div className="signup">



      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <div>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend3">

              <FontAwesomeIcon icon={faSignature}></FontAwesomeIcon>

            </span>
            <input
              name="name"
              placeholder="Full Name"
              type="text"
              maxLength="20"
              class="form-control"
              onChange={handleChange}
              value={signupForm.name}

            />
            <p className="error">{error.name}</p>



          </div>
        </div>
        <div>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend3">

              <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>

            </span>
            <input
              name="email"
              placeholder="email"
              type="text"
              maxLength="30"
              onChange={handleChange}
              value={signupForm.email}
              class="form-control"
            />
            <p className="error">{error.email}</p>
          </div>
        </div>
        <div>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend3">

              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>

            </span>
            <input
              name="number"
              placeholder="mobile no"
              type="text"
              onChange={handleChange}
              value={signupForm.number}

              minlength="1"
              maxlength="10"

              class="form-control"
            />
            <p className="error">{error.number}</p>
          </div>
        </div>
        <div>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend3">

              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>

            </span>
            <input
              name="address"
              placeholder="address"
              onChange={handleChange}
              value={signupForm.address}
              type="text"
              class="form-control"
            />
          </div>
        </div>
        <div>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend3">

              <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>

            </span>
            <input
              name="password"
              placeholder="Password"
              type="password"
              onChange={handleChange}
              value={signupForm.password}
              class="form-control"
            />
          </div>
        </div>
        <p className="error">{error.password}</p>
        <div>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend3">

              <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>

            </span>
            <input
              name="confirm_password"
              placeholder="Confirm Password"
              type="password"
              onChange={handleChange}
              value={signupForm.confirm_password}
              class="form-control"
            />
            <p className="error">{error.confirm_password}</p>
          </div>
        </div>
        <div>
          <button class="sign_btn" style={{ width: "100%" }} type="submit">
            Login
          </button>
        </div>
      </form>

      <ToastContainer />


    </div>
  );
}

export default Singup;