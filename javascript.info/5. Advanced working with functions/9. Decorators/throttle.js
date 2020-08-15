function throttle(func, time) {
  return function() {
    func.apply(this, arguments);
    this.timerId = setTimeout(() => {}, time);
    if (this.timerId == 0) {
      func.apply(this, arguments);
    }
  }
}