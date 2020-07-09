let arr = [2, 3, 4];


// console.log(arr.some(n => n > 2));
// console.log(arr.every(n => n > 2));

// First version with loop
/*
function every (arr, check) {
  for (let element of arr) {
    if (check(element)) continue;
    else return false;
  }
  return true;
}

console.log(every(arr, n => n < 5));
*/

// Second version with some method
function every (arr, check) {
  for (let element of arr) {
    if ([element].some(check)) continue;
    else return false;
  }
  return true;
}

console.log(every(arr, n => n >= 2));