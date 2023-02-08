import axios from "axios";
import React, { useState } from "react";

const LgiPop = () => {
    // const [formData, setFormData] = useState({
    //     email: "",
    //     password: ""
    // });


    // const { email, password } = formData;

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    
const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/dashboard'
		} else {
			alert('Please check your username and password')
		}
	}


    const [error, setError] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setError("Email is required");
        } else if (!password) {
            setError("Password is required");
        } else {
            setError("");
            try {
                const newUser = { email, password };
                await axios.post("YOUR_API_ENDPOINT_FOR_LOGIN", newUser);
                // Handle successful login, e.g. by storing the token in local storage
                // ...
            } catch (err) {
                console.error(err.response.data);
                // Handle login error, e.g. by displaying an error message
                // ...
            }
        }
    };

    return (
        <div className="pop-up-login">
            <div className="rel">
                <div className="circle-lg-1"></div>
                <div className="circle-lg-2"></div>
                <form className="login-form" onSubmit={handleSubmit}>
                    {error === "Email is required" && <p className="errorr">{error}</p>}
                    <input
                        type="text"
                        name="email"
                        value={email}
                        placeholder="Your email"
                        // onChange={handleChange}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error === "Password is required" && <p className="error">{error}</p>}
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Your password"
                        // onChange={handleChange}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="formlg-sbmt" value="login" type="submit">Submit</button>
                </form>
                <div className="arrow-back">
                    <a href="/" onClick={drop}></a>
                </div>
            </div>
        </div>
    );
};

export default LgiPop;


function drop() {
    let change = document.querySelector(".pop-up-login");
    change.classList.toggle("pop-up-login-show");
}