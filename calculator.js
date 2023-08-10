const numbers = document.querySelectorAll('.number');
const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');

let tempArr = [];

numbers.forEach(button => button.addEventListener('click', () => {
    tempArr.push(parseInt(button.textContent));
    console.log(tempArr);
    display.textContent += button.textContent;
}));

clear.addEventListener('click', () => {
    tempArr = [];
    display.textContent = '';
});

