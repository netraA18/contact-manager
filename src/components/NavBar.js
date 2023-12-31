// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/ContactForm">Contact Form</Link>
      <Link to="/ContactList">Contact List</Link>
    </div>
  );
}

export default NavBar;
