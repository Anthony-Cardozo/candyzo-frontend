import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import './shop.css'

export default function Shop({isModalOpen}) {
return (
    <div className="body">
        <h1>Gummy Enchilados</h1>
        <div className="product-list">
            {products.map((product) => (
                    <ProductCard key={product.id} product={product} isModalOpen={isModalOpen}/>
            ))}
        </div>
    </div>
);
}
