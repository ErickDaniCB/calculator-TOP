const digit = document.querySelectorAll('.digit');
const numbers = document.querySelectorAll('.number');
const operation = document.querySelector('#operation');
const disResult = document.querySelector('#result');
const clear = document.querySelector('#clear');
const undo = document.querySelector('#undo');
const equals = document.querySelector('#equals');
const operators = document.querySelectorAll('.operator');
const operations = { 
    '+': function(a,b){return a + b},
    '-': function(a,b){return a - b},
    '*': function(a,b){return a * b},
    '/': function(a,b){return a / b},
};

let numTemp = [];
let arrOperation = [];
let operatorDig;
let result;

digit.forEach(button => button.addEventListener('click', () => {
    if(button.classList[1] === 'number'){
        numTemp.push(button.value);
        operation.textContent += button.value;
    } else if (numTemp.length !== 0){
        arrOperation.push(numTemp.join('')/1);
        numTemp = [];
        if (arrOperation.length === 2){
            result = operations[operatorDig](arrOperation[0],arrOperation[1]);
            arrOperation.push(result);
            disResult.textContent = arrOperation[2];
            arrOperation.splice(0,2);        
        }
        operatorDig = button.value;
        operation.textContent += button.value;
    }
}));

clear.addEventListener('click', () => {
    numTemp = [];
    arrOperation = [];
    operation.textContent = '';
    result = undefined;
    disResult.textContent = '';
});

equals.addEventListener('click', () => {
    arrOperation.push(numTemp.join('')/1);
    numTemp = [];
    result = operations[operatorDig](arrOperation[0],arrOperation[1]);
    arrOperation.push(result);
    disResult.textContent = arrOperation[2];
    numTemp = Array.from(String(arrOperation[2]), String);
    console.log(numTemp);
    arrOperation.splice(0,3);
});

