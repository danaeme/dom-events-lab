
/*-------------------------------- Constants --------------------------------*/
//const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
//const calculator = document.querySelector('#calculator');

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
    button.addEventListener('click', (event) => {
      let firstNum = '';
      let secondNum = '';
      let operator = '';
      const buttonValue = event.target.innerText;
      // This log is for testing purposes to verify we're getting the correct value
      //console.log(event.target.innerText); 
      // Future logic to capture the button's value would go here...
      if (event.target.classList.contains('number')) { 
          if (isResultThere) {
            firstNum = buttonValue;
            isResultThere = false;
          }
          else if (isOperatorIn) {
            firstNum = buttonValue;
            isOperatorIn = false;
          }
          else {
            firstNum += buttonValue;
          }
          display.textContent = firstNum;
      }
      else if (event.target.classList.contains('operator')) {
        if (buttonValue === 'C') {
            firstNum = ' ';
            secondNum = ' ';
            operator = ' ';
            isOperatorIn = false;
            isResultThere; false;
            //^ Clears everything
        }
      }
      else if (buttonValue === '=') {
        if (firstNum && secondNum && operator) {
            let result;
            const a = Number(firstNum);
            const b = Number(secondNum);
            switch (operator){
              case '+':
                result = add(firstNum, secondNum);
                break;
              case '-':
                result = subtract(firstNum, secondNum);
                break;
              case '*':
                result = multiply(firstNum, secondNum);
                break;
              case '/':
                result = divide(firstNum, secondNum);
                break;
        }
          display.textContent = result; 
          secondNum = result;
          firstNum = '';
          operator = ''; 
          isResultThere = true; 
      }       
      else {
        if (firstNum) {
            operator = buttonValue;
            firstNum = '';
            secondNum = firstNum
        } //
        display.textContent = secondNum
      }
    }});});
// display.addEventListener('click', (event) => {
// // This log is for testing purposes to verify we're getting the correct value
// // You have to click a button to see this log
// console.log(event.target.innerText);

// // Example
// if (event.target.classList.contains('number')) {
//     // Do something with a number
// }

// // Example
// if (event.target.innerText === '*') {
//     // Do something with this operator
// }
// });

/*-------------------------------- Functions --------------------------------*/
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
})
;
