

//***************************** authentic user creation and error message ************************************ */

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
    window.location.href = "index.html";
  }else{
    console.log(Email);
    const body = await ftc.json();
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
}

//***************************** authentic user creation and error message ************************************ */


