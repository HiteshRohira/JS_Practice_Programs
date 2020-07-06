console.log(sum(15));

function sum(limit) {
    let total = 0;

    for (let num = 0; num <= limit; num++){
        if (num % 3 === 0 || num % 5 === 0) {
            total += num;
        }
    }

    return total;
}