import React, { useState, useEffect } from "react";
import { getPokeemonData, getPokemon,searchPokemon } from "../api";
import Pokedex from "../components/Pokedex";
import Header from '../components/Header'
import SearchBar from "../components/SearchBar"
import styled from 'styled-components'
import logo from '../assets/tired.gif'



function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
 const [notFound,setNotFound] = useState(false);
 const [searching, setSearching] = useState(false);
  
 
 const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemon(30, 25 * page);
      
      const promises = data.results.map(async (pokemon) => {
        return await getPokeemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
      setNotFound(false);
    } catch (err) {}
  };


 

 useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
  }, [page]);


const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };

  return (

    <div>
    <Header />
    <SearchBar onSearch={onSearch} />
    {notFound ? (
            <Div className="not-found-text">
              <h1>Sorry, Pokemon not found! </h1>
              <Img src={logo} alt="loading..." />
            </Div>
          ) : (
      <Pokedex
        pokemons={pokemons}
        page={page}
        setPage={setPage}
        total={total}
        loading={loading}
      />
      )}
    </div>
 
  );
}




const Div = styled.div`
 text-align: center;
  font-size: 1.25rem;
  padding: 20px;
display: flex;
justify-content: center;
align-items: center;
position: relative;
@media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 1200px) and (min-width: 769px) {
    display: flex;
;
  }
`;

const Img = styled.img`
@media (max-width: 768px) {
    width: 80%;
  }
 
`;


export default Home;
