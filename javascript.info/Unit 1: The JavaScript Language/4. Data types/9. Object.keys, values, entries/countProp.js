let user = {
  name: 'John',
  age: 30
};

console.log( count(user) ); // 2


function count(obj) {
  return Object.keys(obj).length;
}