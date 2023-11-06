// Registration.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for routing

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleRegistration = () => {
    // Create an object with user data
    const userData = {
      email,
      password,
      firstname,
      lastname,
    };

    // Make the API request
    axios
      .post('http://127.0.0.1:8000/api/auth/register', userData)
      .then((response) => {
        // Registration successful
        setRegistrationStatus('User registered successfully');
      })
      .catch((error) => {
        // Registration error
        setRegistrationStatus('error');
      });
  }

  return (
    <div className="container">
      <div className="form">
        <h2>Registration</h2>
        {registrationStatus === 'User registered successfully' ? (
          <div>
            <p>Registration successful! You can now log in.</p>
            <Link to="/login">Go to Login</Link> {/* Use Link for navigation */}
          </div>
        ) : registrationStatus === 'error' ? (
          <p>Registration failed. Please try again.</p>
        ) : (
          <>
            <input type="text" className="input" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
            <input type="text" className="input" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
            <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="button" onClick={handleRegistration}>Register</button>
          </>
        )}
        <p className="mt-3">
          Have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Registration;
