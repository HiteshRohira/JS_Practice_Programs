function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false; // ...(1)

/* 
In the previous one, object in prototype property of Rabbit is also refrenced by rabbit object. Since we know that objects are truly removed when all refrences are erased and rabbit still had refrence to previous object, it had that while value while Rabbit.prototype moved on to new object.

In this, the object in memory refrenced by both Rabbit.prototype and [[Prototype]] of rabbit. That same object's eats property is changed by statement labelled (1)

The output proves this clearly.
*/

console.log( rabbit.eats );

rabbit.eats = true;

console.log( rabbit.eats );