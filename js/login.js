const logInEmail = $("#auth-email");
const logInPassword = $("#password");
const logInButton = $("#auth-btn");
const authError = $(".auth-error");
const authorization = $(".authorization");

// Disable the login button by default
logInButton
  .css({
    "background-color": "rgb(200, 200, 200)",
    cursor: "not-allowed",
  })
  .prop("disabled", true);

// Function to enable the button if both fields are non-empty
const checkInputs = () => {
  const emailValue = logInEmail.val().trim();
  const passwordValue = logInPassword.val().trim();
  if (emailValue && passwordValue) {
    logInButton
      .css({
        "background-color": "",
        cursor: "pointer",
      })
      .prop("disabled", false);
  } else {
    logInButton
      .css({
        "background-color": "rgb(200, 200, 200)",
        cursor: "not-allowed",
      })
      .prop("disabled", true);
  }
};

logInEmail.click(checkInputs);
logInPassword.click(checkInputs);

logInButton.click((event) => {
  event.preventDefault();

  fetch("../db/user.json")
    .then((response) => response.json())
    .then((users) => {
      const enteredEmail = logInEmail.val().trim();
      const enteredPassword = logInPassword.val().trim();

      const user = users.find(
        (u) => u.email === enteredEmail && u.password === enteredPassword
      );

      if (user) {
        // Save user info (without: id, name, surname, password and image) in localStorage
        const { id, name, surName, password, image, ...userData } = user;
        localStorage.setItem("loggedInUser", JSON.stringify(userData));

        window.location.href = "/user";
      } else {
        authError
          .css({
            display: "block",
            color: "red",
            "font-size": "13px",
          })
          .text("Incorrect email or password");
      }
    })
    .catch((error) => console.error("Error fetching user data:", error));
});
