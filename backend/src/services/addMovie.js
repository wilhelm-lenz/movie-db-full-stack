const { MovieDAO } = require("../data_access");
const { asMovieListItem } = require("../helpers");

exports.addMovie = async (movieInfo) => {
  const movie = await MovieDAO.insertOne(movieInfo);
  return asMovieListItem(movie);
};
