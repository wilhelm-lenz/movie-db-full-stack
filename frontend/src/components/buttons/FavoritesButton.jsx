/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import "./FavoritesButton.scss";
import { MovieContext } from "../../contextes/MovieContext";
import PlusIcon from "../svg/PlusIcon";
import MinusIcon from "../svg/MinusIcon";

const FavoritsButton = ({ btnText, movieId }) => {
  const { favoriteMovies, setFavoriteMovies, isInFavorites, setIsInFavorites } =
    useContext(MovieContext);

  useEffect(() => {
    const isFav = favoriteMovies.find((movie) => movie._id === movieId);
    setIsInFavorites(isFav);
  }, [favoriteMovies, movieId]);

  const handleAddToFavoriteClick = async () => {
    const res = await fetch(
      `http://localhost:8000/api/v1/favorites/${movieId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ movieId }),
      }
    );
    const dataObj = await res.json();
    const { status, data, error } = dataObj;
    if (status !== "success") console.log(error);
    else setFavoriteMovies([...favoriteMovies, data.favoriteMovies]);

    setIsInFavorites(!isInFavorites);
  };

  const handleAddDeleteFromFavoriteClick = async () => {
    const res = await fetch(
      `http://localhost:8000/api/v1/favorites/${movieId}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ movieId }),
      }
    );
    const dataObj = await res.json();
    const { status, error } = dataObj;
    if (status !== "success") console.log(error);
    setIsInFavorites(!isInFavorites);
  };

  return (
    <button
      className="favorite-btn"
      onClick={
        !isInFavorites
          ? handleAddToFavoriteClick
          : handleAddDeleteFromFavoriteClick
      }
    >
      {!isInFavorites ? (
        <span className="btn-add-remove-from-favorites">
          <PlusIcon />
        </span>
      ) : (
        <span className="btn-add-remove-from-favorites">
          <MinusIcon />
        </span>
      )}

      {btnText}
    </button>
  );
};

export default FavoritsButton;
