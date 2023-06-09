
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
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


 async function locate(uEmail) {
    const query = { "email": uEmail };
    // console.log(query); //working correctly
    const options = {};
    const cursor = scoreCollection.find(query, options);
    const Arr = await cursor.toArray();
    console.log("Arr");
    console.log(Arr); //working correclty = []
    return Arr;
  }

  function locateEmail(uEmail) {
    const query = { "email": uEmail };
    const options = {};
    const cursor = scoreCollection.find(query, options);
    const Arr = cursor.toArray();
    return Arr;
  }

//***************************** authentic user creation and error message ************************************ */

async function createUser(name, email, password, score) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    name: name,
    email: email,
    score: score,
    password: passwordHash,
    token: uuid.v4(),
  };
  await scoreCollection.insertOne(user);

  return user;
}

//***************************** authentic user creation and error message ************************************ */




 module.exports = { updateScore, locate, lScores, locateEmail, createUser };
