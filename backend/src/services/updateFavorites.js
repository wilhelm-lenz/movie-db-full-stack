const { FavoriteDAO } = require("../data_access");
const asFavoriteListItem = (movie) => {
  return {
    _id: movie._id,
    poster: movie.poster,
    title: movie.title,
    director: movie.director,
    inFavorites: true,
  };
};

exports.updateFavorites = async (movieId, updateData) => {
  console.log("!!!!!!!!!!!!!!!", updateData);
  const newUpdateData = asFavoriteListItem(updateData);
  const updatedMovie = await FavoriteDAO.updateById(movieId, newUpdateData);
  return updatedMovie;
};
