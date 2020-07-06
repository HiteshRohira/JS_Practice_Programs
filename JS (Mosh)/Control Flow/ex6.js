const array = [0, null, NaN, "", 2, 3];

function countTruthy(array) {
    let truthyCounter = 0;
    for (let value of array) {
        if (value) truthyCounter++;
    }
    return truthyCounter;
}

console.log(countTruthy(array));