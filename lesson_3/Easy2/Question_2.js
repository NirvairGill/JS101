// Using reverse
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = numbers.slice().reverse();
console.log(reversedNumbers);

// Using sort
let numbersReversed = [...numbers].sort((num1, num2) => num2 - num1);
console.log(numbersReversed);


// Using forEach method
let emptyArray = [];
numbers.forEach(num => emptyArray.unshift(num));
console.log(emptyArray);

// Using reduce method
let reversedArray = numbers.reduce((acc, val) => {
  acc.unshift(val);
  return acc;
 }, []);

 console.log(reversedArray);

 console.log(numbers);