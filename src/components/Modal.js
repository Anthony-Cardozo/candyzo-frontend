import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import './modal.css';
import { CartContext } from "../context/CartContext";
import products from "../data/products";
import { FaTrashAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";


export default function Modal({isVisible, onClose}) {
  const cart = useContext(CartContext);
  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  const navigate = useNavigate();

  const handleClickOutside = (e) => {
    const modalContainer = document.querySelector('.modal.show');
    if (modalContainer && !modalContainer.contains(e.target)) {
      onClose(); 
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isVisible, onClose]);

  return (
    <div className={`modal ${isVisible ? 'show' : ''}`}>
      <div className="modal-container">
        <IoMdClose color="#555" className="close-btn" onClick={onClose} size="40px"/>
        <h1>Shopping Cart</h1>
        {productCount > 0 ? (
          cart.items.map((cartProduct) => {
            const product = products.find((p) => p.id === cartProduct.id);
            const totalPrice = product.price * cartProduct.quantity;
            return (
              <div key={product.id} className="cart-item">
                <img src={product.image} alt={product.name} width="50" />
                <h2 className="product-name">{product.name}</h2>
                <div className="right">
                    <button className="plus" onClick={() => cart.addOneToCart(product.id)}>+</button>
                    <input type="number" className="in" value={cartProduct.quantity}></input>
                    <button className="minus" onClick={() => cart.removeOneFromCart(product.id)}>-</button>
                    <p className="item-details">${totalPrice.toFixed(0)}</p>
                    <FaTrashAlt className="trash" color="#a5533f" onClick={() => cart.deleteFromCart(product.id)}/>
                </div>
              </div>
            );
          })
        ) : (
          <p className="empty">There are no items in your cart.</p>
        )}
      </div>
      {productCount > 0 &&(
        <button className="checkout" onClick={() => {navigate("/checkout"); onClose();}}>Checkout</button>
        )}
    </div>
  );
}
