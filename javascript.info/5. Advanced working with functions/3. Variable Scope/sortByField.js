let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
  if (field === "name") {
    return function(a, b) {
      return a.name > b.name ? 1 : -1;
    }
  }
  else if (field === "age") {
    return function(a, b) {
      return a.age > b.age ? 1 : -1;
    }
  }
  else {
    return function(a, b) {
      return a.surname > b.surname ? 1 : -1;
    }
  }
}

console.log(users.sort(byField('age')));