let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }]

let arrPlusOne = arr.map(obj => {
  let copyOfObj = Object.assign({}, obj);
  for (let key in copyOfObj) {
    copyOfObj[key] += 1;
  }
  return copyOfObj;
});

console.log(arrPlusOne);
console.log(arr);