function sum(value) {
  let currentSum = value;
  
  function func(b) {
    currentSum += b;
    return func;
  }

  func.toString = function() {
    return currentSum;
  };

  return func;
}

console.log(sum(1)(2) == 3);
console.log(sum(5)(-1)(2) == 6);