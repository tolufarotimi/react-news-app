// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes
//import { AuthProvider, useAuth } from './Component/AuthContext';
import { AuthProvider } from './Component/AuthContext';
import Registration from './Component/Registration';
import Login from './Component/Login';
import HomePage from './Component/HomePage';
import './Component/styles.css';



function App() {
  return (
    <AuthProvider>
      <BrowserRouter> {/* Wrap your app with BrowserRouter */}
        <div className="container">
          <Routes>
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter> {/* Close BrowserRouter */}
    </AuthProvider>
  );
}

export default App;
