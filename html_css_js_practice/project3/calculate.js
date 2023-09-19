let numbers = document.getElementsByClassName('number');
let buttons = Array.from(numbers)

let forInput = document.getElementById('result-input');

let op = document.getElementsByClassName('operator');
let operators = Array.from(op);

let calculate = document.getElementById('calculate');

let clear = document.getElementById('clear');
let point = document.getElementById('point');

let text = "";

buttons.forEach(function(button){
    button.addEventListener('click', () =>{
        if(forInput.value){
            text = forInput.value;
        }
        text += button.textContent;
        forInput.value = text;
        console.log(text);
    })
})
operators.forEach(function(op){
    op.addEventListener('click', () =>{
        if(forInput.value){
            text = forInput.value;
        }
        text += op.textContent;
        forInput.value = text;
    })
})

calculate.addEventListener('click', () =>{
    try {
        if(forInput.value){
            text = forInput.value;
        }
        text = eval(text);
        forInput.value = text;
    } catch (error) {
        alert(error)
        text = '';
        forInput.value = '';
    }
    console.log(text);
})

clear.addEventListener('click', () =>{
    text = '';
    forInput.value = '';  
})
point.addEventListener('click', () =>{
    text += '.';
    forInput.value = text;  
})
