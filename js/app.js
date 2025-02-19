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

// Favorite functionality
const favAmountSpan = document.querySelector(".favorite .fav-amount");
let favCount = localStorage.getItem("favAmount");
favAmountSpan.textContent = favCount ? favCount : 0;
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("fav-icon")) {
    let currentFavCount = parseInt(favAmountSpan.textContent) + 1;
    favAmountSpan.textContent = currentFavCount;
    localStorage.setItem("favAmount", currentFavCount);
  }
});
