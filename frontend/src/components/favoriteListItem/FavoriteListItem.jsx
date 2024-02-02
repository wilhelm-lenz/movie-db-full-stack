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
  console.log(movie);
  const handleImageLoaded = () => {
    setImageLoaded(true); // Setzt den Status, wenn das Bild erfolgreich geladen wurde
  };

  const handleImageError = (e) => {
    e.target.src = defaultPoster; // Setzt das Bild auf das Standardbild, wenn ein Fehler auftritt
  };

  const posterURLArray = movie?.poster?.split(":");
  if (posterURLArray && posterURLArray[0] !== "https") {
    posterURLArray[0] = "https";
  }
  const posterURL = posterURLArray?.join(":");

  if (!posterURL) {
    return null;
  }

  // const posterURL = movie?.poster ? movie.poster : defaultPoster;
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
