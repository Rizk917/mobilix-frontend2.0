import axios from "axios";
import React, { useState } from "react";
import Home from "./main";

const LogIn = () => {
    const [myData, setmyData] = useState({
        fullName: "",
        mail: "",
        Message: "",
    });
    const { fullName, email, Message } = myData;

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

    const [value, setValue, error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!fullName) {
            setError("Full Name is required");
        } else if (!email) {
            setError("Email is required");
        } else if (!Message) {
            setError("Message is required");
        } else {
            setError("");
        }
    };

    return (
        <div className="cnt-wrapper">
            <div className="cntct-us" id="cntc-us">
                <div className="div">
                    <h1 className="H1">Log in</h1>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <p className="chat">Let’s Talk, How can we help?</p>
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
                    <input
                        type="password"
                        name="fullName"
                        value={fullName}
                        placeholder="Enter your password"
                        onChange={onChange}
                    />
                    {error === "Full Name is required" && (
                        <p className="errorr">{error}</p>
                    )}
                    <br />
                    <a href="/" className="form-sbmt" type="submit">Submit</a>
                </form>
                <h3 className="help">Send us a <br></br>message by filling <br></br>up this form</h3>
                <div className="cntct-bck">
                    <a href="/">Back</a>
                </div>
            </div>
        </div>
    );
};

export default LogIn;