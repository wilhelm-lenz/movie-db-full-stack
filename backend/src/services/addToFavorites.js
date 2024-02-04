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

exports.addToFavorites = async (movieInfo) => {
  const newMovieInfo = await FavoriteDAO.insertOne(movieInfo);
  return asFavoriteListItem(newMovieInfo);
};
