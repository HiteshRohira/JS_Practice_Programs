/* function unique(arr) {
  let set = new Set(arr);
  let uniqueArr = [];
  for (let element of set) {
    uniqueArr.push(element);
  }
  return uniqueArr;
} */

function unique(arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare, Krishna, :-O