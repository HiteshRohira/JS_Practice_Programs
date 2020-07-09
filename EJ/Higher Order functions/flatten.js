const bigArray = [[1, 2, 3, 4], ["a", "b", "c"], ["d"], [5, 6]];

console.log(bigArray.reduce((a, b) => a.concat(b)));