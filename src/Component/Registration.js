import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import { withRouter } from 'react-router-dom';

function Registration({ history }) {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful, redirect to login page or show a success message
        history.push('/login');
      } else {
        // Handle registration error, show an error message
        console.error('Registration error:', response.status);
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h2>Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                    <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        value={formData.firstname}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div>
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        value={formData.lastname}
                        onChange={handleInputChange}
                    />
                    </div>
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
                    <button type="submit">Register</button>
                    </div>
                    <p>Already have an account? <Link to="/login">Login here</Link></p>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Registration;
