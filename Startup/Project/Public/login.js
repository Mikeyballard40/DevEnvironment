function login() {
    const name = document.querySelector("#email");
    localStorage.setItem("userEmail", name.value);
    console.log(name.value);
    window.location.href = "calendar.html";
  }


//***************************** Authentic user login ***************************** */

async function userLog(){
  const Email = document.querySelector("#email").value
  const Password = document.querySelector("#password").value
  const response = await fetch('/api/auth/userLogin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email: Email, password: Password})
  });
  if(response.status === 200){
    console.log("Working");
    localStorage.setItem("User", JSON.stringify({email: Email}));
    window.location.href = "calendar.html";
  }else{
    console.log(Email);
    const body = await response.json();
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
}

//***************************** Authentic user login ***************************** */
