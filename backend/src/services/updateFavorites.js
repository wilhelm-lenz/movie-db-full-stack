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
  const updatedMovie = await FavoriteDAO.updateById(movieId, updateData);
  return asFavoriteListItem(updatedMovie);
};
