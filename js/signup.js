//inputs
const signUpConEmail = document.getElementById("con-email");
const signUpEmail = document.getElementById("email");
const signUpPassword = document.getElementById("pass");
const signUpConPassword = document.getElementById("con-pass");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const male = document.getElementById("male");
const female = document.getElementById("female");

//errors
const error = document.querySelector(".error");
const firstNameError = document.querySelector(".firstname-error");
const lastNameError = document.querySelector(".lastname-error");
const conPassError = document.querySelector(".con-error");
const conEmailError = document.querySelector(".con-email-error");

//button
const signUpButton = document.getElementById("signup-btn");
signUpButton.style.backgroundColor = "rgb(200, 200, 200)";
signUpButton.style.cursor = "not-allowed";
signUpButton.disabled = true;

//checking inputs
const isChecked = () => {
  if (
    lastName.value.trim() &&
    firstName.value.trim() &&
    signUpEmail.value.trim() &&
    signUpPassword.value.trim() &&
    signUpConPassword.value.trim() &&
    signUpConEmail.value.trim()
  ) {
    signUpButton.style.backgroundColor = "";
    signUpButton.style.cursor = "pointer";
    signUpButton.disabled = false;
  } else {
    signUpButton.style.backgroundColor = "rgb(200, 200, 200)";
    signUpButton.style.cursor = "not-allowed";
    signUpButton.disabled = true;
  }
};

firstName.addEventListener("input", isChecked);
lastName.addEventListener("input", isChecked);
signUpEmail.addEventListener("input", isChecked);
signUpPassword.addEventListener("input", isChecked);
signUpConPassword.addEventListener("input", isChecked);
signUpConEmail.addEventListener("input", isChecked);

male.addEventListener("input", () => {
  if (male.checked) {
    female.checked = false;
  }
});
female.addEventListener("input", () => {
  if (female.checked) {
    male.checked = false;
  }
});

firstName.addEventListener("input", (e) => {
  const inputValue = e.target.value.trim();
  if (inputValue.length < 3 && inputValue.length > 0) {
    firstNameError.style.color = "red";
    firstNameError.style.fontSize = "13px";
    firstNameError.textContent =
      "First name must be at least 2 characters long";
  } else if (inputValue.length === 0) {
    firstNameError.textContent = "";
  } else {
    firstNameError.textContent = "";
  }
});

lastName.addEventListener("input", (e) => {
  const inputValue = e.target.value.trim();
  if (inputValue.length < 3 && inputValue.length > 0) {
    lastNameError.style.color = "red";
    lastNameError.style.fontSize = "13px";
    lastNameError.textContent = "Last name must be at least 2 characters long";
  } else if (inputValue.length === 0) {
    lastNameError.textContent = "";
  } else {
    lastNameError.textContent = "";
  }
});

signUpPassword.addEventListener("input", (e) => {
  const inputValue = e.target.value.trim();
  if (inputValue.length < 8 && inputValue.length > 0) {
    error.style.color = "red";
    error.style.fontSize = "13px";
    error.textContent = "Password must be at least 8 characters long";
  } else if (inputValue.length === 0) {
    error.textContent = "";
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
