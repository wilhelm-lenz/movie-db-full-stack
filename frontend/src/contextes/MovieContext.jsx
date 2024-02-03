/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isInFavorites, setIsInFavorites] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        searchTerm,
        setSearchTerm,
        isInFavorites,
        setIsInFavorites,
        favoriteMovies,
        setFavoriteMovies,
        isOpenForm,
        setIsOpenForm,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieContextProvider };
