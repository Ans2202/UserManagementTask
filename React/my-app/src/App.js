import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import UserDetails from './components/UserDetails/UserDetails';
import UpdatePhoneNumber from './components/UpdatePhoneNumber/UpdatePhoneNumber';
import DeleteUser from './components/DeleteUser/DeleteUser';
import AddUser from './components/AddUser/AddUser';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/update-phone-number" element={<UpdatePhoneNumber />} />
          <Route path="/delete-user" element={<DeleteUser />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
