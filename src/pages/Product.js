import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import './product.css'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const Product = () => {
  const { productId } = useParams();
  const product = products.find((prod) => prod.id === parseInt(productId)); 
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  if (!product) {
    return <div>Product not found</div>; 
  }
  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => {cart.addOneToCart(product.id); console.log(cart.items);}}>Add to Cart</button>
      
      <div className="reviews">
        <h3>Customer Reviews</h3>
        <div className="review">
          <p>Great product! Loved it! 5/5</p>
        </div>
        <div className="review">
          <p>Delicious and chewy! 4/5</p>
        </div>
      </div>

      <div className="suggestions">
        <h3>You Might Like</h3>
        <div className="product-list">
          {products.slice(0, 2).map((suggestion) => (
            <div className="product-card2" key={suggestion.id}>
              <img src={suggestion.image} alt={suggestion.name} />
              <p>{suggestion.name}</p>
              <p>${suggestion.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
