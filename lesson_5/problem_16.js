let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
let newObj = {};
arr.forEach(subArr => {
  newObj[subArr[0]] = subArr[1];
} );

console.log(newObj);