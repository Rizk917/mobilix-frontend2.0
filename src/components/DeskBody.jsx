import React, { useState, useEffect } from "react";
import axios from "axios";

function DeskBody(props) {
  //get phones
  const [firstPhone, setFirstPhone] = useState({});
  const [secondPhone, setSecondPhone] = useState({});

  useEffect(() => {
    loadPhones();
  }, []);

  const loadPhones = async () => {
    const result = await axios.get("http://localhost:5000/phones");
    const sortedphones = result.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setFirstPhone(sortedphones[0]);
    setSecondPhone(sortedphones[1]);
  };

  return (
    <div className="main-home" onClick={() => props.setOpen(true)}>
      <h1>
        Our latest <br></br>updates
      </h1>
      <div className="updates">
        <div className="item-1">
        <img className="item-1-i" src={`http://localhost:5000/${firstPhone.image}`} alt={firstPhone.phoneModels} />
          <a href="#">
            <div className="itm-1-after">
              <h3>Description:</h3>
              <br></br>
              <p>
                {firstPhone.phoneModel + ":"}
                <br /> {"Device body: "+secondPhone.body}
                <br /> {"Device vendor: "+secondPhone.vendor}
                <br /> {"Device camera: "+secondPhone.camera}
                <br /> {"Device memory: "+secondPhone.memory}
                <br /> {"Device display: "+secondPhone.display}
              </p>
            </div>
          </a>
        </div>
        <div className="item-2">
        <img className="item-1-i" src={`http://localhost:5000/${secondPhone.image}`} alt={secondPhone.phoneModels} />
          <a href="#">
            <div className="itm-1-after">
              <h3>Description:</h3>
              <br></br>
              <p>
              {firstPhone.phoneModel + ":"}
                <br /> {"Device body: "+firstPhone.body}
                <br /> {"Device vendor: "+firstPhone.vendor}
                <br /> {"Device camera: "+firstPhone.camera}
                <br /> {"Device memory: "+firstPhone.memory}
                <br /> {"Device display: "+firstPhone.display}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DeskBody;
