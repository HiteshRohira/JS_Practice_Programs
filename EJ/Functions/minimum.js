function min(firstNum, secondNum) {
    if (firstNum - secondNum > 0) return secondNum;
    else if (firstNum - secondNum < 0) return firstNum;
    else return "Both are equal";
}

console.log(min(5,5));