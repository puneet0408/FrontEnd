import { useState, useContext } from "react";
import "../style/Auth.css";
import ResetPassword from "./resetPassword";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loginForm, submit, Change, ShowerrorMessage } from "./Singin";

const ForgetForm = () => {
  const [resetPassword, setResetPassword] = useState(false);

  const showResetPassword = () => {
    setResetPassword((prev) => !prev);
  };

  const login = useContext(loginForm);
  const submitForm = useContext(submit);
  const ChangeForm = useContext(Change);
  const showMsg = useContext(ShowerrorMessage);
  console.log(resetPassword);

  return (
    <div className="forgetform">
      {/* <ResetPassword/> */}
      <div>
        {resetPassword ? (
          <ResetPassword />
        ) : (
          <form onSubmit={submitForm} style={{ width: "100%" }}>
            <div class="">
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend3">
                  <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                </span>
                <input
                  name="email"
                  placeholder="email"
                  onChange={ChangeForm}
                  value={login.email}
                  type="email"
                  class="form-control"
                />
                <p className="error">{showMsg}</p>
              </div>
            </div>
            <div></div>

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
