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
// let titles = document.querySelectorAll(".title");

// console.log(titles);
// titles[1].textContent = "Hello";

// let odd = document.querySelectorAll("li:nth-child(odd)");
// let even = document.querySelectorAll("li:nth-child(even)");

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "#f4f4f4";
//   even[i].style.backgroundColor = "#ccc";
// }


// TRAVERSING THE DOM
// let itemList = document.querySelector("#items");
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

// firstChild
// console.log(itemList.firstChild); // actually gives text

// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "matrix";

// lastChild
// console.log(itemList.lastChild); // actually gives text

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "matrix";

// nextSibling
// console.log(itemList.nextSibling);

// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor = "red";

// createElement

// Create a div
// let newDiv = document.createElement("div");

// // Add class
// newDiv.className = "hello";

// // Add id
// newDiv.id = "hello1";

// // Add attr
// newDiv.setAttribute("title", "Hello Div");

// // create text node
// let newDivText = document.createTextNode("Zingat");

// // add text to div
// newDiv.appendChild(newDivText);

// let container = document.querySelector("header .container");
// let h1 = document.querySelector("header h1");

// console.log(newDiv);

// newDiv.style.fontSize = "30px";

// container.insertBefore(newDiv, h1);

// EVENTS

// let button = document.querySelector("#button").addEventListener("click", buttonClick);

// function buttonClick(e) {
//   // console.log("Button clicked");
//   // document.querySelector("#header-title").textContent = "Changed";
//   // document.querySelector("#main").style.backgroundColor = "#ccc";
//   // console.log(e);

//   // console.log(e.target);
//   // console.log(e.target.id);
//   // console.log(e.target.className);
//   // console.log(e.target.classList);
//   // let output = document.querySelector("#output");
//   // output.innerHTML = "<h3>" + e.target.id + "</h3>";

//   // console.log(e.type);

//   // console.log(e.clientX); //from left to right
//   // console.log(e.clientY); // from top to bottom

//   // console.log(e.offsetX);
//   // console.log(e.offsetY);

//   // console.log(e.altKey);
//   // console.log(e.ctrlKey);
//   // console.log(e.shiftKey);
// }

let button = document.querySelector("#button");
let box = document.querySelector("#box");

// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);

// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);

box.addEventListener("mouseover", runEvent);
box.addEventListener("mouseout", runEvent);

function runEvent(e) {
  console.log("EVENT TYPE: "+e.type);
}