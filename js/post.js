const navigation = document.querySelector(".navigation");

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("navigation-list")) {
    const selectedCategory = event.target.textContent.toLowerCase();
    if (selectedCategory === "all") {
      renderCards(allCards);
    } else {
      const filteredCards = allCards.filter(
        (card) => card.category.toLowerCase() === selectedCategory
      );
      renderCards(filteredCards);
    }
  }
});
