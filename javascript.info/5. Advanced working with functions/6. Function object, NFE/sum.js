let sum = function func(value) {
  sum.totalOfValues += value;
  if (sum.length) {
    return sum.totalOfValues;
  }
  else {
    return func;
  }
}

sum.totalOfValues = 0;

console.log(sum(1)(2));