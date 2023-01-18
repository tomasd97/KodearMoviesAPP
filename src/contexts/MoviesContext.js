import { createContext, useState, useContext } from "react";

const initialContext = {
    isInFavorites: () => {},
    handleFavorite: () => {},
    changeSearchWord: () => {},
    searchWord: '',
    favorites: []
}

const MoviesContext = createContext(initialContext)

export const MoviesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])
    const [searchWord, setSearchWord] = useState(initialContext.searchWord)

    const handleFavorite = (movie) => {
        if(favorites.find(favorite => favorite.id === movie.id)){
            setFavorites(favorites.filter(item => item.id !== movie.id))
        } else {
            setFavorites([...favorites, movie])
        }
    }

    const changeSearchWord = (newValue) => {
        setSearchWord(newValue)
    }

    const isInFavorites = (id) => {
        return(favorites.filter(favorite => favorite.id === id).length > 0)
    }


    const contextData = {
        searchWord: searchWord,
        changeSearchWord: changeSearchWord,
        handleFavorite: handleFavorite,
        isInFavorites: isInFavorites,
        favorites: favorites
    }

    return(
        <MoviesContext.Provider value={contextData}>{children}</MoviesContext.Provider>
    )
}

export const useMoviesContext = () => {
    return useContext(MoviesContext)
}
