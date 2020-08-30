function printList(list) {
  
  if (list.next) {
    printList(list.next);
  }

  console.log (`list.value = ${list.value}`);
}


// function printList(list) {
//   let values = [];
//   do {
//     values.push(list.value);
//     list = list.next;
//   } while (list !== null)
//   for (let i = values.length - 1; i >= 0; i--){
//     console.log(values[i]);
//   }
// }


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


printList(list);

// Speed testing
// let start = Date.now();
// for (let i = 0; i < 100000; i++) {
//   printList(list);
// }
// console.log(Date.now() - start, 'ms');
