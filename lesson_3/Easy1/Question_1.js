let numbers = [1, 2, 3];
numbers[6] = 5;
console.log(numbers[4]);

// Answer: The assignment of a value to a certain index number will not produce
// the error in case of Array even if the array length is smaller than the given
// index numbers. What happens that the index number which falls in between
// eslint-disable-next-line max-len
// the last index number of given array upto the given index number will be empty items


// Bonus:
numbers[6] = 5;
// eslint-disable-next-line no-unused-expressions
numbers[4];  // what will this line return?

// Even though it is empty item. It will return 'undefined'.

console.log(numbers[4]); // => Undefined.