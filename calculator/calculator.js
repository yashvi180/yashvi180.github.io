console.log("I am here");
let runningTotal = 0; // Corrected typo
let buffer = "0";
let previousOperator;
const screen = document.querySelector('.screen');

function buttonClick(value) { // Corrected typo
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  screen.innerText = buffer;
}

function handleSymbol(symbol) {
  switch (symbol) {
    case 'C':
      buffer = "0";
      runningTotal = 0;
      break;
    case '=':
      if (previousOperator === null) {
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = runningTotal.toString(); // Convert to string for display
      runningTotal = 0;
      break;
    case '+':
    case '-':
    case '*': // Corrected multiplication symbol
    case '/':
      handleMath(symbol);
      break;
  }
}

function handleMath(symbol) {
  if (buffer === '0') {
    return;
  }
  const currentNumber = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = currentNumber;
  } else {
    flushOperation(currentNumber);
  }
  previousOperator = symbol;
  buffer = '0';
}

function flushOperation(currentNumber) {
  if (previousOperator === '+') {
    runningTotal += currentNumber;
  } else if (previousOperator === '-') {
    runningTotal -= currentNumber;
  } else if (previousOperator === '*') {
    runningTotal *= currentNumber;
  } else {
    runningTotal /= currentNumber;
  }
}

function handleNumber(numberString) {
  if (buffer === '0') {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}

console.log(buffer);

function init() {
  const calculatorButtons = document.querySelector('.calc-buttons'); // Corrected typo
  calculatorButtons.addEventListener('click', function (event) {
    buttonClick(event.target.innerText); // Call buttonClick with parentheses
  });
}

init();