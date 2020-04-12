let arr = ['10', '11', '9', '7', '8'];

let arrSorted = [...arr].sort((a, b) => Number(a) - Number(b));
console.log(arrSorted);
console.log(arr);