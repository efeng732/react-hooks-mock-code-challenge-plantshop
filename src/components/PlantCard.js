import React from "react";
import {useState} from "react";

function PlantCard({plant}) {
  const[inStock, setInStock] = useState(true)

  function toggle() {
    setInStock( (inStock) => !inStock)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={toggle}>In Stock</button>
      ) : (
        <button onClick={toggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
