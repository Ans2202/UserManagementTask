import React, { useState } from 'react';
import axios from 'axios';
import './DeleteUser.css';

const DeleteUser = () => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = () => {
    axios.delete(`https://localhost:7066/api/PersonalInformation/${id}`)
      .then(response => setMessage('User deleted successfully'))
      .catch(error => setMessage('Error deleting user'));
  };

  return (
    <div className="delete-user-container">
      <h2>Delete User</h2>
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
      <button className="btn btn-danger" onClick={handleDelete}>Delete User</button>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
};

export default DeleteUser;
