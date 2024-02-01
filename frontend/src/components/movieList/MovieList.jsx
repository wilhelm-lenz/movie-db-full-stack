import "./movieList.scss";
import MovieListItem from "../movieListItem/MovieListItem";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../contextes/MovieContext";

const MovieList = () => {
  const { movies, setMovies } = useContext(MovieContext);
  console.log(movies);

  const getAllMovies = async () => {
    const res = await fetch(`http://localhost:8000/api/v1/movies`);
    const dataObj = await res.json();
    const { status, data, error } = dataObj;
    console.log(data);

    if (status !== "success") console.log(error);
    else setMovies(data.movies);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <section className="section-all-movies">
      <ul className="movie-list">
        <h2 className="heading-secondary">All Movies</h2>
        {movies.map((movie) => (
          <MovieListItem key={movie._id} movie={movie} />
        ))}
      </ul>
    </section>
  );
};

export default MovieList;
