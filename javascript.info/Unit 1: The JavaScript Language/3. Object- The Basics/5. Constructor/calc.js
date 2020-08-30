function Calculator() {
  this.read = function() {
    this.firstNum = +prompt ( "First Value:" );
    this.secondNum = +prompt ( "Second Value:" );
  };

  this.sum = function() {
    return this.firstNum + this.secondNum;
  };

  this.mul = function() {
    return this.firstNum * this.secondNum;
  };
}