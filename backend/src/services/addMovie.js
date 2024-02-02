const { MovieDAO } = require("../data_access");
const { makeMovie } = require("../domain/Movies");

exports.addMovie = async (movieInfo) => {
  const movie = makeMovie(movieInfo);
  return await MovieDAO.insertOne(movie);
};
