let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let arrSorted = arr.map(subArr => {
  if (typeof subArr[0] === 'number') {
    return [...subArr].sort((a, b) => b - a);
  } else {
    return [...subArr].sort().reverse();
  }
});

console.log(arrSorted);
console.log(arr);