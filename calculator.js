const digit = document.querySelectorAll('.digit');
const numbers = document.querySelectorAll('.number');
const dot = document.getElementById('dot');
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
let sign;
let ans;

digit.forEach(button => button.addEventListener('click', () => {
    console.log(`\nClicked`, button.value);
    if(button.classList[1] === 'number'){
        if(sign === undefined && ans !== undefined && numTemp.length === 0){
            operation.textContent = '';
            numTemp = [];
        }
        numTemp.push(button.value);
        operation.textContent += button.value;
        logs();
    } 
    else {
        if (numTemp.length !== 0){
            arrOperation.push(numTemp.join('')/1);
            numTemp = [];
            if (arrOperation.length === 2){
                ans = operations[sign](arrOperation[0],arrOperation[1]);
                arrOperation.push(ans);
                disAns.textContent = arrOperation[2];
                arrOperation.splice(0,2);
            }  
            sign = button.value;
            operation.textContent += button.value;
            logs();
        } 
        else if(ans !== undefined){
            numTemp = Array.from(String(ans), String);
            arrOperation.push(numTemp.join('')/1);
            numTemp = [];
            operation.textContent = ans + button.value;
            sign = button.value;
        }
    }
}));

dot.addEventListener('click', () => {
    console.log(`\nClicked`, dot.value);
    if(sign === undefined && numTemp.length === 0){
        numTemp.push('0', dot.value);
        operation.textContent = `0${dot.value}`;
    }
    else if (numTemp.includes('.') === false) {
            numTemp.push(dot.value);
            operation.textContent += dot.value;
    }
    logs();
});

clear.addEventListener('click', () => {
    numTemp = [];
    sign = undefined;
    arrOperation = [];
    operation.textContent = '';
    ans = undefined;
    disAns.textContent = '';
    console.clear();
});

equals.addEventListener('click', () => {
    console.log(`\nClicked`, equals.value);
    if(sign !== undefined && arrOperation.length === 1 && numTemp.length !== 0){
        arrOperation.push(numTemp.join('')/1);
        numTemp = [];
        ans = operations[sign](arrOperation[0],arrOperation[1]);
        arrOperation.push(ans);
        disAns.textContent = arrOperation[2];
        // numTemp = Array.from(String(arrOperation[2]), String);
        arrOperation.splice(0,3);
        sign = undefined;
        logs();
    }
});


undo.addEventListener('click', () => {
    console.log(`\nClicked: Undo`)
    let arrUn = Array.from(String(operation.textContent), String);
    if(numTemp.length){
        if (arrUn[arrUn.length-1] === numTemp[numTemp.length-1]){
            numTemp.pop();
            operation.textContent = operation.textContent.slice(0,this.length-1);
        }
    } 
    else {
        sign = undefined;
        operation.textContent = operation.textContent.slice(0,this.length-1);
        numTemp = Array.from(String(arrOperation), String);
        arrOperation = [];
    }
    logs();
});

answer.addEventListener('click', () => {
    console.log(`\nClicked: asn`);
    if(numTemp.length === 0 && ans !== undefined){
        if(sign === undefined){
            operation.textContent = '';
        }
        numTemp = Array.from(String(ans), String);
        operation.textContent += ans;
        logs();
    } 
});


function logs(){
    console.log(`NumTemp`,numTemp);
    console.log(`Signo`,sign);
    console.log(`Operando`, arrOperation);
    console.log('ans',ans);
};