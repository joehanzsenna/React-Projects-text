import React, { useEffect, useState } from "react";
import "./Style.css";

const UseEffect = () => {
  const [products, setProducts] = useState([]);
  let api1 = "https://fakestoreapi.com/products?limit=20";
  let api2 = "https://fakestoreapi.com/products/category/electronics";

  const fetchUserData = () => {
    fetch(api1)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <div className="products-container">

        {products.map((product) => (
          <div key={product.id} className="productCard">
            <img src={product.image} alt="" className="productImg" />
            <div className="product-TP">
              <h3>{product.category}</h3>
              <h3>{product.price}</h3>
            </div>
            <h3>{product.title}</h3>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default UseEffect;
