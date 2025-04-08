import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import Modal from "./Modal";
import { BsBag } from "react-icons/bs";


export default function NavBar({showModal, onOpenModal}) {

const cart = useContext(CartContext);
const productCount = cart.items.reduce((sum, product) => sum+product.quantity, 0);

/*
useEffect(() => {
  if (productCount > 0) {
    setShowModal(true);
  } else {
    setShowModal(false);
  }
}, [productCount]);

useEffect(() => {
  if (showModal) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }

  return () => {
    document.body.classList.remove('modal-open');
  };
}, [showModal]);*/

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="navbar-menu">
            <li><Link to="/" className="navbar-link">Home</Link></li>
            <li><Link to="/shop" className="navbar-link">Shop</Link></li>
            <li><Link to="/about" className="navbar-link">About Us</Link></li>
            <li><Link to="/contact" className="navbar-link">Contact Us</Link></li>
          </ul>
          <Link to="/" className="navbar-logo-link">
            <img className="navbar-logo" src="/main-logo.png" alt="Cardozo Enchilados Logo"></img>
          </Link>
            <div className="cart-icon-container" onClick={onOpenModal}>
              <BsBag className="cart-icon" size={24}/>
              {productCount > 0 && <span className="cart-count">({productCount})</span>}
            </div>
          
        </div>
      </nav>
      {/*<Modal isVisible={showModal} onClose={handleCloseModal}/>*/}
    </>
  );
}
