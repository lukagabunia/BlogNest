const carouselItem = document.querySelectorAll(".carousel-item");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const carouselArray = Array.from(carouselItem);
const getActiveIndex = () =>
  carouselArray.findIndex((item) => item.classList.contains("active"));
let activeIndex = getActiveIndex();

if (activeIndex === -1) {
  activeIndex = 0;
  carouselArray[0].classList.add("active");
}

const updateButtonVisibility = () => {
  if (carouselArray.length === 1) {
    prev.classList.add("hide");
    next.classList.add("hide");
  } else {
    prev.classList.remove("hide");
    next.classList.remove("hide");
  }
};

function updateIndex(newIndex) {
  carouselArray[getActiveIndex()].classList.remove("active");
  activeIndex = newIndex;
  carouselArray[activeIndex].classList.add("active");
}

function startAutoSlide() {
  return setInterval(() => {
    const newIndex = (getActiveIndex() + 1) % carouselArray.length;
    updateIndex(newIndex);
  }, 4000);
}

let slideInterval = startAutoSlide();

function resetAutoSlide() {
  clearInterval(slideInterval);
  slideInterval = startAutoSlide();
}

prev.addEventListener("click", () => {
  const newIndex =
    (getActiveIndex() - 1 + carouselArray.length) % carouselArray.length;
  updateIndex(newIndex);
  resetAutoSlide();
});

next.addEventListener("click", () => {
  const newIndex = (getActiveIndex() + 1) % carouselArray.length;
  updateIndex(newIndex);
  resetAutoSlide();
});
window.onload = () => {
  updateButtonVisibility();
};
