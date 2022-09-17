import React from "react";
import "../style/contact.css";
 

export default function Contact() {
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    address: "",
    phoneNo: "",
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
  }

 

  return (
    <div className="contactPage">
      <h1> contact Us </h1>
      <form onSubmit={handleSubmit} className="contactForm">
        <h3 class="inTouch">get in touch </h3>

        <div className="Name">
          <input
            className="name"
            type="text"
            placeholder="firstName"
            onChange={handleChange}
            name="firstName"
            value={form.firstName}
            required
          />
          <input
            className="name "
            type="text"
            placeholder="lastName"
            onChange={handleChange}
            name="lastName"
            value={form.lastName}
          />
        </div>
        <div className="Contact">
          <input
            className="cont"
            type="email"
            placeholder="enter your email"
            onChange={handleChange}
            name="userEmail"
            value={form.email}
            required
          />
          <input
            className="cont"
            type="text"
            placeholder="Phone No"
            onChange={handleChange}
            name="phoneNo"
            value={form.phoneNo}
            required
          />
        </div>
        <input
          className="address"
          type="text"
          placeholder="Address"
          onChange={handleChange}
          name="address"
          value={form.address}
        />
        <textarea
          id
          className="Comment"
          placeholder="Enter your Qureies"
          name="comments"
          onChange={handleChange}
          value={form.comments}
          required
        />
        <button className="Form_button">
          submit
        </button>
      </form>
    </div>
  );
}
