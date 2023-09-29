import React from "react";
import { products } from "./ProductDb";
import './Product.css'

function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.img} className="product-card-img" alt="" />

      <div className="product-card-text">
        <h2 style={{ marginBottom: "5px" }}>{props.productName}</h2>
        <p style={{ marginBottom: "5px" }}>Price: ${props.price}</p>
        <p>Descrtiption: {props.description}</p>

        <div className="product-card-btns">
          <button className="btn01">Add to cart</button>
          <button className="btn02">Save Icon</button>
        </div>
      </div>
    </div>
  );
}

const Product = () => {
  return (
    <div className="product-container">
      <div className="Product-content">
          {products.map((product) => (

            <ProductCard
              img={product.img}
              key={product.index}
              productName={product.productName}
              price={product.price}
              description={product.description}
            />

          ))}
      </div>
    </div>
  );
};

export default Product;
