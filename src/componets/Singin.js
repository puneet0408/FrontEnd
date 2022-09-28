import React, { useEffect, useState,useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "../style/Auth.css";
import {apiContext} from "../ContextApi/ContextProvider"
import {
  faAt, faKey

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { baseUrl } from "../BackendApi/auth";

function Singin() {
  let {logedin,setLogedin} = useContext(apiContext);
  const navigate = useNavigate();
  const [signinForm, setForm] = React.useState({
    email: "",
    password: "",
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
    // setIsSubmit(true);
    setError(validate(signinForm));
    var config = {
      method: 'post',
      url: baseUrl+'/login',
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true,
      data: signinForm
    };
    axios(config)
      .then(function (response) {
        console.log(response.data.id);
        localStorage.setItem("id",response.data.id);
        localStorage.setItem("name",response.data.name);
        localStorage.setItem("role",response.data.role);
        setLogedin(true);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });


  }


  useEffect(() => {
    console.log(error);
    if (Object.keys(error).length === 0 && isSubmit) {
      toast("signin sucessfully")
    }
  }, [error]);
  const validate = (values) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      error.email = "email is required";
    } else if (!regex.test(values.email)) {
      error.email = "this is not a valid format";
    }

    if (!(values.password)) {
      error.password = "password is required";
    }
    return error;
  };

  return (

    <div className="signin">
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <div class="">
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend3">
              <FontAwesomeIcon
                icon={faAt}
              ></FontAwesomeIcon>
            </span>
            <input
              name="email"
              placeholder="email"
              onChange={handleChange}
              value={signinForm.email}
              type="email"
              class="form-control"
            />
            <p className="error">{error.email}</p>
          </div>
        </div>
        <div>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend3">
              <FontAwesomeIcon
                icon={faKey}
              ></FontAwesomeIcon>
            </span>
            <input
              name="password"
              placeholder="Password"
              type="password"
              onChange={handleChange}
              value={signinForm.password}
              class="form-control"
            />
            <p className="error">{error.password}</p>
          </div>
        </div>
        <div class="col-md-8 check">
          <div class="form-check">
            <input
              type="checkbox"
              value=""
            />
          </div>
          <span className="mt-3 ms-3">Login As Admin</span>
        </div>
        <div class="mt-2 ">
          <button
            class="sign_btn"
            style={{ width: "100%" }}
            type="submit"
            onSubmit={handleSubmit}
          >
            login
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
};


export default Singin;
