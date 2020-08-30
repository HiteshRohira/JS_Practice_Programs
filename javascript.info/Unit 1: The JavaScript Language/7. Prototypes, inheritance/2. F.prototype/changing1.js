function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {}; // This won't have any effect to rabbit object as it has already been declared
// Newly declared objects after this will be effected and hence wont have an eats property

console.log( rabbit.eats ); // true

let newRabbit = new Rabbit();
console.log( newRabbit.eats );