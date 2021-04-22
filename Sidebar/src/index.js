const btn = document.querySelector(".side-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".side-close");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
});
