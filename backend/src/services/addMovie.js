const { MovieDAO } = require("../data_access");

const asFavoriteListItem = (movie) => {
  return {
    _id: movie._id,
    poster: movie.poster,
    title: movie.title,
    director: movie.director,
    plot: movie.description,
    year: movie.year,
    genres: movie.genres,
    tomato: movie.tomato,
    runtime: movie.runtime,
  };
};

exports.addMovie = async (movieInfo) => {
  const movie = asFavoriteListItem(movieInfo);
  return await MovieDAO.insertOne(movie);
};
