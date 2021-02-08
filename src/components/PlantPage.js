import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import {useEffect, useState} from "react";

function PlantPage() {
  const[plants, setPlants] = useState([]);
  const[search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(plantsArray => setPlants(plantsArray))
  }, [])

  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  function addPlant (newPlant) {
    const updatedPlants = [...plants, newPlant]
    setPlants(updatedPlants)
  }

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;
