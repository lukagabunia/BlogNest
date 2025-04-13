const carouselItems = $(".carousel-item");
const prev = $(".prev");
const next = $(".next");

if ($(".carousel-item.active").length === 0) {
  carouselItems.first().addClass("active");
}

const getActiveIndex = () => {
  return carouselItems.index($(".carousel-item.active"));
};

const updateIndex = (newIndex) => {
  carouselItems.removeClass("active").eq(newIndex).addClass("active");
};

const updateButtonVisibility = () => {
  if (carouselItems.length === 1) {
    prev.addClass("hide");
    next.addClass("hide");
  } else {
    prev.removeClass("hide");
    next.removeClass("hide");
  }
};

const startAutoSlide = () => {
  return setInterval(() => {
    const newIndex = (getActiveIndex() + 1) % carouselItems.length;
    updateIndex(newIndex);
  }, 4000);
};

let slideInterval = startAutoSlide();

const resetAutoSlide = () => {
  clearInterval(slideInterval);
  slideInterval = startAutoSlide();
};

prev.on("click", () => {
  const newIndex =
    (getActiveIndex() - 1 + carouselItems.length) % carouselItems.length;
  updateIndex(newIndex);
  resetAutoSlide();
});

next.on("click", () => {
  const newIndex = (getActiveIndex() + 1) % carouselItems.length;
  updateIndex(newIndex);
  resetAutoSlide();
});

updateButtonVisibility();
