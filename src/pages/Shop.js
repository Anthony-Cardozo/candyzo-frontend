import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import './shop.css'

export default function Shop() {
return (
    <div className="body">
        <h1>Enchilados</h1>
        <div className="product-list">
            {products.map((product) => (
                <div className="product-card" key={product.id}>
                    <ProductCard key={product.id} product={product} />
                </div>
            ))}
        </div>
    </div>
);
}
