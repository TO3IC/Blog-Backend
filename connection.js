const mongodb = require('mongodb');
const client = new mongodb.MongoClient(process.env.APIKEY)
module.exports = client;