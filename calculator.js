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
let op= 0;

//calculation - number
numbers.forEach(button => button.addEventListener('click', () => {
    tempArr.push(parseInt(button.textContent));
    tempNum = parseInt(tempArr.join(''));
}));

//display - string
digit.forEach(button => button.addEventListener('click', () => {
    console.log(button.classList[1]);
    if(button.classList[1] === 'number'){

        if(arrOp.length == 0){
            if(arrNum.length == 0){
                arrNum.push(button.value);
            }else{
                arrNum[0] = arrNum[0]+button.value;
                console.log(arrNum[0]);
            }
        }else{
            if(arrNum.length == 1){
                arrNum.push(button.value); 
            }else{
                arrNum[1] = arrNum[1]+button.value;
                console.log(arrNum[1]);
            }
            
        }
        
        
        display.textContent += button.value;
    }
    else {
        if(arrOp.length < 1){
            arrOp.push(button.value);
            display.textContent += button.value;
        }else{
           if(arrNum.length > 1 ){
                if(button.classList[1] === 'equals'){
                    display.textContent = operations[arrOp[0]](parseInt(arrNum[0]),parseInt(arrNum[1]));
                    arrNum[0] = display.textContent;
                    arrNum[1] = 0;
                    arrOp = [];
                }else{
                    display.textContent = operations[arrOp[0]](parseInt(arrNum[0]),parseInt(arrNum[1]));
                    arrNum[0] = display.textContent;
                    arrNum[1] = 0;
                    arrOp[0] = (button.value);
                    display.textContent += button.value;
                }
                
                

           }
        }
    }
}));

clear.addEventListener('click', () => {
    arrNum = [];
    arrOp = [];
    
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

