import React from "react";
import './productCard.css';
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function ProductCard({ product, isModalOpen }) {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product._id);

  return (
    <div className="card">
      <Link to={`/product/${product._id}`}>
      {/*<img src={product.image} alt={product.name} width="150" />*/}
      {/*have to use images from public folder -> might PUT img name on product scheme*/}
      <img src="chamoy-gummies.png" alt={product.name} width="150"/>
      </Link>
      <h3>{product.name}</h3>
      <p className="product-details">7-OZ | ${product.price_amount}</p>
      <button className="add-to-cart"  disabled={isModalOpen} onClick={() => {cart.addOneToCart(product._id); console.log(cart.items);}}>ADD TO CART</button>
      <Link to={`/product/${product._id}`}>
        <button className="view-more">VIEW MORE</button>
      </Link>
    </div>
  );
}
