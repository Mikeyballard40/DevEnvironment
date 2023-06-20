import React from 'react';
import './Calendar.css'
import {Link} from 'react-router-dom';

export function Calendar() {



  async function getPlayerName() {
    const tempUser = await getData();

    if (tempUser.length == 0){
      return "Guest";
    } else {
      return tempUser[0].name;
    }
        
    }
    async function updatePlayerName() {
      const playerNameEl = document.querySelector('.user-name');
      const playerName = await getPlayerName();
      // playerNameEl.textContent = playerName;
    }
    

    updatePlayerName();
    // configureWebSocket();


  async function getData(){
        const userEmail = localStorage.getItem("User");

          const check = await fetch(`/api/scores/${userEmail}`);
          let scores = await check.json();
          return scores;
  };


      async function AddToWorkout() {
        let scores = await getData();
        
        if(scores.length != 0){
          let user = scores[0];
        
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
          // broadcastEvent(userName);
          // window.location.href = "SelfRecord.html";
        }else{
          let user = scores;
          
        
          const userName = user
          const userPassword = "";
          let response;
          let userScore;
        
          
            userScore = 1;
        
          const responseBody = { name: userName, email: userName, password: userPassword, score: userScore };
          localStorage.setItem("record", JSON.stringify(responseBody));
          broadcastEvent(userName);
          // window.location.href = "SelfRecord.html";
        }

    }


  // function configureWebSocket() {
  //   const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  //   this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
  //   this.socket.onopen = (event) => {
  //     const msg = ' successfully logged in'
  //     this.displayMsg('You', msg);
  //   };
  //   this.socket.onclose = (event) => {
  //     this.displayMsg('No user');
  //   };
  //   this.socket.onmessage = async (event) => {
    
  //     const user = JSON.parse(await event.data.text());
  //     const msg = " recorded a workout";
  //     console.log(msg);
  //     this.displayMsg( user, msg );
  //   };
  // }

  // function displayMsg(user, msg) {
   
  //   const chatText = document.querySelector('#player-messages');
  //   chatText.innerHTML =
  //     `<div className="event"><span class="record-event">${user}</span> ${msg}</div>` + chatText.innerHTML;
  // }

  // function broadcastEvent(user) {
  //   const event = {
  //     user: user
  //   };
  //   this.socket.send(JSON.stringify(user));
  // }


  // function createMessageArray() {
  //   const messageArray = [];
  //   for (const [i, event] of events.entries()) {
  //     let message = 'unknown';
  //     if (event.type === GameEvent.End) {
  //       message = `scored ${event.value.score}`;
  //     } else if (event.type === GameEvent.Start) {
  //       message = `started a new game`;
  //     } else if (event.type === GameEvent.System) {
  //       message = event.value.msg;
  //     }
  
  //     messageArray.push(
  //       <div key={i} className='event'>
  //         <span className={'player-event'}>{event.from.split('@')[0]}</span>
  //         {message}
  //       </div>
  //     );
  //   }
  //   return messageArray;
  // }


  
  

  return (
    <main className='container-fluid text-center'>
      <div className="Section">
        <table className="table table-striped-columns table-warning">
          <tbody>
          <tr className="table-dark">
            <th className="d">Sun</th>
            <th className="d">Mon</th>
            <th className="d">Tue</th>
            <th className="d">Wed</th>
            <th className="d">Thur</th>
            <th className="d">Fri</th>
            <th className="d">Sat</th>
          </tr>
          <tr className="week">
            <th className="day">31</th>
            <th className="day">01</th>
            <th className="day">02</th>
            <th className="day">03</th>
            <th className="day">04</th>
            <th className="day">05</th>
            <th className="day">06</th>
          </tr>
          <tr className="week">
            <th className="day">07</th>
            <th className="day">08</th>
            <th className="day">09</th>
            <th className="day">10</th>
            <th className="day">11</th>
            <th className="day">12</th>
            <th className="day">13</th>
          </tr>
          <tr className="week">
            <th className="day">14</th>
            <th className="day">15</th>
            <th className="day">16</th>
            <th className="day">17</th>
            <th className="day">18</th>
            <th className="day">19</th>
            <th className="day">20</th>
          </tr>
          <tr className="week">
            <th className="day">21</th>
            <th className="day">22</th>
            <th className="day">23</th>
            <th className="day">24</th>
            <th className="day">25</th>
            <th className="day">26</th>
            <th className="day">27</th>
          </tr>
          <tr className="week">
            <th className="day">28</th>
            <th className="day">29</th>
            <th className="day">30</th>
            <th className="day">01</th>
            <th className="day">02</th>
            <th className="day">03</th>
            <th className="day">04</th>
          </tr>
          </tbody>
        </table>
    
          <div className="button">
            <Link className="nav-link" onClick={AddToWorkout} to="/selfRecord">Record your workout</Link>
          </div>
          <p></p>
          <p> Not working out today? Record why </p>
          <label htmlFor="textarea"></label>
          <textarea id="textarea" name="varTextarea"></textarea>

      </div>
      {/* <div className="players">
        Updates
        <span className="player-name"></span>
        <div id="player-messages">{createMessageArray()}</div>
      </div> */}
    </main>
  );
}


