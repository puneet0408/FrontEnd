import React from "react";
//import axios from "axios";
import "../style/Auth.css";
//import { useNavigate } from "react-router-dom";

function Singin() {
//   const history = useNavigate();
//   const [show, setShowpasword] = useState(false);
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [load, setLoad] = useState(false);

  return (
    <div className="signin">
      <form style={{ width: "100%" }}>
        <div class="">
          <label for="validationServerUsername" class="form-label">
            Username
          </label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend3">
              @
            </span>
            <input
              placeholder="Username"
              type="text"
              class="form-control"
              aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
              required
            />
            <div id="validationServerUsernameFeedback" class="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>
        <div>
          <label for="validationServerUsername" class="form-label"></label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend3">
              @
            </span>
            <input
              placeholder="Password"
              type="pasword"
              class="form-control"
              id="validationServerUsername"
              aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
              required
            />
            <div
              id="validationServerUsernameFeedback"
              class="invalid-feedback"
            ></div>
                 <input
              placeholder="Confirm-Password"
              type="pasword"
              class="form-control"
              id="validationServerUsername"
              aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
              required
            />
          </div>
        </div>
        <div class="col-md-8 check">
          <div class="form-check">
            <input
              class="form-check-input mt-4 mb-1"
              type="checkbox"
              value=""
              required
            />
          </div>
          <span className="mt-3 ms-3">Login As Admin</span>
        </div>
        <div class="mt-2 ">
          <button
            class="btn btn-primary"
            style={{ width: "100%" }}
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Singin;
