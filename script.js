let displayValue = '';
let equation = '';
let operator = '';
let num1;
let num2;
let result;

// KEYBOARD SUPPORT
window.addEventListener('keydown', function(e) {
    const key = document.querySelector(`button[value='${e.key}']`);
    key.click();
});

// NUMBERS
const numberButtons = document.querySelectorAll('.number');
for (let i = 0 ; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        displayValue += numberButtons[i].value;
        display.textContent = `${equation}${displayValue}`;
    });
};

// ADD
const addButton = document.querySelector('.add');
addButton.addEventListener('click', () => {
    checkInput();
    operator = '+';
    updateDisplay();
});

// SUBTRACT
const subtractButton = document.querySelector('.subtract');
subtractButton.addEventListener('click', () => {
    checkInput();
    operator = '-';
    updateDisplay();
});

// MULTIPLY
const multiplyButton = document.querySelector('.multiply');
multiplyButton.addEventListener('click', () => {
    checkInput();
    operator = '*';
    updateDisplay();
});

// DIVIDE
const divideButton = document.querySelector('.divide');
divideButton.addEventListener('click', () => {
    checkInput();
    operator = '/';
    updateDisplay();
});

// MODULUS
const modulusButton = document.querySelector('.modulus');
modulusButton.addEventListener('click', () => {
    checkInput();
    operator = '%';
    updateDisplay();
});

// RESULT
const resultButton = document.querySelector('.result');
resultButton.addEventListener('click', () => {
    num2 = displayValue;
    operate(operator, num1, num2);
    display.textContent = result;
});

// CLEAR
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    equation = '';
    displayValue = '';
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    result = undefined;
    display.textContent = '';
});

// DECIMAL
/*
const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click', () => {
    displayValue += decimalButton.innerText;
    display.textContent = `${equation} ${displayValue}`;
});
*/

// BACKSPACE
const backspaceButton = document.querySelector('.backspace');
backspaceButton.addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1);
    display.textContent = displayValue;
});

// REVERSE
/*
const reverseButton = document.querySelector('.reverse');
reverseButton.addEventListener('click', () => {
    checkInput();
    displayValue = displayValue * -1;
    num1 = displayValue;
    display.textContent = displayValue;
});
*/

// MATH FUNCTIONS
function add(num1, num2) {
    result = Math.round((num1 + num2) * 1000) / 1000;
};

function subtract(num1, num2) {
    result = Math.round((num1 - num2) * 1000) / 1000;
};

function multiply(num1, num2) {
    result = Math.round((num1 * num2) * 1000) / 1000;
};

function divide(num1, num2) {
    if (num2 === 0) {
        result = 'ERROR!';
    } else {
        result = Math.round((num1 / num2) * 1000) / 1000;
    };
};

function modulus(num1, num2) {
    result = num1 % num2;
};

// INPUT USER VALUES INTO MATH FUNCTIONS
function operate(operator, num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (operator === '+') {
        add(num1, num2);
        return result;
    } else if (operator === '-') {
        subtract(num1, num2);
        return result;
    } else if (operator === '*') {
        multiply(num1, num2);
        return result;
    } else if (operator === '/') {
        divide(num1, num2);
        return result;
    } else if (operator === '%') {
        modulus(num1, num2);
        return result;
    };
};

// CHECK PREVIOUS INPUT
function checkInput() {
    if (num1 === undefined) {
        num1 = displayValue;
    } else if (result === 'ERROR!') {
        equation = '';
        displayValue = '';
        num1 = undefined;
        num2 = undefined;
        operator = undefined;
        result = 0;
    } else {
        num2 = displayValue;
        operate(operator, num1, num2);
        num1 = result;
        display.textContent = result;
        displayValue = result;
    };
};

// UPDATE DISPLAY AND VALUES
function updateDisplay() {
    const display = document.getElementById('display');
    num1 = displayValue;
    equation = `${num1}${operator}`;
    display.textContent = equation;
    displayValue = '';
};