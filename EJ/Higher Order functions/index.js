function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}


let labels = [];

function j(i) {
    labels.push(`Unit ${i + 1}`);
}

repeat(5, j);

console.log(labels);

// repeat(3, console.log);