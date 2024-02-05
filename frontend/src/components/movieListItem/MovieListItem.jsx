/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

import "./MovieListItem.scss";

const defaultPoster = "../../../public/images/defaultPoster.jpg";

const MovieListItem = ({ movie }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!movie) {
    return null;
  }

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  const handleImageError = (e) => {
    e.target.src = defaultPoster;
  };

  const changeProtocolToSecure = () => {
    const posterURLArray = movie?.poster?.split(":");
    if (posterURLArray && posterURLArray[0] !== "https") {
      posterURLArray[0] = "https";
    }
    const posterURLJoined = posterURLArray?.join(":");
    return posterURLJoined;
  };

  const posterURL = changeProtocolToSecure();

  if (!posterURL) {
    return null;
  }

  return (
    <Link
      to={`/movieDetails/${movie._id}`}
      state={{ posterURL: posterURL, defaultPoster: defaultPoster }}
    >
      <li className="movie-list-item">
        {!imageLoaded && <div>Loading...</div>}
        <img
          src={posterURL || defaultPoster}
          alt={`image`}
          className="movie-list-item-img"
          loading="lazy"
          onLoad={handleImageLoaded}
          onError={handleImageError}
        />
        <span className="movie-list-item-title">{movie.title}</span>
        <span className="movie-list-item-director">{movie.director}</span>
      </li>
    </Link>
  );
};

export default MovieListItem;
