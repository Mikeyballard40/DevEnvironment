function login() {
    const name = document.querySelector("#email");
    localStorage.setItem("userName", name.value);
    window.location.href = "calendar.html";
  }