function login() {
    const name = document.querySelector("#email");
    localStorage.setItem("userEmail", name.value);
    console.log(name.value);
    window.location.href = "calendar.html";
  }