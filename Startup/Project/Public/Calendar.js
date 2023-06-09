async function getPlayerName() {
    const tempUser = await getData();
    // console.log(tempUser);

    // console.log(userEmail);

    // console.log(tempUser[0].name);
    if (tempUser.length == 0){
      return "Guest";
    } else {
      return tempUser[0].name;
    }
  
   //return localStorage.getItem('userName') ?? 'Mystery player';
      
    }
  
    async function updatePlayerName() {
      const playerNameEl = document.querySelector('.user-name');
      const playerName = await getPlayerName();
      playerNameEl.textContent = playerName;
    }
    
    updatePlayerName();



  async function getData(){
        const userEmail = localStorage.getItem("User");
        console.log(userEmail);

          const check = await fetch(`api/scores/${userEmail}`);
          let scores = await check.json();
          console.log(scores);
          return scores;
  };


      async function AddToWorkout() {
        let scores = await getData();
        console.log(scores);
        
        // console.log(scores); // an array of objects of individuals.
        if(scores.length != 0){
          let user = scores[0];
          console.log(user);
        
          const userName = user.name;
          const userEmail = user.email;
          const userPassword = user.password;
          let response;
          let userScore;
        
          // Check if the user exists in the database
          if (user.score == 0) {
            userScore = 1;
            // Insert a new user with initial score
            response = await fetch('/api/score', {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify({ name: userName, email: userEmail, password: userPassword, score: userScore }),
            });
          } else {
            userScore = user.score + 1;
            // Update the user's score
            response = await fetch('/api/score', {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify({ name: userName, email: userEmail, password: userPassword, score: userScore }),
            });
          }

          console.log(userScore);
        
          const responseBody = { name: userName, email: userEmail, password: userPassword, score: userScore };
          console.log(responseBody);
          localStorage.setItem("record", JSON.stringify(responseBody));
          window.location.href = "SelfRecord.html";
        }else{
          let user = scores;
          
        
          const userName = user
          const userPassword = "";
          let response;
          let userScore;
        
          
            userScore = 1;
        
          const responseBody = { name: userName, email: userName, password: userPassword, score: userScore };
          console.log(responseBody);
          localStorage.setItem("record", JSON.stringify(responseBody));
          window.location.href = "SelfRecord.html";
        }
    }

  
  
  //once you select the button it will add 1 to your record. 
  //that record is stored and accessed from the social.html file
  