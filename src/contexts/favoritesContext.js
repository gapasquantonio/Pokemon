import React from 'react'

const FavoriteContext = React.createContext({
    favoritePokemons:[],
    updateFavoritePokemon: (id) =>null
})


export const FavoriteProvider = FavoriteContext.Provider

export default FavoriteContext
