let userInput = '';
let equation = '';
let operator = '';
let num1;
let num2;
let result;

const display = document.getElementById('display');

const numberButtons = document.querySelectorAll('.number-button');
for (let i = 0 ; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
    userInput += numberButtons[i].innerText;
    display.textContent = `${equation} ${userInput}`;
    })
};

const addButton = document.querySelector('.add-button');
addButton.addEventListener('click', () => {
    operator = 'add';
    num1 = userInput;
    equation = `${num1} + `;
    display.textContent = equation;
    userInput = '';
});

const subtractButton = document.querySelector('.subtract-button');
subtractButton.addEventListener('click', () => {
    operator = 'subtract';
    num1 = userInput;
    equation = `${num1} - `;
    display.textContent = equation;
    userInput = '';
});

const multiplyButton = document.querySelector('.multiply-button');
multiplyButton.addEventListener('click', () => {
    operator = 'multiply';
    num1 = userInput;
    equation = `${num1} * `;
    display.textContent = equation;
    userInput = '';
});

const divideButton = document.querySelector('.divide-button');
divideButton.addEventListener('click', () => {
    operator = 'divide';
    num1 = userInput;
    equation = `${num1} / `;
    display.textContent = equation;
    userInput = '';
});

const resultButton = document.querySelector('.result-button');
resultButton.addEventListener('click', () => {
    num2 = userInput;
    operate(operator, num1, num2);
    display.textContent = result;
});

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => {
equation = '';
userInput = '';
display.textContent = userInput;
});



function add(num1, num2) {
    result = num1 + num2;
}

function subtract(num1, num2) {
    result = num1 - num2;
}

function multiply(num1, num2) {
    result = num1 * num2;
}

function divide(num1, num2) {
    result = num1 / num2;
}

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