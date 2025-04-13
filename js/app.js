// Check if the user is logged in
const isLoggedIn = localStorage.getItem("loggedInUser");

if (isLoggedIn) {
  const authContainer = $(".authorization");
  const userImage = $(".user-container");

  authContainer.hide();
  userImage.show();
}

// Favorite functionality
const favAmountSpan = $(".favorite .fav-amount");
let favCount = localStorage.getItem("favAmount");
favAmountSpan.text(favCount ? favCount : 0);
let favoritedCards = JSON.parse(localStorage.getItem("favoritedCards")) || [];

$(document).on("click", ".fav-icon", function () {
  let cardId = $(this).data("id");

  if (!favoritedCards.includes(cardId)) {
    let currentFavCount = parseInt(favAmountSpan.text()) + 1;
    favAmountSpan.text(currentFavCount);
    localStorage.setItem("favAmount", currentFavCount);
    favoritedCards.push(cardId);
    localStorage.setItem("favoritedCards", JSON.stringify(favoritedCards));
  }
});
