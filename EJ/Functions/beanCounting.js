function countBs(line) {
    return countChar(line, "D");
}

function countChar(string, charachter) {
    let charCount = 0;
    for (let charIndex = 0; charIndex < string.length; charIndex++)
        if (string[charIndex] === charachter)
            charCount++;
    return charCount;
}

console.log(countBs("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));