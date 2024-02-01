/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState("Filme hier");
  return (
    <MovieContext.Provider values={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieContextProvider };
