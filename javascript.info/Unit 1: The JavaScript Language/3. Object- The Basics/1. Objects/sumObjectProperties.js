let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}

function sumOfSalary (salaryObj) {
  let sum = 0;
  for (let salary in salaryObj) {
    sum += salaryObj[salary];
  }
  return sum;
}

console.log(sumOfSalary(salaries));