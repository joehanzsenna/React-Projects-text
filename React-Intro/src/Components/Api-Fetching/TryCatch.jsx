import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function TryCatch() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  //   let api = `https://fakestoreapi.com/products?limit=5`;
  let api = "https://fakestoreapi.com/products?limit=2";

  const dataFetching = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setProducts(data);

      setLoading(false);
    } catch (error) {
      setError("Oops something is wrong");
      console.log(error);
    } finally {
      console.log("Now we are live");
      setLoading(false);
    }
  };

  useEffect(() => {
    dataFetching();
  }, []);

  return (
    <div>
      <div>
        {loading && <ClipLoader />}
        <h2>{error}</h2>
        <ul>
          {products.map((product) => (
            <div key={product.id}>
              <img src={product.image} alt="" style={{ width: "8rem" }} />
              <h2>{product.category}</h2>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TryCatch;
