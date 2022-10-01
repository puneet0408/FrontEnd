import React, { useState, useContext } from "react";
import LoginForm from "./Singin";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/Auth.css";
import { loginForm, submit, Change, ShowerrorMessage ,Allerror } from "./Singin";

const ResetPassword = () => {
  const login = useContext(loginForm);
  const submitForm = useContext(submit);
  const ChangeForm = useContext(Change);
  const showMsg = useContext(ShowerrorMessage);
  const error = useContext(Allerror);


  const [backtoLogin, setbacktoLogin] = useState(false);

  const againLoginForm = () => {
    setbacktoLogin((prev) => !prev);
  };

  return (
    <div>
      {backtoLogin ? (
        <LoginForm />
      ) : (
        <form onSubmit={submitForm} style={{ width: "100%" }}>
          <div>
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend3">
                <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
              </span>
              <input
                name="password"
                placeholder="Password"
                type="password"
                onChange={ChangeForm}
                value={login.password}
                class="form-control"
              />
              <p className="error">{error.password}</p>
              <p className="error">{showMsg}</p>
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
                onChange={ChangeForm}
                value={login.password}
                class="form-control"
              />
              <p className="error">{error.password}</p>
              <p className="error">{showMsg}</p>
            </div>
          </div>
          <div class="col-md-8 check">
            <div></div>
          </div>

          <div class="mt-2 ">
            <button
              onClick={againLoginForm}
              class="sign_btn btn resetBtn"
              style={{ width: "100%" }}
              type="submit"
            >
              Reset Password
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
