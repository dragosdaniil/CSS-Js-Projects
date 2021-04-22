const counter = document.querySelector(".counter");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");

btn2.addEventListener("click", () => {
  counter.textContent = "0";
});

btn3.addEventListener("click", () => {
  let text = Number(counter.textContent);
  text += 1;
  counter.textContent = String(text);
});

btn1.addEventListener("click", () => {
  let text = Number(counter.textContent);
  if (!text) {
  } else {
    text -= 1;
    counter.textContent = String(text);
  }
});
