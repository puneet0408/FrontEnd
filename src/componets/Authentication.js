import React, { useState } from "react";
import Singin from "./Singin";
import Singup from "./Singup";
import "../style/Auth.css";
// import axios from 'axios'
function Authentication() {
  const [show, setShow] = useState(true);

  return (
    <div className="auth ">
      <div className="authBody box ">
        <div className="authBodySwapButton">
          <button
            onClick={() => setShow(true)}
            className={`${show ? "" : "activeSign"}`}
          >
            Login
          </button>
          <button
            onClick={() => setShow(false)}
            className={`${show ? "activeSign" : ""}`}
          >
            Register
          </button>
        </div>
        <div>
          {show ? <Singin /> : <Singup 
          onNevigate={() => setShow(false)}
           />}
        </div>
      </div>
    </div>
  );
}

export default Authentication;
