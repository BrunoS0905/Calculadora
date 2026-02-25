const display = document.getElementById("display");
const history = document.getElementById("history");

let firstNumber = "";
let secondNumber = "";
let operator = "";

function addNumber(num) {
  display.value += num;
}

function setOperator(op) {
  firstNumber = display.value;
  operator = op;
  display.value = "";
}

function calculate() {
  secondNumber = display.value;

  let result = 0;

  if (operator === "+") {
    result = Number(firstNumber) + Number(secondNumber);
  }

  if (operator === "-") {
    result = Number(firstNumber) - Number(secondNumber);
  }

  if (operator === "*") {
    result = Number(firstNumber) * Number(secondNumber);
  }

  if (operator === "/") {
    result = Number(firstNumber) / Number(secondNumber);
  }

  history.textContent = `${firstNumber} ${operator} ${secondNumber} = ${result}`;
  display.value = result;
}

function clearAll() {
  display.value = "";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  history.textContent = "";
}



