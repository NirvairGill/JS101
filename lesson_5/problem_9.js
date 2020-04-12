let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let arrSorted = arr.map(subArr => {
  if (typeof subArr[0] === 'number') {
  return [...subArr].sort((a, b) => a - b);
  } else {
    return [...subArr].sort();
  }
});

console.log(arrSorted);
console.log(arr);