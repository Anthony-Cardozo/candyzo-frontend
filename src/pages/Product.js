import React from 'react';
import { useParams } from 'react-router-dom';
import './product.css'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import useProducts from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

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

  if (!product) {
    return <div>Product not found</div>; 
  }
  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <div className='product-image'>
        <img src="/chamoy-gummies.png" alt={product.name} />
      </div>
      <p>${product.price_amount}</p>
      <p>{/*product.description*/}Product description should be here</p>
      <button onClick={() => {cart.addOneToCart(product._id);}}>Add to Cart</button>

      <div className="suggestions">
        <h3>You Might Like</h3>
        <div className="product-list">
          {/*<div className="list">
                    {Array.isArray(products) && products.length > 0 ? (
                      products.slice(1,3).map((prod) => (
                        <ProductCard key={prod._id} product={prod} />
                      ))
                    ) : (
                      <p>No best sellers found.</p>
                    )}
          </div>*/}
          <p>product suggestions...</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
