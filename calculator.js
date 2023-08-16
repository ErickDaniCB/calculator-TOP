const digit = document.querySelectorAll('.digit');
const numbers = document.querySelectorAll('.number');
const operation = document.querySelector('#disOperation');
const disAns = document.querySelector('#disAns');
const clear = document.querySelector('#clear');
const undo = document.querySelector('#undo');
const answer = document.querySelector('#ans');
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
let ans;

digit.forEach(button => button.addEventListener('click', () => {
    if(button.classList[1] === 'number'){
        if(operatorDig === undefined && ans !== undefined){
            operation.textContent = '';
            numTemp = [];
        }
        numTemp.push(button.value);
        operation.textContent += button.value;
    } 
    else if (numTemp.length !== 0){
        arrOperation.push(numTemp.join('')/1);
        numTemp = [];
        if (arrOperation.length === 2){
            ans = operations[operatorDig](arrOperation[0],arrOperation[1]);
            arrOperation.push(ans);
            disAns.textContent = arrOperation[2];
            arrOperation.splice(0,2);
        }  
        operatorDig = button.value;
        operation.textContent += button.value;
    }
    logs();
}));

clear.addEventListener('click', () => {
    numTemp = [];
    operatorDig = undefined;
    arrOperation = [];
    operation.textContent = '';
    ans = undefined;
    disAns.textContent = '';
    logs();
});

equals.addEventListener('click', () => {
    if(operatorDig !== undefined && arrOperation.length === 1){
        arrOperation.push(numTemp.join('')/1);
        numTemp = [];
        ans = operations[operatorDig](arrOperation[0],arrOperation[1]);
        arrOperation.push(ans);
        disAns.textContent = arrOperation[2];
        numTemp = Array.from(String(arrOperation[2]), String);
        arrOperation.splice(0,3);
    }
    operatorDig = undefined;
    logs();
});


undo.addEventListener('click', () => {
    // typeof(operation.textContent.slice(0,this.length)
    logs();
});

answer.addEventListener('click', () => {
    if(ans !== undefined && numTemp.length === 0){
        numTemp = Array.from(String(ans), String);
        operation.textContent += ans;
    } 
    else {
        operation.textContent = '';
        numTemp = [ans];
        operation.textContent = ans;
    }
    logs();
});


function logs(){
    console.clear();
    console.log(`\nNumTemp`,numTemp);
    console.log(`Signo`,operatorDig);
    console.log(`Operando`, arrOperation);
    console.log('ans',ans);
};