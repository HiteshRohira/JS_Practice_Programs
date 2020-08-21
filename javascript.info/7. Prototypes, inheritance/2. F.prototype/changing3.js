function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

console.log( rabbit.eats ); // ?
/*
rabbit doesn't have an eats property, the [[Prototype]] object of rabbit has the eats property
*/