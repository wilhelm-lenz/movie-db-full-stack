const { FavoriteDAO } = require("../data_access");

const asFavoriteListItem = (movie) => {
  return {
    _id: movie._id,
    poster: movie.poster,
    title: movie.title,
    director: movie.director,
    inFavorites: movie.inFavorites,
  };
};

exports.getAllFavorites = async () => {
  const movies = await FavoriteDAO.findAllFavoriteMovies();
  return movies.map((movie) => asFavoriteListItem(movie));
};
