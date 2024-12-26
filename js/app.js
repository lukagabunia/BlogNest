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
const nav = document.querySelector("header nav");

mobileView.addEventListener("click", (event) => {
  event.preventDefault();
  nav.classList.toggle("active");
});
