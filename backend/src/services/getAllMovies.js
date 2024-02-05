const { MovieDAO } = require("../data_access");
const { asMovieListItem } = require("../helpers");

exports.getAllMovies = async () => {
  const movies = await MovieDAO.findAllMovies();
  return movies.map((movie) => asMovieListItem(movie));
};
