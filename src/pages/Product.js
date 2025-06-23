import React from 'react';
import { useParams } from 'react-router-dom';
import './product.css'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import useProducts from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

export default function Product({onOpenModal}){

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

      <p className="price">${product.price_amount}</p>
      <p>{product.description}</p>

      <button onClick={() => {cart.addOneToCart(product._id); onOpenModal();}}>
        ADD TO CART
      </button>
    </div>

  );
};

