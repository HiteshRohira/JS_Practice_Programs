function fib(n) {
  let numbers = [1, 1];
  for (let i = 1; i <= n; i++) {
    numbers[i + 1] = numbers[i] + numbers[i - 1];
  }
  return numbers[n - 1];
}

// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }

let start = Date.now();
for (let i = 0; i < 10000; i++) {
  fib(770);
}
console.log(`${Date.now() - start} ms`);

// The array solution is more time-consuming but 10000 iterations of finding the 770th fibonacci number is still done in a "fraction of a second." ;)