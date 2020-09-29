let answer;

function add(num1, num2) {
    answer = num1 + num2;
}

function substract(num1, num2) {
    answer = num1 - num2;
}

function multiply(num1, num2) {
    answer = num1 * num2;
}

function divide(num1, num2) {
    answer = num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator === add) {
        add(num1, num2);
        return answer;
    } else if (operator === substract) {
        substract(num1, num2);
        return answer;
    } else if (operator === multiply) {
        multiply(num1, num2);
        return answer;
    } else if (operator === divide) {
        divide(num1, num2);
        return answer;
    } else {
        return "Not a valid entry";
    }
}

let userInput = '';

const display = document.getElementById('display');

const buttons = document.querySelectorAll('.button');
for (let i = 0 ; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
    userInput += buttons[i].innerText;
    display.textContent = userInput;
    })
};

const resultButton = document.querySelector('.result-button');
resultButton.addEventListener('click', () => {
userInput += resultButton.innerText;
display.textContent = userInput;
});

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => {
userInput = '';
display.textContent = userInput;
});


