const button = document.querySelector(".nav-toggle");
const navbar = document.querySelector(".menu-bar");
const goUp = document.querySelector(".go-up");

button.addEventListener("click", () => {
  navbar.querySelector(".links").classList.toggle("show");
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    navbar.classList.add("move-bar");
    goUp.style.display = "block";
  } else {
    navbar.classList.remove("move-bar");
    goUp.style.display = "none";
  }
});

goUp.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

const year = document.querySelector(".date");
let date = new Date();
year.textContent = date.getFullYear();
