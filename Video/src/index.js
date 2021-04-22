const video = document.getElementById("myVideo");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const slider = document.querySelector(".slider");

play.addEventListener("click", () => {
  slider.classList.add("play-btn");
  slider.classList.remove("pause-btn");
  video.play();
});

pause.addEventListener("click", () => {
  slider.classList.add("pause-btn");
  slider.classList.remove("play-btn");
  video.pause();
});
