/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./FavoritesButton.scss";
import { MovieContext } from "../../contextes/MovieContext";
import PlusIcon from "../svg/PlusIcon";
import MinusIcon from "../svg/MinusIcon";

const FavoritsButton = ({ btnText }) => {
  const { isInFavorites, setIsInFavorites } = useContext(MovieContext);
  return (
    <button
      className="favorite-btn"
      onClick={() => setIsInFavorites(!isInFavorites)}
    >
      {isInFavorites ? (
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
