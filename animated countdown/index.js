const container = document.querySelector(".container");
const deadline = new Date("December 18, 2021 18:00:00");

const secondsELem = container.querySelector("#seconds").querySelector(".count");
const minutesElem = container.querySelector("#minutes").querySelector(".count");
const hoursElem = container.querySelector("#hours").querySelector(".count");
const daysElem = container.querySelector("#days").querySelector(".count");

let prevArr = [0, 0, 0, 0];

const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMin = 60 * 1000;

const initCounter = () => {
  const currentDate = new Date();
  const t = deadline - currentDate;

  let seconds = Math.floor((t % oneMin) / 1000);
  secondsELem.querySelector("h1").textContent = seconds;

  let minutes = Math.floor((t % oneHour) / oneMin);
  minutesElem.querySelector("h1").textContent = minutes;

  let hours = Math.floor((t % oneDay) / oneHour);
  hoursElem.querySelector("h1").textContent = hours;

  let days = Math.floor(t / oneDay);
  daysElem.querySelector("h1").textContent = days;
};

const interval2 = setInterval(() => {
  const currentDate = new Date();
  const t = deadline - currentDate;
  let seconds = Math.floor((t % oneMin) / 1000);
  secondsELem.querySelector("h1").textContent = seconds;
  secondsELem.classList.toggle("rotate");
}, 1000);

const interval3 = setInterval(() => {
  const currentDate = new Date();
  const t = deadline - currentDate;
  let minutes = Math.floor((t % oneHour) / oneMin);
  if (prevArr[2] !== minutes) {
    minutesElem.classList.add("rotate");
  } else {
    minutesElem.classList.remove("rotate");
  }
  minutesElem.querySelector("h1").textContent = minutes;
  prevArr[2] = minutes;
}, 1200);

const interval4 = setInterval(() => {
  const currentDate = new Date();
  const t = deadline - currentDate;
  let hours = Math.floor((t % oneDay) / oneHour);
  if (prevArr[1] !== hours) {
    hoursElem.classList.add("rotate");
  } else {
    hoursElem.classList.remove("rotate");
  }
  hoursElem.querySelector("h1").textContent = hours;
  prevArr[1] = hours;
}, 1200);

const interval5 = setInterval(() => {
  const currentDate = new Date();
  const t = deadline - currentDate;
  let days = Math.floor(t / oneDay);
  if (prevArr[0] !== days) {
    daysElem.classList.add("rotate");
  } else {
    daysElem.classList.remove("rotate");
  }
  daysElem.querySelector("h1").textContent = days;
  prevArr[0] = days;
}, 1200);

initCounter();
