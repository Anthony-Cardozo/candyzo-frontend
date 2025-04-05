import React from "react";
import { Link } from "react-router-dom";
import './modal.css';
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/products";

export default function Modal() {

const cart = useContext(CartContext);
const productCount = cart.items.reduce((sum, product) => sum+product.quantity, 0);

  return (
    <div>
      <div className="modal-container">
        {productCount > 0 ?
            cart.items.map(cartProduct => {products.map(product => {
                product.id === cartProduct.id? 
                    <div>
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <button>Remove from cart</button>
                    </div>
                :
                    product
            })})
        :
            <p>There are no items in your cart.</p>
        }
      </div>
      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
}
