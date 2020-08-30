function throttle(func, time) {
  let savedArgs, savedThis, timerGoing = false;

  function wrapper() {
    
    if (timerGoing) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);
    timerGoing = true;

    setTimeout( () => {
      timerGoing = false;
      if(savedArgs) {
        wrapper.apply(savedThis, savedArgs);
      }
    }, time );
  }

  return wrapper;
}