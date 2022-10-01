import React, { useEffect, useState, useContext, createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import ForgetForm from "./forgetForm";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../style/Auth.css";
import { apiContext } from "../ContextApi/ContextProvider";
import { faAt, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Change = createContext();
const submit = createContext();
const loginForm = createContext();
const Allerror = createContext();
const ShowerrorMessage = createContext();

function Singin() {
  
  let { logedin, setLogedin } = useContext(apiContext);
  const navigate = useNavigate();
  const [signinForm, setForm] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [forgetPassword, setForgetPassword] = useState(false);



  const showForgetForm = () => {
    setForgetPassword((prev) => !prev);
  };



  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
  
    setError(validate(signinForm));

  
      var config = {
        method: "post",
        url: "https://touristbackend.herokuapp.com/api/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: signinForm,
      };
      if(signinForm.password.length>=3)
      {
        axios(config)
        .then(function (response) {
          console.log(response.data.id);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("name", response.data.name);
         if(response.data?.role == 0)
         {
              localStorage.setItem('user',true)
         }
         if(response.data?.role == 1)
         {
              localStorage.setItem('admin',true)
         }
          setLogedin(true);
          setIsSubmit(true);
          navigate("/");
        })
        .catch(function (error) {
          setErrorMessage(error.response.data.error);
        });
      }else
      {
        setErrorMessage("Please provide a valid password");
        return;
      }
     
  }

  console.log(errorMessage.message);

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      // toast("signin sucessfully");
    }
  }, [error]);
  const validate = (values) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      error.email = "email is required";
    } else if (!regex.test(values.email)) {
      error.email = "this is not a valid format";
    } else if (!values.password) {
      error.password = "password is required";
    }
    return error;
  };



  return (
    <div className="signin">
      {forgetPassword ? (
        <submit.Provider value={handleSubmit} >
          <loginForm.Provider value={signinForm} >
            <Allerror.Provider value={error} >
              <ShowerrorMessage.Provider value={errorMessage}>
                <Change.Provider>
                  <ForgetForm />
                </Change.Provider>
              </ShowerrorMessage.Provider>
            </Allerror.Provider>
          </loginForm.Provider>
        </submit.Provider>
      ) : (
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <div class="">
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend3">
                <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
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
                <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
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
              <p className="error">{errorMessage}</p>
            </div>
          </div>
          <div class="col-md-8 check">
            <div>
              <p className="forgetPassword" onClick={showForgetForm}>
                forget password
              </p>{" "}
            </div>
          </div>

          <div class="mt-2 ">
            <button
              class="sign_btn btn"
              style={{ width: "100%" }}
              type="submit"
            >
              login
            </button>
          </div>
        </form>
      )}

      <ToastContainer />
    </div>
  );
}

export default Singin;
export  {loginForm , submit , Change,ShowerrorMessage,Allerror};
