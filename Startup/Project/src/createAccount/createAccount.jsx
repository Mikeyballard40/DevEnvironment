import React from 'react';
import {Link} from 'react-router-dom';


export function CreateAccount() {

  async function createAcc(){
    const Name = document.querySelector("#Name").value
    const Email = document.querySelector("#email").value
    const Password = document.querySelector("#password").value
    const user = {name: Name, email: Email, password: Password, score: 0};
    // console.log(user);
    const ftc = await fetch('api/auth/createAcc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });
    
    if(ftc.ok){
      localStorage.setItem("User", JSON.stringify({email: Email}));
      // window.location.href = "login.jsx";
    }else{
      console.log(Email);
      const body = await ftc.json();
      const modalEl = document.querySelector('#msgModal');
      modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
      const msgModal = new bootstrap.Modal(modalEl, {});
      msgModal.show();
    }
  }

  return (
    
    <main className='container-fluid text-center'>
      <div>
      <h1>Welcome to Gym Time</h1>
      <p></p>
      <p>Please fill out the following</p>
      <div>
        <label htmlFor="Name">Name: </label>
        <input type="Name" id="Name" name="varName" /> 
        <p></p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="varEmail" />
        <p></p>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="varPassword" />
        <p></p>
        <label htmlFor="password">Confirm Password: </label>
        <input type="password" id="Cpassword" name="varCPassword" />
        <p></p>
        {/* <button onClick={createAcc}>Submit</button> */}
        <Link type="button" onClick={createAcc} class="nav-link" to="/">Create Account</Link>
      </div>

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
    </main>
  );
}



