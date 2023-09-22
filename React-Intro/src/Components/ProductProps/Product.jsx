import React from "react";
import { products } from "./PropsDb";
import './Product.css'

// Card Component
function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.img} alt="" className="product-card-img" />
      <div className="product-card-texts">
        <h2 style={{ marginBottom: ".5rem" }}>{props.productName}</h2>
        <p style={{ marginBottom: ".5rem" }}>Price: ${props.price}</p>
        <p>Description: {props.description}</p>

        <div className="product-card-btns">
          <button className="product-card-btn1">Add to cart</button>
          <button className="product-card-btn2">Save Icon</button>
        </div>
      </div>
    </div>
  );
}

// ProductList Component
function ProductList() {


  return (
    <div className="product-list">
      <div className="Product-content">
        {products.map((product, index) => (
          <ProductCard
            img={product.img}
            key={index}
            productName={product.productName}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
