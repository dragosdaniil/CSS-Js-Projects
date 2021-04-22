const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const openBtn = question.querySelector(".btn-open");
  const hideBtn = question.querySelector(".btn-close");
  const answer = question.querySelector(".answer");

  openBtn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.querySelector(".answer").classList.remove("show");
        item.querySelector(".btn-open").classList.remove("hide-btn");
        item.querySelector(".btn-close").classList.add("hide-btn");
      }
    });
    answer.classList.add("show");
    openBtn.classList.add("hide-btn");
    hideBtn.classList.remove("hide-btn");
  });

  hideBtn.addEventListener("click", () => {
    answer.classList.remove("show");
    hideBtn.classList.add("hide-btn");
    openBtn.classList.remove("hide-btn");
  });
});
