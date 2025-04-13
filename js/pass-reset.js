const resetBtn = $("#reset-btn");
const email = $("#email");
const emailError = $(".email-error");
const resetEmail = $(".reset-first");
const resetPassword = $(".reset-second");

resetBtn
  .css({
    "background-color": "rgb(200, 200, 200)",
    cursor: "not-allowed",
  })
  .prop("disabled", true);

const isChecked = () => {
  const emailValue = email.val().trim();
  if (emailValue) {
    resetBtn
      .css({
        "background-color": "",
        cursor: "pointer",
      })
      .prop("disabled", false);
  } else {
    resetBtn
      .css({
        "background-color": "rgb(200, 200, 200)",
        cursor: "not-allowed",
      })
      .prop("disabled", true);
  }
};
email.on("input", isChecked);
resetBtn.click((event) => {
  event.preventDefault();
  fetch("../db/user.json")
    .then((response) => response.json())
    .then((users) => {
      const enteredEmail = email.val().trim();
      const user = users.find((u) => u.email === enteredEmail);

      if (user) {
        resetPassword.css("display", "block");
        resetEmail.css("display", "none");
        emailError.css("display", "none");
      } else {
        emailError
          .css({
            display: "block",
            color: "red",
            "font-size": "13px",
          })
          .text("Incorrect email");
        console.log("Wrong email");
      }
    })
    .catch((error) => console.error("Error fetching user data:", error));
});
