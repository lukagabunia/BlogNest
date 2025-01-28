const resetBtn = document.getElementById("reset-btn");
const email = document.getElementById("email");
const emailError = document.querySelector(".email-error");

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
  if (email.value === "example@gmail.com") {
    window.location.href = "./index.html";
  } else {
    emailError.style.display = "block";
    emailError.style.color = "red";
    emailError.style.fontSize = "13px";
    emailError.textContent = "Incorrect email";
    console.log("Wrong email");
  }
});
