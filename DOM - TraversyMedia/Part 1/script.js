// EXAMINE THE DOCUMENT OBJECT

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.images);
// console.log(document.links);


// GET ELEMENT BY ID
// console.log(document.getElementById("header-title"));
// let headerTitle = document.getElementById("header-title");
// let header = document.getElementById("main-header");
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerHTML = "Goodbye";
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = "<h3>Hello</h3>";
// header.style.borderBottom = "solid 4px black";

// GET ELEMENTS BY CLASSNAME
// let items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// // items.style.backgroundColor = "#f4f4f4";

// for(let item of items) {
//   item.style.backgroundColor = "#f4f4f4";
// }

// GET ELEMENTS BY TAGNAME
// let li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

// // items.style.backgroundColor = "#f4f4f4";

// for(let item of li) {
//   item.style.backgroundColor = "#f4f4f4";
// }

// QUERY SELECTOR
// let header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";

// let input = document.querySelector("input");
// input.value = "Hello World";

// let submit = document.querySelector("input[type='submit']");
// submit.value = "SEND";

// let item = document.querySelector(".list-group-item");
// item.style.color = "blue";

// let lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = 'green';

// let secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = '#edff26';

// QUERY SELECTOR
let titles = document.querySelectorAll(".title");

console.log(titles);
titles[1].textContent = "Hello";

let odd = document.querySelectorAll("li:nth-child(odd)");
let even = document.querySelectorAll("li:nth-child(even)");

for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "#f4f4f4";
  even[i].style.backgroundColor = "#ccc";
}