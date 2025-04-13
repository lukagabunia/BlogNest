// Inputs
const signUpConEmail = $("#con-email");
const signUpEmail = $("#email");
const signUpPassword = $("#pass");
const signUpConPassword = $("#con-pass");
const firstName = $("#first-name");
const lastName = $("#last-name");
const male = $("#male");
const female = $("#female");

// Errors
const error = $(".error");
const firstNameError = $(".firstname-error");
const lastNameError = $(".lastname-error");
const conPassError = $(".con-error");
const conEmailError = $(".con-email-error");

// Button
const signUpButton = $("#signup-btn");
signUpButton
  .css({
    "background-color": "rgb(200, 200, 200)",
    cursor: "not-allowed",
  })
  .prop("disabled", true);

// Checking inputs
const isChecked = () => {
  if (
    lastName.val().trim() &&
    firstName.val().trim() &&
    signUpEmail.val().trim() &&
    signUpPassword.val().trim() &&
    signUpConPassword.val().trim() &&
    signUpConEmail.val().trim()
  ) {
    signUpButton
      .css({
        "background-color": "",
        cursor: "pointer",
      })
      .prop("disabled", false);
  } else {
    signUpButton
      .css({
        "background-color": "rgb(200, 200, 200)",
        cursor: "not-allowed",
      })
      .prop("disabled", true);
  }
};

// Input event listeners
firstName.on("input", isChecked);
lastName.on("input", isChecked);
signUpEmail.on("input", isChecked);
signUpPassword.on("input", isChecked);
signUpConPassword.on("input", isChecked);
signUpConEmail.on("input", isChecked);

// Gender toggle
male.on("input", function () {
  if ($(this).is(":checked")) {
    female.prop("checked", false);
  }
});
female.on("input", function () {
  if ($(this).is(":checked")) {
    male.prop("checked", false);
  }
});

// Input validations
firstName.on("input", function () {
  const value = $(this).val().trim();
  if (value.length < 3 && value.length > 0) {
    firstNameError
      .css({ color: "red", "font-size": "13px" })
      .text("First name must be at least 2 characters long");
  } else {
    firstNameError.text("");
  }
});

lastName.on("input", function () {
  const value = $(this).val().trim();
  if (value.length < 3 && value.length > 0) {
    lastNameError
      .css({ color: "red", "font-size": "13px" })
      .text("Last name must be at least 2 characters long");
  } else {
    lastNameError.text("");
  }
});

signUpPassword.on("input", function () {
  const value = $(this).val().trim();
  if (value.length < 8 && value.length > 0) {
    error
      .css({ color: "red", "font-size": "13px" })
      .text("Password must be at least 8 characters long");
  } else {
    error.text("");
  }
});

signUpConEmail.on("input", function () {
  if ($(this).val() !== signUpEmail.val()) {
    conEmailError
      .css({ color: "red", "font-size": "13px" })
      .text("Emails do not match");
  } else {
    conEmailError.text("");
  }
});

signUpConPassword.on("input", function () {
  if ($(this).val() !== signUpPassword.val()) {
    conPassError
      .css({ color: "red", "font-size": "13px" })
      .text("Passwords do not match");
  } else {
    conPassError.text("");
  }
});
