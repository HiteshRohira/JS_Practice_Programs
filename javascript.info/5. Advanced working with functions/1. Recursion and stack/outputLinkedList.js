// function printList(list) {
//   // console.log (`list.value = ${list.value}`);
//   if (list.next !== null) {
//     printList(list.next);
//   }
// }


function printList(list) {
  do {
    // console.log (`list.value = ${list.value}`);
    list = list.next;
  } while (list !== null)
}


let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};


// printList(list);

// Speed testing
let start = Date.now();
for (let i = 0; i < 100000; i++) {
  printList(list);
}
console.log(Date.now() - start, 'ms');
