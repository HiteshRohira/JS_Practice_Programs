let obj = {};

function isEmpty(obj) {
  for (let prop in obj) {
    return false; // loop starts to run only if there is a property in the object
  }
  return true;
}

console.log(isEmpty(obj));