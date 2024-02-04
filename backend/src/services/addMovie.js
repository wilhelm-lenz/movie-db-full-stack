const { MovieDAO } = require("../data_access");

const asFavoriteListItem = (movie) => {
  return {
    _id: movie._id,
    poster: movie.poster,
    title: movie.title,
    director: movie.director,
    plot: movie.plot,
    year: movie.year,
    genres: movie.genres,
    tomato: movie.tomato,
    runtime: movie.runtime,
  };
};

exports.addMovie = async (movieInfo) => {
  console.log(movieInfo);
  const movie = await MovieDAO.insertOne(movieInfo);
  console.log(asFavoriteListItem(movie));
  return asFavoriteListItem(movie);
};
