let num;

while (true) {
  num = prompt("Enter a number greater than 100.")
  if (num > 100 || num == undefined || num == "") break;
  else continue;
}