
const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const user = new MongoClient(url);
const db = user.db('userProfiles');
const scoreCollection = db.collection('score');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await user.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});


// function getHighScores() {
//     const query = { score: {} };
//     const options = {
//       sort: { score: -1 },
//       limit: 10,
//     };
//     const cursor = scoreCollection.find(query, options);
//     return cursor.toArray();
//   }


// module.exports = {  };
