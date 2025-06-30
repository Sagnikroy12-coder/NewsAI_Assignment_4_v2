import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">📰 NewsAI</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/summaries">My Summaries</Link>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." disabled />
        <button disabled>Search</button>
      </div>
    </nav>
  );
}

export default Navbar;