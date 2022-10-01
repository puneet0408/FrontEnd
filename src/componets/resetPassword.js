import React, { useState,useEffect } from "react";
import LoginForm from "./Singin";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/Auth.css";
 

const ResetPassword = () => {

  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
   

  const [signinForm, setForm] = React.useState({
    password: "",
    confirm_password: "",
  });

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
  }

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
    }
  }, [error, isSubmit]);
  const validate = (values) => {
    const error = {};
   
    if (!values.password) {
      error.password = "password is required";
    }else if (values.password !== values.confirm_password) {
      error.confirm_password = "password did'nt match";
    }
    else{
      setIsSubmit(true)
    }  
    return error;
  };

  const [backtoLogin, setbacktoLogin] = useState(false);

  const againLoginForm = () => {
    if(isSubmit ){
    setbacktoLogin((prev) => !prev);
    }
  };

  return (
    <div>
      {backtoLogin ? (
        <LoginForm />
      ) : (
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <div className="IPWithError">
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
            </div>
            <p className="error">{error.password}</p>
          </div>
          <div className="IPWithError">
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend3">
                <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
              </span>
              <input
                name="confirm_password"
                placeholder=" confirm_Password"
                type="password"
                onChange={handleChange}
                value={signinForm.confirm_password}
                class="form-control"
                
              />
            </div>
            <p className="error">{error.confirm_password}</p>
          </div>
          <div class="col-md-8 check">
            <div></div>
          </div>
          <button
            onClick={againLoginForm}
            class="sign_btn btn resetBtn"
            style={{ width: "100%" }}
            type="submit"
          >
            Reset Password
          </button>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
