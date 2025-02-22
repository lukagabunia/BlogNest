const resetBtn = document.getElementById("reset-btn");
const email = document.getElementById("email");
const emailError = document.querySelector(".email-error");
const resetEmail = document.querySelector(".reset-first");
const resetPassword = document.querySelector(".reset-second");

resetBtn.style.backgroundColor = "rgb(200, 200, 200)";
resetBtn.style.cursor = "not-allowed";
resetBtn.disabled = true;

const isChecked = () => {
  if (email.value.trim()) {
    resetBtn.style.backgroundColor = "";
    resetBtn.style.cursor = "pointer";
    resetBtn.disabled = false;
  } else {
    resetBtn.style.backgroundColor = "rgb(200, 200, 200)";
    resetBtn.style.cursor = "not-allowed";
    resetBtn.disabled = true;
  }
};
email.addEventListener("input", isChecked);
resetBtn.addEventListener("click", (event) => {
  event.preventDefault();
  fetch("./db/user.json")
    .then((response) => response.json())
    .then((users) => {
      const enteredEmail = email.value.trim();
      const user = users.find((u) => u.email === enteredEmail);

      if (user) {
        resetPassword.style.display = "block";
        resetEmail.style.display = "none";
        emailError.style.display = "none";
      } else {
        emailError.style.display = "block";
        emailError.style.color = "red";
        emailError.style.fontSize = "13px";
        emailError.textContent = "Incorrect email";
        console.log("Wrong email");
      }
    })
    .catch((error) => console.error("Error fetching user data:", error));
});
