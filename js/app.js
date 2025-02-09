// Accordion functionality, with arrow
const items = document.querySelectorAll(".accordion-item");

items.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const body = item.querySelector(".accordion-body");

  header.addEventListener("click", () => {
    item.classList.toggle("active");
    body.classList.toggle("active");
  });
});

// Check if the user is logged in
const isLoggedIn = localStorage.getItem("loggedInUser");

if (isLoggedIn) {
  const authContainer = document.querySelector(".authorization");
  const userImage = document.querySelector(".user-container");

  // Hide the login and signup links if they exist
  if (authContainer) authContainer.style.display = "none";

  // Show the user image if it exists
  if (userImage) userImage.style.display = "block";
}

// favorite icon functionality(waiting fo future updates)
const imgContainer = document.querySelectorAll(".img-container");

imgContainer.forEach((item) => {
  const favIcon = item.querySelector(".fav-icon");

  favIcon.addEventListener("click", () => {
    console.log("clicked");
  });
});
