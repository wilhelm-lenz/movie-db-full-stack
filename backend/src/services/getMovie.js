const { MovieDAO } = require("../data_access");

exports.getMovie = async (movieId) => {
  const movie = await MovieDAO.findById(movieId);
  return movie;
};
