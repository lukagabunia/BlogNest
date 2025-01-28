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

// Mobile menu functionality
const mobileView = document.querySelector(".mobile-view");
const mobileViewImg = document.querySelector(".mobile-view img");
const nav = document.querySelector("header nav");

mobileView.addEventListener("click", (event) => {
  event.preventDefault();
  const isActive = nav.classList.toggle("active");
  mobileViewImg.style.transform = isActive ? "rotate(90deg)" : "rotate(0deg)";
});

// Close the mobile menu when clicking outside
document.addEventListener("click", (event) => {
  if (!mobileView.contains(event.target) && !nav.contains(event.target)) {
    nav.classList.remove("active");
    mobileViewImg.style.transform = "rotate(0deg)";
  }
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
