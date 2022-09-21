import React, { useState } from "react";
import Singin from "./Singin";
import Singup from "./Singup";
import "../style/Auth.css";
// import axios from 'axios'
function Authentication() {
  const [show, shetShow] = useState(true);

  return (
    <div className="auth ">
      <div className="authBody box ">
        <div className="authBodySwapButton">
          <button
            onClick={() => shetShow(true)}
            className={`${show ? "" : "activeSign"}`}
          >
            Login
          </button>
          <button
            onClick={() => shetShow(false)}
            className={`${show ? "activeSign" : ""}`}
          >
            Register
          </button>
        </div>
        <div>
          {show ? <Singin /> : <Singup 
          onNevigate={() => shetShow(false)}
           />}
        </div>
      </div>
    </div>
  );
}

export default Authentication;
