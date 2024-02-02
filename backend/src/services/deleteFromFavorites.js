const { FavoriteDAO } = require("../data_access");

exports.deleteFromFavorites = async (movieId) => {
  const movie = await FavoriteDAO.deletById(movieId);
  return movie;
};
