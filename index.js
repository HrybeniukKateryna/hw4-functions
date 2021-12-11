const firstNum = +prompt('Enter the first number'); 
const secondNum = +prompt('Enter the second number');
const mathFunct = prompt('Enter the math functions');
let resultNum;

if (mathFunct == "+") { 
    sum(firstNum, secondNum);
    resultNum = sum(firstNum, secondNum);
    console.log (`Результат: ${firstNum} ${mathFunct} ${secondNum} = ${resultNum}`);    

} else if (mathFunct == "-") {
    subtraction (firstNum, secondNum);      
    resultNum = subtraction(firstNum,secondNum);
    console.log (`Результат: ${firstNum} ${mathFunct} ${secondNum} = ${resultNum}`);
    
} else if (mathFunct == "*") {
    multiplication (firstNum, secondNum)
    resultNum = multiplication(firstNum,secondNum);
    console.log (`Результат: ${firstNum} ${mathFunct} ${secondNum} = ${resultNum}`);
    
} else if (mathFunct == "/") {
    division (firstNum,secondNum);
    resultNum = division(firstNum,secondNum);
    console.log (`Результат: ${firstNum} ${mathFunct} ${secondNum} = ${resultNum}`);
};


function sum(first, second) {
   return first + second;
};
function subtraction (first, second) {
    return first - second;
};
function multiplication (first, second) {
    return first * second;
};

function division (first, second) {
    return first / second;
};

/*
const firstNum = prompt('Enter the first number'); 
const secondNum = prompt('Enter the second number');
const mathFunct = prompt('Enter the math functions');
function calc() {
    if (mathFunct == "+") {
        return Number(firstNum) + Number(secondNum);
    } else if (mathFunct == "-") {
        return Number(firstNum) - Number(secondNum);
    } else if (mathFunct == "*") {
        return Number(firstNum) * Number(secondNum);
    } else if (mathFunct == "/") {
        return Number(firstNum) / Number(secondNum);
    }
};
const resultNum = calc();
console.log (`Результат: ${firstNum} ${mathFunct} ${secondNum} = ${resultNum}`)
*/
