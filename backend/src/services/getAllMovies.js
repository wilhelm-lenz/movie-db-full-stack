const { MovieDAO } = require("../data_access");

const asMovieListItem = (movie) => {
  return {
    _id: movie._id,
    poster: movie.poster,
    title: movie.title,
    director: movie.director,
    year: movie.year,
    genres: movie.genres,
    tomato: movie.tomato,
    description: movie.plot,
    runtime: movie.runtime,
  };
};

exports.getAllMovies = async () => {
  const movies = await MovieDAO.findAllMovies();
  return movies.map((movie) => asMovieListItem(movie));
};
