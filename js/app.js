// Check if the user is logged in
const isLoggedIn = localStorage.getItem("loggedInUser");

if (isLoggedIn) {
  const authContainer = document.querySelector(".authorization");
  const userImage = document.querySelector(".user-container");

  if (authContainer) authContainer.style.display = "none";

  if (userImage) userImage.style.display = "block";
}

// Favorite functionality
const favAmountSpan = document.querySelector(".favorite .fav-amount");
let favCount = localStorage.getItem("favAmount");
favAmountSpan.textContent = favCount ? favCount : 0;
let favoritedCards = JSON.parse(localStorage.getItem("favoritedCards")) || [];

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("fav-icon")) {
    let cardId = event.target.getAttribute("data-id");
    if (!favoritedCards.includes(cardId)) {
      let currentFavCount = parseInt(favAmountSpan.textContent) + 1;
      favAmountSpan.textContent = currentFavCount;
      localStorage.setItem("favAmount", currentFavCount);
      favoritedCards.push(cardId);
      localStorage.setItem("favoritedCards", JSON.stringify(favoritedCards));
    }
  }
});
