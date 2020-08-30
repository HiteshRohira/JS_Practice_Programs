let n = prompt("Enter a number");
let counter = 0;

for (let i = 2; i <= n; i++) {
  for (let j = 2; j <= i; j++){
    if (!(i % j)) { // every time i%j has a remainder, value will be truthy and counter will not be increased
      counter++;
    }
  }
  if (counter == 1) alert (i);
  counter = 0;
}