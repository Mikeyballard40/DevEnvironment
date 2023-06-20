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
    configureWebSocket();



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
          const responseBody = { name: userName, email: userEmail, password: userPassword, score: userScore };
          localStorage.setItem("record", JSON.stringify(responseBody));
          broadcastEvent(userName);
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
          broadcastEvent(userName);
          window.location.href = "SelfRecord.html";
        }

    }


  function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onopen = (event) => {
      const msg = ' successfully logged in'
      this.displayMsg('You', msg);
    };
    this.socket.onclose = (event) => {
      this.displayMsg('No user');
    };
    this.socket.onmessage = async (event) => {
    
      const user = JSON.parse(await event.data.text());
      const msg = " recorded a workout";
      console.log(msg);
      this.displayMsg( user, msg );
    };
  }

  function displayMsg(user, msg) {
   
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div className="event"><span className="record-event">${user}</span> ${msg}</div>` + chatText.innerHTML;
  }

  function broadcastEvent(user) {
    const event = {
      user: user
    };
    this.socket.send(JSON.stringify(user));
  }


  
  
  //once you select the button it will add 1 to your record. 
  //that record is stored and accessed from the social.html file
  