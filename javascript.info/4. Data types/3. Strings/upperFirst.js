function ucFirst(str) {
  return (str != 0) ? str[0].toUpperCase() + str.slice(1) : "";
}

console.log(ucFirst("Mary"));