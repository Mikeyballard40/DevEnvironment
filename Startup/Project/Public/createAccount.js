function createAccount(){
    console.log("Name")
    const Name = document.querySelector("#Name").value
    const Email = document.querySelector("#email").value
    const Password = document.querySelector("#password").value
    localStorage.setItem("User", JSON.stringify({name: Name, email: Email, password: Password}))
    console.log(Name)
    window.location.href = "index.html";
}