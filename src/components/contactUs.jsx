import axios from "axios";
import React, { useState } from "react";

const ContactUs = (props) => {
  const [myData, setmyData] = useState({
    fullName: "",
    email: "",
    Message: "",
  });
  const { fullName, email, Message } = myData;

  const onChange = (e) => {
    setmyData({ ...myData, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!fullName) {
      setError("Full Name is required");
      return;
    }
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!Message) {
      setError("Message is required");
      return;
    }

    setError("");

    const newContact = {
      fullName: fullName,
      email: email,
      Message: Message,
    };
    try {
      await axios.post("http://localhost:5000/contactus", newContact);
      setmyData({
        fullName: "",
        email: "",
        Message: "",
      });
    } catch (err) {
      console.log("error", err.response.data);
    }
  };

  return (
    <div className="cntct-us" onClick={() => props.setOpen(true)}>
      <div className="div">
        <h1 className="H1">Contact Us</h1>
      </div>
      <form className="contact-form" onSubmit={onSubmit}>
        <p className="chat">Let’s Talk, How can we help?</p>
        <input
          type="text"
          name="fullName"
          value={fullName}
          placeholder="Enter your Full name"
          onChange={onChange}
        />
        {error === "Full Name is required" && (
          <p className="errorr">{error}</p>
        )}

        <input
          type="text"
          name="email"
          value={email}
          placeholder="Enter your email "
          onChange={onChange}
        />
        {error === "Email is required" && (
          <p className="errorr">{error}</p>
        )}

        <textarea
          type="text"
          name="Message"
          value={Message}
          placeholder="Enter your Message"
          onChange={onChange}
        />
        {error === "Message is required" && (
          <p className="errorr">{error}</p>
        )}

        <br />
        <button className="form-sbmt" type="submit">
          Submit
        </button>
      </form>
      <h3 className="help">Send us a <br></br>message by filling <br></br>up this form</h3>
      <div className="cntct-bck">
        <a href="/">Back</a>
      </div>
    </div>
  );
};

export default ContactUs;