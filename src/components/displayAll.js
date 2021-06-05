import React, { useState, useEffect } from "react";
import { getPokemon } from "../api";

function DisplayAll() {
  const [pokemon, setPokemons] = useState([]);
const fetchPokemons = async () => {
    try {
        const data = await getPokemon();
        setPokemons(data.results)
    } catch (err) {
        
    }
}

  useEffect(() => {
      fetchPokemons()
  }, []);
  return <div></div>;
}

export default DisplayAll;
