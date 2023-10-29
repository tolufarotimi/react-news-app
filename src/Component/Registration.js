// Registration.js
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import './styles.css'; // Import the CSS file

function Registration() {
  const { dispatch } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const handleRegistration = async () => {
    const user = { email, password, lastname, firstname };
    
    try {
      const response = await fetch('http://127.0.0.1:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // Registration was successful
        dispatch({ type: 'LOGIN', payload: { user: { email, firstname } } });
      } else {
        // Handle registration errors here
      }
    } catch (error) {
      // Handle network errors here
    }
  }

  return (
    <div className="container">
      <div className="form">
        <h2>Registration</h2>
        <input type="text" className="input" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
        <input type="text" className="input" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
        <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="button" onClick={handleRegistration}>Register</button>
      </div>
    </div>
  );
}

export default Registration;
