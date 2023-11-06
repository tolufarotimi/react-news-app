import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegistrationForm from './Component/Registration'; // Import your Registration component
import LoginForm from './Component/Login'; // Import your Login component
import UserDashboard from './Component/UserDashboard'; // Import your User Dashboard component
import ArticleList from './Component/ArticleList'; // Import your Article List component

import Search from './Component/SearchBar'; // Import your Article List component
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/">User Dashboard</Link>
            </li>
            <li>
              <Link to="/articles">Article List</Link>
            </li>
            <li>
              <Link to="/search-filter">Search & Filter</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<UserDashboard />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/search-filter" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
