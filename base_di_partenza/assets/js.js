const navbar = document.querySelector(".nav-bar");
const buttonblack = document.querySelector(".buttonblack");
const asseY = 350;

const color = function () {
  if (window.scrollY > asseY) {
    buttonblack.classList.add("buttongreen");
    navbar.classList.add("nav-bar-bianca");
  } else {
    buttonblack.classList.remove("buttongreen");
    navbar.classList.remove("nav-bar-bianca");
  }
};
window.addEventListener("scroll", color);
