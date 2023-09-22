import React, { useState, useEffect } from "react";
import './Product.css'

const Product = () => {
  const [products, setProducts] = useState([]);
  let api = `https://api.escuelajs.co/api/v1/products/1
`;
console.log(api.textContent);

  useEffect(() => {
    // Fetch product data from the FakeStore API
     //api.escuelajs.co/api/v1/products
    //  https://fakestoreapi.com/products
     https: fetch(api)
       .then((response) => response.json())
       .then((data) => setProducts(data))
       .catch((error) => console.error("Error fetching data:", error));
  }, []);

    // Fetching with Axios

  return (
    <div className="productContainer">
      <h1>Product List</h1>
      <ul className="productInner">
        {products.map((product) => {
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>{product.description}</p>
          </li>
})}
      </ul>
    </div>
  );
};

export default Product;
