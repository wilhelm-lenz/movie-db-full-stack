import "./MovieList.scss";
import MovieListItem from "../movieListItem/MovieListItem";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../contextes/MovieContext";

const MovieList = () => {
  const { movies, setMovies, searchTerm } = useContext(MovieContext);
  const localURL = import.meta.env.VITE_BACKAND_URL;

  const getAllMovies = async () => {
    const res = await fetch(`${localURL}/api/v1/movies`);
    const dataObj = await res.json();
    const { status, data, error } = dataObj;

    if (status !== "success") console.log(error);
    else setMovies(data.movies);
  };

  const updatedMovies = searchTerm
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : movies;

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <section className="section-all-movies container">
      <h2 className="heading-secondary">All Movies</h2>
      <ul className="movie-list">
        {updatedMovies.map((movie) => (
          <MovieListItem key={movie._id} movie={movie} />
        ))}
      </ul>
    </section>
  );
};

export default MovieList;
