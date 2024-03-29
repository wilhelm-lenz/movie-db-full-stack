import "./FavoriteList.scss";

import { useContext, useEffect } from "react";
import { MovieContext } from "../../contextes/MovieContext";
import FavoriteListItem from "../favoriteListItem/FavoriteListItem";

const FavoriteList = () => {
  const { favoriteMovies, setFavoriteMovies } = useContext(MovieContext);
  const localURL = import.meta.env.VITE_BACKAND_URL;

  const getAllFavoriteMovies = async () => {
    const res = await fetch(`${localURL}/api/v1/favorites`);
    const dataObj = await res.json();
    const { status, data, error } = dataObj;
    if (status !== "success") console.log(error);
    else setFavoriteMovies(data.favoriteMovies);
  };

  useEffect(() => {
    getAllFavoriteMovies();
  }, []);

  if (!favoriteMovies) {
    return null;
  }

  return (
    <section className="section-favorite-movies container">
      <h2 className="heading-secondary">My favorites</h2>
      <ul className="favorite-movie-list">
        {favoriteMovies?.map((movie, index) => (
          <FavoriteListItem key={favoriteMovies[index]._id} movie={movie} />
        ))}
      </ul>
    </section>
  );
};

export default FavoriteList;
