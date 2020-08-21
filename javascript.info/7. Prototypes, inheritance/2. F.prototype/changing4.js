function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

console.log( rabbit.eats ); // ?

// Property gets deletd from the object and since it is the same object refrenced at two places, any change done at one place is reflected in all refrences