import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const handleSubmit = async () => {
    fetch(
      "https://beforward-f34bf-default-rtdb.firebaseio.com/contactus.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          phonenumber,
        }),
      }
    );
    alert("Your Information Send successfully");
    setName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };
  return (
    <>
      <div className="contact" id="contactus">
        <div className="max-w-6xl mx-auto px-2 sm:px-6">
          <h4>
            Love to hear from you,<br></br>Get in touch
          </h4>
          <div className="wrap">
            <div className="left">
              <label>Your Name</label>
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="right">
              <label>Your Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
          <div className="wrap">
            <div className="left">
              <label>Your Contact No</label>
              <input
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="text"
                placeholder="Contact No"
              />
            </div>
            <div className="right">
              <label>What You are Intrested</label>
              <select className="form-select">
                <option className="none">Here you Select</option>
                <option value="design">Design</option>
                <option value="software">Software</option>
                <option value="app">App</option>
                <option value="website">Website</option>
                <option value="consultancy">Consultancy</option>
                <option value="leaglities">Legalities</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>
          </div>
          <div className="wrap2">
            <label>Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Let tell us know your project about"
              type="text"
            />
          </div>
          <button onClick={handleSubmit}>Just send</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
