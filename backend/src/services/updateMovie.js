const { MovieDAO } = require("../data_access");
const { asMovieListItem } = require("../helpers");

exports.updateMovie = async (movieId, updateData) => {
  const updatedMovie = await MovieDAO.updateById(movieId, updateData);
  return asMovieListItem(updatedMovie);
};
