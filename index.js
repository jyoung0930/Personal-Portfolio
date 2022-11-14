const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburger-nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("change");
  hamburgerMenu.classList.toggle("slide");
});
