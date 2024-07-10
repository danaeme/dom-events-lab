
/*-------------------------------- Constants --------------------------------*/
//const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
const clearBtn = document.querySelector('.clear');

/*-------------------------------- Variables --------------------------------*/
let firstNum = '';
let secondNum = '';
let operator = '';
let isOperatorIn = false;
let isResultThere = false;
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener('DOMContentLoaded', () => {
  buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick);
  });
});

function handleButtonClick(event) {
  const buttonValue = event.target.innerText;

  if (event.target.classList.contains('number')) {
    handleNumberClick(buttonValue);
  } else if (event.target.classList.contains('operator')) {
    handleOperatorClick(buttonValue);
  } else if (buttonValue === '=') {
    handleEqualClick();
  } else if (buttonValue === 'C') {
    clearCalculator();
  }
}

function handleNumberClick(value) {
  if (isResultThere) {
    firstNum = value;
    isResultThere = false;
  } else if (isOperatorIn) {
    secondNum = value;
    display.textContent = secondNum;
  } else {
    firstNum += value;
  }
  display.textContent = firstNum;
}

function handleOperatorClick(value) {
  if (firstNum && !secondNum) {
    operator = value;
    isOperatorIn = true;
  }
}

function handleEqualClick() {
  if (firstNum && secondNum && operator) {
    let result;
    const a = Number(secondNum);
    const b = Number(firstNum);
    switch (operator) {
      case '+':
        result = add(a, b);
        break;
      case '-':
        result = subtract(a, b);
        break;
      case '*':
        result = multiply(a, b);
        break;
      case '/':
        result = divide(a, b);
        break;
    }
    display.textContent = result;
    firstNum = result;
    secondNum = '';
    operator = '';
    isResultThere = true;
    isOperatorIn = false;
  }
  display.textContent = result;
}

function clearCalculator() {
  firstNum = '';
  secondNum = '';
  operator = '';
  display.textContent = '0';
  isOperatorIn = false;
  isResultThere = false;
}

function add(a, b) {
  return (a + b).toString();
}

function subtract(a, b) {
  return (a - b).toString();
}

function multiply(a, b) {
  return (a * b).toString();
}

function divide(a, b) {
  return (a / b).toString();
}

