function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt( "Enter value:" );
  }
}