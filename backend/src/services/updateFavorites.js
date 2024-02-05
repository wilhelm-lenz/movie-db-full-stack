const { FavoriteDAO } = require("../data_access");
const { asFavoriteListItem } = require("../helpers");

exports.updateFavorites = async (movieId, updateData) => {
  const updatedMovie = await FavoriteDAO.updateById(movieId, updateData);
  return asFavoriteListItem(updatedMovie);
};
