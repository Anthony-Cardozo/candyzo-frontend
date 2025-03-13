import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products'; // Import your dummy products data
import './product.css'

const Product = () => {
  const { productId } = useParams(); // Get the productId from the URL
  const product = products.find((prod) => prod.id === parseInt(productId)); // Find the product from the list

  if (!product) {
    return <div>Product not found</div>; // In case the product is not found
  }

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
      
      <div className="reviews">
        <h3>Customer Reviews</h3>
        {/* Render some dummy reviews */}
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
