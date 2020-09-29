// Declaration of variables and initial values.
let userInput = '';
let equation = '';
let operator = '';
let num1;
let num2;
let result;

const display = document.getElementById('display');

// When user enters a number.
const numberButtons = document.querySelectorAll('.number-button');
for (let i = 0 ; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
    userInput += numberButtons[i].innerText;
    userInput = parseInt(userInput);
    display.textContent = `${equation} ${userInput}`;
    })
};

// When user selects to 'add'.
const addButton = document.querySelector('.add-button');
addButton.addEventListener('click', () => {
    checkInput();
    operator = 'add';
    num1 = userInput;
    equation = `${num1} + `;
    display.textContent = equation;
    userInput = '';
});

// When user selects to 'subtract'.
const subtractButton = document.querySelector('.subtract-button');
subtractButton.addEventListener('click', () => {
    checkInput();
    operator = 'subtract';
    num1 = userInput;
    equation = `${num1} - `;
    display.textContent = equation;
    userInput = '';
});

// When user selects to 'multiply'.
const multiplyButton = document.querySelector('.multiply-button');
multiplyButton.addEventListener('click', () => {
    checkInput();
    operator = 'multiply';
    num1 = userInput;
    equation = `${num1} * `;
    display.textContent = equation;
    userInput = '';
});

// When user selects to 'divide'.
const divideButton = document.querySelector('.divide-button');
divideButton.addEventListener('click', () => {
    checkInput();
    operator = 'divide';
    num1 = userInput;
    equation = `${num1} / `;
    display.textContent = equation;
    userInput = '';
});

// Display result to user.
const resultButton = document.querySelector('.result-button');
resultButton.addEventListener('click', () => {
    num2 = userInput;
    operate(operator, num1, num2);
    display.textContent = result;
    
});

// Clear everything and start again.
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => {
equation = '';
userInput = '';
num1 = undefined;
num2 = undefined;
operator = undefined;
result = undefined;
display.textContent = userInput;
});

// Math functions.
function add(num1, num2) {
    result = Math.round((num1 + num2) * 100000) / 100000;
}

function subtract(num1, num2) {
    result = Math.round((num1 - num2) * 100000) / 100000;
}

function multiply(num1, num2) {
    result = Math.round((num1 * num2) * 100000) / 100000;
}

function divide(num1, num2) {
    if (num2 === 0) {
        result = 'ERROR!';
    } else {
        result = Math.round((num1 / num2) * 100000) / 100000;
    }
}

// Checks selected operator and inputs user's equation into math functions.
function operate(operator, num1, num2) {
    if (operator === 'add') {
        add(num1, num2);
        return result;
    } else if (operator === 'subtract') {
        subtract(num1, num2);
        return result;
    } else if (operator === 'multiply') {
        multiply(num1, num2);
        return result;
    } else if (operator === 'divide') {
        divide(num1, num2);
        return result;
    } 
}

// When selecting an operator, check previous input (num1) first.
function checkInput() {
    if (num1 === undefined) {
        num1 = userInput;
    } else if (result === 'ERROR!') {
        equation = '';
        userInput = '';
        num1 = undefined;
        num2 = undefined;
        operator = undefined;
        result = 0;
    } else {
        num2 = userInput;
        operate(operator, num1, num2);
        num1 = result;
        display.textContent = result;
        userInput = result;
    }
}