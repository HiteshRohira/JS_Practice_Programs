Function.prototype.defer = function(ms) {
  let thisOfFunc = this;
  return function(a, b) {
    setTimeout(thisOfFunc, ms, a, b);
  };
}

function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2);