import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import './modal.css';
import { CartContext } from "../context/CartContext";
import products from "../data/products";

export default function Modal() {
  const cart = useContext(CartContext);
  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (productCount > 0) {
      setIsModalVisible(true);  
    }
  }, [productCount]);  

  const closeModal = () => {
    setIsModalVisible(false);  
  };
/*
  const handleClickOutside = (e) => {
    const modal = document.querySelector('.modal-container');
    if (modal && !modal.contains(e.target)) {
      closeModal(); 
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);*/

  return (/*
    <div className={`modal ${isModalVisible ? 'show' : ''}`}>
      <div className="modal-container">
        <button className="close-btn" onClick={closeModal}>X</button>
        {productCount > 0 ? (
          cart.items.map((cartProduct) => {
            const product = products.find((p) => p.id === cartProduct.id);
            const totalPrice = product.price * cartProduct.quantity;
            return (
              <div key={product.id} className="cart-item">
                <h2 className="product-name">{product.name}</h2>
                <p className="item-details">
                  ${product.price.toFixed(2)} x {cartProduct.quantity} = ${totalPrice.toFixed(2)}
                </p>
                <button className="plus" onClick={() => cart.addOneToCart(product.id)}>+</button>
                <button className="minus" onClick={() => cart.removeOneFromCart(product.id)}>-</button>
                <button className="remove" onClick={() => cart.deleteFromCart(product.id)}>
                  Remove from cart
                </button>
              </div>
            );
          })
        ) : (
          <p className="empty">There are no items in your cart.</p>
        )}
      </div>
      <Link to="/checkout">
        <button className="checkout">Checkout</button>
      </Link>
    </div>
  );
}
