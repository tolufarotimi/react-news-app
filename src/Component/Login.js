import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate user login (replace this with API call later)
    console.log('User login:', formData);
    // Reset the form fields
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div>
                    <button type="submit">Login</button>
                    </div>
                    <p>Don't have an account? <Link to="/register">Register here</Link></p>
                </form>
            </div>
        </div>    
    </div>
  );
}

export default Login;
