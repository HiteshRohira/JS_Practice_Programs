function debounce(func, time) {
  return function() {
    clearTimeout(this.timerId);
    this.timerId = setTimeout(() => func.apply(this, arguments), time);
  }
}


let f1 = debounce(alert, 1000);

f1("a");
setTimeout( () => f1("b"), 200);
setTimeout( () => f1("c"), 500);