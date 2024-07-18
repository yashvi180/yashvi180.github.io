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
    
}

function handlesymbol(symbol) {}
function handlenumber(numberString) {
    if(buffer==='0'){
        buffer=numberString;
    } else{
        buffer=buffer+numberString;
    }
    screen.innerText=buffer;
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