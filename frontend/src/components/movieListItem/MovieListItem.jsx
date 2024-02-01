/* eslint-disable react/prop-types */
import { useState } from "react";
import "./MovieListItem.scss";

const defaultPoster = "../../../public/images/defaultPoster.jpg";

const MovieListItem = ({ movie }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  if (!movie || !movie.poster) {
    return null;
  }

  const handleImageLoaded = () => {
    setImageLoaded(true); // Setzt den Status, wenn das Bild erfolgreich geladen wurde
  };

  const handleImageError = (e) => {
    e.target.src = defaultPoster; // Setzt das Bild auf das Standardbild, wenn ein Fehler auftritt
  };
  const posterURLArray = movie.poster?.split(":");
  if (posterURLArray && posterURLArray[0] !== "https") {
    posterURLArray[0] = "https";
  }
  const posterURL = posterURLArray?.join(":");
  console.log(posterURL);
  // const posterURL = movie?.poster ? movie.poster : defaultPoster;
  return (
    <li className="movie-list-item">
      {!imageLoaded && <div>Loading...</div>}
      {/* Anzeigen eines Ladeindikators, solange das Bild nicht geladen wurde */}
      <img
        src={posterURL || defaultPoster}
        alt={`image`}
        className="movie-list-item-img"
        onLoad={handleImageLoaded} // Event-Handler für erfolgreiches Laden
        onError={handleImageError} // Event-Handler für Fehler beim Laden
      />
      <span className="movie-list-item-title">{movie?.title}</span>
      <span className="movie-list-item-director">{movie?.director}</span>
    </li>
  );
};

export default MovieListItem;
