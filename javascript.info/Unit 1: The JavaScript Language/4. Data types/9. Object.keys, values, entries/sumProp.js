let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries (salaryObj) {
  let sum = 0;
  for (let salary of Object.values(salaryObj)) {
    sum += salary;
  }
  return sum;
}

console.log( sumSalaries(salaries) );