function mapToNames(arr) {// arr contains user objects with name and age property
  return arr.map( item => item.name );
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

console.log(mapToNames(users));