import React, { useState, useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";

function AnotherTryCatch() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  let api = "https://fakestoreapi.com/products?limit=1";

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(api);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError("oops something is wrong, Check your connection");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // if (loading) {
  //   return <ClipLoader />;
  // }
  // const { id, image, title, price, category, description } = products;

  return (
    <div>
      <h2>Product List</h2>
      {loading && <MoonLoader />}
      <h1>{error}</h1>
      <ul>
        {products.map((product) => {
          const { id, image, title, price, category, description } = product;
          return (
            <li key={id}>
              <img src={image} alt="" style={{ width: "8rem" }} />
              <h3>{title}</h3>
              <p>Price: ${price}</p>
              <p>Category: {category}</p>
              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AnotherTryCatch;
