showNumbers(10);

function showNumbers(limit) {
    for (let num = 0; num <= limit; num++) {
        if (num % 2 === 0) console.log(num, "EVEN");
        else console.log(num, "ODD");
    }
}