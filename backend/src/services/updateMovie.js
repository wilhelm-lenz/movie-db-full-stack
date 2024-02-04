const { MovieDAO } = require("../data_access");
const asMovieListItem = (movie) => {
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

exports.updateMovie = async (movieId, updateData) => {
  const updatedMovie = await MovieDAO.updateById(movieId, updateData);
  return asMovieListItem(updatedMovie);
};
