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
  localStorage.removeItem("favAmount");
  localStorage.removeItem("favoritedCards");
  window.location.href = "./login.html";
});

const editButtons = document.querySelectorAll(".edit-btn");
const cancelButtons = document.querySelectorAll(".cancel-btn");

editButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const editContainer = button.parentElement.nextElementSibling;
    const cancelButton = button.nextElementSibling;

    button.style.display = "none";
    editContainer.style.display = "block";
    cancelButton.style.display = "inline-block";
  });
});

cancelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const editContainer = button.parentElement.nextElementSibling;
    const editButton = button.previousElementSibling;

    button.style.display = "none";
    editContainer.style.display = "none";
    editButton.style.display = "block";
  });
});
