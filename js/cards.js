const postContainer = $(".post-container");
const popUp = $(".popup");
const overlay = $(".overlay");
const closeBtn = $("#close-btn");
const similarContainer = $("#similar-posts");
let allCards = [];

// Fetch cards
fetch("../db/cards.json")
  .then((response) => response.json())
  .then((cards) => {
    allCards = cards;
    renderCards(cards);
  })
  .catch((error) => console.error("Error loading cards:", error));

// Render all cards
function renderCards(cards) {
  let cardsHTML = "";
  cards.forEach((card) => {
    cardsHTML += createCard(card);
  });
  postContainer.html(cardsHTML);
}

// Generate individual card HTML
function createCard(card) {
  return `
    <div class="card">
      <div class="img-container">
        <img class="card-img w-100 d-block" src="${card.img}" alt="${card.title}" />
        <img data-id="${card.id}" class="fav-icon" src="../Assets/Icons/heart-regular.svg" alt="fav icon" />
        <span>${card.creation_date}</span>
      </div>
      <div class="card-body">
        <h3>${card.title}</h3>
        <div class="card-text">
          <p>${card.description}</p>
        </div>
        <div class="action-container d-flex">
          <button class="btn card-btn">
            <a href="/post/${card.id}">See more...</a>
          </button>
          <img class="share-icon" src="../Assets/Icons/share-solid.svg" alt="share" />
        </div>
      </div>
    </div>
  `;
}

//Share icon click
postContainer.on("click", ".share-icon", function () {
  popUp.addClass("active");
  overlay.addClass("active");
});
similarContainer.on("click", ".share-icon", function () {
  popUp.addClass("active");
  overlay.addClass("active");
});

// Close popup
closeBtn.click("click", closePopup);
overlay.click(closePopup);
$(document).on("keydown", function (e) {
  if (e.key === "Escape") {
    closePopup();
  }
});

function closePopup() {
  popUp.removeClass("active");
  overlay.removeClass("active");
}
