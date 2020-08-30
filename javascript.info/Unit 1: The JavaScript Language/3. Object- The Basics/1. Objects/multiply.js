let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let prop in obj) {
    if (typeof(obj[prop]) == "number") {
      obj[prop] *= 2;
    }
  }
}

console.log("Before calling multiplyNumeric, menu is -");
console.log(menu);
multiplyNumeric(menu);
console.log("After calling multiplyNumeric, menu is -");
console.log(menu);