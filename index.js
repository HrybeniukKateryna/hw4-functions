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





