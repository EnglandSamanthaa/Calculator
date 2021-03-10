const history = document.querySelector('#history');
const currentInputResults = document.querySelector('#currentInput-results');
const operation = document.querySelector('#operation');

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const clearAll = document.querySelector('#clearAll');
const clearLastInput = document.querySelector('#clearLastInput');


let displayCurrentInput = ' ';
let displayNum2 = ' ';
let displayHistory = ' ';
let displayResults = 'null';


let haveDot = false;

numbers.forEach( number => {
    number.addEventListener('click', (e)=>{
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;
        } else if(e.target.innerText === '.' && haveDot) {
            return;
        }
        displayCurrentInput+= e.target.innerText;
        currentInputResults.innerText = displayCurrentInput;
    })
});

operators.forEach( operation => {
    operation.addEventListener('click', (e)=> {
        if(!displayNum1) results;
     
        const operatorName = e.targer.innerText;
        // haveDot= false;
        // if(displayNum1 &&)
    })
})








// sl6569
