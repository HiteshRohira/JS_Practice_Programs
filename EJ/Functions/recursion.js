function isEven(num) {
    if (num === 0) {
        return true;
    }
    else if (num === 1 || num === -1) {
        return false;
    }
    else if (num > 0) {
        return isEven(num-2);
    }
    else {
        return isEven(num+2);
    }
}

console.log(isEven(25053));

//25053 is the largest number you could test with this.
