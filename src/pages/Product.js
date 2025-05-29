import React from 'react';
import { useParams } from 'react-router-dom';
import './product.css'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import useProducts from '../hooks/useProducts';

const Product = () => {

  const cart = useContext(CartContext);
const { productId } = useParams();
const { products, loading, error } = useProducts();

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

  const product = products.find((prod) => prod._id === productId);
  const productQuantity = product ? cart.getProductQuantity(product._id) : 0;
  console.log("productId from URL:", productId);
  console.log("products:", products);

  if (!product) {
    return <div>Product not found</div>; 
  }
  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{/*product.description*/}Product description should be here</p>
      <p>Price: ${product.price_amount}</p>
      <button onClick={() => {cart.addOneToCart(product._id); console.log(cart.items);}}>Add to Cart</button>
      
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
          <p>product suggestions...</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
