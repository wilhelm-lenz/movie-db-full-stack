const { asFavoriteListItem } = require("./desiredDataOutputForFavorites");
const { asMovieListItem } = require("./desiredDataOutputForMovies");
const { parsingDataFromBody } = require("./parsingDataFromBody");

module.exports = {
  parsingDataFromBody,
  asFavoriteListItem,
  asMovieListItem,
};
