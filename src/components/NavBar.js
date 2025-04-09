import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { BsBag } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavBar({showModal, onOpenModal}) {

const cart = useContext(CartContext);
const productCount = cart.items.reduce((sum, product) => sum+product.quantity, 0);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const toggleMobileMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen);
};

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-left">
            <ul className="navbar-menu">
              <li><Link to="/" className="navbar-link">Home</Link></li>
              <li><Link to="/shop" className="navbar-link">Shop</Link></li>
              <li><Link to="/about" className="navbar-link">About Us</Link></li>
              <li><Link to="/contact" className="navbar-link">Contact Us</Link></li>
            </ul>
          </div>
          <div className="logo-container">
            <Link to="/" className="navbar-logo-link">
              <img className="navbar-logo" src="/main-logo.png" alt="Cardozo Enchilados Logo"></img>
            </Link>
          </div>
            <div className="cart-icon-container" onClick={onOpenModal}>
              <BsBag className="cart-icon" size={24}/>
              {productCount > 0 && <span className="cart-count">({productCount})</span>}
            </div>
        </div>
      </nav>
    </>
  );
}
