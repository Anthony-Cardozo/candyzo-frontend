import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import { CartContext } from "../context/CartContext";
import { BsBag } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavBar({ showModal, onOpenModal }) {
  const cart = useContext(CartContext);
  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

      useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY <= 50) {
          setShowNav(true); // Always show when near the top
        } else if (currentScrollY > lastScrollY.current) {
          setShowNav(false); // Scroll down => hide navbar
        } else {
          setShowNav(true); // Scroll up => show navbar
        }

        lastScrollY.current = currentScrollY;
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);


  return (
    <>
      <nav className={`navbar ${showNav ? "navbar-show" : "navbar-hide"}`}>
        <div className="navbar-container">
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </div>

          <div className="logo-container">
            <Link to="/" className="navbar-logo-link">
              <img className="navbar-logo" src="/main-logo.png" alt="Cardozo Enchilados Logo" />
            </Link>
          </div>

          <div className="cart-icon-container" onClick={onOpenModal}>
            <BsBag className="cart-icon" size={24} />
            {productCount > 0 && <span className="cart-count">{productCount}</span>}
          </div>
        </div>
      </nav>
        <div className={`side-drawer ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="drawer-header">
            <FiX size={24} onClick={closeMenu} className="close-icon" />
          </div>
          <ul className="drawer-menu">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/shop" onClick={closeMenu}>Shop</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
          </ul>
        </div>

        {isMobileMenuOpen && <div className="backdrop" onClick={closeMenu}></div>}
      
    </>
  );
}
