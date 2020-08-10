let i = 1;

setInterval(function printNumbers(from, to) {
  if (from <= to) {
    console.log(i++);
    from = i;
  }
}, 1000, i, 5);







// function printNumbers(from, to) {
//   if (from <= to) {
//     console.log(from++);
//     setTimeout(printNumbers, 1000, from, to);
//   }
// }



// printNumbers(0, 5);