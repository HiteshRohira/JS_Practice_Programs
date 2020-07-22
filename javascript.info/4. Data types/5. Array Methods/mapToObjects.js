function mapToObjects(arr) {
  return arr.map( item => ( { fullname: `${item.name} ${item.surname}`, id: (item.id), }
  ) );
}

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

console.log(mapToObjects(users));