// Login.js
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const { dispatch } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);

  const handleLogin = () => {
    // Create an object with user login data
    const loginData = {
      email,
      password,
    };

    // Make the API request
    axios
      .post('http://127.0.0.1:8000/api/auth/login', loginData)
      .then((response) => {
        // Login successful
        setLoginStatus('success');
        // Dispatch the LOGIN action if needed
        dispatch({ type: 'LOGIN', payload: { user: response.data.user } });

        // Redirect to the home page or another route
        window.location.href = '/'; // Replace with your desired home page route
      })
      .catch((error) => {
        // Login error
        setLoginStatus('error');
      });
  };

  return (
    <div className="container">
      <div className="form">
        <h2>Login</h2>
        {loginStatus === 'success' ? (
          <p>Login successful! You are now redirected to the home page.</p>
        ) : loginStatus === 'error' ? (
          <p>Login failed. Please try again.</p>
        ) : (
          <>
            <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="button" onClick={handleLogin}>Login</button>
          </>
        )}
        <p className="mt-3">
          Not registered? <Link to="/register">Click here</Link> to register.
        </p>
      </div>
    </div>
  );
}

export default Login;
