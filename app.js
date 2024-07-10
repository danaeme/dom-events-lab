
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
  //Need event listener for each button on the calculator
  buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick);
  });
});

//function handles button click event. Fucntions nested in this one handle the different click cases (number, operator, equals, clear)
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

//function for when user clicks number
function handleNumberClick(value) {
  //if results are already displayed, begin a new equation
  if (isResultThere) {
    firstNum = value;
    isResultThere = false;
  } 
  //else if the operator is already clicked, store value as the second number
  else if (isOperatorIn) {
    secondNum = value;
    display.textContent = secondNum;
  } 
  //else store number clicked as the value.
  else {
    firstNum += value;
    display.textContent = firstNum;
  }
}

//function to handle operator button clicks
function handleOperatorClick(value) {
  if (firstNum && !secondNum) {
    operator = value;
    isOperatorIn = true;
    display.textContent = operator;
  }
}

//function to handle if user clicks the equal sign
function handleEqualClick() {
  if (firstNum && secondNum && operator) {
    let result;
    const a = Number(secondNum);
    const b = Number(firstNum);
    //switch case for different operators
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

//function to clear the calculator
function clearCalculator() {
  firstNum = '';
  secondNum = '';
  operator = '';
  display.textContent = '0';
  isOperatorIn = false;
  isResultThere = false;
}

//need arithmetic functions for add,sub,mult,div.

function add(a, b) {
  return (a + b).toString(); //return the value as a string for display.
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

