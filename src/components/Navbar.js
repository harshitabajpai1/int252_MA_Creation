import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">E-Shop</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart"><FaShoppingCart /> Cart</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/feedback">Feedback</Link>
      </div>
    </nav>
  );
}

export default Navbar;
