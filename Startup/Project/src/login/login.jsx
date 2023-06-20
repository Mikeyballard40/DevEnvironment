import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link, useNavigate} from 'react-router-dom';
import './main.css'


export function Login() {
  let loggedIn;


  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();


  // function login() {
  //   const name = document.querySelector("#email");
  //   localStorage.setItem("userEmail", name.value);
  //   console.log(name.value);
  //   window.location.href = "calendar.html";
  // }


//***************************** Authentic user login ***************************** */

async function userLog(){
  const response = await fetch('/api/auth/userLogin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email: userName, password: password})
  });
  if(response.status === 200){
    loggedIn = true;
    
    localStorage.setItem("User", userName);
    navigate('/calendar');
  }else{
    loggedIn = false;
    const body = await response.json();
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
    navigate('/');
  }
}



//***************************** Authentic user login ***************************** */
  console.log(loggedIn);
  return (
    <main className='container-fluid text-center'>
      <div>
        <h1>Welcome to Gym Time</h1>
        <p>Please login or create an account</p>
        <div>
          <label htmlFor="email">Email: </label>
          <input onChange={(e) => setUserName(e.target.value)} type="email" id="email" placeholder="gymtime@gmail.com" />
          <p></p>
          
          <label htmlFor="password">Password: </label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="******" />
          <p></p>
          <Link class="nav-link" onClick={userLog}>login</Link>

          <div className="modal fade" id="msgModal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content text-dark">
                <div className="modal-body"></div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
            <Link class="nav-link" to="/createAccount">Create Account</Link>{' '}     
      </div>
    </main>
  );
}