import React, { useState, useEffect } from "react";
import "../style/Auth.css";
import ResetPassword from "./resetPassword";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ForgetForm = () => {
  const [signinForm, setForm] = React.useState({
    email: "",
  });
  const [resetPassword, setResetPassword] = useState(false);
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);



  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  const showResetPassword = () => {
    if(isSubmit ){
    setResetPassword((prev) => !prev);
    }

  };

  function handleSubmit(event) {
    event.preventDefault();
    setError(validate(signinForm));
  }

  const validate = (values) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      error.email = "email is required";
    } else if (!regex.test(values.email)) {
      error.email = "this is not a valid format";
    }
    else{
      setIsSubmit(true);
    }

    return error;
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
    }
  }, [error, isSubmit]);

  return (
    <div className="forgetform">
      <div>
        {resetPassword ? (
          <ResetPassword />
        ) : (
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <div className="IPWithError">
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
              </div>
            </div>
            <p className="error" >{error.email}</p>
            <div class="mt-2 ">
              <button
                onClick={showResetPassword}
                class="sign_btn btn  forgetBtn"
                style={{ width: "100%" }}
                type="submit"
              >
                forget Password
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgetForm;
