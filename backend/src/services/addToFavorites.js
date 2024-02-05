const { FavoriteDAO } = require("../data_access");
const { asFavoriteListItem } = require("../helpers");

exports.addToFavorites = async (movieInfo) => {
  const newMovieInfo = asFavoriteListItem(movieInfo);
  const insertedMovie = await FavoriteDAO.insertOne(newMovieInfo);
  return insertedMovie;
};
