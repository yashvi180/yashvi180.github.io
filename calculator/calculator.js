console.log("I am here");
let runningtotal = 0;
let buffer = "0";
let previousOperator;
const screen = document.querySelector('.screen');
function buttonclick(value) {
    if (isNaN (value)) {

        handlesymbol(value);
    } else {
        handlenumber(value);
    }
    screen.innerText=buffer;
}

function handlesymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = "0";
            runningtotal = 0;
            break;
        case '+':
        case '-':
        case '&times;':
        case '&divide;':
            handlemath(symbol);
            break;
        }
}
function handlemath(symbol){
    if (buffer==='0') {
        return;
        
    }

}
function handlenumber(numberString) {

    if(buffer==='0'){
        buffer=numberString;
    } else{
        buffer=buffer+numberString;
    }

}
console.log(buffer);

function init() {
    document.querySelector('.cacl-buttons');
    addEventListener('click', function (event) {
        buttonclick
        (event.target.innerText);
        
    });

}
init();