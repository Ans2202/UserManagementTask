import React, { useState } from 'react';
import axios from 'axios';
import './UpdatePhoneNumber.css';

const UpdatePhoneNumber = () => {
  const [id, setId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = () => {
    axios.put(`https://localhost:7066/api/PersonalInformation/${id}/phonenumber`, phoneNumber)
      .then(response => setMessage(response.data))
      .catch(error => setMessage('Error updating phone number'));
  };

  return (
    <div className="update-phone-number-container">
      <h2>Update Phone Number</h2>
      <div className="form-group">
        <label htmlFor="id">User ID:</label>
        <input
          type="number"
          className="form-control"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">New Phone Number:</label>
        <input
          type="text"
          className="form-control"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleUpdate}>Update Phone Number</button>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
};

export default UpdatePhoneNumber;
