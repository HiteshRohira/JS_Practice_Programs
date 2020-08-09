function makeCounter() {

  function counter() {
    return counter.count++;
  };

  counter.set = function(value) {
    counter.count = value;
  }

  counter.decrease = function() {
    counter.count--;
  }

  counter.count = 0;

  return counter;
}

let counter = makeCounter();
alert( counter() ); // 10