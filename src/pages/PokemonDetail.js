import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PokemonDetailed from "../components/PokemonDetailed";


function PokemonDetail() {
  const [pokemons, setPokemons] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const searchPokemon = async (id) => {
    try {
      setLoading(false);
      let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);
      setPokemons(data);
      setLoading(true);
    } catch (err) {}
  };

  useEffect(() => {
    searchPokemon(id);
  }, []);

  {
    console.log(pokemons);
  }

  return (
    <div>
      <Header />
      <PokemonDetailed pokemons={pokemons} />
    </div>
  );
}


export default PokemonDetail;
