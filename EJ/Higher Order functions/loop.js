function loop (value, test, update, body) {
    while (test(value)) {
        body(value);
        value = update(value);
    }
}

loop(1, n => n <= 5, n => n + 1, console.log);


// What we are trying to create
/*
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
*/