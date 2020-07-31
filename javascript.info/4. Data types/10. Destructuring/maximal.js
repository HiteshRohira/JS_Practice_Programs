let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  if (Object.keys(salaries).length == 0) {
    return null;
  }
  else {
    let bigPerson, maxSalary = null;
    for (let pair of Object.entries(salaries)){
      let [person, salary] = pair;
      if ( salary > maxSalary ) {
        [bigPerson, maxSalary] = [person, salary];
      }
    }
    return bigPerson;
  }
}

console.log(topSalary(salaries));