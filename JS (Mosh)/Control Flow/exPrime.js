showPrimes(20);

function showPrimes(limit) {
    for (let num = 2; num < limit; num++)
        if (checkPrime(num))
            console.log(num);
}

function checkPrime(number) {
    let factorCounter = 0;
    for(let factor = 2; factor < number; factor++)
        if (number % factor === 0) return false;
    return true;
}