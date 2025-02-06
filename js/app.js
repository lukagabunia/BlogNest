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
const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

if (isLoggedIn) {
  const authContainer = document.querySelector(".authorization");
  const userImage = document.querySelector(".user-container");

  // Hide the login and signup links if they exist
  if (authContainer) authContainer.style.display = "none";

  // Show the user image if it exists
  if (userImage) userImage.style.display = "block";
}
