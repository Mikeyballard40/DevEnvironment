
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

async function addScore(score) {
  console.log(score);
  const result = await scoreCollection.insertOne(score);
  return result;
}

async function updateScore(score) {
  // console.log("updateScore");
  const filter = { name: score.name, email: score.email, password: score.password };
  // console.log(filter);
  const update = { $set: { score: score.score } };
  const result = await scoreCollection.updateOne(filter, update);
  // console.log(result);
  return result;
}

 function lScores(){
  const query = {};
  const options = {};
  const cursor =  scoreCollection.find(query, options);
  return cursor.toArray();
}


 function locate(uEmail) {
    const query = { "email": uEmail };
    // console.log(query); //working correctly
    const options = {};
    const cursor = scoreCollection.find(query, options);
    const Arr = cursor.toArray();
    //console.log(Arr); //working correclty
    return Arr;
  }

  function locateEmail(uEmail) {
    const query = { "email": uEmail };
    const options = {};
    const cursor = scoreCollection.find(query, options);
    const Arr = cursor.toArray();
    return Arr;
  }


 module.exports = { addScore, updateScore, locate, lScores, locateEmail };
