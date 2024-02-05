const { FavoriteDAO } = require("../data_access");
const { asFavoriteListItem } = require("../helpers");

exports.getAllFavorites = async () => {
  const movies = await FavoriteDAO.findAllFavoriteMovies();
  return movies.map((movie) => asFavoriteListItem(movie));
};
