function unique(arr) {
  let unique = [];
  for (let element of arr) {
    if (!(unique.includes(element))) {
      unique.push(element);
    }
  }
  return unique;
}