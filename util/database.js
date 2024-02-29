const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const dotenv = require("dotenv");
dotenv.config();
let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(process.env.MONGO_URL)
    .then((result) => {
      console.log("connected");
      _db = result.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
