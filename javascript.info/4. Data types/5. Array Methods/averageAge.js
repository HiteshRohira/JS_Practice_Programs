function getAverageAge(users) {
  return users.reduce( (avg, user) => avg + user.age / users.length, null);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log( getAverageAge(arr) );
