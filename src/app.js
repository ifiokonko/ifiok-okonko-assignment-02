const assignment = require('./assignment.js');

const { sumOfNumbers, countEvenNumbers, celsiusToFahrenheit } = assignment;

if (sumOfNumbers && typeof sumOfNumbers === 'function'){
    console.log(sumOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}

if (countEvenNumbers && typeof countEvenNumbers === 'function'){
    console.log(countEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}

if (celsiusToFahrenheit && typeof celsiusToFahrenheit === 'function'){
    console.log(celsiusToFahrenheit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}

function sumArrayOfNumbers (sumOfNumbers) {
  let sum = 0;
  for (let a of sumOfNumbers)
    sum += a;
  return sum;
}