const userFullName = $(".user-fullName");
const userUserName = $(".user-username");
const userEmail = $(".user-email");
const userSex = $(".user-sex");
const logOutButton = $(".log-out-btn");
const editButton = $(".edit-btn");
const cancelButton = $(".cancel-btn");

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser) {
  window.location.href = "/login"; // Redirect if not logged in
} else {
  userFullName.text(loggedInUser.fullName);
  userUserName.text(loggedInUser.userName);
  userEmail.text(loggedInUser.email);
  userSex.text(loggedInUser.sex);
}

logOutButton.on("click", function () {
  localStorage.removeItem("loggedInUser");
  localStorage.removeItem("favAmount");
  localStorage.removeItem("favoritedCards");
  window.location.href = "/login";
});

editButton.on("click", function () {
  const editContainer = $(this).parent().next();
  const cancelButton = $(this).next();

  $(this).hide();
  editContainer.show();
  cancelButton.css("display", "inline-block");
});

cancelButton.on("click", function () {
  const editContainer = $(this).parent().next();
  const editButton = $(this).prev();

  $(this).hide();
  editContainer.hide();
  editButton.show();
});
