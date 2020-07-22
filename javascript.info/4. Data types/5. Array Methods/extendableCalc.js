function Calculator(str) {
  this.calculate = function(str) {
    let arr = str.split(" "); // ["1", "+", "2"]
    return (arr[1] == "+") ? (+arr[0] + +arr[2]) : (+arr[0] - +arr[2]);
  }
}

let calc = new Calculator;

console.log( calc.calculate("3 - 7") );