function getPlayerName() {
    const user = JSON.parse(localStorage.getItem("User"));
    console.log(user);
    const userName = localStorage.getItem('userName') ?? 'Mystery player';
    // console.log(user);
    if (user.email === userName){
      return user.name;
    } else {
      return userName;
    }
  
   //return localStorage.getItem('userName') ?? 'Mystery player';
      
    }
  
  
  const playerNameEl = document.querySelector('.user-name');
  playerNameEl.textContent = this.getPlayerName();
  
  const scoresText = localStorage.getItem('scores');
      if (scoresText) {
        scores = JSON.parse(scoresText);
      }
  
  async function AddToWorkout() {
      let scores;
      const userName = this.getPlayerName();
      const user = JSON.parse(localStorage.getItem("User"));
      const userScore = localStorage.getItem('record');
      const response = await fetch('/api/score', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({name: userName}),
      });


      localStorage.setItem("record", JSON.stringify(response));
      window.location.href = "SelfRecord.html";
  }
  
  

  
  
  //once you select the button it will add 1 to your record. 
  //that record is stored and accessed from the social.html file
  