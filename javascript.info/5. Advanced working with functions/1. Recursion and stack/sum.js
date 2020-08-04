// variant using for loop

/*
function sumTo(n) {
  let sum = null;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
*/


// variant using recursion

/*
function sumTo(n) {
  return (n > 1) ? n + sumTo(n - 1) : n;
}
*/


//variant using A.P.

/*
function sumTo(n) {
  return n * (n + 1) / 2;
}
*/


console.log(sumTo(100));