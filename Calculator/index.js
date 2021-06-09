const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator-keys");
const display = calculator.querySelector(".calculator-display");

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      if (displayedNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
      calculator.dataset.previousKey = "number";
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      if (firstValue && operator && previousKeyType !== "operator") {
        const calcValue = calculate(firstValue, operator, secondValue);
        display.textContent = calcValue;
        calculator.dataset.firstValue = calcValue;
      } else {
        calculator.dataset.firstValue = displayedNum;
      }
      key.classList.add("is-depressed");
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }

    Array.from(key.parentNode.children).forEach((k) =>
      k.classList.remove("is-depressed")
    );

    if (action === "decimal") {
      if (!displayedNum.includes(".")) {
        display.textContent = displayedNum + ".";
      } else if (previousKeyType === "operator") {
        display.textContent = "0.";
      }
      calculator.dataset.previousKey = "decimal";
    }

    if (action === "clear") {
      console.log("clear key!");
      calculator.dataset.previousKeyType = "clear";
    }

    if (action === "equal") {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;
      display.textContent = calculate(firstValue, operator, secondValue);
      calculator.dataset.previousKeyType = "equal";
    }
  }
});

function calculate(a, operator, b) {
  let result = 0;
  if (operator === "add") {
    result = parseFloat(a) + parseFloat(b);
    console.log(result);
  } else if (operator === "subtract") {
    result = parseFloat(a) - parseFloat(b);
  } else if (operator === "multiply") {
    result = parseFloat(a) * parseFloat(b);
  } else if (operator === "divide") {
    result = parseFloat(a) / parseFloat(b);
  }
  return result.toString();
}
