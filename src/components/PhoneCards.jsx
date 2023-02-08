
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function PhonePage(props) {
    const [phones, setPhones] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        loadphones();
    }, []);

    const loadphones = async () => {
        const result = await axios.get("http://localhost:5000/phones");
        const sortedphones = result.data.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
        setPhones(sortedphones);
    }

    return (
        <div className="hiii" onClick={() => props.setOpen(true)}>
            <h4>Your First Phones Page</h4>
            <div className="grid-container">
                {phones.map(phone => (
                    <div className="grid-item" key={phone.id}>
                        <h3>{phone.phoneModel}</h3>
                        <img src={`http://localhost:5000/${phone.image}`} alt={phone.phoneModels} />

                    </div>
                ))}
            </div>
        </div>
    );
}

export default PhonePage;

