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

const signUpPassword = document.getElementById("pass");
const signUpConPassword = document.getElementById("con-pass");
const signUpConEmail = document.getElementById("con-email");
const signUpEmail = document.getElementById("email");
const error = document.querySelector(".error");
const conPassError = document.querySelector(".con-error");
const conEmailError = document.querySelector(".con-email-error");

signUpPassword.addEventListener("input", (e) => {
  if (e.target.value.length < 8) {
    error.style.color = "red";
    error.style.fontSize = "13px";
    error.textContent = "Password must be at least 8 characters long";
  } else {
    error.textContent = "";
  }
});
signUpConPassword.addEventListener("input", (e) => {
  if (e.target.value !== signUpPassword.value) {
    conPassError.style.color = "red";
    conPassError.style.fontSize = "13px";
    conPassError.textContent = "Passwords do not match";
  } else {
    conPassError.textContent = "";
  }
});
signUpConEmail.addEventListener("input", (e) => {
  if (e.target.value !== signUpEmail.value) {
    conEmailError.style.color = "red";
    conEmailError.style.fontSize = "13px";
    conEmailError.textContent = "Emails do not match";
  } else {
    conEmailError.textContent = "";
  }
});
