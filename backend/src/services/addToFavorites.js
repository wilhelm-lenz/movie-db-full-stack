const { FavoriteDAO } = require("../data_access");

const asFavoriteListItem = (movie) => {
  return {
    _id: movie._id,
    poster: movie.poster,
    title: movie.title,
    director: movie.director,
  };
};

exports.addToFavorites = async (movieInfo) => {
  const newMovieInfo = asFavoriteListItem(movieInfo);
  const insertResult = await FavoriteDAO.insertOne(newMovieInfo);
  return insertResult;
};
