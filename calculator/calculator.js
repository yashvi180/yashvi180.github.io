console.log("I am here");
let runningtotal = 0;
let buffer = "0";
let previousOperator;
const screen = document.querySelector('.screen');
function buttonclick(value) {
    console.log("I am inside button click")
    if (isNaN (value)) {

        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    screen.innerText=buffer;
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = "0";
            runningtotal = 0;
            break;
        case '=':
            if (previousOperator===null) {
                return;
            }
            flushoperation(parseInt(buffer));
            previousOperator=null;
            buffer=runningtotal;
            runningtotal=0;
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
        return ;
        
    }
    const intBuffer = parseInt (buffer);
    if (runningtotal=== 0) {
        runningtotal=intBuffer;
    } else{
        flushoperation(intBuffer);
    }
    previousOperator=symbol;
    buffer='0';
}
function flushoperation(intBuffer) {
    if (previousOperator==='+') {
        runningtotal+=intBuffer;
        
    } else if (previousOperator==='-') {
        runningtotal-=intBuffer;
    }else if (previousOperator==='&times') {
        runningtotal*=intBuffer;
    }else {
        runningtotal/=intBuffer;
    }
}
function handleNumber(numberString) {
console.log(numberString)
    if(buffer==='0'){
        console.log("inside if statement")
        buffer=numberString;
    } else{
        console.log("inside else statement")
        buffer=buffer+numberString;
    }

}
console.log(buffer);

function init() {
    console.log("inside init");
    document.querySelector('.calc-button').
    addEventListener('click', function (event) {
        buttonclick
        (event.target.innerText);
        
    });

}
init();
