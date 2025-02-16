// Load cards
const postContainer = document.querySelector(".post-container");

fetch("./db/cards.json")
  .then((response) => response.json())
  .then((cards) => {
    cards.forEach((card) => {
      postContainer.innerHTML += createCard(card);
    });
  })
  .catch((error) => console.error("Error loading cards:", error));
function createCard(card) {
  return `
        <div class="card">
            <div class="img-container">
                <img class="card-img w-100 d-block" src="${card.img}" alt="${card.title}" />
                <img onclick="toggleFavorite(${card.id})" class="fav-icon" src="./Assets/Icons/heart-regular.svg" alt="fav icon" />
                <span>${card.creation_date}</span>
            </div>
            <div class="card-body">
                <h3>${card.title}</h3>
                <p>${card.description}</p>
                <div class="action-container d-flex">
                    <button class="btn card-btn">
                        <a href="./post-detail.html?id=${card.id}">See more...</a>
                    </button>
                    <img class="share-icon" src="./Assets/Icons/share-solid.svg" alt="share" />
                </div>
            </div>
        </div>
        `;
}

function toggleFavorite(cardId) {
  console.log(cardId);
}
