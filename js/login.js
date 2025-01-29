const logInEmail = document.getElementById("auth-email");
const logInPassword = document.getElementById("password");
const logInButton = document.getElementById("auth-btn");
const authError = document.querySelector(".auth-error");
const authorization = document.querySelector(".authorization");

// Disable the login button by default
logInButton.style.backgroundColor = "rgb(200, 200, 200)";
logInButton.style.cursor = "not-allowed";
logInButton.disabled = true;

// Function to enable the button if both fields are non-empty
const checkInputs = () => {
  if (logInEmail.value.trim() && logInPassword.value.trim()) {
    logInButton.style.backgroundColor = ""; // Reset to default
    logInButton.style.cursor = "pointer";
    logInButton.disabled = false;
  } else {
    logInButton.style.backgroundColor = "rgb(200, 200, 200)";
    logInButton.style.cursor = "not-allowed";
    logInButton.disabled = true;
  }
};

logInEmail.addEventListener("input", checkInputs);
logInPassword.addEventListener("input", checkInputs);

logInButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    logInPassword.value === "Random1234@" &&
    logInEmail.value === "example@gmail.com"
  ) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "./user.html";
  } else {
    authError.style.display = "block";
    authError.style.color = "red";
    authError.style.fontSize = "13px";
    authError.textContent = "Incorrect email or password";
    console.log("Not logged in");
  }
});
