let visitor = prompt("Who's there?");

if (visitor == "" || visitor == null) {
  alert("Canceled");
}
else if (visitor == "Admin") {
  let password = prompt("Password?");
  if (password == "" || password == null) {
    alert("Canceled");
  } 
  else if (password == "TheMaster"){
    alert("Welcome!");
  }
  else {
    alert("Wrong Password");
  }
}
else {
  alert("I don't know you")
}