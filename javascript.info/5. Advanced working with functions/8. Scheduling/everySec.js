function printNumbers(from, to) {
  let  timerId = setInterval ( function go() {
    console.log(from);
    if (from == to) {
      clearInterval(timerId);
    }
    from++;
  }, 1000);
}


// function printNumbers(from, to) {
//   console.log(from++);
//   if (from <= to) {
//     setTimeout(printNumbers, 1000, from, to);
//   }
// }


printNumbers(0, 5);