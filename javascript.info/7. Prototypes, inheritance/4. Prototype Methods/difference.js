function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // says Rabbit
Rabbit.prototype.sayHi(); // says undefined
Object.getPrototypeOf(rabbit).sayHi(); // says undefined
rabbit.__proto__.sayHi(); // says undefined