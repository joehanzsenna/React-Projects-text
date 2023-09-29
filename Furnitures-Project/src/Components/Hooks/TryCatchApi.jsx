import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const TryCatchApi = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [erros, setErrors] = useState(false)

    let api = "https://fakestoreapi.com/products?limit=5";

    const dataFetching = async () => {
        try{
            const response = await fetch(api)
            const data = await response.json()
            setProducts(data)
            setLoading(false)
        }catch{
            console.log(`There's something wrong`);
            setErrors('Oops Something is wrong, Check your network')
        }finally {
            console.log(`Now we are live `);
            setLoading(false)
        }
    }

    useEffect(() => {
        dataFetching()
    }, [])

  return (
    <div>
      <h2>{loading && <ScaleLoader />}</h2>
      <h2>{erros}</h2>
      <ul>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt="" style={{ width: "8rem" }} />
            <h2>{product.price}</h2>
            <h2>{product.category}</h2>
            <h2>{product.title}</h2>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TryCatchApi;
