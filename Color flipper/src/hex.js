const colors = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const btn = document.getElementById("btn");
const bg = document.querySelector(".color");

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

btn.addEventListener("click", () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const rand = getRandomNumber();
    color += colors[rand];
  }
  document.body.style.backgroundColor = color;
  bg.textContent = color;
});
