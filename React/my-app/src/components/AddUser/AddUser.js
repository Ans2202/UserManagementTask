import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddUser = () => {
    const [user, setUser] = useState({
        name: '',
        dateOfBirth: '',
        residentialAddress: '',
        permanentAddress: '',
        phoneNumber: '',
        emailAddress: '',
        maritalStatus: '',
        gender: '',
        occupation: '',
        aadharCardNumber: '',
        panNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://localhost:7066/api/PersonalInformation', user);
            alert('User added successfully');
            setUser({
                name: '',
                dateOfBirth: '',
                residentialAddress: '',
                permanentAddress: '',
                phoneNumber: '',
                emailAddress: '',
                maritalStatus: '',
                gender: '',
                occupation: '',
                aadharCardNumber: '',
                panNumber: ''
            });
        } catch (error) {
            console.error('There was an error adding the user!', error);
            alert('Error adding user');
        }
    };

    return (
        <Container>
            <h2 className="mt-4">Add New User</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formDateOfBirth">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                        type="date"
                        name="dateOfBirth"
                        value={user.dateOfBirth}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formResidentialAddress">
                    <Form.Label>Residential Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter residential address"
                        name="residentialAddress"
                        value={user.residentialAddress}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formPermanentAddress">
                    <Form.Label>Permanent Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter permanent address"
                        name="permanentAddress"
                        value={user.permanentAddress}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter phone number"
                        name="phoneNumber"
                        value={user.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formEmailAddress">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email address"
                        name="emailAddress"
                        value={user.emailAddress}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formMaritalStatus">
                    <Form.Label>Marital Status</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter marital status"
                        name="maritalStatus"
                        value={user.maritalStatus}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter gender"
                        name="gender"
                        value={user.gender}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formOccupation">
                    <Form.Label>Occupation</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter occupation"
                        name="occupation"
                        value={user.occupation}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formAadharCardNumber">
                    <Form.Label>Aadhar Card Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Aadhar card number"
                        name="aadharCardNumber"
                        value={user.aadharCardNumber}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formPanNumber">
                    <Form.Label>PAN Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter PAN number"
                        name="panNumber"
                        value={user.panNumber}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add User
                </Button>
            </Form>
        </Container>
    );
};

export default AddUser;
