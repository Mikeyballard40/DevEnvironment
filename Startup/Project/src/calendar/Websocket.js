
export function configureWebSocket() {
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
      `<div class="event"><span class="record-event">${user}</span> ${msg}</div>` + chatText.innerHTML;
  }

  function broadcastEvent(user) {
    const event = {
      user: user
    };
    this.socket.send(JSON.stringify(user));
  }

