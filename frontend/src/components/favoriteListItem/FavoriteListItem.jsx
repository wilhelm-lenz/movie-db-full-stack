/* eslint-disable react/prop-types */
import { useState } from "react";
import FavoritesButton from "../buttons/FavoritesButton";
import "./FavoriteListItem.scss";
import { Link } from "react-router-dom";

const defaultPoster = "../../../public/images/defaultPoster.jpg";

const FavoriteListItem = ({ movie }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  if (!movie) {
    return;
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
    <>
      <li className="favorite-movie-list-item">
        {!imageLoaded && <div>Loading...</div>}
        <Link
          to={`/movieDetails/${movie._id}`}
          state={{ posterURL: posterURL, defaultPoster: defaultPoster }}
        >
          <img
            src={posterURL || defaultPoster}
            alt={`image`}
            className="favorite-movie-list-item-img"
            onLoad={handleImageLoaded} // Event-Handler für erfolgreiches Laden
            onError={handleImageError} // Event-Handler für Fehler beim Laden
          />
          <span className="favorite-movie-list-item-title">{movie.title}</span>
          <span className="favorite-movie-list-item-director">
            {movie.director}
          </span>
        </Link>
        <span>
          <FavoritesButton
            btnText={"Remove from Favorites"}
            movieId={movie._id}
          />
        </span>
      </li>
    </>
  );
};

export default FavoriteListItem;
