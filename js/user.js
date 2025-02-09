const userFullName = document.querySelector(".user-fullName");
const userUserName = document.querySelector(".user-username");
const userEmail = document.querySelector(".user-email");
const userSex = document.querySelector(".user-sex");
const logOutButton = document.querySelector(".log-out-btn");

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser) {
  window.location.href = "./login.html"; // Redirect if not logged in
} else {
  userFullName.textContent = loggedInUser.fullName;
  userUserName.textContent = loggedInUser.userName;
  userEmail.textContent = loggedInUser.email;
  userSex.textContent = loggedInUser.sex;
}

logOutButton.addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");
  window.location.href = "./login.html";
});
