import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DeskFooter from './deskfooter';
import DeskHeader from './deskheader';

function PhoneDetails() {
  const [open, setOpen] = useState(true);
  const { id } = useParams();
  const [phone, setPhone] = useState({});

  useEffect(() => {
    loadPhone();
  }, []);

  const loadPhone = async () => {
    const result = await axios.get(`http://localhost:5000/phones/${id}`);
    setPhone(result.data);
  };

  return (
    <div className="phone-details">
      <DeskHeader open={open} setOpen={setOpen} />
      <div className='details-div'>
      <img src={`http://localhost:5000/${phone.image}`} alt={phone.phoneModel} />
      <div className='inform'>
      <h3>{phone.phoneModel}</h3>
      <h3>{phone.vendor}</h3>
      <p>description: {phone.description}</p>
      <p>Camera: {phone.camera}</p>
      <p>body: {phone.body}</p>
      <p>Release date: {phone.prodDate}</p>
      </div>
      </div>
      <DeskFooter setOpen={setOpen} />
    </div>
  );
}

export default PhoneDetails;
