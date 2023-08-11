const digit = document.querySelectorAll('.digit');
const numbers = document.querySelectorAll('.number');
const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');
const operators = document.querySelectorAll('.operator');

let tempArr = [];
let tempNum;

let arrNum = [];
let arrOp = [];

//calculation - number
numbers.forEach(button => button.addEventListener('click', () => {
    tempArr.push(parseInt(button.textContent));
    tempNum = parseInt(tempArr.join(''));
}));

//display - string
digit.forEach(button => button.addEventListener('click', () => {
    console.log(button.classList[1]);
    if(button.classList[1] === 'number'){
        arrNum.push(button.value);
    }
    else {
        arrOp.push(button.value);
    }
}));

clear.addEventListener('click', () => {
    tempArr = [];
    display.textContent = '';
});

let currentOp = operators.forEach(operator => operator.addEventListener('click', () => {
    return operator.value;
}));

const operations = { 
    '+': function(a,b){return a + b},
    '-': function(a,b){return a - b},
    '*': function(a,b){return a * b},
    '/': function(a,b){return a / b},
};

