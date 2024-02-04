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
    const isFav = favoriteMovies.some((movie) => movie._id === movieId);
    setIsInFavorites(isFav);
    console.log(isFav);
  }, [movieId]);

  const handleAddToFavoriteClick = async () => {
    try {
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
      setFavoriteMovies([...favoriteMovies, data.favoriteMovies]);

      setIsInFavorites(true);
    } catch (error) {
      console.log("Error when retrieving favorite film:", error);
    }
  };

  const handleAddDeleteFromFavoriteClick = async () => {
    try {
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
      setFavoriteMovies(
        favoriteMovies.filter((movie) => movie._id !== movieId)
      );
      setIsInFavorites(false);
    } catch (error) {
      console.log("Error when retrieving favorite film:", error);
    }
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
