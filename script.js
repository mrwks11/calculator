let userInput = '';
let equation = '';
let operator = '';
let num1;
let num2;
let result;

const display = document.getElementById('display');

// KEYBOARD SUPPORT
window.addEventListener('keydown', function(e) {
    const key = document.querySelector(`button[value='${e.key}']`);
    key.click();
});

// NUMBERS
const numberButtons = document.querySelectorAll('.number');
for (let i = 0 ; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        userInput += numberButtons[i].value;
        display.textContent = `${equation}${userInput}`;
    });
};

// ADD
const addButton = document.querySelector('.add');
addButton.addEventListener('click', () => {
    checkInput();
    operator = 'add';
    num1 = userInput;
    equation = `${num1}+`;
    display.textContent = equation;
    userInput = '';
});

// SUBTRACT
const subtractButton = document.querySelector('.subtract');
subtractButton.addEventListener('click', () => {
    checkInput();
    operator = 'subtract';
    num1 = userInput;
    equation = `${num1}-`;
    display.textContent = equation;
    userInput = '';
});

// MULTIPLY
const multiplyButton = document.querySelector('.multiply');
multiplyButton.addEventListener('click', () => {
    checkInput();
    operator = 'multiply';
    num1 = userInput;
    equation = `${num1}*`;
    display.textContent = equation;
    userInput = '';
});

// DIVIDE
const divideButton = document.querySelector('.divide');
divideButton.addEventListener('click', () => {
    checkInput();
    operator = 'divide';
    num1 = userInput;
    equation = `${num1}/`;
    display.textContent = equation;
    userInput = '';
});

// MODULUS
const modulusButton = document.querySelector('.modulus');
modulusButton.addEventListener('click', () => {
    checkInput();
    operator = 'modulus';
    num1 = userInput;
    equation = `${num1}%`;
    display.textContent = equation;
    userInput = '';
});

// RESULT
const resultButton = document.querySelector('.result');
resultButton.addEventListener('click', () => {
    num2 = userInput;
    operate(operator, num1, num2);
    display.textContent = result;
});

// CLEAR
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    equation = '';
    userInput = '';
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    result = undefined;
    display.textContent = userInput;
});

// DECIMAL
/*
const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click', () => {
    userInput += decimalButton.innerText;
    display.textContent = `${equation} ${userInput}`;
});
*/

// BACKSPACE
const backspaceButton = document.querySelector('.backspace');
backspaceButton.addEventListener('click', () => {
    userInput = userInput.slice(0, -1);
    display.textContent = userInput;
});

// REVERSE
/*
const reverseButton = document.querySelector('.reverse');
reverseButton.addEventListener('click', () => {
    checkInput();
    userInput = userInput * -1;
    num1 = userInput;
    display.textContent = userInput;
});
*/

// MATH FUNCTIONS
function add(num1, num2) {
    result = Math.round((num1 + num2) * 1000) / 1000;
}

function subtract(num1, num2) {
    result = Math.round((num1 - num2) * 1000) / 1000;
}

function multiply(num1, num2) {
    result = Math.round((num1 * num2) * 1000) / 1000;
}

function divide(num1, num2) {
    if (num2 === 0) {
        result = 'ERROR!';
    } else {
        result = Math.round((num1 / num2) * 1000) / 1000;
    }
}

function modulus(num1, num2) {
    result = num1 % num2;
}

// INPUT USER VALUES INTO MATH FUNCTIONS
function operate(operator, num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
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
    } else if (operator === 'modulus') {
        modulus(num1, num2);
        return result;
    }
}

// CHECK PREVIOUS INPUT
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