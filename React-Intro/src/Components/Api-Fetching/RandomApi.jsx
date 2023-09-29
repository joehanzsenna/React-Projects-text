import React, { useEffect, useState } from "react";

const RandomApi = () => {
  const [users, setUsers] = useState([]);

  let firstApi = "https://fakestoreapi.com/products";
  let secondApi = "https://fakestoreapi.com/products?limit=12";

  const fetchUserData = () => {
    fetch(secondApi)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  
  return (
    <div>
      <div className="contents-api">
        {users.map((user) => (

            <div key={user.id}>
                <img src={user.image} alt="" className="apiImg"/>
                <h2>{user.title}</h2>
                <p>{user.price}</p>
                <p>{user.category}</p>
              </div>
        ))}
      </div>
    </div>
  );
};

export default RandomApi;
