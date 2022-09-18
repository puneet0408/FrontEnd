import React from "react";
import "../style/contact.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  faSignature,faAt,faPhone,faComment
  
   } from "@fortawesome/free-solid-svg-icons";
   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  const [form, setForm] = React.useState({
    name: "",
    phoneNo:"",
    email: "",
    comments: "",
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
    console.log(form);
    toast("data submit sucessfully")
  
  }

  return (
    <div className="contactPage">
      <h1> contact Us </h1>
      <form onSubmit={handleSubmit} className="contactForm">
        <h3 class="inTouch">get in touch </h3>

        <div className="contactFields" >
        <span>
        <FontAwesomeIcon
        className="contactIcon"
          icon={faSignature}
        ></FontAwesomeIcon>
        </span>
          <input
            className="name"
            type="text"
            placeholder="name"
            onChange={handleChange}
            value={form.name}
            name="name"
            required
          />
          </div>
         
         <div  className="contactFields" >
         <span>
        <FontAwesomeIcon
        className="contactIcon"
          icon={faAt}
        ></FontAwesomeIcon>
        </span>
          <input
            className="cont"
            type="email"
            placeholder="enter your email"
            onChange={handleChange}
            name="email"
            value={form.email}
            required
          />
          </div>
          

          <div  className="contactFields" >
          <FontAwesomeIcon
          className="contactIcon"
          icon={faPhone}
        ></FontAwesomeIcon>
          <input
            className="cont"
            type="text"
            placeholder="Phone No"
            onChange={handleChange}
            name="phoneNo"
             minlength="1" 
              maxlength="10"
            value={form.phoneNo}
            required
          />
          </div>

          <div  className="contactFields" >
          <FontAwesomeIcon
          className="contactIcon"
          icon={faComment}
        ></FontAwesomeIcon>
        <textarea
          id
          className="Comment"
          placeholder="Enter your Qureies"
          name="comments"
          onChange={handleChange}
          value={form.comments}
          minlength="1" 
              maxlength="100"
          required
        />
        </div>
        <button className="Form_button">
          submit
        </button>
      </form>
      <ToastContainer/>
    </div>
  );
}
