const { ObjectId } = require("mongodb");
const { getDb } = require("../data_access/getDb");
const { makeMovie } = require("../domain/Movies");

exports.findAllMovies = async () => {
  const db = await getDb();
  const moviesArray = await db.collection("movieDetails").find().toArray();
  return moviesArray;
};

exports.insertOne = async (movieNewInfo) => {
  const db = await getDb();
  const { acknowledged, insertedId } = await db
    .collection("movieDetails")
    .insertOne(movieNewInfo);

  if (acknowledged) return makeMovie({ ...movieNewInfo, _id: insertedId });
  else return null;
};

exports.findById = async (movieId) => {
  const db = await getDb();
  const movie = await db
    .collection("movieDetails")
    .findOne({ _id: ObjectId.createFromHexString(movieId) });
  if (!movie) throw new Error("Movie with this _id dosen't exist");
  return makeMovie(movie);
};

exports.updateById = async (movieId, updateData) => {
  const db = await getDb();

  const movie = await db
    .collection("movieDetails")
    .findOne({ _id: ObjectId.createFromHexString(movieId) });

  if (!movie) throw new Error("Movie with this _id dosen't exist");

  const { acknowledged } = await db
    .collection("movieDetails")
    .replaceOne(
      { _id: ObjectId.createFromHexString(movieId) },
      { ...updateData, _id: ObjectId.createFromHexString(movieId) }
    );

  if (!acknowledged) return null;

  return makeMovie(movie);
};

exports.deletById = async (movieId) => {
  const db = await getDb();

  const movie = await db
    .collection("movieDetails")
    .findOne({ _id: ObjectId.createFromHexString(movieId) });

  if (!movie) throw new Error("Movie with this _id dosen't exist");

  const { acknowledged } = await db
    .collection("movieDetails")
    .deleteOne({ _id: ObjectId.createFromHexString(movieId) });

  if (!acknowledged) return null;

  return makeMovie(movie);
};
