const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".count-end");
const countdown = document.querySelector(".countdown");

const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();

// const endDate = new Date(year, month, day + 10, 11, 30, 0);
const endDate = new Date(year, 4, 2, 11, 30, 0);
const endYear = endDate.getFullYear();
const endMonth = endDate.getMonth();
const weekDay = endDate.getDay();
const endDay = endDate.getDate();
const endHours = endDate.getHours();
const endMins = endDate.getMinutes();
const endSecs = endDate.getSeconds();

giveaway.textContent = `Giveaway ends on ${weekdays[weekDay]}, ${months[endMonth]} ${endDay}, ${endYear}, at ${endHours}:${endMins} am`;

function remainingTime() {
  const today = new Date();
  const t = endDate.getTime() - today.getTime();

  if (t < 0) {
    countdown.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired!</h4>`;
  }

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMin);
  let seconds = Math.floor((t % oneMin) / 1000);

  const values = [days, hours, minutes, seconds];
  const ids = ["days", "hours", "minutes", "seconds"];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  ids.forEach((item, index) => {
    // console.log(countdown.querySelector("#" + item));
    countdown.querySelector("#" + item).textContent = format(values[index]);
  });
}

let count = setInterval(remainingTime, 1000);

remainingTime();
