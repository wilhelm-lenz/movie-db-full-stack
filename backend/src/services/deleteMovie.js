const { MovieDAO } = require("../data_access");

exports.deleteMovie = async (movieId) => {
  const movie = await MovieDAO.deletById(movieId);
  return movie;
};
