import React from "react";
import { products } from "./ProductDb";
import './Product.css'

function ProductCard(props) {
  return (
    <div>
      <img src={props.img} alt="" />
      <div>
        <h2>{props.productName}</h2>
        <p>Price: ${props.price}</p>
        <p>Descrtiption: {props.description}</p>

        <div>
          <button>Add to cart</button>
          <button>Save Icon</button>
        </div>
      </div>
    </div>
  );
}

const Product = () => {
  return (
    <div className="product-list">
      <h2> this is here </h2>
      <div style={{ width: "100%", height: "50vh", backgroundColor: "none" }}>
        {products.map((product) => (
          <ProductCard
            img={product.img}
            key={product.id}
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
