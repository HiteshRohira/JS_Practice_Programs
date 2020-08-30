function inBetween(a, b) {
  return function (item) {
    return item >= a && item <= b;
  }
}

function inArray(arr) {
  return function (item) {
    return arr.includes(item);
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];


console.log( arr.filter( inBetween(3, 6) ) );
console.log( arr.filter(inArray( [1, 2, 10] )) );