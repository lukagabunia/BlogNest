const navigation = $(".navigation");

$(document).on("click", ".navigation-list", function () {
  const selectedCategory = $(this).text().toLowerCase();
  if (selectedCategory === "all") {
    renderCards(allCards);
  } else {
    const filteredCards = allCards.filter(
      (card) => card.category.toLowerCase() === selectedCategory
    );
    renderCards(filteredCards);
  }
});
