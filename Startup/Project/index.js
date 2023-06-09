const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const app = express();
const DBR = require('./data.js');
const userCounts = {};

const authCookieName = 'token';

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);



// check Username
apiRouter.get('/scores/:userEmail', async (_req, res) => {
    // console.log(_req.params.username);
    const TorF = await DBR.locate(_req.params.userEmail);
    // console.log(TorF); // working correctly - returns an array of objects that fit the search
    res.send(TorF);
  });

  apiRouter.get('/check/:email', async (_req, res) => {
    // console.log(_req.params.username);
    const TorF = await DBR.locateEmail(_req.params.email);
    // console.log(TorF); // working correctly - returns an array of objects that fit the search
    res.send(TorF);
  });

  apiRouter.get('/logCheck/:userEmail', async (_req, res) => {
    // console.log(_req.params.username);
    const TorF = await DBR.locate(_req.params.userEmail);
    // console.log(TorF); // working correctly - returns an array of objects that fit the search
    res.send(TorF);
  });



//***************************** authentic user creation and error message ************************************ */

apiRouter.post('/auth/createAcc', async (req, res) => {
  // console.log(req.body.email); //working
  const apex = await DBR.locate(req.body.email);
  console.log(apex);
  if (apex.length > 0) {
    console.log("FAILED")
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DBR.createUser(req.body.name, req.body.email, req.body.password, req.body.score);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

//***************************** authentic user creation and error message *************************************** */

apiRouter.get('/loadScores', async (_req, res) => {
  const prof = await DBR.lScores();
  // console.log(prof);
  res.send(prof);
})
  
// SubmitScore
apiRouter.post('/score', async (req, res) => {
  const {name, email, password, score} = req.body;
  let rez;
  if (score >= 1){
    rez = await DBR.updateScore(req.body);
    // console.log(rez);
    res.send({ name: name, email: email, password: password, score: score });
  } else {
    rez = await DBR.addScore(req.body);
    res.send(rez);
  }

})




// apiRouter.post('/score', (req, res) => {
//   score = req.body;
//   // console.log("score");
//   if(score.score > 1){ 
//     returnScore = DBR.updateScore(score);
//   } else {
//     returnScore = DBR.addScore(score);
//   }


// apiRouter.post('/score', async (req, res) => {
//   const { name, email, password, score } = req.body;
  
//   // Check if the user already exists in the database
//   const existingUser = await scoreCollection.findOne({ name: name });
//   if (existingUser) {
//     const updatedScore = existingUser.score + 1;
//     await scoreCollection.updateOne({ name: name }, { $set: { score: updatedScore } });
//     res.send({ name: name, score: updatedScore });
//   } else {
//     const result = await scoreCollection.insertOne({ name: name, email: email, password: password, score: score });
//     res.send(result.ops[0]);
//   }
// });


















// // console.log(returnScore);
// res.send(returnScore);
// });

apiRouter.get('/username', (_req, res) => {
  // console.log(userCounts);
    res.send(userCounts);
  });



//I will need 3: 1 for login and 2 for social
//get and post
//create a post request to server when someone records a workout. 
// create a retrieve request from server when displaying table

// { "name" : "someName" }, // find a document with that filter
//             { $set: { "name" : "newName" } }



// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });



