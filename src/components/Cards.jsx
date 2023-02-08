import React, { useState, useEffect } from "react";
import axios from "axios";

import logo from "../images/logo_transparent.png";
function Cards(props) {
  //get phones
  const [firstPhone, setFirstPhone] = useState({});
  const [secondPhone, setSecondPhone] = useState({});

  useEffect(() => {
    loadPhones();
  }, []);

  const loadPhones = async () => {
    const result = await axios.get("http://localhost:5000/phones");
    setFirstPhone(result.data[0]);
    setSecondPhone(result.data[1]);
  };

  return (
    <div className="scroll-container" onClick={() => props.setShow(false)}>
      <div className=" card-1 cards">
        <img src={ `http://localhost:5000/${firstPhone.image}`} className="logo" alt="logo"></img>
        <h5> {firstPhone.phoneModel + ":"}</h5>
        <p className="p">
          <br /> {"Device body: " + secondPhone.body}
          <br /> {"Device vendor: " + secondPhone.vendor}
          <br /> {"Device camera: " + secondPhone.camera}
          <br /> {"Device memory: " + secondPhone.memory}
          <br /> {"Device display: " + secondPhone.display}
        </p>
      </div>
      <div className=" card-1 cards">
        <img src={logo} className="logo" alt="logo"></img>
        <h5>iPhone 13 Pro max</h5>
        <p className="p">
          ef attribute requires a valid value to be accessible. Provide a valid
        </p>
      </div>
      <div className=" card-1 cards">
        <img src={logo} className="logo" alt="logo"></img>
        <h5>iPhone 13 Pro max</h5>
        <p className="p">
          ef attribute requires a valid value to be accessible. Provide a valid
        </p>
      </div>
      <div className=" card-1 cards">
        <img src={logo} className="logo" alt="logo"></img>
        <h5>iPhone 13 Pro max</h5>
        <p className="p">
          ef attribute requires a valid value to be accessible. Provide a valid
        </p>
      </div>
      <div className=" card-1 cards">
        <img src={logo} className="logo" alt="logo"></img>
        <h5>iPhone 13 Pro max</h5>
        <p className="p">
          ef attribute requires a valid value to be accessible. Provide a valid
        </p>
      </div>
      <div className=" card-1 cards">
        <img src={logo} className="logo" alt="logo"></img>
        <h5>iPhone 13 Pro max</h5>
        <p className="p">
          ef attribute requires a valid value to be accessible. Provide a valid
        </p>
      </div>
      <div className=" card-1 cards">
        <img src={logo} className="logo" alt="logo"></img>
        <h5>iPhone 13 Pro max</h5>
        <p className="p">
          ef attribute requires a valid value to be accessible. Provide a valid
        </p>
      </div>
      <div className=" card-1 cards">
        <img src={logo} className="logo" alt="logo"></img>
        <h5>iPhone 13 Pro max</h5>
        <p className="p">
          ef attribute requires a valid value to be accessible. Provide a valid
        </p>
      </div>
      <div className=" card-1 cards">
        <img src={logo} className="logo" alt="logo"></img>
        <h5>iPhone 13 Pro max</h5>
        <p className="p">
          ef attribute requires a valid value to be accessible. Provide a valid
        </p>
      </div>
    </div>
  );
}
export default Cards;
