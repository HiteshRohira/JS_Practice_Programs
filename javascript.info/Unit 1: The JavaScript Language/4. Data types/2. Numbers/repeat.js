function readNumber() {
  let num = prompt("Enter a number:");
  while (!(num === "" || num === null)) {
    num = prompt("Enter a number:");
    if (isFinite(num)) {
      return num;
    }
  }
  return null;
}