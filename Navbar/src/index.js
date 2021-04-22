const links = document.querySelector(".link-list");
const toggleBtn = document.querySelector(".nav-toggle");
const center = document.querySelector(".centering");

// window.addEventListener("resize", () => {
//   links.style.height = "auto";
// });

toggleBtn.addEventListener("click", () => {
  // if (links.classList.contains("show")) {
  //   links.classList.remove("show");
  //   center.style.overflow = "hidden";
  //   links.style.height = "0";
  // } else {
  //   links.classList.add("show");
  //   center.style.overflow = "visible";
  //   links.style.height = "12rem";
  // }
  links.classList.toggle("show");
});
