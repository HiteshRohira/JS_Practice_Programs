let user = {
  name: "John Smith",
  age: 35
};

let userJSON = JSON.stringify(user);
console.log(userJSON);

let userObj = JSON.parse(userJSON);
console.log(userObj);
