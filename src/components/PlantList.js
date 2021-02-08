import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const plantItems = plants.map((plant) => {
    return ( <PlantCard key={plant.id} 
    plant={plant}
    />)
  })
  return (
    <ul className="cards">{plantItems}</ul>
  );
}

export default PlantList;
