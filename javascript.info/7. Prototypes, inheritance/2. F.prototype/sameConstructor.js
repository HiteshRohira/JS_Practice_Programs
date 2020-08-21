function Square(num) {
  this.result = (num * num);
  console.log(num * num);
}

let obj = new Square (3);

let obj2 = new obj.constructor(5);