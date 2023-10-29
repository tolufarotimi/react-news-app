// Login.js
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import './styles.css'; // Import the CSS file

function Login() {
  const { dispatch } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Login logic

    // ...

    dispatch({ type: 'LOGIN', payload: { user: { email } } });
  }

  return (
    <div className="container">
      <div className="form">
        <h2>Login</h2>
        <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
