import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserDetails.css';

const UserDetails = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7066/api/PersonalInformation')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="user-details-container">
      <h2>User Details</h2>
      <div className="card-deck">
        {users.map(user => (
          <div className="card" key={user.id}>
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text"><strong>Date of Birth:</strong> {new Date(user.dateOfBirth).toLocaleDateString()}</p>
              <p className="card-text"><strong>Residential Address:</strong> {user.residentialAddress}</p>
              <p className="card-text"><strong>Permanent Address:</strong> {user.permanentAddress}</p>
              <p className="card-text"><strong>Phone Number:</strong> {user.phoneNumber}</p>
              <p className="card-text"><strong>Email Address:</strong> {user.emailAddress}</p>
              <p className="card-text"><strong>Marital Status:</strong> {user.maritalStatus}</p>
              <p className="card-text"><strong>Gender:</strong> {user.gender}</p>
              <p className="card-text"><strong>Occupation:</strong> {user.occupation}</p>
              <p className="card-text"><strong>Aadhar Card Number:</strong> {user.aadharCardNumber}</p>
              <p className="card-text"><strong>PAN Number:</strong> {user.panNumber}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
