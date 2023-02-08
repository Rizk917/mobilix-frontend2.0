import axios from "axios";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";


const ContactUs = () => {
  const form = useRef();

  const [myData, setmyData] = useState({
    fullName: "",
    mail: "",
    Message: "",
  });
  const { fullName, email, Message } = myData;
  // console.log(myData.message);

  const onChange = (e) => {
    setmyData({ ...myData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_x11nz0r",
        "template_r8t4mxk",
        form.current,
        "-G-4mQwUEY5HmF9QG"
      );

      console.log("email sent successfully");
      form.current.reset();
    } catch (error) {
      console.log("email sending failed", error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newContact = {
      fullName: fullName,
      mail: email,
      Message: Message,
    };
    await sendEmail(e);

    // await axios.post("http://localhost:5000/contactus", newContact);
    console.log(newContact);
    // const config = {
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // };
    try {
      await axios.post("http://localhost:5000/contactus", newContact);
      setmyData({
        fullName: "",
        mail: "",
        Message: "",
      });
    } catch (err) {
      console.log("error", err.response.data);
    }
  };

  return (
    <>
    <form className="contact-form"   ref={form} onSubmit={onSubmit}>
      <input
        type="text"
        name="fullName"
        value={fullName}
        placeholder="Enter your Full name"
        onChange={onChange}
        required
      />
    
      <input
        type="text"
        name="email"
        value={email}
        placeholder="Enter your email "
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="Message"
        value={Message}
        placeholder="Enter your Message"
        onChange={onChange}
        required
      />


      <br />
      <button  type="submit" onClick={onSubmit}>
       submit
      </button>
    </form>
    </>);
};

export default ContactUs;