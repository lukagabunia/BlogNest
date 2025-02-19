const navigation = document.querySelector(".navigation");
// needs future improvements
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("d-block")) {
    console.log(event.target.textContent);
  }
});
