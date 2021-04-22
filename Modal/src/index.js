const modalBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal-overlay");

modalBtn.addEventListener("click", () => {
  modal.classList.toggle("show-modal");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});
