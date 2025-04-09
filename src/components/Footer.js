import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './footer.css';
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {

  return (
    <footer className="footer">
      {/*<div className="footer-container">*/}
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
        <div className='social-icons'>
          <a href="https://www.tiktok.com/@cardozo.enchilados" target="_blank" rel="noopener noreferrer">
          <FaTiktok size="20px" className='tiktok' />
          </a>
          <a href="https://www.instagram.com/cardozo.enchilados" target="_blank" rel="noopener noreferrer">
          <FaInstagram size="20px" className='insta' />
          </a>
        </div>
        <div className="footer-info">
          <p>&copy; 2025 Cardozo Enchilados. All rights reserved.</p>
        </div>
      {/*}/div>*/}
    </footer>
  );
}

export default Footer;
