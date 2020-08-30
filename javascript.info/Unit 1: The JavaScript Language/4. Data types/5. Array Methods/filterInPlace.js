function filterRangeInPlace(arr, a, b) {
  for (let element of arr) {
    if (!(element >= a && element <= b))
      arr.splice(arr.indexOf(element), 1);
  }
}


let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

console.log(arr);