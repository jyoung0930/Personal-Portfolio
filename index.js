const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburger-nav-links");
const hamburgerMenuLinks = document.querySelectorAll(".hamburger-nav-links li");
// Triggers hamburger menu slide animation
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("change");
  hamburgerMenu.classList.toggle("slide");
});
// Removes hamburger menu on link click
hamburgerMenuLinks.forEach((item) => {
  item.addEventListener("click", (e) => {
    if ((e.target.className = "ham-link"))
      hamburgerMenu.classList.toggle("slide");
  });
});
// Removes hamburger menu on scroll
window.addEventListener("scroll", (e) => {
  if (hamburgerMenu.classList.contains("slide")) {
    hamburgerMenu.classList.remove("slide");
  }
});
