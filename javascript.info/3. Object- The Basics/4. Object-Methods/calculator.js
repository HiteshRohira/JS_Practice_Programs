let calculator = {
  read() {
    this.firstNum = +prompt("Enter first value.", 0);
    this.secondNum = +prompt("Enter second value.", 0);
  },

  sum() {
    return this.firstNum + this.secondNum;
  },

  mul() {
    return this.firstNum * this.secondNum;
  }
};