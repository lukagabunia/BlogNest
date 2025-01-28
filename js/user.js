const logOutBtn = document.querySelector(".log-out-btn");

logOutBtn.addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "./login.html";
});
