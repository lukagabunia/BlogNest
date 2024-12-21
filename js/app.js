document.addEventListener("DOMContentLoaded", () => {
  // Accordion functionality, with arrow
  const items = document.querySelectorAll(".accordion-item");

  items.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const body = item.querySelector(".accordion-body");

    header.addEventListener("click", () => {
      item.classList.toggle("active"); // Toggle the active class on the accordion item
      body.classList.toggle("active"); // Toggle visibility of the accordion body
    });
  });

  // Mobile menu functionality
  const mobileView = document.querySelector(".mobile-view");
  const nav = document.querySelector("header nav");

  mobileView.addEventListener("click", (event) => {
    event.preventDefault();
    nav.classList.toggle("active");
  });
});
