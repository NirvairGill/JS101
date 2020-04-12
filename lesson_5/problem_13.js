let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let arrSorted = arr.sort((a, b) => {
  let aSum = a.reduce((acc, val) => {
    if (val % 2 === 1) {
      return acc + val;
    }
    return acc;
    } ,0);
    //console.log(aSum);
    let bSum = b.reduce(((acc, val) => {
      if (val % 2 === 1) {
        return acc + val;
      }
      return acc;
      }) ,0);
      //console.log(bSum);
return aSum - bSum;
});

console.log(arrSorted);