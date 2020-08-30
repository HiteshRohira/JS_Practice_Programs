function sumInput() {
  let items = [];
  while (true) {
    let value = prompt("Enter value:");
    if (value == null || value == "" || !isFinite(+value)) {
      break;
    }
    items.push(+value);
  }
  let sum = 0;
  for (let item of items) {
    sum += item;
  }
  return sum;
}

alert(sumInput());