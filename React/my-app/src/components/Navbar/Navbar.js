import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">User Management</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/user-details">User Details</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/update-phone-number">Update Phone Number</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/delete-user">Delete User</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-user">Add New User</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
