import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import "../style/Auth.css";
//import { useNavigate } from "react-router-dom";
import {
  faAt, faKey

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Singin() {
  //   const history = useNavigate();
  //   const [show, setShowpasword] = useState(false);
  //   const [email, setEmail] = useState();
  //   const [password, setPassword] = useState();
  //   const [load, setLoad] = useState(false);

  const [signinForm, setForm] = React.useState({
    email: "",
    password: "",
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
    var config = {
      method: 'post',
      url: 'https://touristbackend.herokuapp.com/api/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: signinForm
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    toast(" signin sucessfully ");

  }

  return (
    <div className="signin">
      <form style={{ width: "100%" }}>
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
              aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
              required
            />
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
              placeholder="Password"
              type="pasword"
              onChange={handleChange}
              value={signinForm.password}
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
        <div class="col-md-8 check">
          <div class="form-check">
            <input
              type="checkbox"
              value=""
              required
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
            Singin
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Singin;
