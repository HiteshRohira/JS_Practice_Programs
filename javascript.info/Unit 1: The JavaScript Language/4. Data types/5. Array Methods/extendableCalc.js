function Calculator() {
  this.operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculate = function(str) {
    this.arr = str.split(" ");
    return this.operations[this.arr[1]](+this.arr[0], +this.arr[2]);
  }

  this.addMethod = function(operator, calculation) {
    this.operations[operator] = calculation;
  }
}
