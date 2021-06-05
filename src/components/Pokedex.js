import React from "react";
import styled from "styled-components";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
const Pokedex = (props) => {
  const { pokemons,page,setPage, total, loading } = props;


  
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
      <Container>
        <h1>Pokedex</h1>
        <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={previousPage}
          onRightClick={nextPage}
        />
      </Container>
      {loading ? <Div ><h1>Loading pokemons...</h1></Div>:
      <Info>
        {pokemons.map((pokemon, idx) => {
          return <Pokemon pokemon={pokemon} key={pokemon.name} />;
        })}
      </Info>
}
    </div>
  );
};
const Container = styled.div`
  margin-top: 22px;
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
`;
export default Pokedex;
