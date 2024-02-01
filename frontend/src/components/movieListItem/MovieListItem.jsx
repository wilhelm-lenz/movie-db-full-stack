/* eslint-disable react/prop-types */
import "./MovieListItem.scss";

const MovieListItem = ({ movie }) => {
  return (
    <li className="movie-list-item">
      <img src={movie.poster} alt={`image`} className="movie-list-item-img" />
      <span className="movie-list-item-title">{movie.title}</span>
      <span className="movie-list-item-director">{movie.director}</span>
    </li>
  );
};

export default MovieListItem;
