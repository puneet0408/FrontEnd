import React, { useState,useEffect} from "react";
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
    }))
    setError(validate(signinForm));
  }
   
  function handleSubmit(event) {
    event.preventDefault();
  
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
  
 
 
 
  return (
    <div className="resetform" >
    <div className=" formCont" >
    <h1 style={{color:"#000"}} > Reset Password </h1>
    <div className=" box" >
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
         
            class="sign_btn btn resetBtn"
            style={{ width: "100%" }}
            type="submit"
          >
            Reset Password
          </button>
        </form>
        </div>
    </div>
    </div>
  );
};

export default ResetPassword;
