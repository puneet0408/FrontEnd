import axios from 'axios'
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  faSignature, faAt, faPhone, faLocationDot, faKey

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { singUpApi } from "../BackendApi/auth";

function Singup() {



  const [signupForm, setForm] = React.useState({
    name: "",
    email: "",
    number: "",
    address: "",
    password: "",
    confirm_password: ""
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
        data : data
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

  return (
    <div className="signup">
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <div>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend3">
              <FontAwesomeIcon
                icon={faSignature}
              ></FontAwesomeIcon>
            </span>
            <input
              name="name"
              placeholder="Full Name"
              type="text"
              class="form-control"
              onChange={handleChange}
              value={signupForm.name}
              aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
              required
            />

          </div>
        </div>
        <div>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend3">
              <FontAwesomeIcon
                icon={faAt}
              ></FontAwesomeIcon>
            </span>
            <input
              name="email"
              placeholder="email"
              type="email"
              onChange={handleChange}
              value={signupForm.email}
              class="form-control"
              aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
              required
            />
            <div
              id="validationServerUsernameFeedback"
              class="invalid-feedback"
            ></div>
          </div>
        </div>
        <div>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend3">
              <FontAwesomeIcon
                icon={faPhone}
              ></FontAwesomeIcon>
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
              aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
              required
            />
            <div
              id="validationServerUsernameFeedback"
              class="invalid-feedback"
            ></div>
          </div>
        </div>
        <div>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend3">
              <FontAwesomeIcon
                icon={faLocationDot}
              ></FontAwesomeIcon>
            </span>
            <input
              name="address"
              placeholder="address"
              onChange={handleChange}
              value={signupForm.address}
              type="text"
              class="form-control"
              id="validationServerUsername"
              aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
              required
            />
            <div
              id="validationServerUsernameFeedback"
              class="invalid-feedback"
            ></div>
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
              value={signupForm.password}
              class="form-control"
              id="validationServerUsername"
              aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
              required
            />
            <div
              id="validationServerUsernameFeedback"
              class="invalid-feedback"
            ></div>
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
              name="confirm_password"
              placeholder="Confirm Password"
              type="password"
              onChange={handleChange}
              value={signupForm.confirm_password}
              class="form-control"
              id="validationServerUsername"
              aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
              required
            />
            <div
              id="validationServerUsernameFeedback"
              class="invalid-feedback"
            ></div>
          </div>
        </div>
        <div class="col-md-8">
          {/* <div class="form-check d-flex">
                        <input class="form-check-input mt-4 mb-1" type="checkbox" value="" required />
                        <span className='mt-3 ms-3 text-black'>
                            Login As Admin
                        </span>
                    </div> */}
        </div>
        <div class="mt-3">
          <button
            class="sign_btn"
            style={{ width: "100%" }}
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      <ToastContainer />

    </div>
  );
}

export default Singup;
