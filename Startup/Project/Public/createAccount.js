async function createAccount(){
    console.log("Name")
    const Name = document.querySelector("#Name").value
    const Email = document.querySelector("#email").value
    const Password = document.querySelector("#password").value
    const user = {name: Name, email: Email, password: Password, score: 0};
    // console.log(user);
    localStorage.setItem("User", JSON.stringify({name: Name, email: Email, password: Password, score: 0}))
    const ftc = await fetch('api/createAccount', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });
    console.log(ftc);
      // console.log(Name)
    window.location.href = "index.html";
}