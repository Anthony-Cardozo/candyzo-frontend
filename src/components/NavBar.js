import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-link">
          <img className="navbar-logo" src="/main-logo.png" alt="Cardozo Enchilados Logo"></img>
        </Link>
        <ul className="navbar-menu">
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/shop" className="navbar-link">Shop</Link></li>
          <li><Link to="/about" className="navbar-link">About Us</Link></li>
          <li><Link to="/contact" className="navbar-link">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}
