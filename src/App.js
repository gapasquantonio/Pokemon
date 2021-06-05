
import './App.css';
import React,{useState,useEffect,useContext} from 'react'
import Header from './components/Header';
import CreatePage from './pages/createPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import { FavoriteProvider } from "./contexts/favoritesContext"
import PokemonDetail from './pages/PokemonDetail';
import Footer from './components/Footer';




const localStorageKey = "favorite_pokemon"


function App() {

  const [favorites, setFavorites] = useState([]);
  const loadFavoritePokemons = () => {
    const pokemons =
    JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
  setFavorites(pokemons);
      
  }
  useEffect(() => {
    loadFavoritePokemons()
  
  }, []);
  
  const updateFavoritePokemons = (name) =>{
    const updated = [...favorites];
    const isFavorite = updated.indexOf(name);
    if(isFavorite >=0){
        updated.splice(isFavorite, 1);
    }else{
        updated.push(name)
    }
    setFavorites(updated)
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  }
  return (
    <FavoriteProvider value={{favoritePokemons:favorites,
      updateFavoritePokemon:updateFavoritePokemons}}>
    <div className="App">
      <Router>
      <Switch>
      <Route path="/favorite">
            <Favorite/>
          </Route>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/detail/:id">
            <PokemonDetail />
          </Route>
      </Switch>
      </Router>
      <Footer/>
    </div>
    </FavoriteProvider>
  );
}

export default App;
