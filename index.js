const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburger-nav-links");
const hamburgerMenuLinks = document.querySelectorAll(".hamburger-nav-links li");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("change");
  hamburgerMenu.classList.toggle("slide");
});

hamburgerMenuLinks.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target);
    if ((e.target.className = "ham-link"))
      hamburgerMenu.classList.toggle("slide");
  });
});
