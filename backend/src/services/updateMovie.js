const { MovieDAO } = require("../data_access");

exports.updateMovie = async (movieId, updateData) => {
  const updatedMovie = await MovieDAO.updateById(movieId, updateData);
  return updatedMovie;
};
