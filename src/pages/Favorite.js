import React,{useState,useContext,useEffect} from 'react'
import Header from '../components/Header'
import styled from "styled-components";
import Sad from '../assets/pikachu.png'
import Pokemon from "../components/Pokemon";
import {  searchPokemon,getPokemon} from "../api";
import Pagination from "../components/Pagination";
import favoriteContext from "../contexts/favoritesContext";


function Favorite() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const {favoritePokemons} = useContext(favoriteContext)
   
    
    const fetchPokemons = async () => {
        try {
          setLoading(true);
          
          
          const promises = favoritePokemons.map(async (pokemon) => {
            return await searchPokemon(pokemon);
          });
         
          
          const results = await Promise.all(promises);
         
          //console.log(results)
          //console.log(pokemons)
          setPokemons(results);
          setLoading(false);
          setTotal(Math.ceil(promises.length / promises.length));
          //setNotFound(false);
        } catch (err) {}
      };

      useEffect(() => {
    
          fetchPokemons();
        console.log(favoritePokemons)
      }, [favoritePokemons]);

      const previousPage = () =>{
        const nextPage = Math.max(page -1,0);
        setPage(nextPage)
        };
        
        const nextPage = () =>{
            const nextPage = Math.min(page + 1,total);
            setPage(nextPage)
        };


    return (
        <div>
            <Header/>
            
    
      {favoritePokemons >= 0  ? <Div ><H1>You don't have any ❤️ Pokemon...</H1><Image  src={Sad} alt=""/></Div>:<>
      <Container>
      <H1>Favorites </H1>
      <Pagination
        page={page + 1}
        totalPages={total}
        onLeftClick={previousPage}
        onRightClick={nextPage}
      />
    </Container>
      <Info>
        {pokemons.map((pokemon, idx) => {
          return <Pokemon pokemon={pokemon} key={pokemon.name} />;
        })}
      </Info></>}
        </div>
    )
}


const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Info = styled.div`
  display: grid;
  grid-gap: 10px;
  padding: 0px 10px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  @media (max-width: 1200px) and (min-width: 769px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Div = styled.div`
top: 785px;
color: white;
margin-top: 100px;
padding: 20px;
display: flex;
`;


const H1 = styled.h1`
padding: 20px;

`;
const Image = styled.img`
display: block;
max-width: 40%;
width: 100%;
background-color: transparent;
color: transparent;
height: auto;
padding: 5px;
`;


export default Favorite







  





