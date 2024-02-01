const { getDb } = require("../data_access/getDb");
const { makeMovie } = require("../domain/movies");

exports.findAllMovies = async () => {
  const db = await getDb();
  const moviesArray = await db.collection("movieDetails").find().toArray();
  return moviesArray.map((movie) => makeMovie(movie));
};
