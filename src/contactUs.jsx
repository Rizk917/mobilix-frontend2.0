import axios from "axios";
import React, { useState } from "react";

const ContactUs = () => {
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

  const onSubmit = async (e) => {
    e.preventDefault();
    const newContact = {
      fullName: fullName,
      mail: email,
      Message: Message,
    };
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
    <form className="contact-form">
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
