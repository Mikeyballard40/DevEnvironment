import React, { useEffect } from 'react';
import "./record.css";

export function Record() {
  useEffect(() => {
    loadScores();
  }, []);

  async function loadScores() {
    let userCounts = {};

    const tableBody = document.querySelector('#record');
    const thisUser = localStorage.getItem("record")
    console.log(thisUser);

    try {
      const response = await fetch(`/api/loadScores`);
      userCounts = await response.json();
      console.log(userCounts);
      localStorage.setItem('scores', JSON.stringify(userCounts));
  
      tableBody.innerHTML = '';
      let counter = 1;
  
      userCounts.sort((a, b) => b.score - a.score);
  
      for (const i of userCounts) {
        const place = document.createElement('td');
        const nameUser = document.createElement('td');
        const count = document.createElement('td');
  
        place.textContent = counter;
        nameUser.textContent = i.name;
        count.textContent = i.score;
  
        const row = document.createElement('tr');
        row.appendChild(place);
        row.appendChild(nameUser);
        row.appendChild(count);
  
        tableBody.appendChild(row);
  
        counter = counter + 1;
      }
    } catch (error) {
      console.error('Error loading scores:', error);
    }
  }
      
  // configureWebSocket();
   
  
  
  function additionalFunction(userCounts, score){
    if (userCounts[score.name]) {
      userCounts[score.name] += 1;
    } else {
      userCounts[score.name] = 1;
    }
    return userCounts;
  };
  
  
  function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onopen = (event) => {
      this.displayMsg('system', 'game', 'connected');
    };
    this.socket.onclose = (event) => {
      this.displayMsg('system', 'game', 'disconnected');
    };
    this.socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === GameEndEvent) {
        this.displayMsg('player', msg.from, `scored ${msg.value.score}`);
      } else if (msg.type === GameStartEvent) {
        this.displayMsg('player', msg.from, `started a new game`);
      }
    };
  }
  
  function displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div className="event"><span className="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }
  
  function broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    this.socket.send(JSON.stringify(event));
  }
  
  loadScores();
  
  
  


  return (
    <main className='container-fluid text-center'>
      <h1>LEADERBOARD</h1>
      <table className="table table-warning table-striped-columns">
              <thead className="table-dark">
                <tr>
                <th>#</th>
                <th className="Name">Name</th>
                <th className="Record">Record</th>
                </tr>
              </thead>
              <tbody id="record"></tbody>
      </table>    
    </main>
  );
}