import React, { useState, useEffect } from "react";
import "./Product.css";

const Product = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  function fetchingApi (){
     // Fetch data for a specific product from the FakeStore API
    fetch("https://fakestoreapi.com/products") // Replace '3' with the desired product ID
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  useEffect(() => {
    fetchingApi()
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="productContainer">
      <h2>Product Details</h2>
      <div>
        {product.map((pro) => (
          <div key={pro.id}>
            <h3>{pro.title}</h3>
            <p>Price: ${pro.price}</p>
            <p>Category: {pro.category}</p>
            <p>{pro.description}</p>
            <img src={pro.image} alt={pro.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
