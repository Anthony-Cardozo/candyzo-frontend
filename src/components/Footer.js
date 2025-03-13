import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'; // Make sure to import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Link to="/">
            <img src="/main-logo.png" alt="Cardozo Enchilados Logo" />
          </Link>
        </div>
        <ul className="footer-links">
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <div className="footer-info">
          <p>&copy; 2025 Cardozo Enchilados. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
