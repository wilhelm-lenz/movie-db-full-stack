const { Db, MongoClient } = require("mongodb");

const url = process.env.MONGODB_URL || "mongodb://localhost:27017/movieDb";
const client = new MongoClient(url);

let _db;

exports.getDb = async () => {
  if (_db && _db instanceof Db) return _db;
  await client.connect();
  const db = client.db("movieDb");
  _db = db;
  return db;
};
