const { addMovie } = require("./addMovie");
const { addToFavorites } = require("./addToFavorites");
const { deleteFromFavorites } = require("./deleteFromFavorites");
const { deleteMovie } = require("./deleteMovie");
const { getAllFavorites } = require("./getAllFavorites");
const { getAllMovies } = require("./getAllMovies");
const { getMovie } = require("./getMovie");
const { updateMovie } = require("./updateMovie");
const { updateFavorites } = require("./updateFavorites");

const MovieService = {
  getAllMovies,
  addMovie,
  updateMovie,
  deleteMovie,
  deleteFromFavorites,
  addToFavorites,
  getAllFavorites,
  getMovie,
  updateFavorites,
};

module.exports = {
  MovieService,
};
