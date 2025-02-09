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

  fetch("./db/user.json")
    .then((response) => response.json())
    .then((users) => {
      const enteredEmail = logInEmail.value.trim();
      const enteredPassword = logInPassword.value.trim();

      const user = users.find(
        (u) => u.email === enteredEmail && u.password === enteredPassword
      );

      if (user) {
        // Save user info (without password) in localStorage
        const { id, name, surName, password, image, ...userData } = user;
        localStorage.setItem("loggedInUser", JSON.stringify(userData));

        window.location.href = "./user.html";
      } else {
        authError.style.display = "block";
        authError.style.color = "red";
        authError.style.fontSize = "13px";
        authError.textContent = "Incorrect email or password";
      }
    })
    .catch((error) => console.error("Error fetching user data:", error));
});
