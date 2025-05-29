import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import './modal.css';
import { CartContext } from "../context/CartContext";
import useProducts from "../hooks/useProducts";
import { FaTrashAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51R3jZ02fzFlPItbPjJnmSG0bt4toZT9iojRWYur1UU30OPceSQSTtwZAhJJIcDYpSIoRbg83zeoF5N6ZHX4ntFd700QKyaNnm8');

export default function Modal({isVisible, onClose}) {
  const cart = useContext(CartContext);
  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  const navigate = useNavigate();
  const {products, loading, error} = useProducts();

  //checkout hooks
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState(null);

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

  if (loading) 
    return (
        <div className="loading-body">
            <p>Loading products...</p>
        </div>
    );
  if (error) 
      return (
          <div className="error-body">
              <p>Error loading products: {error.message}...</p>
          </div>
      );

  const handleCheckout = async () => {
    setCheckoutLoading(true);
    setCheckoutError(null);

    try {
      const stripe = await stripePromise;

      const response = await fetch('http://localhost:3001/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart.items.map(cartItem => {
            const product = products.find(p => p._id === cartItem.id);
            console.log(product);
            return {
              price: product.price,
              quantity: cartItem.quantity
           };
          }),
        }),
      });

      const data = await response.json();

      if(data.sessionID) {
        const result = await stripe.redirectToCheckout({
          sessionId: data.sessionID,
        });

      if(result.error)
        setCheckoutError(result.error.message);
    }
      else if(data.error)
        setCheckoutError(data.error);
      else
        setCheckoutError('Failed to create Stripe Checkout session.');
    } catch(err) {
      setCheckoutError(err.message);
    } finally {
      setCheckoutLoading(false);
    }
  };

  return (
    <div className={`modal ${isVisible ? 'show' : ''}`}>
      <div className="modal-container">
        <IoMdClose color="#555" className="close-btn" onClick={onClose} size="40px"/>
        <h1>Shopping Cart</h1>
        {productCount > 0 ? (
          cart.items.map((cartProduct) => {
            const product = products.find((prod) => prod._id === cartProduct.id);
            const totalPrice = product.price * cartProduct.quantity;
            return (
              <div key={product._id} className="cart-item">
                {/*<img src={product.image} alt={product.name} width="50" />*/}
                <img src="chamoy-gummies.png" alt={product.name} width="50" />
                <h2 className="product-name">{product.name}</h2>
                <div className="right">
                    <button className="plus" onClick={() => cart.addOneToCart(product._id)}>+</button>
                    <input type="number" className="in" value={cartProduct.quantity}></input>
                    <button className="minus" onClick={() => cart.removeOneFromCart(product._id)}>-</button>
                    <p className="item-details">${totalPrice.toFixed(0)}</p>
                    <FaTrashAlt className="trash" color="#a5533f" onClick={() => cart.deleteFromCart(product._id)}/>
                </div>
              </div>
            );
          })
        ) : (
          <p className="empty">There are no items in your cart.</p>
        )}
      </div>
      {productCount > 0 &&(
        <button className="checkout" onClick={() => handleCheckout()}>Checkout</button>
        )}
    </div>
  );
}
