let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

// Iterate through the array using map
// use every to filter out all the even values

let arrEvenValues = arr.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(num => (num % 2 === 0));
  });
});


console.log(arrEvenValues);