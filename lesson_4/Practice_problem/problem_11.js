let statement = "The Flintstones Rock";
// output { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

// array and object as data structure

let output = {};
let statementArray = statement.split('').filter(char => char !== ' ');
statementArray.forEach(char => {
 if (Object.keys(output).includes(char)) {
     output[char] += 1;
} else {
    output[char] = 1;
}
});

console.log(output);

[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
});
/*
We have given three dimensional array. Array.map is called upon the outer array. Each element of the array has passed through callback and
assigned to the variable arr. Now, Array.map is called on every subarray which one of them is already a two dimensional array
and each element has assigned to callback elem.Further, there is a comaprison operator to check whether 'elem' is a number or not, if it
is a number it is returned to the callback after adding 1 to it. If it is not a number, Array.map has been called on 'elem' again. Now,
the values of elem has been assigned to callback as variable 'number' and callback is returning an array of numbers after adding 1 to it.
The return value of elem.map will be after using the return value of callback 'number' for transformation: [2, 3] and [4, 5].
The return value of arr.map after transformation will be [[2,3], [4, 5]] and [6, 7] because [5, 6] has transformed into [6, 7] according
to the given 'if' condition.
The outer array.map will return enclosing all return values into an outer array.In the end the return value would be [[[2, 3], [4, 5]], [6, 7]]
*/