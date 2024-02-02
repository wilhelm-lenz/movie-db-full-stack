const { ObjectId } = require("mongodb");
const { getDb } = require("../data_access/getDb");
const { makeMovie } = require("../domain/Movies");

exports.findAllFavoriteMovies = async () => {
  const db = await getDb();
  const moviesArray = await db.collection("favoriteMovies").find().toArray();
  return moviesArray;
};

exports.insertOne = async (movieNewInfo) => {
  const db = await getDb();
  const { acknowledged, insertedId } = await db
    .collection("favoriteMovies")
    .insertOne(movieNewInfo);
  if (acknowledged) return makeMovie({ ...movieNewInfo });
  else return null;
};

exports.deletById = async (movieId) => {
  const db = await getDb();

  const movie = await db
    .collection("favoriteMovies")
    .findOne({ _id: ObjectId.createFromHexString(movieId) });

  if (!movie) throw new Error("Movie with this _id dosen't exist");

  const { acknowledged } = await db
    .collection("favoriteMovies")
    .deleteOne({ _id: ObjectId.createFromHexString(movieId) });

  if (!acknowledged) return null;

  return makeMovie(movie);
};
